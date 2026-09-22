export type PerspectiveBeat = {
  id: string;
  number: string;
  youAsk: string;
  prompt?: string;
  answer: string[];
  visual?: "process" | "tools";
  cta?: {
    href: string;
    label: string;
  };
};

export const perspectiveBeats: PerspectiveBeat[] = [
  {
    id: "stack",
    number: "01",
    youAsk: "Should we start with the stack?",
    prompt: "Most pages do. A list of languages. A cloud logo wall.",
    answer: [
      "I'd rather not.",
      "Software engineering, to me, is a way of thinking — not a fixed set of tools.",
    ],
  },
  {
    id: "ambiguous",
    number: "02",
    youAsk: "Then what do you do with a problem that isn't clean yet?",
    answer: [
      "Understand it. Break it into the pieces that matter. Find a way forward.",
      "The language, framework, or platform comes next.",
    ],
    visual: "process",
  },
  {
    id: "not-code",
    number: "03",
    youAsk: "What if the problem isn't even the code?",
    answer: [
      "That happened. Tasks coming from other teams were often unclear, so people waited and asked follow-up questions they shouldn't have needed to ask.",
      "I treated the task description as the actual gap, and introduced a structured format so the required information showed up first.",
      "Sometimes the best engineering improvement is changing the process around the code.",
    ],
  },
  {
    id: "repeat",
    number: "04",
    youAsk: "What if the same check keeps happening by hand?",
    answer: [
      "Data synchronization was being tested with VBA and spreadsheets. I started by making reusable templates.",
      "Then the comparison itself was still inefficient, so I built a more effective comparison tool — and templates for that process too.",
      "I didn't replace an entire system. I noticed repetition and made the improvement reusable.",
    ],
  },
  {
    id: "tedious",
    number: "05",
    youAsk: "And when the work is just tedious?",
    answer: [
      "Sending a lot of cold emails by hand was irritating.",
      "Instead of accepting that, I built ApplyFlow: automate the repetitive parts of outreach so more time can go to the actual job search.",
    ],
  },
  {
    id: "tools",
    number: "06",
    youAsk: "So where do Go, AWS, Excel, Zoho, n8n actually belong?",
    prompt: "After the problem is understood — not before.",
    answer: [
      "CRM work used Zoho, Deluge, APIs. Validation used Excel and VBA. Synchronization used Go, AWS, REST. ApplyFlow used Go, AWS, PostgreSQL, React.",
      "The tool changes. The engineering process doesn't.",
    ],
    visual: "tools",
  },
  {
    id: "work",
    number: "07",
    youAsk: "Want to see what that looks like in practice?",
    answer: [
      "ApplyFlow, production data synchronization, and the comparison tooling are next — as the problems they came from, not as a logo wall.",
    ],
    cta: {
      href: "/work",
      label: "Show me the work",
    },
  },
];
