import { Constellation } from "@/components/home/Constellation";
import { HomeHero } from "@/components/home/HomeHero";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main id="main">
      <Constellation />
      <HomeHero />
      <Testimonials />
    </main>
  );
}
