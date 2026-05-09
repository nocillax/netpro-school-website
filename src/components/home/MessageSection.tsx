import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function MessageSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Chairman's Message */}
          <div className="bg-surface rounded-3xl p-8 lg:p-10 shadow-card border border-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={80} className="text-primary-600" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary-50">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                    alt="Chairman"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-heading group-hover:text-accent-600 transition-colors">
                    Mr. John Doe
                  </h3>
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                    Chairman
                  </p>
                </div>
              </div>
              <p className="text-text-body font-medium italic mb-6 line-clamp-4">
                &quot;Welcome to Netpro Model School &amp; College. Our vision is to nurture young minds into responsible, innovative, and compassionate global citizens. We are committed to providing an environment where every student can discover their true potential and achieve academic excellence.&quot;
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
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote size={80} className="text-primary-600" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary-50">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                    alt="Principal"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-heading group-hover:text-accent-600 transition-colors">
                    Dr. Jane Smith
                  </h3>
                  <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                    Principal
                  </p>
                </div>
              </div>
              <p className="text-text-body font-medium italic mb-6 line-clamp-4">
                &quot;Education is not just about academic success; it is about building character. At Netpro, our dedicated faculty ensures that learning is engaging, practical, and tailored to meet the challenges of the 21st century. We invite you to join our vibrant community.&quot;
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
