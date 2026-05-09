import type { GalleryImage } from "@/types";

/** Mock gallery data — will be replaced by API calls to NestJS backend */
export const mockGalleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    alt: "Students in a modern classroom setting",
    width: 800,
    height: 600,
    isFeatured: true,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80",
    alt: "Science laboratory equipment",
    width: 800,
    height: 533,
    isFeatured: true,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80",
    alt: "Students during morning assembly",
    width: 800,
    height: 1200,
    isFeatured: true,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    alt: "Library with students reading",
    width: 800,
    height: 534,
    isFeatured: false,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
    alt: "Sports day celebration",
    width: 800,
    height: 600,
    isFeatured: false,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
    alt: "Students in computer lab",
    width: 800,
    height: 533,
    isFeatured: false,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    alt: "Annual cultural program",
    width: 800,
    height: 1067,
    isFeatured: false,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    alt: "School campus aerial view",
    width: 800,
    height: 533,
    isFeatured: false,
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
    alt: "Art and craft exhibition",
    width: 800,
    height: 600,
    isFeatured: false,
  },
];

/** Simulates a server-side data fetch */
export async function getGalleryImages(): Promise<GalleryImage[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockGalleryImages;
}
