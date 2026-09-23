import { SocialLinks } from "@/components/home/SocialLinks";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";
import Image from "next/image";

export function HomeHero() {
  return (
    <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-4 pt-20 text-center">
      <Image
        src="/me.png"
        alt={`${site.name} smiling outdoors`}
        width={176}
        height={176}
        priority
        className="size-28 rounded-full object-cover object-[50%_72%] ring-2 ring-foreground/15 sm:size-36"
      />
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-foreground sm:mt-6 sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-2 text-sm text-muted sm:text-lg">{site.role}</p>
      <p className="mt-3 max-w-lg text-xs leading-relaxed text-faint sm:mt-4 sm:text-sm">
        Also spotted: swinging a bat like it owes him something, chasing a
        football as if the offside rule is a rumour, playing badminton until
        the shuttle looks personal, thinking until the kettle boils dry,
        swimming because gravity is optional, hiking to remember the world has
        no Jira, and reading psychology to debug humans.
      </p>
      <div className="mt-5 sm:mt-7">
        <ButtonLink href="/method" variant="primary">
          See how I think
        </ButtonLink>
      </div>
      <SocialLinks className="mt-5 sm:mt-7" />
    </section>
  );
}
