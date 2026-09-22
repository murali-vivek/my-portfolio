import { WorkshopPage } from "@/components/workshop/WorkshopPage";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Workshop — ${site.name}`,
  description: `Personal projects, starting with ApplyFlow — job outreach automation built by ${site.name}.`,
};

export default function WorkshopRoute() {
  return (
    <main id="main">
      <WorkshopPage />
    </main>
  );
}
