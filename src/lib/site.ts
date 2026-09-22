/**
 * Site-wide facts and placeholders.
 * Replace PLACEHOLDER values — do not invent personal details elsewhere.
 */
export const site = {
  name: "Muralidharan Vivekananthan",
  shortName: "Muralidharan",
  role: "Software Engineer",
  title: "Muralidharan Vivekananthan — Software Engineer",
  description:
    "Software Engineer building practical systems with Go, AWS, PostgreSQL and APIs — with a problem-first approach to software engineering.",
  github: "https://github.com/murali-vivek",
  linkedin: "https://www.linkedin.com/in/muralidharan-vivekananthan-3454481aa/",
  email: "contact@muralidev.com",
  resumeHref: "/Muralidharan%20Vivekananthan.pdf",
  resumeDownloadName: "Muralidharan Vivekananthan.pdf",
  hasResumeFile: true,
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/method", label: "Method" },
  { href: "/workshop", label: "Workshop" },
  { href: "/cv", label: "CV" },
] as const;
