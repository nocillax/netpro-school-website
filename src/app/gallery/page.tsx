import type { Metadata } from "next";
import Image from "next/image";
import { Camera } from "lucide-react";
import { getGalleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos from campus life, events, sports, and academics at Netpro Model School & College, Bogura.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-text-on-dark">
        <div className="section-container py-16 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-surface/10 flex items-center justify-center">
              <Camera size={20} className="text-secondary-400" />
            </div>
            <span className="text-sm font-semibold text-primary-200 uppercase tracking-wider">
              Campus Life
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Photo Gallery
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            A glimpse into life at Netpro — from classrooms and laboratories to
            sports fields and cultural events.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-container py-12 md:py-16">

        {/* Masonry-style grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group break-inside-avoid rounded-2xl overflow-hidden bg-surface shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-text-on-dark text-sm font-medium leading-snug">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
