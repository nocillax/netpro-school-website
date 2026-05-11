import type { Notice } from "@/types";

/** Mock notice data — will be replaced by API calls to NestJS backend */
export const mockNotices: Notice[] = [
  {
    id: "1",
    title: "Admission Open for Session 2026",
    date: "2025-11-13",
    excerpt:
      "Netpro Model School & College, Bogra, is now accepting applications for the 2026 academic year. Interested guardians are requested to contact the office.",
    isPinned: true,
  },
  {
    id: "2",
    title: "Measles (হাম) Vaccine Campaign 2026",
    date: "2026-04-28",
    excerpt:
      "A Measles vaccination campaign will be held at the Junior Campus under the management of Netpro Model School & College and Bogra City Corporation.",
    isPinned: true,
  },
  {
    id: "3",
    title: "SSC 2026 Farewell Ceremony",
    date: "2026-04-28",
    excerpt:
      "The farewell ceremony for SSC 2026 candidates was held with prayers and well-wishes for their bright future and success.",
    isPinned: false,
  },
  {
    id: "4",
    title: "Inter-House Football Tournament 2025",
    date: "2025-12-17",
    excerpt:
      "The Inter-House Football Tournament 2025 was organized successfully in a festive atmosphere among students.",
    isPinned: false,
  },
  {
    id: "5",
    title: "Netpro Career Opportunity — Recruitment 2025",
    date: "2025-10-29",
    excerpt:
      "Netpro Model School & College invited applications for various teaching and administrative positions for the upcoming session.",
    isPinned: false,
  },
];

/** Simulates a server-side data fetch with artificial delay */
export async function getNotices(): Promise<Notice[]> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockNotices;
}

export async function getNoticeById(id: string): Promise<Notice | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockNotices.find((n) => n.id === id);
}
