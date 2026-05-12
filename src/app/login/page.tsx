"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "@/app/actions/auth";
import { Lock, User } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);

    if (result.success) {
      router.push("/admin");
      router.refresh();
    } else {
      setError(result.error || "Login failed");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-surface-alt flex flex-col items-center justify-center p-4 pt-20">
      <div className="w-full max-w-md bg-surface rounded-3xl shadow-card border border-border p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-text-heading mb-2">
            Admin Login
          </h1>
          <p className="text-text-muted text-sm">
            Please enter your credentials to access the admin panel.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-accent-50 border border-accent-200 text-accent-700 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-text-heading"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                <User size={18} />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full pl-10 pr-4 py-3 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                placeholder="Enter username"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-text-heading"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                <Lock size={18} />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full pl-10 pr-4 py-3 bg-surface-alt border border-border rounded-xl text-text-body focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                placeholder="Enter password"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-text-muted">
            Hint: For this draft, use <span className="font-mono font-bold text-text-heading">admin</span> / <span className="font-mono font-bold text-text-heading">password123</span>
          </p>
        </div>
      </div>
    </main>
  );
}
