import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock, MapPin, Share2 } from "lucide-react";
import { getEventById, getEvents } from "@/data/events";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const event = await getEventById(id);
  if (!event) return { title: "Event Not Found" };
  return { title: `${event.title} | Netpro Model School & College` };
}

// Generate static params so the pages are pre-built
export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ id: event.id }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = await getEventById(id);
  
  if (!event) {
    notFound();
  }

  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-surface-alt min-h-screen pb-20 pt-16">
      {/* Event Header with Image */}
      <section className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="section-container w-full pb-12">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Back to Events
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-secondary-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                Event
              </span>
              {event.isPinned && (
                <span className="px-3 py-1 bg-accent-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Featured
                </span>
              )}
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl leading-tight">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container mt-8 md:mt-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-surface rounded-3xl p-6 md:p-10 shadow-sm border border-border">
              <h2 className="text-2xl font-heading font-bold text-text-heading mb-6">About this event</h2>
              <div className="prose prose-lg max-w-none text-text-body">
                <p className="text-xl font-medium text-primary-700 leading-relaxed mb-6">
                  {event.excerpt}
                </p>
                <p>
                  Netpro Model School & College is proud to host this remarkable event. We believe in providing holistic development opportunities for our students. Join us as we bring together students, faculty, and the community to celebrate excellence, creativity, and dedication.
                </p>
                <p>
                  All participants are requested to arrive at the venue at least 30 minutes prior to the scheduled start time. For any queries regarding the event schedule or participation guidelines, please contact the administrative office.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar / Event Details */}
          <div className="lg:w-1/3 shrink-0">
            <div className="bg-surface rounded-3xl p-6 md:p-8 shadow-sm border border-border sticky top-24">
              <h3 className="font-heading text-xl font-bold text-text-heading mb-6 border-b border-border pb-4">
                Event Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 text-primary-600">
                    <CalendarDays size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">Date</p>
                    <p className="font-semibold text-text-heading">{formattedDate}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 text-primary-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">Time</p>
                    <p className="font-semibold text-text-heading">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 text-primary-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-muted mb-1">Location</p>
                    <p className="font-semibold text-text-heading">{event.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <button className="w-full py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <Share2 size={18} />
                  Share Event
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
