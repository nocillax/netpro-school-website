import Link from "next/link";
import { Pin } from "lucide-react";
import type { Notice } from "@/types";
import AdminEditOverlay from "@/components/admin/AdminEditOverlay";
import DateBadge from "./DateBadge";

export default function NoticeCard({ notice }: { notice: Notice }) {
  return (
    <div
      className="group bg-surface rounded-2xl p-5 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary-200 hover:-translate-y-1 flex gap-5 md:gap-6 relative"
    >
      <AdminEditOverlay href={`/admin/notices?edit=${notice.id}`} label="Edit Notice" position="bottom-right" />
      
      <Link href={`/notices/${notice.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${notice.title}`} />
      
      {notice.isPinned && (
        <div className="absolute top-3 right-3 bg-accent-600 text-white p-2 rounded-full shadow-md z-10" title="Pinned Notice">
          <Pin size={16} className="fill-current" />
        </div>
      )}
      {/* Left Date Column */}
      <DateBadge date={notice.date} />

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
    </div>
  );
}
