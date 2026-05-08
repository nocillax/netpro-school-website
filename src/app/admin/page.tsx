"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, Mail, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login attempt
    setTimeout(() => {
      setIsLoading(false);
      alert("Login functionality will be connected to the NestJS backend.");
    }, 1500);
  }

  return (
    <main className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-gradient-to-br from-surface via-surface-alt to-surface p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-card-hover border border-border p-8 md:p-10">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 mb-5">
              <ShieldCheck size={28} className="text-primary-600" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-text-heading mb-2">
              Admin Portal
            </h1>
            <p className="text-sm text-text-muted">
              Sign in to manage notices, gallery, and site content.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="admin-email"
                className="block text-sm font-semibold text-text-heading mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  id="admin-email"
                  type="email"
                  placeholder="admin@netpro.edu.bd"
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-surface-alt border border-border text-text-heading text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="admin-password"
                className="block text-sm font-semibold text-text-heading mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-11 pr-12 py-3 rounded-xl bg-surface-alt border border-border text-text-heading text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-heading transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary-600 focus:ring-primary-400"
                />
                <span className="text-sm text-text-muted">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Note */}
          <p className="mt-6 text-center text-xs text-text-muted">
            This portal is restricted to authorized school administrators only.
          </p>
        </div>

        {/* Bottom branding */}
        <p className="text-center text-xs text-text-muted mt-6">
          Netpro Model School &amp; College, Bogura
        </p>
      </div>
    </main>
  );
}
