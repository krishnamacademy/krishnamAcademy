"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <fieldset>
      <legend className="block text-sm font-semibold text-slate-800">
        Your rating
      </legend>
      <div className="mt-2 flex flex-wrap items-center gap-1 sm:gap-2">
        <div
          role="radiogroup"
          aria-label="Feedback rating"
          className="flex items-center gap-1 sm:gap-2"
        >
          {Array.from({ length: 5 }, (_, index) => {
            const value = index + 1;

            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-label={`${value} ${value === 1 ? "star" : "stars"}`}
                aria-checked={rating === value}
                onClick={() => setRating(value)}
                className="rounded-lg p-1 text-amber-500 transition hover:scale-110 hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <Star
                  className="h-8 w-8 sm:h-9 sm:w-9"
                  fill={rating >= value ? "currentColor" : "none"}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
        <span
          aria-live="polite"
          className="ml-1 text-xs font-medium text-slate-500 sm:text-sm"
        >
          {rating ? `${rating} out of 5` : "Tap to rate"}
        </span>
        <input type="hidden" name="rating" value={rating} />
      </div>
    </fieldset>
  );
}
