import Head from "next/head";
import { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "@/containers/home-page/HeroSection";
import AboutSection from "@/containers/home-page/AboutSection";
import WorkSection from "@/containers/home-page/WorkSection";
import Footer from "@/containers/home-page/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sebastien Morazzani",
    jobTitle: "Freelance Front-End Developer",
    url: "https://www.sebastien-morazzani.com",
    sameAs: [
      "https://www.linkedin.com/in/sebastien-morazzani/",
      "https://github.com/SebMZI",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Sebastien Morazzani - SMZI - Territa",
    },
  };

  return (
    <>
      <Head>
        <title>Sebastien Morazzani - Freelance Front-End Developer</title>
        <meta
          name="description"
          content="Portfolio of Sebastien Morazzani, a freelance front-end developer specializing in creating modern and responsive websites."
        />
        <meta
          name="keywords"
          content="Sebastien Morazzani, front-end developer, freelance, web development, React, Next.js"
        />
        <meta
          property="og:title"
          content="Sebastien Morazzani - Freelance Front-End Developer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Sebastien Morazzani, a specialist in crafting modern web applications."
        />
        <meta property="og:image" content="/smzi_preview.png" />
        <meta property="og:url" content="https://www.sebastien-morazzani.com" />
        <meta
          name="twitter:title"
          content="Sebastien Morazzani - Freelance Front-End Developer"
        />
        <meta
          name="twitter:description"
          content="Discover the projects of Sebastien Morazzani, specializing in creating modern and responsive websites with Next.js and React"
        />
        <meta name="twitter:image" content="/smzi_preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}
