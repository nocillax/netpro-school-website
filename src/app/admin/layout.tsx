import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { LogOut, LayoutDashboard, CalendarDays, Bell, FileText } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const isAdmin = cookieStore.get("admin_token")?.value === "true";

  if (!isAdmin) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-surface-alt pt-[80px]">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-border flex flex-col hidden md:flex">
        <div className="p-6 border-b border-border flex items-center gap-3">
          <Image src="/images/branding/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
          <h2 className="font-heading font-bold text-text-heading text-lg leading-tight">Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 text-text-body hover:text-primary-600 transition-colors font-medium">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link href="/admin/events" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 text-text-body hover:text-primary-600 transition-colors font-medium">
            <CalendarDays size={18} />
            Manage Events
          </Link>
          <Link href="/admin/notices" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 text-text-body hover:text-primary-600 transition-colors font-medium">
            <Bell size={18} />
            Manage Notices
          </Link>
          <Link href="/admin/pages/home" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary-50 text-text-body hover:text-primary-600 transition-colors font-medium">
            <FileText size={18} />
            Manage Home Page
          </Link>
        </nav>
        <div className="p-4 border-t border-border">
          {/* We use a form with a server action to log out safely */}
          <form action="/api/logout" method="POST">
            <button type="submit" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-accent-600 hover:bg-accent-50 transition-colors font-medium">
              <LogOut size={18} />
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-surface border-b border-border p-4 flex md:hidden items-center justify-between">
          <h2 className="font-heading font-bold text-text-heading">Admin Panel</h2>
          <form action="/api/logout" method="POST">
            <button type="submit" className="text-accent-600 p-2">
              <LogOut size={20} />
            </button>
          </form>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
