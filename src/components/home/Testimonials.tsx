"use client";

import { TestimonialCard } from "@/components/home/TestimonialCard";
import { testimonials } from "@/lib/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const total = testimonials.length;

  function goPrevious() {
    setIndex((current) => (current - 1 + total) % total);
  }

  function goNext() {
    setIndex((current) => (current + 1) % total);
  }

  return (
    <section
      className="relative z-10 mx-auto w-full max-w-2xl shrink-0 px-6 pb-8 pt-2 sm:px-8 sm:pb-10"
      aria-labelledby="testimonials-heading"
      aria-roledescription="carousel"
    >
      <h2
        id="testimonials-heading"
        className="text-center font-display text-lg tracking-tight sm:text-xl"
      >
        Hear what it&apos;s like to work with me
      </h2>

      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm border border-line-strong text-foreground"
          aria-label="Previous testimonial"
          onClick={goPrevious}
        >
          <ChevronLeft size={16} />
        </button>

        <div className="min-w-0 flex-1" aria-live="polite">
          <TestimonialCard key={item.id} item={item} />
        </div>

        <button
          type="button"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm border border-line-strong text-foreground"
          aria-label="Next testimonial"
          onClick={goNext}
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div
        className="mt-3 flex justify-center gap-1.5"
        role="tablist"
        aria-label="Testimonials"
      >
        {testimonials.map((entry, entryIndex) => (
          <button
            key={entry.id}
            type="button"
            role="tab"
            aria-selected={entryIndex === index}
            aria-label={`Show testimonial from ${entry.name}`}
            className={`h-1.5 rounded-full transition-all ${
              entryIndex === index ? "w-6 bg-accent" : "w-1.5 bg-line-strong"
            }`}
            onClick={() => setIndex(entryIndex)}
          />
        ))}
      </div>
    </section>
  );
}
