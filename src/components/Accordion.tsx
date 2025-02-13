import React from "react";
import { AnimatePresence, motion } from "motion/react";

interface Props {
  i: number;
  expended: number | boolean;
  setExpended: React.Dispatch<React.SetStateAction<number | boolean>>;
  project: {
    header: {
      project_name: string;
      category: string;
      client: string;
      year: string;
    };
    content: {
      text: string;
    };
  };
}

const Accordion = ({ i, expended, setExpended, project }: Props) => {
  const isOpen = i === expended;

  return (
    <AnimatePresence>
      <div
        className="flex border-t-[1px] border-white py-4 relative overflow-hidden group cursor-pointer"
        onClick={() => setExpended(isOpen ? false : i)}
      >
        <p className="w-[35vw] z-10 relative  mix-blend-difference group-hover:translate-x-5 transition-all duration-300">
          {project.header.project_name}
        </p>
        <p className="w-[45vw] hidden md:block z-10 relative mix-blend-difference">
          {project.header.category}
        </p>
        <p className="w-[25vw] hidden md:block z-10 relative mix-blend-difference">
          {project.header.client}
        </p>
        <p className="z-10 relative mix-blend-difference group-hover:-translate-x-5 transition-all duration-300">
          {project.header.year}
        </p>
        <div className="w-full h-full absolute bg-white top-[100%] group-hover:top-[0%] transition-all duration-300"></div>
      </div>
      {isOpen && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <div className="py-10"> This is a test</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Accordion;
