import HeroSection from "@/components/home/HeroSection";
import QuickStats from "@/components/home/QuickStats";
import RecentNotices from "@/components/home/RecentNotices";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <QuickStats />
      <RecentNotices />
      <CallToAction />
    </main>
  );
}
