import Link from "next/link";
import { ArrowRight, Bell, Sparkles } from "lucide-react";
import { mockNotices } from "@/data/notices";
import type { Notice } from "@/types";

const categoryColors: Record<Notice["category"], string> = {
  general: "bg-primary-100 text-primary-700",
  exam: "bg-amber-100 text-amber-700",
  admission: "bg-secondary-100 text-secondary-700",
  event: "bg-purple-100 text-purple-700",
  result: "bg-accent-100 text-accent-700",
};

export default function RecentNotices() {
  const recentNotices = mockNotices.slice(0, 3);

  return (
    <section className="bg-surface-alt">
      <div className="section-container section-padding">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Bell size={18} className="text-primary-500" />
              <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
                Stay Updated
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Announcements &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">
                News
              </span>
            </h2>
          </div>
          <Link
            href="/notices"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group shrink-0"
          >
            View All Notices
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NoticeCard({ notice }: { notice: Notice }) {
  const formattedDate = new Date(notice.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:-translate-y-1 flex flex-col">
      {/* Top row: category + badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${
            categoryColors[notice.category]
          }`}
        >
          {notice.category}
        </span>
        {notice.isNew && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-50 text-accent-600 text-[11px] font-bold uppercase tracking-wide">
            <Sparkles size={11} />
            New
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-heading font-semibold text-text-heading text-[15px] leading-snug mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
        {notice.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3 flex-1">
        {notice.excerpt}
      </p>

      {/* Date */}
      <p className="text-xs text-text-muted font-medium mt-auto pt-4 border-t border-border">
        {formattedDate}
      </p>
    </article>
  );
}
