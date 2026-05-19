"use client";

import React, { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "Courses", href: "#courses" },
    { name: "Gallery", href: "#gallery" },
    { name: "Offers", href: "#offers" },
    { name: "Competitive Exams", href: "#competitive" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F172A]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24] flex items-center justify-center text-[#0F172A] shadow-md group-hover:scale-105 transition-transform duration-300">
            <GraduationCap className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-white group-hover:text-[#F59E0B] transition-colors duration-300">
              KRISHNAM <span className="text-[#F59E0B]">ACADEMY</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold -mt-1 font-mono">
              Learn Smart. Think Better.
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#F59E0B] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="tel:+919511837664"
            className="btn-gold !py-2.5 !px-5 text-sm flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>+91 9511837664</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-[#0F172A] shadow-2xl z-40 border-l border-white/5 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden pt-24 px-6 flex flex-col gap-6`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-300 hover:text-[#F59E0B] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col gap-4">
          <a
            href="tel:+919511837664"
            className="btn-gold w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <a
            href="#contact"
            className="btn-outline w-full text-center hover:bg-slate-800"
            onClick={() => setIsOpen(false)}
          >
            <span>Book Free Demo</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </nav>
  );
}
