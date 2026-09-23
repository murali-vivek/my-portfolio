import { GmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { site } from "@/lib/site";

const iconClass = "size-5";

const items = [
  {
    href: site.github,
    label: "GitHub",
    hint: "github.com/murali-vivek",
    icon: <GitHubIcon className={iconClass} />,
  },
  {
    href: `mailto:${site.email}`,
    label: "Email",
    hint: site.email,
    icon: <GmailIcon className={iconClass} />,
  },
  {
    href: site.linkedin,
    label: "LinkedIn",
    hint: "linkedin.com/in/muralidharan-vivekananthan-3454481aa",
    icon: <LinkedInIcon className={iconClass} />,
  },
] as const;

export function SocialLinks({ className = "mt-8" }: { className?: string }) {
  return (
    <ul className={`flex items-center justify-center gap-6 ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.label} className="flex justify-center">
          <a
            href={item.href}
            className="group relative flex flex-col items-center text-muted transition-colors hover:text-foreground focus-visible:text-foreground"
            aria-label={`${item.label}: ${item.hint}`}
            {...(item.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {item.icon}
            <span className="pointer-events-none absolute top-[calc(100%+0.5rem)] left-1/2 z-10 w-max max-w-[min(16rem,70vw)] -translate-x-1/2 break-all text-center font-mono text-[10px] leading-snug text-muted opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {item.hint}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
