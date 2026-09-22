import { problemSolvingSteps, toolSelections } from "@/lib/process";

export function ProcessStrip() {
  return (
    <ol className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
      {problemSolvingSteps.map((step, index) => (
        <li key={step.id} className="flex items-center gap-2">
          <span
            className={
              step.id === "choose"
                ? "text-accent"
                : "text-muted"
            }
          >
            {step.label}
          </span>
          {index < problemSolvingSteps.length - 1 ? (
            <span aria-hidden className="text-line-strong">
              →
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export function ToolMap() {
  return (
    <ul className="mt-6 space-y-2">
      {toolSelections.map((row) => (
        <li
          key={row.id}
          className="flex flex-col gap-1 border-t border-line pt-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <span className="text-sm text-muted">{row.context}</span>
          <span className="font-mono text-[11px] tracking-wide text-accent">
            {row.tools.join(" · ")}
          </span>
        </li>
      ))}
    </ul>
  );
}
