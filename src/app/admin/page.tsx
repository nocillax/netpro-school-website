import { getEvents } from "@/data/events";
import { getNotices } from "@/data/notices";
import Link from "next/link";
import { CalendarDays, Bell, Users, PlusCircle } from "lucide-react";

export default async function AdminDashboardPage() {
  const events = await getEvents();
  const notices = await getNotices();

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-3xl font-heading font-bold text-text-heading mb-2">Welcome, System Admin</h1>
        <p className="text-text-muted">Manage your website content from this dashboard.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
              <CalendarDays size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-text-muted">Total Events</p>
              <h3 className="text-2xl font-bold text-text-heading">{events.length}</h3>
            </div>
          </div>
          <Link href="/admin/events" className="text-sm font-semibold text-primary-600 hover:text-primary-700">
            Manage Events &rarr;
          </Link>
        </div>

        <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-50 text-secondary-600 flex items-center justify-center">
              <Bell size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-text-muted">Total Notices</p>
              <h3 className="text-2xl font-bold text-text-heading">{notices.length}</h3>
            </div>
          </div>
          <Link href="/admin/notices" className="text-sm font-semibold text-secondary-600 hover:text-secondary-700">
            Manage Notices &rarr;
          </Link>
        </div>

        <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-text-muted">Admin Users</p>
              <h3 className="text-2xl font-bold text-text-heading">1</h3>
            </div>
          </div>
          <span className="text-sm font-semibold text-text-muted">
            Static Mock
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-heading font-bold text-text-heading mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors">
            <PlusCircle size={20} />
            Create Event
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white rounded-xl font-medium transition-colors">
            <PlusCircle size={20} />
            Publish Notice
          </button>
        </div>
      </div>
    </div>
  );
}
