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
      <header className="border-b border-line px-5 py-4">
        <p className="font-display text-lg text-foreground">{name}</p>
        <p className="mt-1 font-mono text-xs text-muted">
          {role} — {company}
        </p>
      </header>
      <p className="px-5 py-4 text-sm leading-relaxed text-muted">{quote}</p>
    </article>
  );
}
