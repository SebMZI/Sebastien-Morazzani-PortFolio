import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import FlipLinks from "./FlipLinks";

interface ImageData {
  href: string;
  width: number;
  height: number;
}

interface ProjectHeader {
  project_name: string;
  category: string;
  client: string;
  year: string;
}

interface ProjectContent {
  text: string;
  link: string;
  images: ImageData[];
  tech: string[];
}

interface Project {
  header: ProjectHeader;
  content: ProjectContent;
}

interface Props {
  i: number;
  expanded: number | boolean;
  setExpanded: React.Dispatch<React.SetStateAction<number | boolean>>;
  project: Project;
}

const Accordion = ({ i, expanded, setExpanded, project }: Props) => {
  const isOpen = i === expanded;

  return (
    <AnimatePresence>
      <div
        className="flex justify-between border-t-[1px] border-white py-4 relative overflow-hidden group cursor-pointer"
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <p className="w-[35vw] z-10 relative mix-blend-difference group-hover:translate-x-5 transition-all duration-300">
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
          <div className="py-10">
            <h3 className="mb-10 uppercase text-xl w-2/4">
              {project.content.text}
            </h3>
            <FlipLinks target="_blank" href={project.content.link}>
              See_website
            </FlipLinks>
            <ul className="flex gap-4 mt-5">
              {project.content.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 mt-20">
              {project.content.images.map((img, index) => (
                <Image
                  key={index}
                  src={img.href}
                  width={img.width}
                  height={img.height}
                  alt={`Screenshot of ${project.header.project_name} project`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Accordion;
