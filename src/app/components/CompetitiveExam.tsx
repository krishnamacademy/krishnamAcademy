"use client";

import React from "react";
import { ShieldCheck, Target, Award, Rocket, HelpCircle, Trophy } from "lucide-react";

export default function CompetitiveExam() {
  const exams = [
    {
      name: "NTSE (National Talent Search Exam)",
      desc: "Comprehensive coverage of Mental Ability Test (MAT) and Scholastic Aptitude Test (SAT) questions early in class IX & X.",
      icon: <Target className="w-5 h-5 text-[#F59E0B]" />,
    },
    {
      name: "Olympiads (Science & Mathematics)",
      desc: "Advanced logic questions and high-order thinking problems tailored to clear national/international Olympiad levels.",
      icon: <Award className="w-5 h-5 text-[#F59E0B]" />,
    },
    {
      name: "Scholarship Exams (Std. VIII & High School)",
      desc: "Specific speed tactics, shortcut solutions, and paper pattern mock tests customized for state-level scholarship targets.",
      icon: <Trophy className="w-5 h-5 text-[#F59E0B]" />,
    },
    {
      name: "Future Competitive Exams (JEE / NEET Foundations)",
      desc: "Gradual introduction to critical physical formulas and mathematical reasoning that form the absolute core of JEE/NEET prep.",
      icon: <Rocket className="w-5 h-5 text-[#F59E0B]" />,
    },
  ];

  return (
    <section id="competitive" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-slate-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-amber-50 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Focus & Lists */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <div className="flex flex-col gap-2">
              <span className="premium-tag">PREPARE FOR COMPETITIVE EXAMS IN ADVANCE</span>
              <h2 className="text-4xl font-extrabold text-[#0F172A] leading-tight">
                Build a Strong Foundation for <span className="gold-text-gradient">Future Achievements</span>
              </h2>
              <div className="premium-divider mt-2" />
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Academic excellence requires going beyond standard textbook answers. We introduce conceptual modules early to prepare students systematically for prestigious national talent search benchmarks and scholarship levels.
            </p>

            {/* List of Exams */}
            <div className="flex flex-col gap-6 w-full mt-4">
              {exams.map((exam, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center shrink-0 group-hover:bg-[#F59E0B] group-hover:text-white transition-colors duration-300">
                    {exam.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0F172A] text-base group-hover:text-[#F59E0B] transition-colors">
                      {exam.name}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm mt-1 leading-relaxed">
                      {exam.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Ace Board Guarantee Banner */}
          <div className="lg:col-span-5 w-full flex flex-col relative">
            <div className="glass-premium p-8 rounded-3xl relative z-10 w-full flex flex-col gap-6 shadow-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border-[#F59E0B]/30 text-white">
              {/* Premium star logo badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] flex items-center justify-center text-[#0F172A] shadow-md self-start">
                <Trophy className="w-6 h-6" />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-extrabold uppercase text-[#FBBF24] tracking-widest font-mono">
                  Board Exam Excellence
                </span>
                <h3 className="text-2xl font-black text-white leading-snug">
                  ACE YOUR CLASS X BOARD EXAMINATION
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-full mt-1" />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Unlock 100% confidence for Class X Boards with structured doubt sessions, regular updates on paper formats, comprehensive mock test tracking, and focused guidance.
              </p>

              {/* Bullet Features */}
              <div className="flex flex-col gap-3">
                {[
                  "Exclusive Board-Pattern Mock Test Series",
                  "Chapter-wise Revision Question Banks",
                  "Detailed Time Management Strategies",
                  "One-to-One Performance Audit Reviews",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#F59E0B] shrink-0" />
                    <span className="text-xs text-slate-200 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="btn-gold w-full text-center mt-2"
              >
                <span>Get Admission Details</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
