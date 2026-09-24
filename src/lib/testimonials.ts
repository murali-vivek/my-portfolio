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
    id: "leigh-clarke",
    kind: "quote",
    name: "Leigh Clarke",
    role: "Solutions Manager",
    company: "KAVA CRM, Australia",
    quote: "From the moment that I had interviewed Murali, I was immediately struck by his enthusiasm and positive attitude.\n\nThis did not waiver throughout the time working with him at KAVA. These are attributes that I would consider even more important than technical skills, as it is the basis for commitment to performing tasks and seeing beyond a small task, which can have wider implications.\n\nMurali needed to adopt technology that was both new to him, but also relatively new to the organisation, and he made it his mission to learn at a fast pace, performing research beyond even that which was asked of him.\n\nIt has been a pleasure to work with Murali and share our learning's over time, which has resulted in the use of modern tooling and improved reliability. He takes all challenges in his stride and brings positive energy, on even the most challenging on days, which has always been appreciated.",
  },
  {
    id: "bob-hitztaler",
    kind: "quote",
    name: "Bob Hitztaler",
    role: "Director",
    company: "KAVA CRM, Australia",
    quote:
      "Murali worked as a CRM developer at KAVA, where he built solid experience integrating Zoho CRM with AWS, Microsoft SharePoint and other third-party platforms. What stands out most is his genuinely positive attitude, friendly manner and happy disposition, which make him a pleasure to work with. He's a keen learner, always looking for opportunities to pick up new skills, and eagerly takes on any challenge that comes his way. Any team would be lucky to have him.",
  },
  {
    id: "open-slot",
    kind: "quote",
    name: "Wanted: someone I've impressed",
    role: "Vacancy · multiple openings",
    company: "still filling",
    quote: "Requirements: worked with me, survived it, willing to say something nice on the record.\n\nReferral bonus: eternal gratitude.",
  }
];
