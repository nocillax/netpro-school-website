/** Shared type definitions for the Netpro School website */

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: "general" | "exam" | "admission" | "event" | "result";
  excerpt: string;
  isNew: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface QuickStat {
  label: string;
  value: string;
  icon: string;
}
