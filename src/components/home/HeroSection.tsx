import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary-800 text-white">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary-900/40 to-transparent" />

      <div className="section-container relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
            <GraduationCap size={16} className="text-secondary-400" />
            <span className="text-sm font-medium text-primary-100">
              Admissions Open for 2026-27
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 animate-slide-up text-white">
            Shaping Future Leaders
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-400">
              with Excellence
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-primary-200 max-w-xl mb-10 leading-relaxed animate-slide-up">
            Netpro Model School &amp; College, Bogura — empowering students
            with quality education, moral values, and the skills to make a
            positive impact on the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up">
            <Link
              href="/academics#admissions"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-primary-700 font-semibold text-[15px] hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              Apply for Admission
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-[15px] hover:bg-white/20 transition-all duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
            fill="var(--color-surface)"
          />
        </svg>
      </div>
    </section>
  );
}
