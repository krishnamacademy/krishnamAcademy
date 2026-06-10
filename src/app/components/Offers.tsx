"use client";

import React from "react";
import { Flame, ArrowUpRight, Percent, Accessibility } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      title: "10-Day Free Demo Lectures",
      subtitle: "RISK-FREE TRIAL",
      desc: "Attend complete regular class batches for 10 consecutive days. Experience the teaching methodology and smart tools before committing to admissions.",
      icon: <Flame className="w-8 h-8 text-white animate-pulse" />,
      color: "from-amber-500 to-orange-600",
      border: "border-amber-500/30",
      cta: "Book Trial Seat",
    },
    {
      title: "50% Single Parent Scholarship",
      subtitle: "EMPOWERING FAMILIES",
      desc: "Full 50% flat scholarship on academic fees for single-parent child students to assist and support their educational dreams.",
      icon: <Percent className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-indigo-600",
      border: "border-blue-500/30",
      cta: "Apply for Scholarship",
    },
    {
      title: "100% Physically Challenged Scholarship",
      subtitle: "ZERO BARRIERS TO EDUCATION",
      desc: "Flat 100% full fee waiver/scholarship for physically challenged students. Our classroom setup accommodates and empowers active learning.",
      icon: <Accessibility className="w-8 h-8 text-white" />,
      color: "from-emerald-500 to-teal-600",
      border: "border-emerald-500/30",
      cta: "Claim 100% Waiver",
    },
  ];

  return (
    <section id="offers" className="py-24 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white relative overflow-hidden noise">
      {/* Decorative details */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-[#F59E0B]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6 relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="premium-tag !bg-white/5 !text-[#FBBF24] !border-white/10">Special Admission Offers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight break-words">
            Scholarships & <span className="gold-text-gradient">Admission Offers</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-slate-400 max-w-xl text-center leading-relaxed">
            At Krishnam Academy, we believe quality education should be inclusive, supportive, and accessible.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className={`premium-card-dark p-8 flex flex-col justify-between bg-white/5 border ${offer.border} backdrop-blur-md relative overflow-hidden group`}
            >
              {/* Card visual glowing border accent */}
              <div className="absolute -top-[1px] -left-[1px] w-12 h-12 border-t-2 border-l-2 border-[#F59E0B] rounded-tl-2xl opacity-40 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center shadow-lg`}>
                    {offer.icon}
                  </div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#FBBF24] font-mono">
                    {offer.subtitle}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#FBBF24] transition-colors">
                  {offer.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {offer.desc}
                </p>
              </div>

              {/* Bottom CTA Row */}
              <div className="border-t border-white/5 pt-6 mt-4 flex items-center justify-between">
                <a
                  href="#contact"
                  className="text-xs uppercase font-extrabold text-[#FBBF24] tracking-widest flex items-center gap-1.5 hover:text-white transition-colors font-mono"
                >
                  <span>{offer.cta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
