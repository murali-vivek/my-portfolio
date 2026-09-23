"use client";

import { SocialLinks } from "@/components/home/SocialLinks";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="relative z-10 border-t border-line px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          Contact
        </p>
        <SocialLinks className="mt-4" />
      </div>
    </footer>
  );
}
