import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

export function Opening() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center site-grid site-vignette"
      aria-labelledby="opening-heading"
    >
      <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {site.name}
        </p>
        <p className="mt-2 text-sm text-muted">{site.role}</p>

        <h1
          id="opening-heading"
          className="mt-10 max-w-2xl font-display text-[2.4rem] leading-[1.12] tracking-tight text-foreground sm:text-5xl"
        >
          You&apos;re not here for another list of tools.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Most portfolios start with a stack. This one starts with the questions
          I actually use at work — because the interesting part is how a messy
          problem gets broken down, not which logo comes first.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Ask a few of those questions. I&apos;ll answer them. Then look at the
          work.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="/perspective" variant="primary">
            Start with the questions
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            Skip to the work
          </ButtonLink>
          <ButtonLink href={site.github} variant="ghost" external>
            GitHub
          </ButtonLink>
        </div>

        <p className="mt-12 max-w-md font-mono text-[11px] leading-relaxed uppercase tracking-[0.14em] text-faint">
          Click, swipe, or scroll through the next page. It is a conversation,
          not a resume.
        </p>
      </div>
    </section>
  );
}
