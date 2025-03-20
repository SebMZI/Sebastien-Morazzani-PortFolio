import FlipLinks from "@/components/FlipLinks";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="max-w-8xl mx-auto px-5 y-5 mt-60">
        <div className="flex flex-col gap-10 md:gap-16 mb-16 md:mb-32">
          <h2 className="uppercase text-3xl md:text-5xl">
            let&apos;s work together !
          </h2>
          <div className="text-base md:text-lg flex flex-col gap-10 md:gap-20">
            <div className="flex flex-col md:flex-row justify-between gap-7">
              <div>
                <h3 className="opacity-50">GENERAL</h3>
                <Link
                  className="uppercase z-[8] relative mix-blend-difference"
                  href="mailto:contact@sebastien-morazzani.com"
                >
                  contact@sebastien-morazzani.com
                </Link>
              </div>
              <div className="flex gap-32">
                <ul className="flex flex-col gap-2">
                  <li>
                    <FlipLinks target="" href="/">
                      Home
                    </FlipLinks>
                  </li>
                  <li>
                    <FlipLinks target="" href="/#about">
                      About
                    </FlipLinks>
                  </li>
                  <li>
                    <FlipLinks target="" href="/#my-projects">
                      Work
                    </FlipLinks>
                  </li>
                </ul>
                <ul className="flex flex-col gap-2">
                  <li>
                    <FlipLinks target="" href="/">
                      privacy_policy
                    </FlipLinks>
                  </li>
                </ul>
              </div>
            </div>
            <p className="opacity-50 ">©2025 SMZI - ALL RIGHTS RESERVED</p>
          </div>
        </div>
        <svg
          width="1317"
          height="372"
          viewBox="0 0 1317 372"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-fit my-5 overflow-hidden"
        >
          <path
            d="M144.531 371.3C110.611 371.3 86.7611 360.17 59.2011 336.32L17.3311 366H14.1511L0.371135 235.09L4.08113 234.03L33.2311 288.09C57.6111 333.14 92.5911 365.47 142.941 365.47C186.401 365.47 208.661 336.85 208.661 302.93C208.661 190.57 12.0311 235.62 12.0311 97.29C12.0311 40.58 64.5011 0.29997 121.211 0.29997C155.131 0.29997 181.101 16.2 201.771 38.46L240.461 5.6H243.641L252.651 125.91L248.941 126.97L224.031 82.98C204.421 46.41 171.561 5.6 121.211 5.6C86.7611 5.6 66.6211 26.27 66.6211 58.07C66.6211 163.54 263.251 124.85 263.251 267.42C263.251 317.77 220.321 371.3 144.531 371.3Z"
            fill="white"
          />

          <path
            d="M436.503 5.6L527.663 261.06L621.473 5.6H747.083V8.77999L699.383 11.43L721.643 360.17L766.693 362.82V366H593.383V362.82L642.673 360.17L621.473 19.91L493.213 371.3H490.033L363.893 14.61L344.283 319.89L415.833 362.82V366H294.993V362.82L338.983 321.02L358.593 11.43L310.893 8.77999V5.6H436.503Z"
            fill="white"
          />

          <path
            d="M1097.58 366H806.609V362.82L1017.55 10.9H890.879L829.929 119.55H826.749L832.049 5.6H1102.88V8.77999L891.409 360.7H1037.16L1094.4 238.8H1097.58V366Z"
            fill="white"
          />

          <path
            d="M1316.56 366H1145.37V362.82L1192.54 360.17V11.43L1145.37 8.77999V5.6H1316.56V8.77999L1269.39 11.43V360.17L1316.56 362.82V366Z"
            fill="white"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
