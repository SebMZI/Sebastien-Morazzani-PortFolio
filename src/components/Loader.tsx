import { motion } from "framer-motion";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <motion.div
      className={`fixed inset-0 h-screen w-full bg-black`}
      initial={{ opacity: 1 }}
      animate={{
        opacity: loading ? 1 : 0,
        transition: { duration: 1.0, delay: 2.25 },
      }}
    >
      <motion.div
        id="loading-logo"
        className={`font-amulya text-white max-w-7xl mx-auto px-5 py-5 relative`}
        initial={{
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          top: loading ? "50%" : "0%",
          left: loading ? "50%" : "0%",
          translateX: loading ? "-50%" : "0%",
          translateY: loading ? "-50%" : "0%",
        }}
        transition={{ duration: 1.85, ease: "easeInOut" }}
      >
        <div className="flex gap-2">
          <div className="flex flex-col items-center text-2xl">
            <motion.span
              animate={loading ? { scale: [1, 1.25, 1] } : { scale: 1 }}
              transition={{
                duration: 1,
                repeat: loading ? Infinity : 0,
                repeatDelay: 0.75,
              }}
            >
              S
            </motion.span>
            <motion.span
              animate={loading ? { scale: [1, 1.25, 1] } : { scale: 1 }}
              transition={{
                duration: 1,
                repeat: loading ? Infinity : 0,
                repeatDelay: 0.75,
                delay: 1.0,
              }}
            >
              Z
            </motion.span>
          </div>
          <div className="flex flex-col items-center text-2xl">
            <motion.span
              animate={loading ? { scale: [1, 1.25, 1] } : { scale: 1 }}
              transition={{
                duration: 1,
                repeat: loading ? Infinity : 0,
                repeatDelay: 0.75,
                delay: 0.25,
              }}
            >
              M
            </motion.span>
            <motion.span
              animate={loading ? { scale: [1, 1.25, 1] } : { scale: 1 }}
              transition={{
                duration: 1,
                repeat: loading ? Infinity : 0,
                repeatDelay: 0.75,
                delay: 0.5,
              }}
            >
              I
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
