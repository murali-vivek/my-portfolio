import { Container } from "@/components/layout/Container";
import { ProblemSolvingVisual } from "@/components/hero/ProblemSolvingVisual";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden site-grid site-vignette"
      aria-labelledby="hero-heading"
    >
      <Container className="grid items-start gap-10 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(19rem,0.85fr)] lg:gap-14 lg:py-12">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-muted">{site.role}</p>

          <h1
            id="hero-heading"
            className="mt-6 max-w-xl font-display text-[2.2rem] leading-[1.12] tracking-tight text-foreground sm:text-[2.75rem] sm:leading-[1.1] lg:text-[3.1rem]"
          >
            I see gaps.
            <br />
            I break down problems.
            <br />
            I build solutions.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            Software engineering, to me, is a way of thinking — not a fixed set
            of tools.
          </p>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
            Give me an ambiguous problem. I&apos;ll understand it, break it into
            components, and find a way forward. The language, framework, or
            platform comes next.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <ButtonLink href="/#thinking" variant="primary">
              See how I work
            </ButtonLink>
            <ButtonLink href="/#work" variant="secondary">
              View my work
            </ButtonLink>
            <ButtonLink href={site.github} variant="ghost" external>
              GitHub
              <ArrowUpRight size={14} aria-hidden />
            </ButtonLink>
            {site.linkedin ? (
              <ButtonLink href={site.linkedin} variant="ghost" external>
                LinkedIn
                <ArrowUpRight size={14} aria-hidden />
              </ButtonLink>
            ) : (
              <span
                className="inline-flex h-11 items-center gap-2 rounded-sm px-4 font-mono text-xs text-faint"
                title="Placeholder: set site.linkedin in src/lib/site.ts"
              >
                LinkedIn (URL pending)
              </span>
            )}
          </div>

          <dl className="mt-8 grid gap-4 border-t border-line pt-5 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                Current tools
              </dt>
              <dd className="mt-1 text-sm text-foreground">
                Go · AWS · PostgreSQL · REST APIs
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                Featured project
              </dt>
              <dd className="mt-1 text-sm text-foreground">
                ApplyFlow — event-driven job outreach automation
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                Professional work
              </dt>
              <dd className="mt-1 text-sm text-foreground">
                Backend integrations, data sync, CRM systems
              </dd>
            </div>
          </dl>
        </div>

        <ProblemSolvingVisual />
      </Container>
    </section>
  );
}
