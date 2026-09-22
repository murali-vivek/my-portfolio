export type WorkItem = {
  id: string;
  number: string;
  title: string;
  question: string;
  summary: string;
  detail: string[];
  tools: string[];
  architecture?: { label: string; note: string }[];
};

export const workItems: WorkItem[] = [
  {
    id: "applyflow",
    number: "01",
    title: "ApplyFlow",
    question: "What if outreach didn't have to be copy-paste?",
    summary:
      "An event-driven job outreach automation system built to eliminate repetitive manual cold-email work.",
    detail: [
      "A personal project. The origin was simple: sending many cold emails by hand was tedious.",
      "The user authenticates, uploads campaign data, stores the resume, schedules work, and watches sent / failed / in-progress counts on a dashboard. Cancellation stops the campaign and removes queued messages where applicable.",
      "XLSX input expects Company Name, Role Name, and Company Mail ID — with required headers, email validation, and a maximum of 400 rows.",
    ],
    tools: ["Go", "AWS", "PostgreSQL", "SQS", "EventBridge", "React"],
    architecture: [
      { label: "React", note: "Frontend" },
      { label: "Go", note: "Backend API" },
      { label: "PostgreSQL", note: "Campaign and job data" },
      { label: "S3", note: "Resume and files" },
      { label: "SQS", note: "Queued email work" },
      { label: "Worker", note: "Sends email" },
    ],
  },
  {
    id: "sync",
    number: "02",
    title: "Data synchronization & backend integrations",
    question: "What if two systems keep drifting apart?",
    summary:
      "Professional work across CRM customization, process automation, data validation, and backend synchronization — including Go-based integrations and AWS infrastructure.",
    detail: [
      "Relevant work included policy-system → Zoho CRM synchronization, SharePoint → Zoho CRM synchronization, Insight / Winbeat synchronization, AWS-based data processing, and CSV-based CRM data workflows.",
      "This is production integration work. It is not a claim that every listed system was owned end-to-end.",
    ],
    tools: ["Go", "AWS", "Zoho CRM", "REST APIs", "PostgreSQL"],
  },
  {
    id: "comparison",
    number: "03",
    title: "Reusable data comparison tooling",
    question: "What if spreadsheet checks didn't have to start from zero each time?",
    summary:
      "Reusable templates, then a more effective spreadsheet comparison tool, then templates for the improved process.",
    detail: [
      "The company was using VBA and spreadsheets to test data synchronization between systems.",
      "The story is observation, improvement, and reuse — not a replacement of an entire enterprise system.",
    ],
    tools: ["VBA", "Excel", "Structured templates"],
  },
];
