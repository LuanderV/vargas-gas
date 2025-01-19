import HeroSection from "./components/(pages)/home/hero-section/page";
import StatsSection from "./components/(pages)/home/stats-section/page";
import SupportSection from "./components/(pages)/home/support-section/page";
import MapSection from "./components/(pages)/home/map-section/page";

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
