"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const focusAreas = [
    {
      title: "CBSE Board Examinations",
      desc: "Rigorous alignment with the CBSE curriculum ensuring students hit top scores.",
    },
    {
      title: "School Academics",
      desc: "Solid school term foundation coverage to maintain regular excellence.",
    },
    {
      title: "Competitive Exam Preparation",
      desc: "Early preparation for future competitive exams (NTSE, Olympiads).",
    },
    {
      title: "Critical Thinking & Problem Solving",
      desc: "Building mathematical reasoning and scientific aptitude, not just rote learning.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-slate-50 blur-[80px]" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-56 w-56 rounded-full bg-amber-50 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5">
            <div className="absolute inset-4 rounded-3xl bg-slate-100/70 blur-xl" />
            <div className="group relative aspect-[9/14] overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-2xl">
              <Image
                src="/Imgs/Educator Photo.png"
                alt="Er. Saurabh Teli, Founder and Director of Krishnam Academy"
                fill
                sizes="(max-width: 1023px) 90vw, 40vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative mx-auto mt-4 w-[calc(100%-2rem)] rounded-xl border border-amber-200 bg-amber-400 px-4 py-3 text-center shadow-lg sm:mt-5 sm:w-11/12 sm:px-6 sm:py-4">
              <h3 className="text-xl font-bold leading-tight text-slate-950 sm:text-2xl md:text-3xl">
                Er. Saurabh Teli
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-800 sm:text-sm">
                Founder &amp; Director
              </p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-start gap-5 text-left sm:gap-6 lg:col-span-7">
            <div className="flex w-full flex-col items-start gap-2">
              <span className="premium-tag max-w-full whitespace-normal">
                Welcome to Krishnam Academy
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl">
                Empowering Students Through{" "}
                <span className="gold-text-gradient">Conceptual Learning</span>
              </h2>
              <div className="premium-divider mt-2" />
            </div>

            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              KRISHNAM ACADEMY is a premier educational institute dedicated to
              building strong academic foundations through concept-driven
              learning and modern teaching methodologies. We focus on
              transitioning students from simple memorization to absolute
              logical understanding.
            </p>

            <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
              With personalized attention, small batch sizes, and AI-powered
              smart classrooms, we ensure every student receives the dedicated
              guidance needed to unlock their complete academic potential.
            </p>

            <div className="mt-2 grid w-full grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
              {focusAreas.map((area) => (
                <div key={area.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#F59E0B]" />
                  <div className="min-w-0">
                    <h4 className="text-base font-bold text-[#0F172A]">
                      {area.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                      {area.desc}
                    </p>
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
