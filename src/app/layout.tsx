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
  title: "Krishnam Academy – Learn Smart. Think Better. Achieve More.",
  description: "Premier Mathematics & Science coaching for CBSE, English & Semi-English Students (Std. VIII to X) in Savda. Led by Er. Saurabh Teli.",
  keywords: ["Krishnam Academy", "Krishnam Academy Savda", "CBSE Coaching Savda", "Saurabh Teli Savda", "Mathematics Coaching Savda", "Science Coaching Savda"],
  openGraph: {
    title: "Krishnam Academy – Learn Smart. Think Better. Achieve More.",
    description: "Premier Mathematics & Science coaching for CBSE Std. VIII to X in Savda. Led by Er. Saurabh Teli (B.E. Mechanical, B.Ed.).",
    type: "website",
    locale: "en_IN",
    siteName: "Krishnam Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
