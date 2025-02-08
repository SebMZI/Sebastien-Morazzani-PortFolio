import { motion } from "framer-motion";

const Loader = ({
  loading,
  setHasLoaded,
}: {
  loading: boolean;
  setHasLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      className={`fixed inset-0 h-screen w-screen bg-black z-50`}
      initial={{ opacity: 1 }}
      animate={{
        opacity: loading ? 1 : 0,
        transition: { duration: 1.0, delay: 2.0 },
      }}
      onAnimationComplete={() => {
        if (!loading) {
          setHasLoaded(true);
        }
      }}
    >
      <motion.div
        id="loading-logo"
        className={`w-full font-amulya text-white max-w-8xl mx-auto relative px-5 py-5 `}
        initial={{
          top: "calc(50% - 40px)",
          left: "calc(50% - 40px)",
        }}
        animate={{
          top: loading ? "calc(50% - 40px)" : "0%",
          left: loading ? "calc(50% - 40px)" : "0%",
        }}
        transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
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
