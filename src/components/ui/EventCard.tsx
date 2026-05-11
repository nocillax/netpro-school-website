import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Pin } from "lucide-react";

export default function EventCard({ event }: { event: { id: string | number, date: string, title: string, time: string, location: string, image: string, isPinned?: boolean } }) {
  const dateObj = new Date(event.date);
  const month = dateObj.toLocaleDateString("en-US", { month: "short" });
  const day = dateObj.getDate().toString().padStart(2, "0");
  const year = dateObj.getFullYear();

  return (
    <Link
      href={`/events/${event.id}`}
      className="group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary-200 hover:-translate-y-1 flex flex-col h-full"
    >
      {/* Top Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-surface-alt shrink-0">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {event.isPinned && (
          <div className="absolute top-3 right-3 bg-accent-600 text-white p-2 rounded-full shadow-md z-10" title="Pinned Event">
            <Pin size={16} className="fill-current" />
          </div>
        )}
      </div>

      {/* Bottom Content Container */}
      <div className="p-5 flex gap-4 md:gap-5 flex-1">
        {/* Left Date Column */}
        <div className="flex flex-col items-center justify-center bg-primary-600 rounded-xl min-w-[4.5rem] shrink-0 text-text-on-dark self-center py-3 shadow-sm">
          <span className="font-heading text-2xl font-bold leading-none mb-1">{day}</span>
          <span className="text-xs font-semibold uppercase leading-none mb-1 opacity-90 tracking-wide">{month}</span>
          <span className="text-[10px] font-bold opacity-80">{year}</span>
        </div>

        {/* Right Content Column */}
        <div className="flex flex-col flex-1">
          <h3 className="font-heading font-bold text-text-heading text-lg leading-snug group-hover:text-accent-600 transition-colors line-clamp-2 mb-4">
            {event.title}
          </h3>
          
          <div className="flex flex-col gap-2 text-sm text-text-muted mt-auto">
            <div className="flex items-center gap-2 font-medium">
              <Clock size={14} className="text-primary-500 shrink-0" />
              <span className="truncate">{event.time}</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <MapPin size={14} className="text-accent-500 shrink-0" />
              <span className="truncate line-clamp-1 break-all">{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
