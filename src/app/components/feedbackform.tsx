import { Send, ShieldCheck, Sparkles } from "lucide-react";
import StarRating from "../feedback/StarRating";

const fieldClassName =
  "mt-2 block min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-amber-500 focus:bg-white focus:ring-4 focus:ring-amber-500/10";

export default function FeedbackForm() {
  return (
    <section className="mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)]">
      <div className="border-b border-slate-100 bg-gradient-to-br from-white via-white to-amber-50/70 px-5 py-7 sm:px-8 sm:py-9">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-amber-800">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Your voice matters
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
          Share your feedback
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Your thoughts help us make learning at Krishnam Academy even better.
          Tell us about your experience.
        </p>
      </div>

      <form
        action="/submit-feedback"
        method="POST"
        className="space-y-5 px-5 py-6 sm:space-y-6 sm:px-8 sm:py-8"
      >
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              autoComplete="name"
              className={fieldClassName}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              name="email"
              autoComplete="email"
              className={fieldClassName}
            />
          </div>
        </div>

        <StarRating />

        <div>
          <label
            htmlFor="class"
            className="block text-sm font-semibold text-slate-800"
          >
            Class
          </label>
          <select id="class" name="class" className={fieldClassName}>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="alumni">Alumni / Passed</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-slate-800"
          >
            Your feedback
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="What went well? What could we improve?"
            className={`${fieldClassName} min-h-32 resize-y`}
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs leading-relaxed text-slate-500 sm:max-w-xs">
            <ShieldCheck
              className="h-4 w-4 shrink-0 text-emerald-600"
              aria-hidden="true"
            />
            Thank you for helping us create a better learning experience.
          </p>
          <button
            type="submit"
            className="btn-gold w-full !py-3.5 sm:w-auto sm:min-w-52"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            <span>Submit feedback</span>
          </button>
        </div>
      </form>
    </section>
  );
}
