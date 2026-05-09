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
    title: "National Science Fair 2026",
    date: "2026-06-15",
    time: "09:00 AM - 04:00 PM",
    location: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?q=80&w=600&auto=format&fit=crop",
    excerpt: "Join us for our annual science fair featuring innovative projects from our talented students across all grades.",
    isPinned: true,
  },
  {
    id: "2",
    title: "Inter-School Football Tournament",
    date: "2026-05-20",
    time: "03:00 PM - 06:00 PM",
    location: "School Stadium",
    image: "https://images.unsplash.com/photo-1518605368461-1ee18eb1a476?q=80&w=600&auto=format&fit=crop",
    excerpt: "Cheer for our school team as they face off against regional schools in the semi-finals.",
    isPinned: false,
  },
  {
    id: "3",
    title: "Cultural Festival & Art Exhibition",
    date: "2026-07-05",
    time: "10:00 AM - 08:00 PM",
    location: "Campus Grounds",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
    excerpt: "A day-long celebration of art, music, and cultural diversity showcasing student performances.",
    isPinned: false,
  },
];
