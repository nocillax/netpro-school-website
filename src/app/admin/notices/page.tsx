import { getNotices } from "@/data/notices";
import AdminDataTable from "@/components/admin/AdminDataTable";

export default async function AdminNoticesPage() {
  const notices = await getNotices();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-text-heading mb-2">Manage Notices</h1>
        <p className="text-text-muted">Publish, edit, and delete important announcements.</p>
      </div>

      <AdminDataTable title="All Notices" items={notices} type="notice" />
    </div>
  );
}
