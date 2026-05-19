import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  std: z.string(),
  message: z.string().min(5, "Message is too short"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: result.error.errors[0].message }, { status: 400 });
    }

    const { name, phone, std, message } = result.data;

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
