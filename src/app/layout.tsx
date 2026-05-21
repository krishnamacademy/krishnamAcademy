import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://krishnamacademy.in"),
  title: "Krishnam Academy – Learn Smart. Think Better. Achieve More.",
  description: "Krishnam Academy — Premier Mathematics & Science coaching centre in Savda for CBSE students (Std. VIII–X). Experienced faculty led by Er. Saurabh Teli, focused curriculum, small batches, personalized attention, exam preparation, and competitive exam guidance.",
  keywords: ["all", "Krishnam Academy", "Krishnam Academy Savda", "CBSE Coaching Savda", "Saurabh Teli Savda", "Mathematics Coaching Savda", "Science Coaching Savda", "tuition", "coaching", "Savda"],
  icons: {
    icon: "https://krishnamacademy.in/Imgs/logo.png",
    apple: "https://krishnamacademy.in/Imgs/logo.png",
  },
  openGraph: {
    title: "Krishnam Academy – Learn Smart. Think Better. Achieve More.",
    description: "Premier Mathematics & Science coaching for CBSE Std. VIII to X in Savda. Led by Er. Saurabh Teli (B.E. Mechanical, B.Ed.).",
    url: "https://krishnamacademy.in", // Placeholder URL
    type: "website",
    locale: "en_IN",
    siteName: "Krishnam Academy",
    images: [
      {
        url: "https://krishnamacademy.in/Imgs/logo.png",
        width: 800,
        height: 800,
        alt: "Krishnam Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishnam Academy – Learn Smart. Think Better. Achieve More.",
    description: "Premier Mathematics & Science coaching for CBSE, English & Semi-English Students (Std. VIII to X) in Savda.",
    images: ["https://krishnamacademy.in/Imgs/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Krishnam Academy",
    "url": "https://krishnamacademy.in",
    "logo": "https://krishnamacademy.in/Imgs/logo.png",
    "description": "Premier Mathematics & Science coaching for CBSE, English & Semi-English Students (Std. VIII to X) in Savda.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hare Krishna House, Near Sub Post Office, Gavat Bazar",
      "addressLocality": "Savda",
      "postalCode": "425502",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "telephone": "+919511837664",
    "email": "krishnamacademy.savda@gmail.com",
    "founder": {
      "@type": "Person",
      "name": "Er. Saurabh Teli"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="google-site-verification" content="wJVsB0micSW8nZtyf2dHWF_k0bNEewuMvtX-OSuyv2Y" />
        <meta name="description" content="Krishnam Academy — Premier Mathematics & Science coaching centre in Savda for CBSE students (Std. VIII–X). Experienced faculty, focused curriculum, small batches, personalized attention, exam preparation, and competitive exam guidance." />
        <meta name="keywords" content="all, Krishnam Academy, Krishnam Academy Savda, CBSE Coaching Savda, Saurabh Teli Savda, Mathematics Coaching Savda, Science Coaching Savda, tuition, coaching, Savda" />
        <link rel="alternate" href="https://krishnamacademy.in" hrefLang="en-IN" />
        <link rel="alternate" href="https://krishnamacademy.in" hrefLang="en" />
        <link rel="alternate" href="https://krishnamacademy.in" hrefLang="x-default" />
        <link rel="canonical" href="https://krishnamacademy.in" />
        <meta name="robots" content="index, follow" />
        
        {/* Explicit Favicon Links for Google Search Logo */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/Imgs/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Imgs/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased text-[#0F172A] bg-[#F8FAFC]`}
        style={{
          fontFamily: "var(--font-inter), sans-serif"
        }}
      >
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
