import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { mockEvents } from "@/data/events";
import EventCard from "@/components/ui/EventCard";

export default function EventsSection() {
  // Sort events so pinned ones are at the top
  const sortedEvents = [...mockEvents].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const featuredEvents = sortedEvents.slice(0, 3);

  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays size={18} className="text-secondary-600" />
              <span className="text-sm font-bold text-secondary-600 tracking-wider uppercase">
                Campus Life
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-heading">
              Upcoming <span className="text-primary-600">Events</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors group"
          >
            View All Events
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
