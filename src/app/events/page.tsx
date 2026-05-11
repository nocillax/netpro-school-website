import type { Metadata } from "next";
import { CalendarDays, Search } from "lucide-react";
import { getEvents } from "@/data/events";
import EventCard from "@/components/ui/EventCard";

export const metadata: Metadata = {
  title: "Events | Netpro Model School & College",
  description:
    "Upcoming events, programs, and activities at Netpro Model School & College.",
};

export default async function EventsPage() {
  const events = await getEvents();
  
  // Sort events so pinned ones are at the top
  const sortedEvents = [...events].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <main>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-text-on-dark">
        <div className="section-container py-16 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-surface/10 flex items-center justify-center">
              <CalendarDays size={20} className="text-secondary-400" />
            </div>
            <span className="text-sm font-semibold text-primary-200 uppercase tracking-wider">
              Campus Life
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-on-dark mb-4">
            Events & Activities
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            Discover upcoming programs, cultural festivals, sports tournaments, and academic events happening at our campus.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="section-container py-12 md:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <p className="text-text-muted text-sm font-medium">
            Showing{" "}
            <span className="text-text-heading font-semibold">
              {sortedEvents.length}
            </span>{" "}
            events
          </p>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-alt border border-border text-sm text-text-muted">
            <Search size={16} />
            <span>Search events...</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}
