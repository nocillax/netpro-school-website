import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
import { getGalleryImages } from "@/data/gallery";

export default async function FeaturedGallery() {
  const allImages = await getGalleryImages();
  const featuredImages = allImages.filter((img) => img.isFeatured).slice(0, 3);

  if (featuredImages.length === 0) return null;

  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon size={18} className="text-secondary-600" />
              <span className="text-sm font-bold text-secondary-600 tracking-wider uppercase">
                Campus Highlights
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-heading">
              Photo <span className="text-primary-600">Gallery</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors group"
          >
            View Full Gallery
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredImages.map((image) => (
            <div
              key={image.id}
              className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-text-on-dark font-medium text-sm line-clamp-2">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
