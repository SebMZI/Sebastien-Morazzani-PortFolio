import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  const heading1: string = "My name is Sebastien, I'm a web";
  const heading2: string = "developer based in France.";

  return (
    <section className="mt-64">
      <div className="max-w-8xl mx-auto px-5 py-5">
        <span className="lg:text-2xl">02/</span>
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
                      initial={{ x: "100%" }}
                      whileInView={{ x: 0 }}
                      transition={{
                        ease: [0.65, 0, 0.35, 1],
                        duration: 0.4,
                      }}
                    >
                      {l}
                    </motion.span>
                  </div>
                ))}
              </div>
              <span className="h-1 bg-white inline-block opacity-50 w-full"></span>
            </div>

            <div className="lg:text-2xl indent-8">
              <h2 className="uppercase">
                {heading1.split("").map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
                <br />
                {heading2.split("").map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
            </div>
          </div>
          <div className="">
            <Image
              src={"/sebastien-mzi.png"}
              width={599}
              height={874}
              loading="lazy"
              alt="test"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
