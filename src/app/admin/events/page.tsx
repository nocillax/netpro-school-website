import { getEvents } from "@/data/events";
import AdminDataTable from "@/components/admin/AdminDataTable";

export default async function AdminEventsPage() {
  const events = await getEvents();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-text-heading mb-2">Manage Events</h1>
        <p className="text-text-muted">Create, edit, and delete campus events.</p>
      </div>

      <AdminDataTable title="All Events" items={events} type="event" />
    </div>
  );
}
