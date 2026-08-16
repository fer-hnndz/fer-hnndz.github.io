export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "why-robust-software-matters",
    title: "Why robust software matters",
    date: "2026-07-12",
    excerpt:
      "A reflection on why building software that doesn't fall apart is more valuable than shipping fast.",
    content: [
      "Most software doesn't fail because of a single dramatic bug. It fails quietly, over time, because small decisions compound into fragile systems.",
      "Robustness isn't about never making mistakes. It's about designing systems where mistakes are contained, visible, and recoverable.",
      "In practice that means investing in validation, testing, and boring engineering that makes the happy path boring.",
    ],
  },
  {
    slug: "beyond-writing-code",
    title: "Beyond writing code",
    date: "2026-05-30",
    excerpt:
      "Engineering is as much about communication and trade-offs as it is about syntax.",
    content: [
      "Writing code is the easiest part of the job. Understanding the problem, aligning stakeholders, and choosing the right trade-off is where the real work happens.",
      "A great solution to the wrong problem is still a failure. Asking questions early is cheaper than rewriting later.",
      "The best engineers make the invisible visible: they document decisions, surface risks, and leave systems easier to understand than they found them.",
    ],
  },
  {
    slug: "static-sites-are-underrated",
    title: "Static sites are underrated",
    date: "2026-04-18",
    excerpt:
      "Why shipping a personal site as a static export is a surprisingly good idea.",
    content: [
      "Static sites are fast, cheap to host, and nearly impossible to break. No server means no runtime errors, no cold starts, and no database to maintain.",
      "For content that doesn't change often, the simplicity is a feature. Deploys become a file upload, and performance is mostly free.",
      "The trade-off is real though: anything dynamic needs to move to the client or to an external service. Knowing where that line is keeps the architecture honest.",
    ],
  },
];
