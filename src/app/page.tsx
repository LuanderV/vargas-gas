import HeroSection from "./components/(pages)/home/hero-section/page";
import StatsSection from "./components/(pages)/home/stats-section/page";
import SupportSection from "./components/(pages)/home/support-section/page";
import MapSection from "./components/(pages)/home/map-section/page";
import OperatingHours from "./components/(pages)/home/operating-hours/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-green-100 via-white to-green-100 px-16">
        <HeroSection />
        <StatsSection />
        <SupportSection />
        <MapSection />
        <OperatingHours />
      </div>
        <Footer />
    </>
  );
}
