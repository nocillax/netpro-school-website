import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notice Board",
  description:
    "Latest notices, announcements, and updates from Netpro Model School & College, Bogura.",
};



import { Bell, ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getNotices } from "@/data/notices";
import NoticeCard from "@/components/ui/NoticeCard";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button-1";

export default async function NoticeBoardPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const allNotices = await getNotices();
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;
  const noticesPerPage = 4;

  const totalPages = Math.ceil(allNotices.length / noticesPerPage);
  const notices = allNotices.slice((currentPage - 1) * noticesPerPage, currentPage * noticesPerPage);

  return (
    <main className="pt-32 pb-20">
      <div className="section-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
              <Bell size={20} className="text-primary-600" />
            </div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Stay Informed
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-heading mb-6">
            School <span className="text-primary-600">Notice Board</span>
          </h1>
          <p className="text-lg text-text-body leading-relaxed">
            All the latest announcements, exam schedules, and important updates from Netpro Model School & College.
          </p>
        </div>

        {/* Notice List */}
        <div className="space-y-4 mb-12">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button variant="ghost" mode="icon" asChild disabled={currentPage === 1}>
                  <Link href={`?page=1`}>
                    <ChevronFirst className="rtl:rotate-180" />
                  </Link>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="ghost" mode="icon" asChild disabled={currentPage === 1}>
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
                <Button variant="ghost" mode="icon" asChild disabled={currentPage === totalPages}>
                  <Link href={`?page=${Math.min(totalPages, currentPage + 1)}`}>
                    <ChevronRight className="rtl:rotate-180" />
                  </Link>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button variant="ghost" mode="icon" asChild disabled={currentPage === totalPages}>
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


