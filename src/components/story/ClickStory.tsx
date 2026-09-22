"use client";

import { storyBeats } from "@/lib/story";
import { useCallback, useState } from "react";

export function ClickStory() {
  const [index, setIndex] = useState(0);
  const beat = storyBeats[index];
  const last = index === storyBeats.length - 1;

  const advance = useCallback(() => {
    setIndex((current) => Math.min(current + 1, storyBeats.length - 1));
  }, []);

  return (
    <main
      id="main"
      className={`flex min-h-svh flex-col justify-center px-6 py-16 sm:px-12 ${
        last ? "" : "cursor-pointer"
      }`}
      onClick={last ? undefined : advance}
      onKeyDown={
        last
          ? undefined
          : (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                advance();
              }
            }
      }
      tabIndex={last ? undefined : 0}
      aria-label={last ? undefined : "Continue"}
    >
      <div key={beat.id} className="beat-enter mx-auto w-full max-w-4xl">
        <h1
          className="max-w-4xl font-display text-[1.85rem] leading-[1.2] tracking-tight text-foreground sm:text-5xl sm:leading-[1.15]"
          aria-live="polite"
        >
          {beat.line}
          {!last ? <span className="caret" aria-hidden /> : null}
        </h1>
        {beat.echo ? (
          <p className="mt-6 max-w-2xl font-mono text-base text-muted sm:text-lg">
            {beat.echo}
          </p>
        ) : null}
        {beat.href ? (
          <a
            href={beat.href.url}
            className="mt-10 inline-block font-mono text-sm text-accent underline-offset-4 hover:underline"
            target={beat.href.external ? "_blank" : undefined}
            rel={beat.href.external ? "noopener noreferrer" : undefined}
            onClick={(event) => event.stopPropagation()}
          >
            {beat.href.label}
          </a>
        ) : null}
      </div>
    </main>
  );
}
