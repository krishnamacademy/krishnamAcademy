import React from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krishnam Academy – Learn Smart. Think Better. Achieve More.",
  description:
    "Krishnam Academy — Premier Mathematics & Science coaching centre in Savda for CBSE students (Std. VIII–X). Experienced faculty led by Er. Saurabh Teli, focused curriculum, small batches, personalized attention, exam preparation, and competitive exam guidance.",
  openGraph: {
    title: "Krishnam Academy – Learn Smart. Think Better. Achieve More.",
    description:
      "Concept-driven Mathematics & Science coaching for CBSE students in Savda. Admissions open for Std. VIII–X.",
    url: "https://krishnamacademy.in/",
    siteName: "Krishnam Academy",
    images: ["https://krishnamacademy.in/Imgs/logo.png"],
    type: "website",
  },
};

// Import client components dynamically so this page can be a server component
const Navbar = dynamic(() => import("./components/Navbar"));
const Hero = dynamic(() => import("./components/Hero"));
const About = dynamic(() => import("./components/About"));
const WhyUs = dynamic(() => import("./components/WhyUs"));
const FloatingCTA = dynamic(() => import("./components/FloatingCTA"));

const Courses = dynamic(() => import("./components/Courses"));
const Gallery = dynamic(() => import("./components/Gallery"));
const Offers = dynamic(() => import("./components/Offers"));
const CompetitiveExam = dynamic(() => import("./components/CompetitiveExam"));
const Testimonials = dynamic(() => import("./components/Testimonials"));
const Contact = dynamic(() => import("./components/Contact"));
const SocialMediaBar = dynamic(() => import("./components/SocialMediaBar"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <main className="w-full relative overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Structural layout wrappers */}
      <div>
        <Navbar />
        <Hero />
        <About />
        <WhyUs />
        <Courses />
        <Gallery />
        <Offers />
        <CompetitiveExam />
        <Testimonials />
        <Contact />
        <SocialMediaBar />
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
