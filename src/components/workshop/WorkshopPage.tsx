import { WorkshopGallery } from "@/components/workshop/WorkshopGallery";
import { site } from "@/lib/site";

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
          Outreach that keeps going after you close the laptop
        </p>
        <p className="mt-2 text-sm text-faint">
          <a
            href="https://github.com/murali-vivek/applyFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub Repo →
          </a>
          <span className="ml-2">(Private — access provided on request)</span>
        </p>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">
          Sending a lot of cold emails by hand was tedious. ApplyFlow takes a
          campaign — a list of roles, a resume, a schedule — and sends
          personalized mail in the background through the user&apos;s own
          Gmail.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          You sign in with Google, upload a spreadsheet of companies and roles,
          attach a resume, and watch sent / failed / in-progress counts on a
          dashboard. You can cancel a campaign; pending mail stops.
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Spreadsheet rows need Company Name, Role Name, and Company Mail ID.
          Headers are checked, emails are validated, and a file is capped at
          400 rows. Duplicate recipients are skipped. One mail goes out every
          three minutes per campaign. Delivery is at-least-once, not
          exactly-once. Cancel marks the campaign stopped; it does not purge
          the queue. The dashboard polls about every four seconds.
        </p>

        <h3 className="mt-12 font-display text-xl text-foreground">Gallery</h3>
        <p className="mt-2 text-sm text-faint">
          Tap a frame to open it.
        </p>
        <WorkshopGallery shots={shots} />

        <h3 className="mt-12 font-display text-xl text-foreground">
          Why the pieces exist
        </h3>
        <ul className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-muted">
          <li>
            <span className="text-foreground">React</span> — campaigns,
            uploads, and progress. A SPA talking to the Go API. Local UI is
            Vite; production build is static files in S3 served by CloudFront.
          </li>
          <li>
            <span className="text-foreground">Go API</span> — users, campaigns,
            templates, outreach state, and a{" "}
            <span className="font-mono text-xs">/health</span> check. It runs
            as a container on ECS Fargate in ap-south-2 (Hyderabad). The
            scheduler lives in the same process.
          </li>
          <li>
            <span className="text-foreground">Go worker</span> — a second
            Fargate service. It pulls from SQS and sends the mail, so a slow
            Gmail call never sits on the HTTP request. Queue visibility is
            two minutes; failed sends can be retried.
          </li>
          <li>
            <span className="text-foreground">PostgreSQL on RDS</span> —
            private in the VPC. Progress survives a refresh. The API reaches
            it through security groups, not a public database port. A stopped
            bastion host is only for a laptop SSH tunnel to the database.
          </li>
          <li>
            <span className="text-foreground">S3</span> — resumes and
            spreadsheets, separate from the database.
          </li>
          <li>
            <span className="text-foreground">SQS</span> — the handoff between
            &quot;this email is due&quot; and &quot;send it.&quot;
          </li>
          <li>
            <span className="text-foreground">In-process scheduler</span> —
            campaign start times. A Go loop inside the API periodically claims
            due outreach and puts it on the queue. The queue is not the clock.
          </li>
          <li>
            <span className="text-foreground">Google OAuth and the Gmail API</span>{" "}
            — mail goes out from the user&apos;s Gmail. Sign-in returns a token
            to the React app. Access and refresh tokens stay on the server.
          </li>
          <li>
            <span className="text-foreground">ECS Fargate</span> — container
            orchestration for the API and worker services with auto-scaling
            and isolated execution environments.
          </li>
          <li>
            <span className="text-foreground">ECR</span> — container registry
            storing Docker images tagged with git SHA for traceable deployments.
          </li>
          <li>
            <span className="text-foreground">Application Load Balancer</span> —
            distributes traffic across API instances with health checks.
          </li>
          <li>
            <span className="text-foreground">CloudFront</span> — CDN serving
            the React frontend with HTTPS termination and edge caching.
          </li>
          <li>
            <span className="text-foreground">CloudWatch</span> — centralized
            logging and monitoring for all Fargate tasks.
          </li>
          <li>
            <span className="text-foreground">GitHub Actions with OIDC</span> —
            CI/CD pipeline assuming IAM roles without stored credentials.
          </li>
          <li>
            <span className="text-foreground">Docker Compose & LocalStack</span> —
            local development environment mimicking AWS services.
          </li>
          <li>
            <span className="text-foreground">AWS CLI</span> — infrastructure
            provisioning for S3 buckets and SQS queues.
          </li>
        </ul>

        <h3 className="mt-12 font-display text-xl text-foreground">
          Let's connect
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          To discuss more about this system or the engineering decisions behind
          it, let us connect.
        </p>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-accent transition-colors"
        >
          Connect with me
        </a>
      </section>
    </article>
  );
}
