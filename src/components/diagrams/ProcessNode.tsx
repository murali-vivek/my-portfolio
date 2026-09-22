type ProcessNodeProps = {
  index: string;
  label: string;
  note: string;
  state: "idle" | "active" | "done";
  isProblem?: boolean;
};

export function ProcessNode({
  index,
  label,
  note,
  state,
  isProblem = false,
}: ProcessNodeProps) {
  const isLit = state !== "idle";
  const isActive = state === "active";

  return (
    <div
      className={`relative rounded-sm border px-3 py-2 transition-colors duration-500 motion-reduce:transition-none ${
        isActive
          ? "border-accent bg-accent-soft"
          : isLit
            ? "border-line-strong bg-surface"
            : "border-line bg-background/60"
      } ${isProblem && state === "idle" ? "border-dashed" : ""}`}
    >
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.16em] text-faint">
          {index}
        </span>
        <p
          className={`min-w-0 flex-1 text-[13px] tracking-wide ${
            isLit ? "text-foreground" : "text-muted"
          }`}
        >
          {label}
        </p>
        {isActive ? (
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
            now
          </span>
        ) : null}
      </div>
      {isActive ? (
        <p className="mt-1 pl-8 text-xs leading-relaxed text-muted">{note}</p>
      ) : null}
    </div>
  );
}
