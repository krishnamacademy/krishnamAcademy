"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const rooms = [
    {
      label: "Interactive Smart Board",
      image: "/Imgs/gallery-3.jpeg",
      desc: "75 Inch AI-Powered Smart Board for immersive and visual learning experiences.",
      tag: "Technology",
    },
    {
      label: "Classroom Layout",
      image: "/Imgs/gallery-4.jpeg",
      desc: "Spacious seating arrangement with modern desks ensuring comfort for every student.",
      tag: "Infrastructure",
    },
    {
      label: "Digital Learning",
      image: "/Imgs/gallery-5.jpeg",
      desc: "State-of-the-art interactive panels facilitating dynamic presentations and active engagement.",
      tag: "Engagement",
    },
    {
      label: "Spacious Environment",
      image: "/Imgs/gallery-6.jpeg",
      desc: "Well-ventilated and bright classrooms designed to maintain student focus and energy.",
      tag: "Ambiance",
    },
    {
      label: "Comfortable Seating",
      image: "/Imgs/gallery-7.jpeg",
      desc: "Ergonomically designed desks prioritizing student posture during long study sessions.",
      tag: "Comfort",
    },
    {
      label: "Dedicated Study Zones",
      image: "/Imgs/gallery-8.jpeg",
      desc: "Organized learning spaces that minimize distractions and foster a quiet study atmosphere.",
      tag: "Focus",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6 relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="premium-tag">Glimpses of Success</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight break-words">
            Our <span className="gold-text-gradient">Gallery</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-slate-500 max-w-xl text-center leading-relaxed">
            Take a look at the energetic and engaging learning environment at Krishnam Academy.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="group premium-card overflow-hidden bg-white border border-[#E2E8F0] hover:border-[#F59E0B]/40 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedImage(room.image)}
            >
              {/* Graphic visual card screen */}
              <div className="relative h-56 bg-slate-900 flex items-center justify-center overflow-hidden shrink-0">
                <Image 
                  src={room.image} 
                  alt={room.label} 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" 
                />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-black/50 backdrop-blur-md text-white border border-white/20 px-2.5 py-1 rounded-full font-mono">
                    {room.tag}
                  </span>
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

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#F59E0B] transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery Full Preview"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
