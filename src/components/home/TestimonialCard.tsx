import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({ item, onClick }: { item: Testimonial; onClick?: () => void }) {
  return (
    <article
      className="overflow-hidden rounded-sm border border-line bg-surface text-left cursor-pointer hover:border-line-strong transition-colors"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Read full testimonial from ${item.name}`}
    >
      <header className="border-b border-line px-4 py-3">
        <p className="font-display text-base text-foreground sm:text-lg">
          {item.name}
        </p>
        <p className="mt-0.5 font-mono text-[11px] text-muted">
          {item.role} - {item.company}
        </p>
      </header>
      <div className="max-h-36 overflow-y-auto px-4 py-3 text-xs leading-relaxed text-muted sm:max-h-44 sm:text-sm scrollbar-thin scrollbar-thumb-line-strong scrollbar-track-transparent">
        {item.quote.split('\n\n').map((paragraph, index) => (
          <p key={index} className={index > 0 ? 'mt-2' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
