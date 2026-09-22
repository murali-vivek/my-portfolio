import { CvPage } from "@/components/cv/CvPage";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `CV — ${site.name}`,
  description: `${site.name} — Software Engineer. Problem first. Tools second.`,
};

export default function CvRoute() {
  return (
    <main id="main">
      <CvPage />
    </main>
  );
}
