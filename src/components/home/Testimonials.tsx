"use client";

import { TestimonialCard } from "@/components/home/TestimonialCard";
import { testimonials } from "@/lib/testimonials";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const item = testimonials[index];
  const total = testimonials.length;

  function goPrevious() {
    setIndex((current) => (current - 1 + total) % total);
  }

  function goNext() {
    setIndex((current) => (current + 1) % total);
  }

  function openDialog() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }

  return (
    <>
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
            <TestimonialCard key={item.id} item={item} onClick={openDialog} />
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

      {isDialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={closeDialog}
        >
          <div
            className="flex w-full max-w-4xl items-center gap-3 sm:gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-line-strong text-foreground hover:bg-surface-2 transition-colors"
              aria-label="Previous testimonial"
              onClick={(e) => {
                e.stopPropagation();
                goPrevious();
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="relative min-w-0 flex-1 bg-surface border border-line rounded-lg shadow-xl">
              <button
                type="button"
                className="absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-full border border-line-strong text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
                aria-label="Close dialog"
                onClick={closeDialog}
              >
                <X size={16} />
              </button>

              <div className="p-6">
                <div className="border-b border-line pb-4 mb-4">
                  <h3 className="font-display text-xl text-foreground sm:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {item.role} — {item.company}
                  </p>
                </div>
                <div className="text-sm leading-relaxed text-muted">
                  {item.quote.split('\n\n').map((paragraph, index) => (
                    <p key={index} className={index > 0 ? 'mt-3' : ''}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm border border-line-strong text-foreground hover:bg-surface-2 transition-colors"
              aria-label="Next testimonial"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
