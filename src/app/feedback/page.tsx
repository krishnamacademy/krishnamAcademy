import React from "react";
import Navbar from "../components/Navbar";
import FeedbackForm from "../components/feedbackform";

export default function FeedbackPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-gradient-to-br from-[#020617] via-[#0F172A] to-[#1E293B]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <Navbar />
      <main className="relative z-10 flex min-h-svh w-full items-center justify-center px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 lg:px-8">
        <FeedbackForm />
      </main>
    </div>
  );
}
