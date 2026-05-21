"use client";

import React from "react";
import { Star, Quote, UserRoundCheck } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote: "Best academy for conceptual understanding and board preparation. Er. Saurabh Teli's approach to complex Mathematics concepts is absolutely stellar. My child's test scores improved by 35% in just six months.",
      author: "Mr. Ramesh Patil",
      role: "Parent of Class X Student",
      stars: 5,
    },
    {
      quote: "Smart teaching methods and personal attention improved my confidence immensely. The AI classrooms helped me visualize tough Science processes very easily. Truly a transformative tutoring experience.",
      author: "Kunal Chaudhari",
      role: "Class X CBSE Student",
      stars: 5,
    },
    {
      quote: "Excellent guidance for Mathematics and Science. The small batch sizes are the best part. I could ask unlimited questions without any hesitation, and every doubt was patiently resolved.",
      author: "Mrs. Sunita Teli",
      role: "Parent of Class IX Student",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6 relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="premium-tag">What Parents & Students Say</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight break-words">
            Our <span className="gold-text-gradient">Success Stories</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-slate-500 max-w-xl text-center leading-relaxed">
            Real feedback from local parents and students who achieved outstanding outcomes under our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="premium-card p-8 bg-white border border-[#E2E8F0] hover:border-[#F59E0B]/30 flex flex-col justify-between relative group"
            >
              {/* Quote Icon Backdrop */}
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-amber-100 transition-colors pointer-events-none">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              <div>
                {/* Star Ratings */}
                <div className="flex items-center gap-1.5 mb-6">
                  {Array.from({ length: rev.stars }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed italic relative z-10">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-slate-100 pt-6 mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] shrink-0 border border-[#F59E0B]/20">
                  <UserRoundCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0F172A] text-sm">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold font-mono">
                    {rev.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
