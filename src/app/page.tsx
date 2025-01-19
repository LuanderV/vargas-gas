import HeroSection from "./components/(pages)/home/hero-section/page";
import StatsSection from "./components/(pages)/home/stats-section/page";
import SupportSection from "./components/(pages)/home/support-section/page";
import MapSection from "./components/(pages)/home/map-section/page";
import OperatingHours from "./components/(pages)/home/operating-hours/page";
import Footer from "./components/footer/page";
import ProductCarousel from "./components/(pages)/home/product-carousel/page";

export default function Home() {
  return (
    <>
      <div className="px-16 max-w-5xl mx-auto">
        <HeroSection />
        <StatsSection />
        <ProductCarousel />
        <SupportSection />
        <MapSection />
        <OperatingHours />
      </div>
        <Footer />
    </>
  );
}
