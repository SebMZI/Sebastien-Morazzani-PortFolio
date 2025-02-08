import HeroSection from "@/containers/home-page/HeroSection";
import AboutSection from "@/containers/home-page/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
    </main>
  );
}
