"use client";

import React from "react";
import { MonitorPlay, Library, BookOpen, FlaskConical, Users, Presentation, ShieldCheck } from "lucide-react";

export default function Gallery() {
  const rooms = [
    {
      label: "AI Smart Classroom 1",
      icon: <Presentation className="w-10 h-10 text-[#F59E0B]" />,
      desc: "Full AI-interactive digital whiteboard with 3D concept visualization for Math and Science.",
      tag: "Technology",
      gradient: "from-[#0F172A] to-[#1E293B]",
    },
    {
      label: "AI Smart Classroom 2",
      icon: <MonitorPlay className="w-10 h-10 text-[#3B82F6]" />,
      desc: "Dual projection layout optimized for interactive doubt-clearing and online simulations.",
      tag: "Technology",
      gradient: "from-[#0F172A] to-[#1E3A8A]",
    },
    {
      label: "Main Study Hall",
      icon: <BookOpen className="w-10 h-10 text-emerald-500" />,
      desc: "Spacious, well-lit library and self-study room seating up to 30 students comfortably.",
      tag: "Self-Study",
      gradient: "from-[#0F172A] to-[#064E3B]",
    },
    {
      label: "Science Corner",
      icon: <FlaskConical className="w-10 h-10 text-purple-500" />,
      desc: "Dedicated lab apparatus space for hands-on Physics experiments and Chemistry models.",
      tag: "Practical Work",
      gradient: "from-[#0F172A] to-[#581C87]",
    },
    {
      label: "Mathematics Zone",
      icon: <Library className="w-10 h-10 text-rose-500" />,
      desc: "Visual math workspace filled with geometric shapes, reference tools, and theorem boards.",
      tag: "Workshop",
      gradient: "from-[#0F172A] to-[#881337]",
    },
    {
      label: "Group Learning Bay",
      icon: <Users className="w-10 h-10 text-cyan-500" />,
      desc: "Flexible modular desks facilitating collaborative group tests and interactive group tasks.",
      tag: "Collaborative",
      gradient: "from-[#0F172A] to-[#164E63]",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="premium-tag">Modern Learning Environment</span>
          <h2 className="text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Smart Classroom <span className="gold-text-gradient">Gallery</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-slate-500 max-w-xl text-center leading-relaxed">
            Step inside Krishnam Academy—equipped with modern educational tech that makes learning engaging and alive.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="group premium-card overflow-hidden bg-white border border-[#E2E8F0] hover:border-[#F59E0B]/40 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Graphic visual card screen */}
              <div className={`relative h-56 bg-gradient-to-br ${room.gradient} flex items-center justify-center overflow-hidden shrink-0`}>
                {/* Background animations */}
                <div className="absolute inset-0 dot-bg opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-white/10 text-white/90 border border-white/20 px-2.5 py-1 rounded-full font-mono">
                    {room.tag}
                  </span>
                </div>

                {/* Animated Lucide Icon */}
                <div className="relative z-10 group-hover:scale-110 transition-transform duration-500 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md shadow-inner">
                  {room.icon}
                </div>
              </div>

              {/* Text info */}
              <div className="p-6 flex flex-col flex-1 gap-2 text-left justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-[#0F172A] group-hover:text-[#F59E0B] transition-colors">
                    {room.label}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
                    {room.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-1.5 mt-4 text-[10px] text-[#F59E0B] font-bold uppercase tracking-wider font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Interactive Setup Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
