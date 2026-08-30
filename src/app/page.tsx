import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TrusteesSection from "@/components/TrusteesSection";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <TrusteesSection />
        <MissionSection />
      </main>
      <Footer />
    </>
  );
}
