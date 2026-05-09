# Netpro Model School & College - Project Documentation

## Project Overview
This project is a modernized frontend architecture and design skeleton for "Netpro Model School & College, Bogura". It is built as a multi-page website using Next.js (App Router). Currently, server-side features use mocked data, but the architecture is designed to eventually connect to a NestJS backend.

## Tech Stack
*   **Framework:** Next.js 15 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 (CSS-native `@theme` configuration)
*   **Icons:** Lucide React
*   **Fonts:** Inter (body) and Outfit (headings) via `next/font/google`

## Design System
The design system is primarily configured in `src/app/globals.css` using Tailwind v4's `@theme` directive.

*   **Colors (Exact Brand Palette):**
    *   Primary: Blue (`#2c3691`)
    *   Secondary: Green (`#0b8d45`)
    *   Accent: Red (`#ec1f27`)
*   **Neutrals:** Warm/cool tinted off-whites (e.g., `#F9FAFB`) and charcoals (e.g., `#1E293B`). *No pure `#FFFFFF` or `#000000`.*
*   **Typography:** Inter for body text (`--font-sans`), Outfit for headings (`--font-heading`).

## Directory Structure

```text
src/
├── app/                          # Next.js App Router pages & routing
│   ├── globals.css               # Global styles & Tailwind @theme design system
│   ├── layout.tsx                # Root layout (incorporates Navbar & Footer)
│   ├── page.tsx                  # Home page (Hero, Stats, Messages, Events, Notices, Faculty, CTA)
│   ├── about/page.tsx            # About Us (Placeholder)
│   ├── academics/page.tsx        # Academics & Admissions (Placeholder)
│   ├── admin/page.tsx            # Admin Login UI (Client Component)
│   ├── contact/page.tsx          # Contact Us (Placeholder)
│   ├── gallery/page.tsx          # Photo Gallery (Server Component)
│   └── notices/page.tsx          # Notice Board (Server Component)
├── components/                   # React components
│   ├── home/                     # Home page specific sections
│   │   ├── EventsSection.tsx     # Homepage Events View
│   │   ├── FacultySection.tsx    # Faculty Showcase (Filtered by isFeatured)
│   │   ├── HeroSection.tsx       # Auto-playing image carousel
│   │   ├── MessageSection.tsx    # Chairman & Principal Messages
│   │   ├── QuickStats.tsx        # School Statistics
│   │   ├── RecentNotices.tsx     # Recent Notices Grid
│   │   └── FeaturedGallery.tsx   # Homepage gallery (Filtered by isFeatured)
│   ├── layout/                   # Shared structural components
│   │   ├── Footer.tsx            # Global footer (Server Component)
│   │   └── Navbar.tsx            # Global navigation (Client Component, responsive)
│   └── ui/                       # Reusable UI primitives
│       ├── EventCard.tsx         # Reusable event card with date badge
│       ├── FacultyCard.tsx       # Reusable dark-themed faculty profile card
│       ├── NoticeCard.tsx        # Reusable horizontal notice card
│       └── FadeIn.tsx            # IntersectionObserver wrapper for scroll animations
├── data/                         # Mock data & API simulation layer
│   ├── events.ts                 # Mock events data (uses isPinned)
│   ├── gallery.ts                # Mock gallery images (uses isFeatured)
│   ├── navigation.ts             # Centralized nav and footer link configurations
│   └── notices.ts                # Mock notices (uses isPinned)
└── types/
    └── index.ts                  # Shared TypeScript interfaces (Notice, GalleryImage, NavLink, etc.)

public/
└── logo.svg                      # SVG placeholder logo (to be replaced with actual PNG)
```

## Key Architectural Decisions

1.  **Tailwind v4 Setup:** We are using the modern Tailwind v4 approach. Configuration is done via CSS variables and the `@theme inline` directive directly inside `src/app/globals.css`, rather than a `tailwind.config.ts` file.
2.  **Centralized Navigation Data:** All links for the Navbar and Footer are defined in `src/data/navigation.ts`. This acts as a single source of truth to prevent inconsistencies.
3.  **Mock Data Layer:** To prepare for the future NestJS backend integration, mock data features (Notices, Gallery) use asynchronous fetcher functions (e.g., `getNotices()` in `src/data/notices.ts`) that simulate network latency.
4.  **Component Strategy:**
    *   **Server Components (Default):** Used for pages fetching data (`/notices`, `/gallery`) and static layouts (`Footer.tsx`).
    *   **Client Components (`"use client"`):** Used only when interactivity or browser APIs are required (`Navbar.tsx` for scroll/toggle state, `/admin` for form handling).
5.  **Images:** The `next/image` component is configured in `next.config.ts` to allow images from `images.unsplash.com` for the mock gallery.

## Current Completion Status

*   **[DONE] Phase 1: Foundation:** Project structure, Tailwind v4 config, exact brand colors applied, mock data/types created.
*   **[DONE] Phase 2: Shared Layouts:** Responsive `Navbar` and 4-column `Footer` implemented and integrated into root `layout.tsx`.
*   **[DONE] Phase 3: Homepage Revamp:** Modernized homepage with `HeroSection`, `QuickStats`, `MessageSection`, `EventsSection`, `RecentNotices`, `FacultySection`, and `FeaturedGallery`. Implemented subtle entrance animations using a custom `FadeIn` component.
*   **[DONE] Phase 4: Mock Backend Pages:**
    *   `/notices`: Server component listing notices.
    *   `/gallery`: Server component with CSS masonry image grid.
    *   `/admin`: Client component with login form UI.
*   **[PENDING]:** Fleshing out placeholder pages (`/about`, `/academics`, `/contact`, `/events`), replacing the placeholder `logo.svg` with the actual school logo, and eventually migrating mock data fetching to real NestJS API calls.

## Instructions for AI Agents
When working on this project, adhere to the following guidelines:

1.  **Read this document first** to understand the architecture and design constraints.
2.  **Update this document:** If you add new routes, significant components, or change architectural patterns, update this `PROJECT_DOCS.md` file accordingly.
3.  **Respect the Design System:** Do not introduce random hex colors. Use the defined Tailwind variables (e.g., `bg-primary-500`, `text-surface-alt`) from `globals.css`. Maintain the "no pure white/black" rule.
4.  **Data Fetching:** Always abstract data fetching into the `src/data/` folder, even if mocking, to keep components clean and prepare for the backend migration.
5.  **Component Placement:** Keep shared UI in `src/components/ui/`, layout wrappers in `src/components/layout/`, and feature-specific parts in folders like `src/components/home/`.
