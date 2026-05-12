"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Edit } from "lucide-react";

interface AdminEditOverlayProps {
  href: string;
  label?: string;
  position?: "top-right" | "top-left" | "center" | "bottom-right";
}

export default function AdminEditOverlay({ href, label = "Edit", position = "top-right" }: AdminEditOverlayProps) {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Improved client-side check for the admin cookie
    const checkAdmin = () => {
      const cookies = document.cookie.split(";");
      const adminCookie = cookies.find(c => c.trim().startsWith("admin_token="));
      if (adminCookie) {
        const value = adminCookie.split("=")[1];
        if (value === "true") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    };

    checkAdmin();
    // Re-check periodically or on focus to ensure sync if logged out in another tab
    const interval = setInterval(checkAdmin, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!isAdmin) return null;

  const positionClasses = {
    "top-right": "top-3 right-3",
    "top-left": "top-3 left-3",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom-right": "bottom-3 right-3",
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(href);
      }}
      className={`absolute ${positionClasses[position]} z-10 bg-black/80 hover:bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg backdrop-blur-sm transition-all border border-white/10 cursor-pointer`}
    >
      <Edit size={14} />
      <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
    </button>
  );
}
