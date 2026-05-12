import type { GalleryImage } from "@/types";

/** Mock gallery data — will be replaced by API calls to NestJS backend */
export const mockGalleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/gallery/lab.webp",
    alt: "Computer Laboratory",
    width: 800,
    height: 600,
    isFeatured: true,
  },
  {
    id: "g2",
    src: "/images/gallery/library.webp",
    alt: "School Library",
    width: 800,
    height: 600,
    isFeatured: true,
  },
  {
    id: "g3",
    src: "/images/gallery/classroom.webp",
    alt: "Classroom Activity",
    width: 800,
    height: 600,
    isFeatured: true,
  },
  {
    id: "g4",
    src: "/images/gallery/sports.webp",
    alt: "Annual Sports Day",
    width: 800,
    height: 600,
    isFeatured: false,
  },
  {
    id: "g5",
    src: "/images/gallery/art.webp",
    alt: "Art and Culture Club",
    width: 800,
    height: 600,
    isFeatured: false,
  },
  {
    id: "g6",
    src: "/images/gallery/science.webp",
    alt: "Science Fair Project",
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
