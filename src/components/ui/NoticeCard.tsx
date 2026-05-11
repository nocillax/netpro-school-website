import Link from "next/link";
import { Pin } from "lucide-react";
import type { Notice } from "@/types";

export default function NoticeCard({ notice }: { notice: Notice }) {
  const dateObj = new Date(notice.date);
  const month = dateObj.toLocaleDateString("en-US", { month: "short" });
  const day = dateObj.getDate().toString().padStart(2, "0");
  const year = dateObj.getFullYear();

  return (
    <Link
      href={`/notices/${notice.id}`}
      className="group bg-surface rounded-2xl p-5 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary-200 hover:-translate-y-1 flex gap-5 md:gap-6 relative"
    >
      {notice.isPinned && (
        <div className="absolute top-3 right-3 bg-accent-600 text-white p-2 rounded-full shadow-md z-10" title="Pinned Notice">
          <Pin size={16} className="fill-current" />
        </div>
      )}
      {/* Left Date Column */}
      <div className="flex flex-col items-center justify-center bg-primary-600 rounded-xl min-w-[5rem] shrink-0 text-text-on-dark py-3">
        <span className="font-heading text-2xl font-bold leading-none mb-1">{day}</span>
        <span className="text-sm font-semibold uppercase leading-none mb-1 opacity-90">{month}</span>
        <span className="text-xs font-medium opacity-80">{year}</span>
      </div>

      {/* Right Content Column */}
      <div className="flex flex-col flex-1 py-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-heading font-bold text-text-heading text-lg leading-snug group-hover:text-accent-600 transition-colors line-clamp-2 pr-6">
            {notice.title}
          </h3>
        </div>
        <p className="text-sm text-text-body leading-relaxed line-clamp-2">
          {notice.excerpt}
        </p>
      </div>
    </Link>
  );
}
