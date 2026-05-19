"use client";

import React from "react";
import { BookOpen, Compass, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Courses() {
  const classes = [
    {
      std: "Std. VIII",
      tagline: "Foundation & Skill Building",
      desc: "Nurturing logical thinking and fundamental concepts in Mathematics & Science to transition smoothly into senior school layers.",
      subjects: ["Mathematics", "Science"],
      boards: ["CBSE Board", "English Medium", "Semi-English Medium"],
      badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      std: "Std. IX",
      tagline: "Concept Consolidation",
      desc: "Deep-dive learning modules focused on complex theorems, scientific principles, and early board level question paradigms.",
      subjects: ["Mathematics", "Science"],
      boards: ["CBSE Board", "English Medium", "Semi-English Medium"],
      badgeColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      std: "Std. X",
      tagline: "Board Exam Mastery",
      desc: "Targeted rigorous preparation, previous-year question mapping, weekly full syllabus tests, and specialized time management mentoring.",
      subjects: ["Mathematics", "Science"],
      boards: ["CBSE Board", "English Medium", "Semi-English Medium"],
      badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
  ];

  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-0 w-[250px] h-[250px] bg-slate-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] bg-slate-50 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="premium-tag">Classes Available</span>
          <h2 className="text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Academic <span className="gold-text-gradient">Courses Offered</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-slate-500 max-w-xl text-center leading-relaxed">
            Focused curriculum and continuous tracking in core sciences and mathematical skills.
          </p>
        </div>

        {/* Courses Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {classes.map((c, idx) => (
            <div
              key={idx}
              className="premium-card overflow-hidden flex flex-col justify-between bg-[#F8FAFC]/50 hover:bg-white border-slate-100 hover:border-amber-200"
            >
              {/* Card Top */}
              <div className="p-8">
                {/* Standard Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs uppercase font-extrabold tracking-widest font-mono border px-3 py-1 rounded-full ${c.badgeColor}`}>
                    {c.std}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#F59E0B]/10 group-hover:text-[#F59E0B] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Tagline & Title */}
                <h3 className="text-2xl font-black text-[#0F172A] mb-2">{c.std} Coaching</h3>
                <p className="text-xs text-[#F59E0B] font-bold uppercase tracking-wider mb-4 font-mono">
                  {c.tagline}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {c.desc}
                </p>

                {/* Board / Medium Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.boards.map((b, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[10px] md:text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Subjects & CTA */}
              <div className="p-8 border-t border-slate-100 bg-[#F8FAFC]">
                <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3 font-mono">
                  Core Subjects Covered:
                </h4>
                <div className="flex items-center gap-4 mb-5">
                  {c.subjects.map((sub, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      <span className="text-sm font-bold">{sub}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full btn-outline-navy !py-3 text-center flex items-center justify-center gap-2 hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A]"
                >
                  <span>Book Free Demo Lectures</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
