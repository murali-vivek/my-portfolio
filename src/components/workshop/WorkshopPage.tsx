import Image from "next/image";

const shots = [
  {
    src: "/ApplyFlow1.png",
    alt: "ApplyFlow sign-in screen with Google authentication",
    caption: "Sign in with Google — mail goes out from the user's own Gmail.",
  },
  {
    src: "/ApplyFlow2.png",
    alt: "ApplyFlow dashboard listing campaigns with sent, cancelled, and completed status",
    caption: "Dashboard — sent, active, and completed counts, plus every campaign.",
  },
  {
    src: "/ApplyFlow3.png",
    alt: "ApplyFlow resume upload page showing the current PDF on file",
    caption: "One resume per account, attached when a campaign runs.",
  },
  {
    src: "/ApplyFlow5.png",
    alt: "ApplyFlow email template editor with company, role, and name variables",
    caption: "Templates with {{company_name}}, {{role}}, and {{user_name}}.",
  },
  {
    src: "/ApplyFlow4.png",
    alt: "ApplyFlow campaign detail showing completed status and 62 of 62 emails sent",
    caption: "Campaign progress — scheduled, started, finished, and how many went out.",
  },
] as const;

export function WorkshopPage() {
  return (
    <article className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-28 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        Workshop
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
        Things I built because the manual version was irritating.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        Personal projects. Same way of looking at a problem as at work — just
        without a ticket queue.
      </p>

      <section className="mt-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          01
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-tight">ApplyFlow</h2>
        <p className="mt-2 text-sm text-muted">
          Event-driven job outreach automation
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          Sending a lot of cold emails by hand was tedious. ApplyFlow takes a
          campaign — a list of roles, a resume, a schedule — and sends
          personalized mail in the background through Gmail, so more time can
          go to the actual search.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          You sign in with Google, upload a spreadsheet of companies and roles,
          attach a resume, and watch sent / failed / in-progress counts on a
          dashboard. You can cancel a campaign; pending work is stopped so it
          does not keep sending.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Spreadsheet rows need Company Name, Role Name, and Company Mail ID.
          Headers are checked, emails are validated, and a file is capped at
          400 rows. Duplicate recipients are skipped.
        </p>

        <h3 className="mt-12 font-display text-xl text-foreground">Gallery</h3>
        <ul className="mt-6 grid gap-8">
          {shots.map((shot) => (
            <li key={shot.src}>
              <figure>
                <a href={shot.src} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1920}
                    height={1080}
                    className="h-auto w-full rounded-sm border border-line bg-surface"
                    sizes="(min-width: 768px) 48rem, 100vw"
                  />
                </a>
                <figcaption className="mt-3 font-mono text-[12px] leading-relaxed text-faint">
                  {shot.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 font-display text-xl text-foreground">
          Why the pieces exist
        </h3>
        <ul className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-muted">
          <li>
            <span className="text-foreground">React</span> — the screens for
            campaigns, uploads, and progress.
          </li>
          <li>
            <span className="text-foreground">Go</span> — the API: users,
            campaigns, templates, and outreach state.
          </li>
          <li>
            <span className="text-foreground">PostgreSQL on Amazon RDS</span> —
            durable records so progress survives a refresh.
          </li>
          <li>
            <span className="text-foreground">S3</span> — resumes and
            spreadsheets, stored separately from the database.
          </li>
          <li>
            <span className="text-foreground">SQS + a worker</span> — email
            sending happens off the request path, with room to retry when
            something fails.
          </li>
          <li>
            <span className="text-foreground">EventBridge</span> — time-based
            campaign starts, instead of sitting on a button click.
          </li>
          <li>
            <span className="text-foreground">Google OAuth / Gmail API</span> —
            mail goes out from the user&apos;s own Gmail, with access and
            refresh tokens handled after sign-in.
          </li>
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-faint">
          Also in the mix: Docker, EC2, an Application Load Balancer, security
          groups, and GitHub Actions for putting it on AWS.
        </p>
      </section>
    </article>
  );
}
