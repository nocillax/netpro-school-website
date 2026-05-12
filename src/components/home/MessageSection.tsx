import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import AdminEditOverlay from "@/components/admin/AdminEditOverlay";

export default function MessageSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Chairman's Message */}
          <div className="bg-surface rounded-3xl p-8 lg:p-10 shadow-card border border-border relative overflow-hidden group">
            <AdminEditOverlay href="/admin/pages/home?edit=chairman-message" label="Edit Message" position="top-right" />
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={80} className="text-primary-600" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary-50">
                  <Image
                    src="/images/about/chairman.webp"
                    alt="Chairman"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-heading group-hover:text-accent-600 transition-colors">
                    A K M Mejanur Islam
                  </h3>
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                    Founder Chairman
                  </p>
                </div>
              </div>
              <p className="text-text-body font-medium italic mb-6 line-clamp-4">
                &quot;Knowledge, humanity, and skill development are the core foundations of education. Only true education can create enlightened human beings. At Netpro Model School &amp; College, we provide a disciplined and modern environment to prepare students for the future.&quot;
              </p>
              <Link
                href="/about#chairman"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent-600 hover:text-accent-700 transition-colors group/link"
              >
                Read Full Message
                <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Principal's Message */}
          <div className="bg-surface rounded-3xl p-8 lg:p-10 shadow-card border border-border relative overflow-hidden group">
            <AdminEditOverlay href="/admin/pages/home?edit=principal-message" label="Edit Message" position="top-right" />
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={80} className="text-primary-600" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary-50">
                  <Image
                    src="/images/about/principal.webp"
                    alt="Principal"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-heading group-hover:text-accent-600 transition-colors">
                    Riya Sharmin
                  </h3>
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                    Principal
                  </p>
                </div>
              </div>
              <p className="text-text-body font-medium italic mb-6 line-clamp-4">
                &quot;In a changing world, education is the main ladder for an individual to reach their peak. At Netpro Model School &amp; College, our joyful and disciplined environment ensures students develop into people with right values and the courage to face global challenges.&quot;
              </p>
              <Link
                href="/about#principal"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent-600 hover:text-accent-700 transition-colors group/link"
              >
                Read Full Message
                <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
