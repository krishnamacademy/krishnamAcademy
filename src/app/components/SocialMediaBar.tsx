"use client";

import React from "react";
import { Send, Map, Navigation, ArrowUpRight } from "lucide-react";
import { Youtube } from "./icons/Youtube";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";

export default function SocialMediaBar() {
  const platforms = [
    {
      name: "Instagram Profile",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/krishnamacademy",
      color:
        "hover:bg-[#E1306C]/10 hover:text-[#E1306C] hover:border-[#E1306C]/30",
      desc: "Photos & daily snippets",
    },
    {
      name: "Facebook Profile",
      icon: <Facebook className="w-6 h-6" />,
      url: "https://Facebook.com/people/Krishnam-Academy/61586205057417/?rdid=QMj3oUxwWBlkmNeO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BrrUTZA9P%2F",
      color:
        "hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:border-[#1877F2]/30",
      desc: "Photos & daily snippets",
    },
    {
      name: "YouTube Channel",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://www.youtube.com/@Krishnam.Academy",
      color:
        "hover:bg-[#FF0000]/10 hover:text-[#FF0000] hover:border-[#FF0000]/30",
      desc: "Video lectures & concept clips",
    },

    {
      name: "Academy Direction",
      icon: <Navigation className="w-6 h-6" />,
      url: "https://maps.app.goo.gl/WvNZNGp7BRq8WKys8",
      color:
        "hover:bg-[#4285F4]/10 hover:text-[#4285F4] hover:border-[#4285F4]/30",
      desc: "Get driving route instructions",
    },
  ];

  return (
    <section className="py-16 bg-[#F8FAFC] mt-5 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div className="flex flex-col gap-1.5 text-left">
            <span className="premium-tag">Stay Connected</span>
            <h3 className="text-2xl md:text-3xl font-black text-[#0F172A]">
              Follow{" "}
              <span className="gold-text-gradient">KRISHNAM ACADEMY</span>
            </h3>
            <p className="text-slate-500 text-sm">
              Follow our official handles to receive the latest updates, event
              details, and educational content.
            </p>
          </div>

          <div className="h-1 w-16 bg-[#F59E0B] rounded-full hidden md:block" />
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {platforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`premium-card p-5 bg-white border border-slate-100 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 group ${platform.color}`}
            >
              {/* Animated Icon Circle */}
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-all duration-300 shrink-0">
                {platform.icon}
              </div>

              <div>
                <h4 className="font-extrabold text-[#0F172A] text-xs md:text-sm tracking-tight leading-snug">
                  {platform.name}
                </h4>
                <p className="text-[10px] text-slate-400 mt-1 leading-snug line-clamp-1 group-hover:text-[#F59E0B] transition-colors">
                  {platform.desc}
                </p>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 text-[9px] uppercase font-bold tracking-widest text-[#F59E0B] font-mono mt-1">
                <span>Visit</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
