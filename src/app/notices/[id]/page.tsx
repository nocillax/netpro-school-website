import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bell, CalendarDays, Printer } from "lucide-react";
import { getNoticeById, getNotices } from "@/data/notices";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const notice = await getNoticeById(id);
  if (!notice) return { title: "Notice Not Found" };
  return { title: `${notice.title} | Netpro Model School & College` };
}

// Generate static params so the pages are pre-built
export async function generateStaticParams() {
  const notices = await getNotices();
  return notices.map((notice) => ({ id: notice.id }));
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const notice = await getNoticeById(id);
  
  if (!notice) {
    notFound();
  }

  const dateObj = new Date(notice.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-surface-alt min-h-screen pb-20">
      {/* Notice Header */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-text-on-dark pt-[120px] lg:pt-[140px] pb-24 md:pb-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/notices"
              className="inline-flex items-center gap-2 text-primary-200 hover:text-text-on-dark transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Back to Notices
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-surface/20 text-text-on-dark text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
                <Bell size={12} />
                Notice
              </span>
              {notice.isPinned && (
                <span className="px-3 py-1 bg-accent-500 text-text-on-dark text-xs font-bold uppercase tracking-wider rounded-full">
                  Important
                </span>
              )}
            </div>
            
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-text-on-dark mb-6 leading-tight">
              {notice.title}
            </h1>
            
            <div className="flex items-center gap-2 text-primary-200 text-sm font-medium">
              <CalendarDays size={16} />
              Published on: {formattedDate}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container -mt-16 md:-mt-24 relative z-10">
        <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-card border border-border max-w-4xl mx-auto">
          
          <div className="flex justify-end mb-8 border-b border-border pb-6">
            <button className="flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 bg-primary-50 px-4 py-2 rounded-lg transition-colors">
              <Printer size={16} />
              Print Notice
            </button>
          </div>

          <div className="prose prose-lg max-w-none text-text-body">
            <p className="text-xl font-medium text-text-heading leading-relaxed mb-8">
              {notice.excerpt}
            </p>
            <p>
              This is a formal notification to all concerned students, parents, and faculty members regarding the subject mentioned above. Please ensure that you have noted the dates and instructions carefully.
            </p>
            <p>
              Further details and guidelines can be collected from the school administrative office during regular working hours. We expect full cooperation from everyone to ensure smooth proceedings.
            </p>
            <div className="mt-12 pt-8 border-t border-border border-dashed flex flex-col items-end">
              <p className="font-bold text-text-heading">Principal</p>
              <p className="text-text-muted text-sm">Netpro Model School & College</p>
              <p className="text-text-muted text-sm">Bogura, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
