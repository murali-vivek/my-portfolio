"use client";

import { AnimatedConnector } from "@/components/diagrams/AnimatedConnector";
import { ProcessNode } from "@/components/diagrams/ProcessNode";
import {
  chooseApproachIndex,
  problemSolvingSteps,
  toolSelections,
} from "@/lib/process";
import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

function nodeState(
  index: number,
  activeIndex: number,
  reducedMotion: boolean,
): "idle" | "active" | "done" {
  if (reducedMotion) return index === problemSolvingSteps.length - 1 ? "active" : "done";
  if (index === activeIndex) return "active";
  if (index < activeIndex) return "done";
  return "idle";
}

export function ProblemSolvingVisual() {
  const reducedMotion = useReducedMotion() ?? false;
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reducedMotion || paused) return undefined;

    const timer = window.setInterval(() => {
      setTick((current) => current + 1);
    }, 1300);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const activeIndex = tick % problemSolvingSteps.length;
  const selectionIndex =
    Math.floor(tick / problemSolvingSteps.length) % toolSelections.length;
  const showTools = reducedMotion || activeIndex >= chooseApproachIndex;
  const selection = toolSelections[selectionIndex];

  return (
    <figure
      className="relative overflow-hidden rounded-sm border border-line bg-surface/80"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      aria-label="Problem-solving process: understand, break down, choose approach, then select tools, build, test, and improve."
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 site-grid"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-4 border-b border-line px-4 py-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            Fig. 01 — problem-solving loop
          </p>
          <p className="mt-1 text-xs text-muted">
            Tools appear after the approach is chosen.
          </p>
        </div>
        <p className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-faint sm:block">
          {paused && !reducedMotion ? "paused" : "live"}
        </p>
      </div>

      <div className="relative grid gap-5 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_10.5rem]">
        <ol className="list-none">
          {problemSolvingSteps.map((step, index) => (
            <li key={step.id}>
              {index > 0 ? (
                <AnimatedConnector
                  active={activeIndex >= index}
                  reducedMotion={reducedMotion}
                />
              ) : null}
              <ProcessNode
                index={step.index}
                label={step.label}
                note={step.note}
                state={nodeState(index, activeIndex, reducedMotion)}
                isProblem={step.id === "problem"}
              />
            </li>
          ))}
        </ol>

        <aside className="flex flex-col justify-end border-t border-line pt-4 lg:border-t-0 lg:border-l lg:pl-4 lg:pt-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
            Selected after 03
          </p>
          <p
            className={`mt-2 text-xs leading-relaxed ${
              showTools ? "text-muted" : "text-faint"
            }`}
          >
            {showTools
              ? selection.context
              : "Waiting for the problem to be understood."}
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {showTools
              ? selection.tools.map((tool) => (
                  <li
                    key={`${selection.id}-${tool}`}
                    className="rounded-sm border border-accent/40 bg-accent-soft px-2 py-1 font-mono text-[11px] text-accent"
                  >
                    {tool}
                  </li>
                ))
              : ["—", "—", "—"].map((slot, index) => (
                  <li
                    key={`empty-${index}`}
                    className="rounded-sm border border-dashed border-line px-2 py-1 font-mono text-[11px] text-faint"
                  >
                    {slot}
                  </li>
                ))}
          </ul>
          <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-wide text-faint">
            Different problems.
            <br />
            Different tools.
            <br />
            Same way of thinking.
          </p>
        </aside>
      </div>
    </figure>
  );
}
