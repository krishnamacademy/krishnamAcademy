import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  std: z.string(),
  message: z.string().min(5, "Message is too short"),
  honeyPot: z.string().optional().or(z.literal('')),
});

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (now - record.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  record.count += 1;
  return record.count > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(req: Request) {
  try {
    // Get IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || 
               req.headers.get('x-real-ip') || 
               'unknown';
               
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const body = await req.json();
    
    // Validate request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.issues[0].message }, { status: 400 });
    }

    const { name, phone, std, message, honeyPot } = result.data;

    // Honeypot check - if filled out, it's a bot. Return fake success to confuse it.
    if (honeyPot && honeyPot.length > 0) {
      console.log(`Blocked bot submission from IP: ${ip}`);
      return NextResponse.json({ success: true, dummy: true });
    }

    // Use environment variables for email authentication
    const user = process.env.SMTP_EMAIL;
    const pass = process.env.SMTP_PASSWORD;

    if (!user || !pass) {
      // For development/demo when env vars are missing, we still return success 
      // so the UI works, but log a warning
      console.warn("SMTP_EMAIL or SMTP_PASSWORD not set. Email was not actually sent.");
      return NextResponse.json({ success: true, dummy: true });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to your email provider
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: 'krishnamacademy.savda@gmail.com', // Destination email
      replyTo: user,
      subject: `New Inquiry from ${name} (${std})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #F59E0B;">New Academy Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 150px;">Student Name:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone Number:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Standard/Class:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${std}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">This email was automatically generated from the Krishnam Academy website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Failed to send inquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
