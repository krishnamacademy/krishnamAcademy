"use client";

import React from "react";
import { CheckCircle2, Star, Users, BrainCircuit } from "lucide-react";

export default function About() {
  const focusAreas = [
    { title: "CBSE Board Examinations", desc: "Rigorous alignment with the CBSE curriculum ensuring students hit top scores." },
    { title: "School Academics", desc: "Solid school term foundation coverage to maintain regular excellence." },
    { title: "Competitive Exam Preparation", desc: "Early preparation for future competitive exams (NTSE, Olympiads)." },
    { title: "Critical Thinking & Problem Solving", desc: "Building mathematical reasoning and scientific aptitude, not just rote learning." },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-slate-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-amber-50 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Graphics & Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 relative">
            {/* Visual element backdrop */}
            <div className="absolute inset-0 bg-slate-100/50 rounded-[30px] -z-10 blur-xl scale-95" />

            {/* Stat Box 1 */}
            <div className="premium-card p-6 flex flex-col gap-3 justify-center items-center text-center bg-slate-50 border-slate-200/60">
              <span className="text-4xl">🚀</span>
              <h3 className="text-3xl font-extrabold text-[#0F172A]">100%</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">Concept Driven</p>
            </div>

            {/* Stat Box 2 */}
            <div className="premium-card p-6 flex flex-col gap-3 justify-center items-center text-center mt-6 border-amber-200/40 bg-amber-50/20">
              <span className="text-4xl">🎓</span>
              <h3 className="text-3xl font-extrabold text-[#F59E0B]">Small</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">Batch Sizes</p>
            </div>

            {/* Stat Box 3 */}
            <div className="premium-card p-6 flex flex-col gap-3 justify-center items-center text-center -mt-6 border-blue-200/30 bg-blue-50/10">
              <span className="text-4xl">🤖</span>
              <h3 className="text-3xl font-extrabold text-blue-600">AI</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">Smart Classroom</p>
            </div>

            {/* Stat Box 4 */}
            <div className="premium-card p-6 flex flex-col gap-3 justify-center items-center text-center bg-slate-50 border-slate-200/60">
              <span className="text-4xl">📈</span>
              <h3 className="text-3xl font-extrabold text-[#0F172A]">Proven</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">Track Record</p>
            </div>
          </div>

          {/* Right Column: Copy & Focus areas */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <div className="flex flex-col gap-2">
              <span className="premium-tag">Welcome to Krishnam Academy</span>
              <h2 className="text-4xl font-extrabold text-[#0F172A] leading-tight">
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
