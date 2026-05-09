import HeroSection from "@/components/home/HeroSection";

import MessageSection from "@/components/home/MessageSection";
import EventsSection from "@/components/home/EventsSection";
import RecentNotices from "@/components/home/RecentNotices";
import FacultySection from "@/components/home/FacultySection";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FadeIn delay={100}><MessageSection /></FadeIn>
      <FadeIn delay={100}><EventsSection /></FadeIn>
      <FadeIn delay={100}><RecentNotices /></FadeIn>
      <FadeIn delay={100}><FacultySection /></FadeIn>
      <FadeIn delay={100}><FeaturedGallery /></FadeIn>
    </main>
  );
}
