export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO date or formatted
  time: string;
  location: string;
  image: string;
  excerpt: string;
  isPinned: boolean;
}

export const mockEvents: EventItem[] = [
  {
    id: "1",
    title: "Inter-House Football Tournament 2025",
    date: "2025-12-17",
    time: "09:00 AM - 04:00 PM",
    location: "Main Campus Grounds",
    image: "https://images.unsplash.com/photo-1518605368461-1ee18eb1a476?q=80&w=600&auto=format&fit=crop",
    excerpt: "The Inter-House Football Tournament 2025 was held with great enthusiasm and sportsman spirit.",
    isPinned: true,
  },
  {
    id: "2",
    title: "SSC 2026 Farewell Ceremony",
    date: "2026-04-28",
    time: "10:30 AM - 01:30 PM",
    location: "Auditorium Hall",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    excerpt: "A heartfelt farewell for our SSC 2026 candidates, wishing them success in their future endeavors.",
    isPinned: false,
  },
  {
    id: "3",
    title: "New Academic Session 2026 Orientation",
    date: "2026-01-08",
    time: "09:00 AM - 12:00 PM",
    location: "School Campus",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    excerpt: "Welcoming the students of the 2026 academic year with an orientation program and festivities.",
    isPinned: false,
  },
];

export async function getEvents(): Promise<EventItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockEvents;
}

export async function getEventById(id: string): Promise<EventItem | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockEvents.find((e) => e.id === id);
}
