"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 px-8 sm:px-10 flex justify-center md:hidden pointer-events-none transition-all duration-300">
      <div className="glass shadow-2xl rounded-full p-2 flex items-center gap-2 max-w-sm w-full border-white/10 pointer-events-auto">
        {/* Call Button */}
        <a
          href="tel:+919511837664"
          className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-xs uppercase tracking-widest py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg"
        >
          <Phone className="w-3.5 h-3.5 fill-white text-emerald-500 shrink-0" />
          <span>Call Now</span>
        </a>

        {/* Demo Button */}
        <a
          href="#contact"
          className="flex-1 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-[#0F172A] font-extrabold text-xs uppercase tracking-widest py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-lg"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Free Demo</span>
        </a>
      </div>
    </div>
  );
}
