import type { ReactNode } from "react";
import Link from "next/link";

const variants = {
  primary:
    "bg-accent text-accent-fg hover:bg-[#b5ffce] border-transparent",
  secondary:
    "bg-transparent text-foreground border-line-strong hover:border-foreground/40 hover:bg-foreground/4",
  ghost:
    "bg-transparent text-muted border-transparent hover:text-foreground hover:bg-foreground/5",
} as const;

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
};

const baseClass =
  "inline-flex h-11 items-center justify-center gap-2 rounded-sm border px-4 text-sm font-medium tracking-wide transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classNameFull = `${baseClass} ${variants[variant]} ${className}`.trim();

  if (external) {
    return (
      <a
        href={href}
        className={classNameFull}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameFull}>
      {children}
    </Link>
  );
}
