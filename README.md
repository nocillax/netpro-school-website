# Netpro Model School & College

This is the modernized frontend architecture and design skeleton for the **Netpro Model School & College, Bogura** website. 

It is built as a multi-page web application using [Next.js](https://nextjs.org/) (App Router). The current iteration utilizes mocked data, laying the foundation for a future connection to a dedicated NestJS backend API.

## Features

- **Modern Design System:** Built with Tailwind CSS v4, utilizing a customized `@theme` to match the exact brand palette.
- **Responsive Layouts:** Mobile-friendly navigation, masonry galleries, and adaptable grid layouts.
- **Admin Dashboard:** A protected `/admin` route with sidebar navigation and session-based authentication using cookies.
- **Inline Editing:** Authenticated administrators can use an inline edit overlay on the homepage.
- **Local Asset Management:** Fully utilizes optimized, local `.webp` images for fast loading and contextually accurate visual representation.

## Tech Stack

*   **Framework:** Next.js 16 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4
*   **Icons:** Lucide React
*   **Fonts:** Inter & Outfit (via `next/font/google`)

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run the Development Server:**
   ```bash
   npm run dev
   ```

3. **Access the Application:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Documentation

For a comprehensive guide on the architectural decisions, component structure, and design system guidelines, please refer to the `PROJECT_DOCS.md` file located in the root directory.

## Admin Access

The project includes an admin portal located at `/admin`.
*   **Login Page:** `/login`
*   **Credentials:** You can find the mock admin credentials in `src/data/users.ts`.
