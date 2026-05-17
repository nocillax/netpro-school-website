"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import QuickStats from "./QuickStats";
import AdminEditOverlay from "@/components/admin/AdminEditOverlay";

const carouselSlides = [
  {
    id: 1,
    image: "/images/home/hero-1.webp",
    alt: "Netpro Model School & College Campus",
    title: "Get Enlightened to Serve the Humanity",
    subtitle: "Netpro Model School & College, is dedicated to nurturing nobility, enlightenment, and truthfulness in every student.",
  },
  {
    id: 2,
    image: "/images/home/hero-2.webp",
    alt: "Interactive Classrooms",
    title: "Excellence in Education Since 2005",
    subtitle: "Providing a modern and disciplined environment for students to reach their full potential.",
  },
  {
    id: 3,
    image: "/images/home/hero-3.webp",
    alt: "Modern Facilities",
    title: "Building the Leaders of Tomorrow",
    subtitle: "Empowering students with knowledge, values, and the courage to face global challenges.",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);



  return (
    <section className="relative w-full pt-[96px] pb-12 bg-surface-alt">
      <div className="section-container h-full">
        <div className="bg-surface rounded-[2rem] md:rounded-[3rem] shadow-xl overflow-hidden flex flex-col border border-border relative">
          <AdminEditOverlay href="/admin/pages/home?edit=hero" label="Edit Hero Text" position="top-right" />

          <div className="relative w-full min-h-[500px] md:min-h-[70vh] flex items-center overflow-hidden">
            {/* Carousel Backgrounds */}
            {carouselSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="100vw"
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-transparent"></div>
                {/* Bottom gradient to blend with the next section */}
                {/* <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent z-10"></div> */}
              </div>
            ))}

            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col justify-center h-full px-8 md:px-16 pt-20 pb-24">
              <div className="max-w-3xl animate-slide-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/10 backdrop-blur-md border border-surface/20 text-text-on-dark text-sm font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse"></span>
                  Admissions Open for 2026-27
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-on-dark leading-tight mb-6 drop-shadow-md">
                  {carouselSlides[currentSlide].title}
                </h1>

                <p className="text-lg md:text-xl text-text-on-dark/90 mb-10 max-w-2xl drop-shadow">
                  {carouselSlides[currentSlide].subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/academics#admissions"
                    className="px-8 py-4 bg-secondary-600 hover:bg-secondary-500 text-text-on-dark font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-secondary-500/25 flex items-center gap-2"
                  >
                    Apply for Admission
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 z-20 flex gap-2">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-text-on-dark" : "w-4 bg-text-on-dark/40 hover:bg-text-on-dark/60"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="px-4 md:px-12">
            <QuickStats />
          </div>
        </div>
      </div>
    </section>
  );
}
