export type Testimonial = {
  id: string;
  kind: "quote";
  name: string;
  role: string;
  company: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "bob-hitztaler",
    kind: "quote",
    name: "Bob Hitztaler",
    role: "Director",
    company: "KAVA CRM",
    quote:
      "Murali worked as a CRM developer at KAVA, where he built solid experience integrating Zoho CRM with AWS, Microsoft SharePoint and other third-party platforms. What stands out most is his genuinely positive attitude, friendly manner and happy disposition, which make him a pleasure to work with. He's a keen learner, always looking for opportunities to pick up new skills, and eagerly takes on any challenge that comes his way. Any team would be lucky to have him.",
  },
  {
    id: "open-slot",
    kind: "quote",
    name: "Wanted: someone I've impressed",
    role: "Vacancy · multiple openings · still filling",
    company: "Open Position",
    quote: "Requirements: worked with me, survived it, willing to say something nice on the record.\n\nReferral bonus: eternal gratitude.",
  },
];
