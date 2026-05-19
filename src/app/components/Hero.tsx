"use client";

import React from "react";
import { Phone, Calendar, MapPin, Compass, Mail, Award, BookOpen, GraduationCap } from "lucide-react";
import { Youtube } from "./icons/Youtube";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#020617] text-white flex items-center justify-center overflow-hidden noise">
      {/* Visual background layers */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0 pointer-events-none" />
      <div className="absolute inset-0 dot-bg opacity-30 z-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#F59E0B]/10 blur-[100px] z-0 pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/5 blur-[120px] z-0 pointer-events-none animate-pulse" />

      {/* Modern Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 15C480 30 240 60 0 30L0 60Z" fill="#F8FAFC" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and Details */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Admissions Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full px-4.5 py-1.5 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-ping" />
            <span className="text-xs uppercase font-extrabold text-[#FBBF24] tracking-widest font-mono">
              Admissions Open for Std. VIII to X
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6.5xl font-black tracking-tight leading-[1.1] text-white">
            KRISHNAM <br className="hidden md:inline" />
            <span className="gold-text-gradient">ACADEMY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
            Concept-driven <span className="text-[#FBBF24] font-semibold">Mathematics & Science Coaching</span> tailored for CBSE, English, and Semi-English medium students.
          </p>

          {/* Led by Saurabh Teli */}
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 max-w-md w-full backdrop-blur-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] flex items-center justify-center text-[#0F172A] shrink-0 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">Led by Expert Faculty</p>
              <h3 className="font-extrabold text-white text-base">Er. Saurabh Teli</h3>
              <p className="text-xs text-[#FBBF24] font-medium font-mono">B.E. Mechanical, B.Ed.</p>
            </div>
          </div>

          {/* Hero Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full mt-4">
            <a href="tel:+919511837664" className="btn-gold !py-3.5 !px-8 text-base">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a href="#contact" className="btn-outline !py-3.5 !px-8 text-base bg-white/5">
              <Calendar className="w-4 h-4 text-[#F59E0B]" />
              <span>Book Free Demo</span>
            </a>
            <a
              href="https://maps.app.goo.gl/WvNZNGp7BRq8WKys8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#F59E0B] font-bold tracking-wide transition-colors py-2 px-3 hover:bg-white/5 rounded-lg"
            >
              <MapPin className="w-4 h-4" />
              <span>View Location</span>
            </a>
          </div>

          {/* Quick social follow list */}
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Follow Us:</span>
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/share/1BrrUTZA9P/", label: "Facebook" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/krishnamacademy", label: "Instagram" },
                { icon: <Youtube className="w-4 h-4" />, href: "https://www.youtube.com/@Krishnam.Academy", label: "YouTube" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#F59E0B]/20 border border-white/10 hover:border-[#F59E0B]/30 flex items-center justify-center text-slate-300 hover:text-[#FBBF24] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Key Details Sidebar Card */}
        <div className="lg:col-span-5 flex flex-col w-full relative">
          <div className="glass-premium p-8 rounded-3xl relative z-10 w-full flex flex-col gap-6 shadow-2xl animate-float">
            {/* Soft gold decorative corner */}
            <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#F59E0B] rounded-tr-3xl opacity-60" />

            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-extrabold uppercase text-[#F59E0B] tracking-widest font-mono">Quick Contact</span>
              <h2 className="text-2xl font-black text-white leading-tight">Academy Details</h2>
              <div className="w-12 h-1 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-full mt-1" />
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FBBF24]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">Location</h4>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  Hare Krishna House, Near Sub Post Office, Gavat Bazar, Savda – 425502
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FBBF24]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">Call / Whatsapp</h4>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">+91 9511837664</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FBBF24]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 font-bold uppercase tracking-wider font-mono">Email Address</h4>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">krishnamacademy.savda@gmail.com</p>
              </div>
            </div>

            {/* Premium feature grid list inside card */}
            <div className="border-t border-white/10 pt-5 mt-2 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-xs text-slate-300 font-semibold">10-Day Free Demo</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-xs text-slate-300 font-semibold">CBSE Curriculum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
