"use client";

import React from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import FloatingCTA from "./components/FloatingCTA";

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
