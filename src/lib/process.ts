export const problemSolvingSteps = [
  {
    id: "problem",
    index: "00",
    label: "Ambiguous problem",
    note: "The starting point is rarely a clean ticket.",
  },
  {
    id: "understand",
    index: "01",
    label: "Understand",
    note: "What is actually happening?",
  },
  {
    id: "break-down",
    index: "02",
    label: "Break down",
    note: "Separate the pieces that matter.",
  },
  {
    id: "choose",
    index: "03",
    label: "Find a way forward",
    note: "I can pick up the tools the problem needs. The stack is not the starting point.",
  },
  {
    id: "build",
    index: "04",
    label: "Build",
    note: "The simplest thing that solves the real requirement.",
  },
  {
    id: "test",
    index: "05",
    label: "Test",
    note: "Watch behavior, data, and failure modes.",
  },
  {
    id: "improve",
    index: "06",
    label: "Improve",
    note: "Cut waiting. Make repeated work reusable.",
  },
] as const;

export const chooseApproachIndex = problemSolvingSteps.findIndex(
  (step) => step.id === "choose",
);

/**
 * Real tool combinations from the spec — shown only after "Choose approach".
 * Captions stay factual; they are not metrics or claims of ownership.
 */
export const toolSelections = [
  {
    id: "applyflow",
    context: "Repetitive cold outreach",
    tools: ["Go", "AWS", "PostgreSQL", "React"],
  },
  {
    id: "sync",
    context: "Data synchronization between systems",
    tools: ["Go", "AWS", "REST APIs", "Zoho"],
  },
  {
    id: "validation",
    context: "Spreadsheet comparison / validation",
    tools: ["Excel", "VBA", "Templates"],
  },
  {
    id: "automation",
    context: "Integration and workflow automation",
    tools: ["n8n", "Webhooks", "APIs"],
  },
] as const;
