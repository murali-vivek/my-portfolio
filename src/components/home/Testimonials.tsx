import { TestimonialCard } from "@/components/home/TestimonialCard";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  return (
    <section
      className="relative z-10 mx-auto w-full max-w-xl px-6 pb-24 pt-8 sm:px-8"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-center font-display text-2xl tracking-tight sm:text-3xl"
      >
        Hear what it&apos;s like to work with me
      </h2>
      <p className="mx-auto mt-3 max-w-md text-center text-sm text-faint">
        Placeholder quotes for now — swap these when colleagues send theirs.
      </p>
      <ul className="mt-10 flex flex-col gap-5">
        {testimonials.map((item) => (
          <li key={item.id}>
            <TestimonialCard
              name={item.name}
              role={item.role}
              company={item.company}
              quote={item.quote}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
