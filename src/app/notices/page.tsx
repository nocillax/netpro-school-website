import type { Metadata } from "next";
import { Bell, Search, Sparkles } from "lucide-react";
import { getNotices } from "@/data/notices";
import type { Notice } from "@/types";

export const metadata: Metadata = {
  title: "Notice Board",
  description:
    "Latest notices, announcements, and updates from Netpro Model School & College, Bogura.",
};

const categoryStyles: Record<
  Notice["category"],
  { bg: string; text: string; dot: string }
> = {
  general: {
    bg: "bg-primary-50",
    text: "text-primary-700",
    dot: "bg-primary-500",
  },
  exam: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  admission: {
    bg: "bg-secondary-50",
    text: "text-secondary-700",
    dot: "bg-secondary-500",
  },
  event: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    dot: "bg-purple-500",
  },
  result: {
    bg: "bg-accent-50",
    text: "text-accent-700",
    dot: "bg-accent-500",
  },
};

export default async function NoticeBoardPage() {
  const notices = await getNotices();

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
        <div className="section-container py-16 md:py-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
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
            <NoticeRow key={notice.id} notice={notice} />
          ))}
        </div>
      </section>
    </main>
  );
}

function NoticeRow({ notice }: { notice: Notice }) {
  const styles = categoryStyles[notice.category];
  const formattedDate = new Date(notice.date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group bg-white rounded-2xl p-5 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary-200">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* Date badge */}
        <div className="shrink-0 flex md:flex-col items-center gap-2 md:gap-0 md:w-16 md:text-center">
          <span className="text-2xl md:text-3xl font-heading font-bold text-primary-600">
            {new Date(notice.date).getDate()}
          </span>
          <span className="text-xs font-semibold text-text-muted uppercase">
            {new Date(notice.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold capitalize ${styles.bg} ${styles.text}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${styles.dot}`}
              />
              {notice.category}
            </span>
            {notice.isNew && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-50 text-accent-600 text-[11px] font-bold uppercase tracking-wide">
                <Sparkles size={11} />
                New
              </span>
            )}
          </div>

          <h2 className="font-heading font-semibold text-text-heading text-base md:text-lg leading-snug mb-2 group-hover:text-primary-600 transition-colors">
            {notice.title}
          </h2>

          <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
            {notice.excerpt}
          </p>

          <p className="text-xs text-text-muted mt-3 md:hidden">
            {formattedDate}
          </p>
        </div>

        {/* Date (desktop only) */}
        <p className="hidden md:block text-sm text-text-muted font-medium shrink-0 pt-1">
          {formattedDate}
        </p>
      </div>
    </article>
  );
}
