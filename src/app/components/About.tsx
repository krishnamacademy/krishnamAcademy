"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Star, Users, BrainCircuit } from "lucide-react";

export default function About() {
  const focusAreas = [
    { title: "CBSE Board Examinations", desc: "Rigorous alignment with the CBSE curriculum ensuring students hit top scores." },
    { title: "School Academics", desc: "Solid school term foundation coverage to maintain regular excellence." },
    { title: "Competitive Exam Preparation", desc: "Early preparation for future competitive exams (NTSE, Olympiads)." },
    { title: "Critical Thinking & Problem Solving", desc: "Building mathematical reasoning and scientific aptitude, not just rote learning." },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-slate-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-amber-50 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Graphic Portrait & Stats */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual element backdrop */}
            <div className="absolute inset-0 bg-slate-100/50 rounded-[30px] -z-10 blur-xl scale-95" />

            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl bg-slate-100">
              <Image 
                src="/Imgs/gallery-2.jpeg" 
                alt="Er. Saurabh Teli - Founder & Director" 
                fill 
                className="object-cover" 
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-16 text-center">
                <h3 className="text-2xl font-bold text-white">Er. Saurabh Teli</h3>
                <p className="text-sm text-[#F59E0B] font-bold tracking-wider uppercase mt-1">Founder & Director</p>
              </div>
            </div>

            {/* Floating Stat Badge 1 */}
            <div className="absolute -right-2 sm:-right-4 top-10 bg-white p-3 sm:p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center gap-1 z-10 scale-90 sm:scale-100 origin-right">
              <span className="text-2xl sm:text-3xl">🚀</span>
              <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A]">100%</h4>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center">Concept<br className="sm:hidden" /> Driven</p>
            </div>
            
            {/* Floating Stat Badge 2 */}
            <div className="absolute -left-2 sm:-left-4 bottom-12 sm:bottom-16 bg-white p-3 sm:p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center gap-1 z-10 scale-90 sm:scale-100 origin-left">
              <span className="text-2xl sm:text-3xl">🤖</span>
              <h4 className="text-lg sm:text-xl font-extrabold text-blue-600">AI</h4>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-wider text-center">Smart<br className="sm:hidden" /> Class</p>
            </div>
          </div>

          {/* Right Column: Copy & Focus areas */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <div className="flex flex-col gap-2">
              <span className="premium-tag">Welcome to Krishnam Academy</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight break-words">
                Empowering Students Through <span className="gold-text-gradient">Conceptual Learning</span>
              </h2>
              <div className="premium-divider mt-2" />
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              KRISHNAM ACADEMY is a premier educational institute dedicated to building strong academic foundations through concept-driven learning and modern teaching methodologies. We focus on transitioning students from simple memorization to absolute logical understanding.
            </p>

            <p className="text-slate-500 text-base leading-relaxed">
              With personalized attention, small batch sizes, and AI-powered smart classrooms, we ensure every student receives the dedicated guidance needed to unlock their complete academic potential.
            </p>

            {/* Focus areas list */}
            <div className="grid md:grid-cols-2 gap-6 w-full mt-4">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-base">{area.title}</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
