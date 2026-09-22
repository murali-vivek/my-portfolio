import { site } from "@/lib/site";

const skillGroups = [
  {
    title: "Building the systems behind apps",
    plain: "The part of software that stores data, talks to other products, and runs in the background.",
    items: ["Go", "REST APIs", "Webhooks", "API integrations", "Event-driven workflows"],
  },
  {
    title: "Cloud",
    plain: "Running those systems on Amazon Web Services instead of a single office computer.",
    items: ["S3", "SQS", "Lambda", "ECS", "EventBridge", "API Gateway", "EC2", "RDS", "Parameter Store"],
  },
  {
    title: "Data",
    plain: "Keeping records accurate when they move from one system to another.",
    items: ["PostgreSQL", "SQL", "Data synchronization", "Validation / reconciliation"],
  },
  {
    title: "Frontend",
    plain: "The screens people actually click.",
    items: ["React", "JavaScript"],
  },
  {
    title: "Shipping work",
    plain: "How code gets tested, packaged, and put in front of users.",
    items: ["Docker", "Git", "GitHub Actions", "Terraform / Terragrunt", "AWS CLI"],
  },
  {
    title: "Other tools used on real projects",
    plain: "Whatever the problem needed at the time — not a claim that every tool is a specialty.",
    items: ["Node.js / Express.js", "n8n", "Deluge", "Excel / VBA", "Zoho products"],
  },
];

export function CvPage() {
  return (
    <article className="relative z-10 mx-auto max-w-2xl px-6 pb-24 pt-28 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        CV
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-3 text-muted">{site.role}</p>
      <p className="mt-1 text-sm text-faint">Bangalore, India</p>
      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted">
        <a href={`mailto:${site.email}`} className="hover:text-foreground">
          {site.email}
        </a>
        <a href="tel:+917708484273" className="hover:text-foreground">
          +91 77084 84273
        </a>
        <a
          href={site.linkedin}
          className="hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={site.github}
          className="hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>

      <p className="mt-8 leading-relaxed text-foreground/90">
        I have preferences. I have experience. I have tools I work with today.
        I don&apos;t believe that toolset should define the boundary of what I
        can build.
      </p>
      <p className="mt-4 leading-relaxed text-muted">
        If the problem needs a different language, framework, service, or
        approach, I learn what I need, understand the constraints, and solve
        the problem. My skills are not limited to the stack on this page.
      </p>

      {site.hasResumeFile ? (
        <div className="mt-8">
          <p className="text-muted">To learn more about my work experience:</p>
          <a
            href={site.resumeHref}
            download={site.resumeDownloadName}
            className="mt-3 inline-flex h-11 items-center rounded-sm border border-accent bg-accent px-4 text-sm font-medium text-accent-fg"
          >
            Download Resume
          </a>
        </div>
      ) : null}

      <h2 className="mt-16 font-display text-2xl tracking-tight">
        Tools in the toolkit
      </h2>
      <p className="mt-3 text-sm text-muted">
        A snapshot of what I have used on real work — not a ceiling, and not a
        ranking.
      </p>
      <div className="mt-8 space-y-8">
        {skillGroups.map((group) => (
          <section key={group.title}>
            <h3 className="font-display text-lg text-foreground">
              {group.title}
            </h3>
            <p className="mt-1 text-sm text-faint">{group.plain}</p>
            <p className="mt-2 font-mono text-xs leading-relaxed text-muted">
              {group.items.join(" · ")}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
