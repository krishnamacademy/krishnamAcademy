"use client";

import React from "react";
import { GraduationCap, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-white/5 noise relative">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6 relative z-10">
        
        {/* Footer Top */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24] flex items-center justify-center text-[#0F172A] shadow-md">
                <GraduationCap className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-lg tracking-tight text-white">
                  KRISHNAM <span className="text-[#F59E0B]">ACADEMY</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold -mt-1 font-mono">
                  Learn Smart. Think Better.
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm text-left">
              Building robust academic foundations in Mathematics and Science through concept-based visual mentoring.
            </p>
          </div>

          {/* Location Column */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end gap-3 text-left md:text-right">
            <h4 className="text-xs text-[#FBBF24] font-bold uppercase tracking-wider font-mono">
              Academy Center Location
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm md:text-right">
              Hare Krishna House, Near Sub Post Office, Gavat Bazar, Savda – 425502, Maharashtra
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
              <a href="tel:+919511837664" className="hover:text-[#FBBF24] transition-colors">
                📞 +91 9511837664
              </a>
              <span>•</span>
              <a href="mailto:krishnamacademy.savda@gmail.com" className="hover:text-[#FBBF24] transition-colors">
                📧 krishnamacademy.savda@gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 w-full mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <p className="text-slate-500 text-xs font-medium font-mono text-center sm:text-left">
              © {new Date().getFullYear()} Krishnam Academy Savda. All rights reserved.
            </p>
            <p className="text-slate-500 text-[11px] font-medium font-mono text-center sm:text-left">
              Designed & Developed by{" "}
              <a href="https://www.sachinrathod.in/" target="_blank" rel="noopener noreferrer" className="text-[#FBBF24] hover:text-[#F59E0B] transition-colors">
                Sachin Rathod
              </a>
              {" "}at{" "}
              <a href="https://www.itpravah.in/" target="_blank" rel="noopener noreferrer" className="text-[#FBBF24] hover:text-[#F59E0B] transition-colors">
                IT Pravaha
              </a>
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#F59E0B]/20 border border-white/10 flex items-center justify-center text-slate-400 hover:text-[#FBBF24] transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
