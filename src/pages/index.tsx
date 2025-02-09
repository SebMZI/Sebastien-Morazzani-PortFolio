import HeroSection from "@/containers/home-page/HeroSection";
import AboutSection from "@/containers/home-page/AboutSection";
import WorkSection from "@/containers/home-page/WorkSection";
import Footer from "@/containers/home-page/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}
