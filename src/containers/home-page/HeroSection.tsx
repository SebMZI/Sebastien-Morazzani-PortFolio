import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "@/pages/_app";
import Link from "next/link";

const HeroSection = () => {
  const { hasLoaded } = useContext(AppContext);
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const timeString = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Europe/Paris",
      }).format(date);

      setTime(timeString);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="max-w-8xl mx-auto px-5 py-5">
        <div className="flex justify-between items-center">
          <div className="font-amulya text-white ">
            <div className="flex gap-2">
              <div className="flex flex-col items-center text-2xl">
                <span>S</span>
                <span>Z</span>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <span>M</span>
                <span>I</span>
              </div>
            </div>
          </div>
          <p className="text-white font-akkurat">NANTES, FR, {time}</p>
        </div>
        <svg
          width="1317"
          height="372"
          viewBox="0 0 1317 372"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-fit my-5 overflow-hidden"
        >
          <motion.path
            d="M144.531 371.3C110.611 371.3 86.7611 360.17 59.2011 336.32L17.3311 366H14.1511L0.371135 235.09L4.08113 234.03L33.2311 288.09C57.6111 333.14 92.5911 365.47 142.941 365.47C186.401 365.47 208.661 336.85 208.661 302.93C208.661 190.57 12.0311 235.62 12.0311 97.29C12.0311 40.58 64.5011 0.29997 121.211 0.29997C155.131 0.29997 181.101 16.2 201.771 38.46L240.461 5.6H243.641L252.651 125.91L248.941 126.97L224.031 82.98C204.421 46.41 171.561 5.6 121.211 5.6C86.7611 5.6 66.6211 26.27 66.6211 58.07C66.6211 163.54 263.251 124.85 263.251 267.42C263.251 317.77 220.321 371.3 144.531 371.3Z"
            fill="white"
            initial={{ translateY: "100%" }}
            animate={{
              translateY: hasLoaded ? "0%" : "100%",
            }}
            transition={{ duration: 1.0, delay: 0.0, ease: "easeOut" }}
          />

          <motion.path
            d="M436.503 5.6L527.663 261.06L621.473 5.6H747.083V8.77999L699.383 11.43L721.643 360.17L766.693 362.82V366H593.383V362.82L642.673 360.17L621.473 19.91L493.213 371.3H490.033L363.893 14.61L344.283 319.89L415.833 362.82V366H294.993V362.82L338.983 321.02L358.593 11.43L310.893 8.77999V5.6H436.503Z"
            fill="white"
            initial={{ translateY: "100%" }}
            animate={{
              translateY: hasLoaded ? "0%" : "100%",
            }}
            transition={{ duration: 1.0, delay: 0.25, ease: "easeOut" }}
          />

          <motion.path
            d="M1097.58 366H806.609V362.82L1017.55 10.9H890.879L829.929 119.55H826.749L832.049 5.6H1102.88V8.77999L891.409 360.7H1037.16L1094.4 238.8H1097.58V366Z"
            fill="white"
            initial={{ translateY: "100%" }}
            animate={{
              translateY: hasLoaded ? "0%" : "100%",
            }}
            transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
          />

          <motion.path
            d="M1316.56 366H1145.37V362.82L1192.54 360.17V11.43L1145.37 8.77999V5.6H1316.56V8.77999L1269.39 11.43V360.17L1316.56 362.82V366Z"
            fill="white"
            initial={{ translateY: "100%" }}
            animate={{
              translateY: hasLoaded ? "0%" : "100%",
            }}
            transition={{ duration: 1.0, delay: 0.75, ease: "easeOut" }}
          />
        </svg>
        <div className="my-20 flex justify-between items-end text-3xl">
          <span>01/</span>
          <h1 className="text-right w-7/12">
            AN INDEPENDANT WEBDEVELOPER BASED IN NANTES WITH AN INTEREST IN
            SOLVING YOUR PROBLEMS TO CREATE ORIGINAL PROJECTS.
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start gap-12">
            <p className="opacity-50">LOCATION</p>
            <span className="">47.218102°N, -1.552800°W</span>
          </div>
          <div>[ SCROLL ]</div>
          <nav>
            <ul className="flex justify-end gap-8 opacity-50">
              <li>
                <Link href={"/"}>PROJECTS</Link>
              </li>
              <li>
                <Link href={"/"}>ABOUT</Link>
              </li>
              <li>
                <Link href={"/"}>CONTACT</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
