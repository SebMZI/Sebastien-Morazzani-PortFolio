"use client";
import { createContext, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import useMousePosition from "@/hooks/useMousePosition";
import { motion } from "framer-motion";

export const AppContext = createContext({
  hasLoaded: false,
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { x, y } = useMousePosition();
  const cursorSize = 15;

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }, 2000);
    } else {
      const handleLoad = () => {
        setTimeout(() => {
          setIsLoading(false);
          window.scrollTo(0, 0);
        }, 2000);
      };

      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return (
    <>
      <motion.div
        animate={{ x: x - cursorSize / 2, y: y - cursorSize / 2 }}
        transition={{ type: "tween", ease: "backOut" }}
        className="z-[99999] custom-cursor"
      ></motion.div>
      {!hasLoaded && (
        <>
          <style jsx global>{`
            body {
              overflow: hidden;
            }
          `}</style>
          <Loader loading={isLoading} setHasLoaded={setHasLoaded} />
        </>
      )}
      <AppContext.Provider value={{ hasLoaded: hasLoaded }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>
  );
}
