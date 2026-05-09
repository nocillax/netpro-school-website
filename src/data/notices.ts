import type { Notice } from "@/types";

/** Mock notice data — will be replaced by API calls to NestJS backend */
export const mockNotices: Notice[] = [
  {
    id: "1",
    title: "Annual Sports Day 2026 — Registration Open",
    date: "2026-05-05",
    excerpt:
      "All students are invited to register for the Annual Sports Day. Events include track & field, cricket, football, and indoor games.",
    isPinned: true,
  },
  {
    id: "2",
    title: "Half-Yearly Examination Schedule Published",
    date: "2026-05-01",
    excerpt:
      "The detailed schedule for the Half-Yearly Examination has been published. Students may collect printed copies from the office.",
    isPinned: true,
  },
  {
    id: "3",
    title: "Admission Open for Session 2026-27",
    date: "2026-04-28",
    excerpt:
      "Netpro Model School & College is now accepting applications for Class I through Class XII for the upcoming academic session.",
    isPinned: false,
  },
  {
    id: "4",
    title: "Parent-Teacher Meeting — May 15",
    date: "2026-04-25",
    excerpt:
      "A Parent-Teacher meeting is scheduled for May 15, 2026. Parents are requested to attend and discuss their ward's progress.",
    isPinned: false,
  },
  {
    id: "5",
    title: "SSC 2025 Results — Outstanding Performance",
    date: "2026-04-20",
    excerpt:
      "Netpro is proud to announce a 98% pass rate in SSC 2025 with 45 students achieving GPA 5.00.",
    isPinned: false,
  },
  {
    id: "6",
    title: "Science Fair 2026 — Call for Projects",
    date: "2026-04-15",
    excerpt:
      "Students from Class VI to XII are encouraged to submit project proposals for the upcoming Science Fair. Deadline: May 20, 2026.",
    isPinned: false,
  },
];

/** Simulates a server-side data fetch with artificial delay */
export async function getNotices(): Promise<Notice[]> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockNotices;
}
