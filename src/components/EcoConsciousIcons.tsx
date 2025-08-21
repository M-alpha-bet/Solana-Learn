import { motion, AnimatePresence } from "motion/react";

export default function EcoConsciousIcons() {
  return (
    <div className="absolute top-[8rem] right-[7rem] max-w-[25rem] flex flex-col gap-2">
      <AnimatePresence mode="popLayout">
        {/* Sun with pulsing scale */}
        <motion.div
          initial={{ x: 200, y: 0, opacity: 0 }}
          animate={{ x: 130, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-2"
        >
          <motion.img
            src="/icons/eco-features/sun.png"
            alt="Sun"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Earth with slow rotation */}
        <motion.div
          initial={{ x: 200, y: 0, opacity: 0 }}
          animate={{ x: -60, y: -140, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/icons/eco-features/eco-earth.png"
            alt="Earth"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Recycle with 1/3 step rotation */}
        <motion.div
          initial={{ x: 200, y: 0, opacity: 0 }}
          animate={{ x: -175, y: -250, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/icons/eco-features/recycle.png"
            alt="Recycle"
            animate={{ rotate: [0, 120, 240, 360] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
