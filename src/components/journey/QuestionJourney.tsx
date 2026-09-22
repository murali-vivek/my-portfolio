"use client";

import { ProcessStrip, ToolMap } from "@/components/journey/AnswerVisuals";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useDeckNavigation } from "@/hooks/useDeckNavigation";
import { perspectiveBeats } from "@/lib/questions";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export function QuestionJourney() {
  const [openedId, setOpenedId] = useState<string | null>(null);

  const deck = useDeckNavigation({
    length: perspectiveBeats.length,
    beforeNext: (index) => {
      const current = perspectiveBeats[index];
      if (openedId === current.id) return true;
      setOpenedId(current.id);
      return false;
    },
  });

  const beat = perspectiveBeats[deck.index];
  const revealed = openedId === beat.id;

  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] flex-col site-grid site-vignette"
      {...deck.swipeHandlers}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
          A conversation · {beat.number} / {String(perspectiveBeats.length).padStart(2, "0")}
        </p>

        <div className="flex-1 py-8">
          <div key={beat.id} className="beat-enter">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              You might ask
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-[2rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.75rem]">
              {beat.youAsk}
            </h1>
            {beat.prompt ? (
              <p className="mt-4 max-w-xl text-base text-muted">{beat.prompt}</p>
            ) : null}

            {!revealed ? (
              <button
                type="button"
                className="mt-10 inline-flex w-fit items-center gap-2 rounded-sm border border-accent bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg"
                onClick={() => setOpenedId(beat.id)}
              >
                Hear the answer
              </button>
            ) : (
              <div
                className="mt-10 border-l-2 border-accent pl-5"
                aria-live="polite"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  How I see it
                </p>
                <div className="mt-3 space-y-3">
                  {beat.answer.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-xl text-base leading-relaxed text-foreground sm:text-[1.05rem]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {beat.visual === "process" ? <ProcessStrip /> : null}
                {beat.visual === "tools" ? <ToolMap /> : null}
                {beat.cta ? (
                  <div className="mt-8">
                    <ButtonLink href={beat.cta.href} variant="primary">
                      {beat.cta.label}
                    </ButtonLink>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Questions">
            {perspectiveBeats.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={itemIndex === deck.index}
                aria-label={`Question ${item.number}: ${item.youAsk}`}
                className={`h-2 rounded-full transition-all ${
                  itemIndex === deck.index
                    ? "w-8 bg-accent"
                    : "w-2 bg-line-strong hover:bg-muted"
                }`}
                onClick={() => deck.go(itemIndex)}
              />
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              Scroll, swipe, or arrows
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-sm border border-line-strong text-foreground disabled:opacity-30"
                onClick={deck.prev}
                disabled={deck.atStart}
                aria-label="Previous question"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-sm border border-line-strong text-foreground disabled:opacity-30"
                onClick={deck.next}
                disabled={deck.atEnd}
                aria-label="Next question"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
