"use client";

import { workItems, type WorkItem } from "@/lib/work";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

function WorkCard({ item }: { item: WorkItem }) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <article className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        {item.number}
      </p>
      <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
        {item.title}
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-muted">{item.question}</p>
      <p className="mt-4 max-w-2xl leading-relaxed text-foreground/90">
        {item.summary}
      </p>
      <p className="mt-4 font-mono text-[12px] tracking-wide text-accent">
        {item.tools.join(" · ")}
      </p>

      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Hide the rest" : "Keep going"}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pt-5">
              {item.detail.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              {item.architecture ? (
                <ol className="mt-4 grid gap-2 sm:grid-cols-2">
                  {item.architecture.map((node) => (
                    <li
                      key={node.label}
                      className="rounded-sm border border-line bg-surface px-3 py-2"
                    >
                      <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                        {node.label}
                      </span>
                      <span className="text-sm text-muted">{node.note}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

export function WorkIndex() {
  return (
    <section className="site-vignette">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Selected work
        </p>
        <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
          These started as gaps, not as technology choices.
        </h1>
        <p className="mt-5 max-w-xl text-muted">
          Click into each one. The stack is listed because it was the fit — not
          because it is the point.
        </p>

        <div className="mt-12">
          {workItems.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
