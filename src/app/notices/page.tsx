import type { Metadata } from "next";
import { Bell, Search } from "lucide-react";
import { getNotices } from "@/data/notices";
import NoticeCard from "@/components/ui/NoticeCard";

export const metadata: Metadata = {
  title: "Notice Board",
  description:
    "Latest notices, announcements, and updates from Netpro Model School & College, Bogura.",
};



export default async function NoticeBoardPage() {
  const notices = await getNotices();

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-text-on-dark">
        <div className="section-container py-16 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-surface/10 flex items-center justify-center">
              <Bell size={20} className="text-secondary-400" />
            </div>
            <span className="text-sm font-semibold text-primary-200 uppercase tracking-wider">
              Stay Informed
            </span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Notice Board
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            All the latest announcements, exam schedules, and important updates
            from Netpro Model School &amp; College.
          </p>
        </div>
      </section>

      {/* Notice List */}
      <section className="section-container py-12 md:py-16">
        {/* Filter bar placeholder */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <p className="text-text-muted text-sm font-medium">
            Showing{" "}
            <span className="text-text-heading font-semibold">
              {notices.length}
            </span>{" "}
            notices
          </p>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-alt border border-border text-sm text-text-muted">
            <Search size={16} />
            <span>Search notices...</span>
          </div>
        </div>

        {/* Notices */}
        <div className="space-y-4">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </section>
    </main>
  );
}


