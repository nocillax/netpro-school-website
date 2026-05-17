import type { Metadata } from "next";
import Image from "next/image";
import {
  Camera,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { getGalleryImages } from "@/data/gallery";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button-1";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos from campus life, events, sports, and academics at Netpro Model School & College, Bogura.",
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const allImages = await getGalleryImages();
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;
  const imagesPerPage = 9;

  const totalPages = Math.ceil(allImages.length / imagesPerPage);
  const images = allImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage,
  );

  return (
    <main className="pt-32 pb-20">
      <div className="section-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-6">
            Photo <span className="text-primary-600">Gallery</span>
          </h1>
          <p className="text-lg text-text-body leading-relaxed">
            A glimpse into life at Netpro — from classrooms and laboratories to
            sports fields and cultural events.
          </p>
        </div>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16">
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <Button
                      variant="ghost"
                      mode="icon"
                      asChild
                      disabled={currentPage === 1}
                    >
                      <Link href={`?page=1`}>
                        <ChevronFirst className="rtl:rotate-180" />
                      </Link>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button
                      variant="ghost"
                      mode="icon"
                      asChild
                      disabled={currentPage === 1}
                    >
                      <Link href={`?page=${Math.max(1, currentPage - 1)}`}>
                        <ChevronLeft className="rtl:rotate-180" />
                      </Link>
                    </Button>
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i + 1}>
                      <Button
                        variant={currentPage === i + 1 ? "primary" : "ghost"}
                        mode="icon"
                        asChild
                      >
                        <Link href={`?page=${i + 1}`}>{i + 1}</Link>
                      </Button>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <Button
                      variant="ghost"
                      mode="icon"
                      asChild
                      disabled={currentPage === totalPages}
                    >
                      <Link
                        href={`?page=${Math.min(totalPages, currentPage + 1)}`}
                      >
                        <ChevronRight className="rtl:rotate-180" />
                      </Link>
                    </Button>
                  </PaginationItem>
                  <PaginationItem>
                    <Button
                      variant="ghost"
                      mode="icon"
                      asChild
                      disabled={currentPage === totalPages}
                    >
                      <Link href={`?page=${totalPages}`}>
                        <ChevronLast className="rtl:rotate-180" />
                      </Link>
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
