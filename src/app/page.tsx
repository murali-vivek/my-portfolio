import { Constellation } from "@/components/home/Constellation";
import { HomeHero } from "@/components/home/HomeHero";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main id="main" className="flex min-h-svh flex-col">
      <Constellation />
      <HomeHero />
      <Testimonials />
    </main>
  );
}
