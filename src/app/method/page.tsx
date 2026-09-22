import { MethodPage } from "@/components/method/MethodPage";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Method — ${site.name}`,
  description:
    "How Muralidharan Vivekananthan approaches problems: see the gap, break it down, and pick up whatever tools the problem needs.",
};

export default function MethodRoute() {
  return (
    <main id="main">
      <MethodPage />
    </main>
  );
}
