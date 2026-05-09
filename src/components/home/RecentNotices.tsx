import Link from "next/link";
import { ArrowRight, Bell } from "lucide-react";
import { mockNotices } from "@/data/notices";
import NoticeCard from "@/components/ui/NoticeCard";

export default function RecentNotices() {
  // Sort pinned first
  const sortedNotices = [...mockNotices].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const recentNotices = sortedNotices.slice(0, 4);

  return (
    <section className="bg-surface-alt">
      <div className="section-container section-padding">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Bell size={18} className="text-secondary-600" />
              <span className="text-sm font-semibold text-secondary-600 uppercase tracking-wider">
                Stay Updated
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-heading">
              Recent <span className="text-primary-600">Notices</span>
            </h2>
          </div>
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm hover:text-accent-700 transition-colors group shrink-0"
          >
            View All Notices
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Notices List */}
        <div className="flex flex-col gap-4">
          {recentNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>
    </section>
  );
}

