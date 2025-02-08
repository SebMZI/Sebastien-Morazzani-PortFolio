import { createContext, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export const AppContext = createContext({
  hasLoaded: false,
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      const handleLoad = () => {
        setTimeout(() => {
          setIsLoading(false);
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
