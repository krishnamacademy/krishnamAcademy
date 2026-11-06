"use client";

import React from "react";
import {
  Laptop,
  Compass,
  FileSpreadsheet,
  Users,
  Trophy,
  MessageCircle,
  Star,
  Sparkles,
} from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: <Laptop className="w-6 h-6 text-[#F59E0B]" />,
      title: "Modern AI-Powered Smart Classrooms",
      desc: "Visual interactive learning screens for 3D understanding of abstract Science and Math concepts.",
    },
    {
      icon: <Compass className="w-6 h-6 text-[#F59E0B]" />,
      title: "Concept-Based Learning Approach",
      desc: "We focus on 'Why' rather than just 'What' to establish robust long-term reasoning capabilities.",
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-[#F59E0B]" />,
      title: "Regular Assessments & Tracking",
      desc: "Weekly chapter-wise tests and real-time dashboard tracking shared periodically with parents.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#F59E0B]" />,
      title: "Personalized Attention & Small Batches",
      desc: "Limited students per batch ensures individual focus, doubt resolution, and tailored teaching speeds.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#F59E0B]" />,
      title: "Board & Competitive Prep",
      desc: "Early orientation for JEE, NEET, MHT-CET and intensive preparation to ace Class X board exams.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#F59E0B]" />,
      title: "Focus on Skills & Problem Solving",
      desc: "Encouraging proactive question raising, peer explanations, and logical mathematical puzzles.",
    },
    {
      icon: <Star className="w-6 h-6 text-[#F59E0B]" />,
      title: "Experienced Faculty Guidance",
      desc: "Direct mentoring by Er. Saurabh Teli (B.E. Mech, B.Ed.) with years of targeted coaching expertise.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#F59E0B]" />,
      title: "Holistic Academic Development",
      desc: "Guiding time-management, examination strategies, stress management, and active mindsets.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Decorative dots background */}
      <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6 relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="premium-tag">Our Key Features</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight break-words">
            Why Choose{" "}
            <span className="gold-text-gradient">KRISHNAM ACADEMY</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-slate-500 max-w-xl text-center leading-relaxed">
            We offer premium facilities, expert mentorship, and concept-oriented
            methods that build absolute confidence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="premium-card p-6 flex flex-col items-start gap-4 bg-white border-slate-100 hover:border-amber-200"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-extrabold text-[#0F172A] text-base md:text-lg leading-snug">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
