import HeroSection from "@/containers/home-page/HeroSection";
import AboutSection from "@/containers/home-page/AboutSection";
import WorkSection from "@/containers/home-page/WorkSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WorkSection />
    </main>
  );
}
