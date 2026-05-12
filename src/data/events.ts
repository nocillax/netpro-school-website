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
    id: "e1",
    title: "Annual Sports Competition 2026",
    date: "2026-02-15",
    time: "08:00 AM - 04:00 PM",
    location: "School Main Ground",
    image: "/images/events/football.webp",
    excerpt: "Join us for a day of athletic excellence and school spirit at our annual sports meet.",
    isPinned: true,
  },
  {
    id: "e2",
    title: "Class of 2026 Farewell Program",
    date: "2026-03-10",
    time: "10:00 AM - 02:00 PM",
    location: "College Auditorium",
    image: "/images/events/farewell.webp",
    excerpt: "Celebrating the journey and success of our outgoing students with a grand farewell ceremony.",
    isPinned: true,
  },
  {
    id: "e3",
    title: "New Students Orientation",
    date: "2026-01-05",
    time: "09:00 AM - 12:00 PM",
    location: "Main Campus Hall",
    image: "/images/events/orientation.webp",
    excerpt: "A warm welcome to our new students and parents to the Netpro family.",
    isPinned: false,
  },
  {
    id: "e4",
    title: "Inter-School Science Fair",
    date: "2026-04-20",
    time: "09:00 AM - 05:00 PM",
    location: "Exhibition Hall",
    image: "/images/gallery/science.webp",
    excerpt: "Showcasing innovative projects and scientific discoveries by our talented students.",
    isPinned: false,
  },
  {
    id: "e5",
    title: "Independence Day Celebration",
    date: "2026-03-26",
    time: "08:00 AM - 11:00 AM",
    location: "School Assembly Ground",
    image: "/images/home/hero-1.webp",
    excerpt: "Commemorating the independence of Bangladesh with patriotic songs and drama.",
    isPinned: false,
  },
  {
    id: "e6",
    title: "Cultural Festival 2026",
    date: "2026-05-15",
    time: "04:00 PM - 09:00 PM",
    location: "School Main Ground",
    image: "/images/gallery/art.webp",
    excerpt: "A celebration of music, dance, and art featuring performances from all departments.",
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
