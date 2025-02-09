import { motion } from "framer-motion";

const WorkSection = () => {
  return (
    <section className="mt-60 px-10 py-5">
      <div className="max-w-8xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: [0.65, 0, 0.35, 1],
            duration: 2.0,
          }}
          className="lg:text-2xl"
        >
          03/
        </motion.span>
        <div className="flex items-center justify-between gap-20">
          <motion.span
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1, originX: 0 }}
            transition={{
              ease: [0.65, 0, 0.35, 1],
              duration: 0.75,
            }}
            className="h-1 bg-white inline-block opacity-50 w-full origin-left"
          ></motion.span>
          <div className="flex">
            {"work".split("").map((l, i) => (
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
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
