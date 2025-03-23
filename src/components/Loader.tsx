import { motion } from "framer-motion";

const logoVariants = {
  loading: {
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
  },
  loaded: {
    top: 0,
    left: 0,
    x: 0,
    y: 0,
  },
};

const Loader = ({
  loading,
  setHasLoaded,
}: {
  loading: boolean;
  setHasLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{
        opacity: loading ? 1 : 0,
        transition: { duration: 1.0, delay: 2.0 },
      }}
      onAnimationComplete={() => {
        if (!loading) setHasLoaded(true);
      }}
    >
      {/* Conteneur pour centrer le logo puis le repositionner */}
      <motion.div
        id="loading-logo"
        className="fixed z-50 px-5 md:px-10 py-5 font-amulya text-white"
        variants={logoVariants}
        initial="loading"
        animate={loading ? "loading" : "loaded"}
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
