import HeroSection from "./components/(pages)/home/hero-section/page";
import StatsSection from "./components/(pages)/home/stats-section/page";
import SupportSection from "./components/(pages)/home/support-section/page";
import ProductCarousel from "./components/(pages)/home/product-carousel/page";
import MapSection from "./components/(pages)/home/map-section/page";
import OperatingHours from "./components/(pages)/home/operating-hours/page";
import ContactSection from "./components/(pages)/home/contact-section/page";
import FAQs from "./components/(pages)/home/faqs/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
        <HeroSection />
        <StatsSection />
        <SupportSection />
        <ProductCarousel />
        <MapSection />
        <OperatingHours />
        <FAQs />
        <ContactSection />
        <Footer />
    </>
  );
}
