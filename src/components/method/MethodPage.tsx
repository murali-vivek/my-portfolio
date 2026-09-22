import { problemSolvingSteps, toolSelections } from "@/lib/process";

const stories = [
  {
    title: "When the work is just tedious",
    body: "Sending cold emails by hand was irritating. I built ApplyFlow so the repetitive part of outreach could run without sitting in the inbox. That problem used Go, AWS, PostgreSQL, React, and a worker. The next one might not. I can pick up what it needs.",
  },
  {
    title: "When the same check keeps happening by hand",
    body: "Data-sync was being tested with VBA and spreadsheets. I started with reusable templates, then built a more effective comparison tool, then templates for that process too. I didn't replace a whole system. I noticed repetition and made the improvement reusable.",
  },
  {
    title: "When the problem isn't the code",
    body: "Tasks coming from other teams were often unclear. The gap was the task description, not the implementation. I introduced a structured format so the required information showed up first. Sometimes the best engineering improvement is changing the process around the code.",
  },
];

export function MethodPage() {
  return (
    <article className="relative z-10 mx-auto max-w-2xl px-6 pb-24 pt-28 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        Method
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
        The perspective stays. The tools can change.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Software engineering, to me, is a way of thinking — not a fixed set of
        tools. I can pick up a language, framework, or platform when the
        problem needs it. What matters is how I look at the problem.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        Give me an ambiguous problem. I&apos;ll understand it, break it into
        pieces, and find a way forward. I&apos;m not waiting on a preferred
        stack to exist first.
      </p>

      <ol className="mt-14 space-y-4">
        {problemSolvingSteps
          .filter((step) => step.id !== "problem")
          .map((step) => (
            <li key={step.id} className="grid grid-cols-[3rem_1fr] gap-4">
              <span className="font-mono text-sm text-accent">{step.index}</span>
              <div>
                <p className="font-display text-xl text-foreground">
                  {step.label}
                </p>
                <p className="mt-1 text-sm text-muted">{step.note}</p>
              </div>
            </li>
          ))}
      </ol>

      <h2 className="mt-16 font-display text-2xl tracking-tight">
        That looks like this in practice
      </h2>
      <div className="mt-8 space-y-10">
        {stories.map((story) => (
          <section key={story.title}>
            <h3 className="font-display text-xl text-foreground">
              {story.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{story.body}</p>
          </section>
        ))}
      </div>

      <h2 className="mt-16 font-display text-2xl tracking-tight">
        Different problems needed different stacks. The thinking didn&apos;t
        change.
      </h2>
      <ul className="mt-6 space-y-3">
        {toolSelections.map((row) => (
          <li
            key={row.id}
            className="flex flex-col gap-1 border-t border-line pt-3 sm:flex-row sm:justify-between"
          >
            <span className="text-sm text-muted">{row.context}</span>
            <span className="font-mono text-xs text-accent">
              {row.tools.join(" · ")}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
