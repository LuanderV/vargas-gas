import HeroSection from "@/app/components/hero-section/page";
import StatsSection from "./components/stats-section/page";
import SupportSection from "./components/support-section/page";
import MapSection from "./components/map-section/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SupportSection />
      <MapSection />
    </>
  );
}
