import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <Loader loading={isLoading} />
      <Component {...pageProps} />
    </>
  );
}
