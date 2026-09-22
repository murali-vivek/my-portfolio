export type StoryBeat = {
  id: string;
  line: string;
  /** Optional second line — still short. */
  echo?: string;
  href?: {
    label: string;
    url: string;
    external?: boolean;
  };
};

export const storyBeats: StoryBeat[] = [
  {
    id: "hook",
    line: "You're not here for another list of tools.",
  },
  {
    id: "gap",
    line: "I look for the gap first.",
  },
  {
    id: "break",
    line: "Then I break the problem down.",
  },
  {
    id: "after",
    line: "I can pick up whatever tools the problem needs.",
  },
  {
    id: "thinking",
    line: "Engineering, to me, is a way of thinking.",
    echo: "Not a fixed set of tools.",
  },
  {
    id: "tedious",
    line: "Sometimes the work is just tedious.",
  },
  {
    id: "applyflow",
    line: "That's why ApplyFlow exists.",
    echo: "Cold email, without the copy-paste.",
  },
  {
    id: "not-code",
    line: "Sometimes the problem isn't even the code.",
  },
  {
    id: "tasks",
    line: "Unclear tasks. Extra waiting.",
    echo: "I changed the process around the work.",
  },
  {
    id: "repeat",
    line: "Sometimes the same check keeps happening by hand.",
  },
  {
    id: "reuse",
    line: "Reusable templates. Then a better comparison tool.",
  },
  {
    id: "same",
    line: "Different problems. Different tools.",
    echo: "Same way of thinking.",
  },
  {
    id: "who",
    line: "Muralidharan Vivekananthan",
    echo: "Software Engineer",
    href: {
      label: "github.com/murali-vivek",
      url: "https://github.com/murali-vivek",
      external: true,
    },
  },
];
