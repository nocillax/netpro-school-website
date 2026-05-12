export interface EventItem {
  id: string;
  title: string;
  date: string; // ISO date or formatted
  time: string;
  location: string;
  image: string;
  excerpt: string;
  isPinned: boolean;
  [key: string]: string | boolean | undefined;
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
  {
    id: "4",
    title: "Annual Science & Art Fair 2026",
    date: "2026-02-15",
    time: "10:00 AM - 05:00 PM",
    location: "Main Hall & Courtyard",
    image: "https://images.unsplash.com/photo-1564927366113-da98236207f2?q=80&w=600&auto=format&fit=crop",
    excerpt: "Showcasing the creative and scientific talents of our students through innovative projects and artworks.",
    isPinned: false,
  },
  {
    id: "5",
    title: "Independence Day Cultural Program",
    date: "2026-03-26",
    time: "08:30 AM - 12:30 PM",
    location: "School Auditorium",
    image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=600&auto=format&fit=crop",
    excerpt: "Celebrating the spirit of independence with patriotic songs, dances, and dramatic performances.",
    isPinned: false,
  },
  {
    id: "6",
    title: "Annual Prize Giving Ceremony 2025",
    date: "2025-11-20",
    time: "11:00 AM - 02:00 PM",
    location: "School Playground",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop",
    excerpt: "Recognizing and rewarding the academic and extracurricular excellence of our brilliant students.",
    isPinned: false,
  },
  {
    id: "7",
    title: "Pohela Boishakh Celebration",
    date: "2026-04-14",
    time: "09:00 AM - 01:00 PM",
    location: "Main Campus",
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=600&auto=format&fit=crop",
    excerpt: "Welcoming the Bengali New Year with traditional festivities, panta-ilish, and colorful rallies.",
    isPinned: false,
  },
  {
    id: "8",
    title: "In-Service Teacher Training Workshop",
    date: "2025-10-15",
    time: "09:00 AM - 05:00 PM",
    location: "Conference Room",
    image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b55a?q=80&w=600&auto=format&fit=crop",
    excerpt: "A dedicated day for our faculty members to learn modern teaching methodologies and digital tools.",
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
