import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />

      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="section-container relative z-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
            <Sparkles size={24} className="text-secondary-400" />
          </div>

          {/* Quote / Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Education, empowering them to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-400">
              become
            </span>{" "}
            well-rounded leaders who make a positive impact on the world.
          </h2>

          <p className="text-primary-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join Netpro Model School &amp; College and embark on a journey of
            academic excellence and personal growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/academics#admissions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold text-base hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              Apply for Admission
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-base hover:bg-white/20 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
