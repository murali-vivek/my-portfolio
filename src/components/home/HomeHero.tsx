import { SocialLinks } from "@/components/home/SocialLinks";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
import Image from "next/image";

export function HomeHero() {
  return (
    <section className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 pb-16 pt-24 text-center">
      <Image
        src="/me.png"
        alt={`${site.name} smiling outdoors`}
        width={176}
        height={176}
        priority
        className="size-40 rounded-full object-cover object-[50%_72%] ring-2 ring-foreground/15 sm:size-44"
      />
      <h1 className="mt-8 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-3 text-base text-muted sm:text-lg">{site.role}</p>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-faint">
        Also spotted: swinging a bat like it owes him something, chasing a
        football as if the offside rule is a rumour, playing badminton until
        the shuttle looks personal, thinking until the kettle boils dry,
        swimming because gravity is optional, hiking to remember the world has
        no Jira, and reading psychology to debug humans.
      </p>
      <div className="mt-8">
        <ButtonLink href="/method" variant="primary">
          See how I think
        </ButtonLink>
      </div>
      <SocialLinks />
    </section>
  );
}
