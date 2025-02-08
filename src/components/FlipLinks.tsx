import { motion } from "framer-motion";
import Link from "next/link";

const DURATION = 0.25;
const STAGGER = 0.025;
const FlipLinks = ({ children, href }: { children: string; href: string }) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative overflow-hidden whitespace-nowrap uppercase"
        whileHover="hovered"
        initial="initial"
      >
       <motion.div>
          {children.split("").map((l, i) => {
            return (
              <motion.span
                variants={{
                  initial: {
                    y: 0,
                  },
                  hovered: {
                    y: "-100%",
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block opacity-50"
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </motion.div>
        <motion.div className="absolute inset-0">
          {children.split("").map((l, i) => {
            return (
              <motion.span
                variants={{
                  initial: {
                    y: "100%",
                  },
                  hovered: {
                    y: 0,
                  },
                }}
                transition={{
                  duration: DURATION,
                  ease: "easeInOut",
                  delay: STAGGER * i,
                }}
                className="inline-block opacity-1"
                key={i}
              >
                {l}
              </motion.span>
            );
          })}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FlipLinks;
