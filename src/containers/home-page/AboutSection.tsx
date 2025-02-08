import { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  useScroll,
} from "framer-motion";

const AboutSection = () => {
  const heading1 = "My name is Sebastien, I'm a web";
  const heading2 = "developer based in France.";
  const { scrollY } = useScroll();

  const [prevScrollY, setPrevScrollY] = useState(0); // to store the previous scroll position
  const [direction, setDirection] = useState(1); // initial direction
  const x = useMotionValue(0);

  const xTranslate = useTransform(x, (value) => `${value}%`);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollY.get();
      const diff = currentScrollY - prevScrollY;

      if (diff > 0) {
        setDirection(1);
      } else if (diff < 0) {
        setDirection(-1);
      }
      setPrevScrollY(currentScrollY);
    };

    const unsubscribe = scrollY.onChange(handleScroll);

    return () => unsubscribe();
  }, [scrollY, prevScrollY]);

  useAnimationFrame(() => {
    if (x.get() <= -100) {
      x.set(0);
    }
    if (x.get() > 0) {
      x.set(-100);
    }
    x.set(x.get() + direction * 0.04); // move based on the current direction
  });

  return (
    <section className="mt-60 overflow-hidden px-10 py-5">
      <div className="max-w-8xl mx-auto relative">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 2.5,
          }}
          className="lg:text-2xl"
        >
          02/
        </motion.span>

        <div className="flex justify-between mt-4 gap-6">
          <div>
            <div className="flex items-center gap-20 w-full">
              <div className="flex w-full">
                {"hi".split("").map((l, i) => (
                  <div
                    key={i}
                    className="overflow-hidden uppercase lg:text-[148px] w-fit"
                  >
                    <motion.span
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      transition={{
                        ease: [0.65, 0, 0.35, 1],
                        duration: 0.75,
                        delay: 0.08 * i,
                      }}
                      className="inline-block"
                    >
                      {l}
                    </motion.span>
                  </div>
                ))}
              </div>
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1, originX: 0 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  duration: 0.75,
                  delay: 0.2,
                }}
                className="h-1 bg-white inline-block opacity-50 w-full origin-left"
              ></motion.span>
            </div>

            <div className="lg:text-2xl indent-8">
              <h2 className="uppercase">
                {heading1.split("").map((l, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * i,
                    }}
                    key={i}
                  >
                    {l}
                  </motion.span>
                ))}
                <br />
                {heading2.split("").map((l, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * i,
                    }}
                    key={i}
                  >
                    {l}
                  </motion.span>
                ))}
              </h2>
            </div>
          </div>
          <div className="w-2/4 h-auto flex justify-end">
            <Image
              src={"/sebastien-mzi.webp"}
              width={2396}
              height={2520}
              quality={80}
              alt="Photo portrait de Sébastien Morazzani (Sébastien Morazzani-Marigny)"
            />
          </div>
        </div>

        <div className="absolute whitespace-nowrap flex z-10 -bottom-[23%]">
          <motion.p
            initial={{ x: "0%" }}
            style={{ x: xTranslate }}
            className="uppercase text-[342px]"
          >
            Sebastien Morazzani -
          </motion.p>
          <motion.p
            initial={{ x: "0%" }}
            style={{ x: xTranslate }}
            className="uppercase text-[342px] absolute left-full"
          >
            Sebastien Morazzani -
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
