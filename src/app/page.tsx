"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Offers from "./components/Offers";
import CompetitiveExam from "./components/CompetitiveExam";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import SocialMediaBar from "./components/SocialMediaBar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

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
