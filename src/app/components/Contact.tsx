"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Mobile number must be at least 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  std: z.string().min(1, "Standard is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  honeyPot: z.string().max(0, "Invalid input").optional().or(z.literal("")),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      std: "Std. VIII",
      message: "",
      honeyPot: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!res.ok) {
        throw new Error(resData.error || "Failed to submit inquiry");
      }

      setFormSubmitted(true);
      setTimeout(() => {
        reset();
        setFormSubmitted(false);
      }, 5000);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : String(err));
    }
  };

  const contactInfo = [
    {
      title: "Our Address",
      desc: "Hare Krishna House, Near Sub Post Office, Gavat Bazar, Savda – 425502",
      icon: <MapPin className="w-5 h-5 text-[#F59E0B]" />,
    },
    {
      title: "Call / WhatsApp",
      desc: "+91 9511837664",
      icon: <Phone className="w-5 h-5 text-[#F59E0B]" />,
    },
    {
      title: "Email Address",
      desc: "krishnamacademy.savda@gmail.com",
      icon: <Mail className="w-5 h-5 text-[#F59E0B]" />,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-slate-50 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-6 relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="premium-tag">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight break-words">
            Contact <span className="gold-text-gradient">KRISHNAM ACADEMY</span>
          </h2>
          <div className="premium-divider" />
          <p className="text-slate-500 max-w-xl text-center leading-relaxed">
            Have questions about admissions, fees, or class schedules? Send us a
            quick inquiry or visit our center.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct Info & Form */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            {/* Info Cards Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="premium-card p-6 flex gap-4 items-start bg-[#F8FAFC]/50 hover:bg-white border-slate-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center shrink-0 border border-[#F59E0B]/20">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0F172A] text-sm mb-1">
                      {info.title}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Direct Query Form */}
            <div className="premium-card p-8 bg-[#F8FAFC]/30 border-slate-200/60 backdrop-blur-md relative">
              <h3 className="font-extrabold text-[#0F172A] text-lg mb-6">
                Send a Quick Inquiry
              </h3>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-emerald-800 text-base">
                      Inquiry Submitted!
                    </h4>
                    <p className="text-xs text-emerald-600 mt-1 leading-relaxed">
                      Thank you for contacting us. Er. Saurabh Teli will reach
                      out to you shortly.
                    </p>
                    <p className="text-xs text-emerald-600 mt-2 leading-relaxed font-medium">
                      A confirmation has been sent to your email (if provided).
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                >
                  {/* Honeypot field - hidden from real users */}
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Don&apos;t fill this out if you&apos;re human:
                    </label>
                    <input
                      type="text"
                      {...register("honeyPot")}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        {...register("name")}
                        className={`w-full bg-white border ${errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#F59E0B]"} rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs mt-0.5">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        inputMode="tel"
                        placeholder="Enter mobile number"
                        {...register("phone")}
                        className={`w-full bg-white border ${errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#F59E0B]"} rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-xs mt-0.5">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      {...register("email")}
                      className={`w-full bg-white border ${errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#F59E0B]"} rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs mt-0.5">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
                      Class / Standard
                    </label>
                    <select
                      {...register("std")}
                      className={`w-full bg-white border ${errors.std ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#F59E0B]"} rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors`}
                    >
                      <option value="Std. VIII">Std. VIII</option>
                      <option value="Std. IX">Std. IX</option>
                      <option value="Std. X">Std. X</option>
                    </select>
                    {errors.std && (
                      <span className="text-red-500 text-xs mt-0.5">
                        {errors.std.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-500 font-bold uppercase tracking-wider font-mono">
                      Message / Query
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about batches, timings, or demo details..."
                      {...register("message")}
                      className={`w-full bg-white border ${errors.message ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#F59E0B]"} rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-0.5">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {errorMsg && (
                    <div className="text-red-500 text-xs font-medium text-center">
                      {errorMsg}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full mt-2 !py-3.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send
                      className={`w-4 h-4 ${isSubmitting ? "animate-pulse" : ""}`}
                    />
                    <span>
                      {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-5 w-full h-[400px] lg:h-auto min-h-[350px] relative">
            <div className="w-full h-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg relative group bg-slate-100 flex items-center justify-center">
              {/* Overlay location indicator */}
              <div className="absolute top-4 left-4 z-10 glass px-4 py-2 rounded-xl border-white/10 flex items-center gap-2 max-w-xs shadow-md pointer-events-none">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span className="text-[11px] font-bold text-white tracking-wide leading-tight">
                  Hare Krishna House, Savda
                </span>
              </div>

              <iframe
                title="Krishnam Academy Savda"
                src="https://maps.google.com/maps?q=Hare%20Krishna%20House,%20Gavat%20Bazar,%20Savda&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter brightness-[0.98] contrast-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
