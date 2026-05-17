import type { Metadata } from "next";
import {
  CalendarDays,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { getEvents } from "@/data/events";
import EventCard from "@/components/ui/EventCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button-1";

export const metadata: Metadata = {
  title: "Events | Netpro Model School & College",
  description:
    "Upcoming events, programs, and activities at Netpro Model School & College.",
};

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const allEvents = await getEvents();
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;
  const eventsPerPage = 6;

  // Sort events so pinned ones are at the top
  const sortedEvents = [...allEvents].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const totalPages = Math.ceil(sortedEvents.length / eventsPerPage);
  const events = sortedEvents.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage,
  );

  return (
    <main className="pt-32 pb-20">
      <div className="section-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-6">
            Events & <span className="text-primary-600">Activities</span>
          </h1>
          <p className="text-lg text-text-body leading-relaxed">
            Discover upcoming programs, cultural festivals, sports tournaments,
            and academic events happening at our campus.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
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
                  <Link href={`?page=${Math.min(totalPages, currentPage + 1)}`}>
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
        )}
      </div>
    </main>
  );
}
