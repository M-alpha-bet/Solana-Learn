import { motion } from "motion/react";

export default function LowCostIcons() {
  const icons = [
    {
      id: 1,
      name: "origami-plane",
      src: "/icons/lowcost-features/origami-plane.png",
      alt: "Origami plane",
      initial: { x: -300, y: -300, opacity: 0 },
      final: { x: -180, y: -120 },
    },
    {
      id: 2,
      name: "cheap",
      src: "/icons/lowcost-features/cheap.png",
      alt: "Cheap",
      initial: { y: -300, opacity: 0 },
      final: { x: -10, y: -140 },
    },
    {
      id: 3,
      name: "drum",
      src: "/icons/lowcost-features/drum.png",
      alt: "Drum",
      initial: { x: 300, y: 300, opacity: 0 },
      final: { x: 100, y: 120 },
    },
    {
      id: 4,
      name: "money-tongue",
      src: "/icons/lowcost-features/money-tongue.png",
      alt: "Money tongue",
      scale: 2.2,
      className: "w-20 h-20 z-10",
      initial: { x: 300, opacity: 0 },
      final: { x: 0, y: 0 },
    },
    {
      id: 5,
      name: "earth-lowfi",
      src: "/icons/lowcost-features/earth-lowfi.png",
      alt: "Earth",
      initial: { x: 300, opacity: 0 },
      final: { x: 130, y: 0 },
    },
    {
      id: 6,
      name: "tape",
      src: "/icons/lowcost-features/tape.png",
      alt: "Tape",
      initial: { x: -300, y: 300, opacity: 0 },
      final: { x: -220, y: 60 },
    },
  ];

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
      {icons.map(
        ({
          id,
          scale,
          src,
          alt,
          initial,
          final,
          className = "w-auto h-auto",
        }) => (
          <motion.div
            key={id}
            initial={initial}
            animate={{ x: final.x, y: final.y, opacity: 1, scale: scale }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: id * 0.1,
            }}
            className="absolute"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <motion.img
              src={src}
              alt={alt}
              className={className}
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 2 + id * 0.15,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )
      )}
    </div>
  );
}
