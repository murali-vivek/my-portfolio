type TestimonialCardProps = {
  name: string;
  role: string;
  company: string;
  quote: string;
};

export function TestimonialCard({
  name,
  role,
  company,
  quote,
}: TestimonialCardProps) {
  return (
    <article className="overflow-hidden rounded-sm border border-line bg-surface text-left">
      <header className="border-b border-line px-4 py-3">
        <p className="font-display text-base text-foreground sm:text-lg">{name}</p>
        <p className="mt-0.5 font-mono text-[11px] text-muted">
          {role} — {company}
        </p>
      </header>
      <p className="px-4 py-3 text-sm leading-relaxed text-muted">{quote}</p>
    </article>
  );
}
