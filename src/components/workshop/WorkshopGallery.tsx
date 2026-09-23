"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryShot = {
  src: string;
  alt: string;
  caption: string;
};

type WorkshopGalleryProps = {
  shots: readonly GalleryShot[];
};

export function WorkshopGallery({ shots }: WorkshopGalleryProps) {
  const titleId = useId();
  const captionId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (openIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenIndex(null);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex]);

  const active = openIndex === null ? null : shots[openIndex];

  function showPrevious() {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current - 1 + shots.length) % shots.length;
    });
  }

  function showNext() {
    setOpenIndex((current) => {
      if (current === null) return current;
      return (current + 1) % shots.length;
    });
  }

  return (
    <>
      <ul className="mt-6 grid grid-cols-2 gap-1.5 sm:grid-cols-3 sm:gap-2">
        {shots.map((shot, index) => (
          <li key={shot.src}>
            <button
              type="button"
              className="group relative block aspect-square w-full overflow-hidden rounded-sm border border-line bg-surface"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open ${shot.alt}`}
            >
              <Image
                src={shot.src}
                alt=""
                width={640}
                height={640}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 16rem, 45vw"
              />
            </button>
          </li>
        ))}
      </ul>

      {mounted && active && openIndex !== null
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-background/92 px-12 py-16 backdrop-blur-sm sm:px-16"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={captionId}
              onClick={() => setOpenIndex(null)}
            >
              <button
                type="button"
                className="absolute top-5 right-5 inline-flex size-10 items-center justify-center rounded-sm border border-line-strong text-foreground"
                aria-label="Close gallery"
                onClick={() => setOpenIndex(null)}
              >
                <X size={18} />
              </button>

              <div
                className="flex w-full max-w-4xl flex-col items-center"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex w-full items-center gap-3 sm:gap-4">
                  <button
                    type="button"
                    className="hidden size-11 shrink-0 items-center justify-center rounded-sm border border-line-strong text-foreground sm:inline-flex"
                    aria-label="Previous image"
                    onClick={showPrevious}
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <figure className="min-w-0 flex-1">
                    <p id={titleId} className="sr-only">
                      ApplyFlow gallery
                    </p>
                    <div className="overflow-hidden rounded-sm border border-line-strong bg-surface-2">
                      <Image
                        src={active.src}
                        alt={active.alt}
                        width={1920}
                        height={1080}
                        className="h-auto max-h-[62vh] w-full object-contain sm:max-h-[70vh]"
                        sizes="(min-width: 1024px) 56rem, 90vw"
                        priority
                      />
                    </div>
                    <figcaption
                      id={captionId}
                      className="mt-4 text-center font-mono text-[12px] leading-relaxed text-muted sm:text-sm"
                    >
                      <span className="block text-[11px] uppercase tracking-[0.16em] text-faint">
                        {openIndex + 1} / {shots.length}
                      </span>
                      <span className="mt-2 block">{active.caption}</span>
                    </figcaption>
                  </figure>

                  <button
                    type="button"
                    className="hidden size-11 shrink-0 items-center justify-center rounded-sm border border-line-strong text-foreground sm:inline-flex"
                    aria-label="Next image"
                    onClick={showNext}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="mt-5 flex w-full max-w-xs justify-between sm:hidden">
                  <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center rounded-sm border border-line-strong text-foreground"
                    aria-label="Previous image"
                    onClick={showPrevious}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center rounded-sm border border-line-strong text-foreground"
                    aria-label="Next image"
                    onClick={showNext}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
