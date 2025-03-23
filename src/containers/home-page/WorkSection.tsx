import { motion } from "framer-motion";
import { useState } from "react";
import projectsData from "@/data/ProjectsData.json";
import Accordion from "@/components/Accordion";

const WorkSection = () => {
  const [expanded, setExpanded] = useState<number | boolean>(false);

  return (
    <section className="mt-60 px-5 md:px-10 py-5" id="my-projects">
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
          <h2 className="flex">
            {["W", "O", "R", "K"].map((l, i) => (
              <div
                key={i}
                className="overflow-hidden uppercase w-auto min-w-[18px]"
              >
                <motion.span
                  initial={{ x: "-100%" }}
                  whileInView={{ x: 0 }}
                  transition={{
                    ease: [0.65, 0, 0.35, 1],
                    duration: 0.75,
                    delay: 0.08 * i,
                  }}
                  className="inline-block  md:text-[148px]"
                >
                  {l}
                </motion.span>
              </div>
            ))}
          </h2>
        </div>
        <div className="mt-10">
          <div className="flex justify-between w-full opacity-70 py-4">
            <p className="w-[35vw]">Project</p>
            <p className="w-[45vw] hidden md:block">Category</p>
            <p className="w-[25vw] hidden md:block">Client</p>
            <p>Year</p>
          </div>
          {projectsData?.map((project, i) => (
            <Accordion
              key={i}
              i={i}
              expanded={expanded}
              setExpanded={setExpanded}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
