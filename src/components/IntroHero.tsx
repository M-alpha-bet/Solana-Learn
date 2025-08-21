import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Pointer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const fastIcons = [
  {
    id: 1,
    icon: <img src="/icons/intro/intro-raydium.jpeg.png" />,
    x: -300,
    y: -230,
  },
  {
    id: 2,
    icon: <img src="/icons/intro/intro-lightning.png" />,
    x: -150,
    y: -120,
  },
  { id: 3, icon: <img src="/icons/intro/intro-rocket.png" />, x: 0, y: -230 },
  { id: 4, icon: <img src="/icons/intro/intro-phantom.png" />, x: -250, y: 80 },
  { id: 5, icon: <img src="/icons/intro/intro-speed.png" />, x: 100, y: 80 },
];

const easyIcons = [
  { id: 1, icon: <img src="/icons/intro/intro-drip.png" />, x: -350, y: -180 },
  { id: 2, icon: <img src="/icons/intro/intro-smiley.png" />, x: 0, y: -220 },
  { id: 3, icon: <img src="/icons/intro/intro-smiley2.png" />, x: -280, y: 45 },
  { id: 4, icon: <img src="/icons/intro/intro-success.png" />, x: 25, y: 65 },
];

const funIcons = [
  {
    id: 1,
    icon: <img src="/icons/intro/intro-spaceship.png" />,
    scale: 2,
    x: -430,
    y: -190,
  },
  {
    id: 2,
    icon: <img src="/icons/intro/intro-gameview.png" />,
    scale: 1.5,
    x: -360,
    y: 110,
  },
  {
    id: 3,
    icon: <img src="/icons/intro/intro-gameview2.png" />,
    scale: 1,
    x: -30,
    y: -165,
  },
  {
    id: 4,
    icon: <img src="/icons/intro/intro-plant.png" />,
    scale: 1.5,
    x: -705,
    y: -5,
  },
  {
    id: 5,
    icon: <img src="/icons/intro/intro-sudocat.png" />,
    scale: 1.3,
    x: 20,
    y: 60,
  },
  {
    id: 6,
    icon: <img src="/icons/intro/intro-penguins.png" />,
    scale: 1.3,
    x: 300,
    y: -220,
  },
];

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const [isFastHovered, setIsFastHovered] = useState(false);
  const [isEasyHovered, setIsEasyHovered] = useState(false);
  const [isFunHovered, setIsFunHovered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;

    if (!section || !cursor) return;

    const moveCursor = (e: MouseEvent) => {
      const { left, top } = section.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      gsap.to(cursor, {
        x,
        y,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const showCursor = () => (cursor.style.opacity = "1");
    const hideCursor = () => (cursor.style.opacity = "0");

    section.addEventListener("mousemove", moveCursor);
    section.addEventListener("mouseenter", showCursor);
    section.addEventListener("mouseleave", hideCursor);

    return () => {
      section.removeEventListener("mousemove", moveCursor);
      section.removeEventListener("mouseenter", showCursor);
      section.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen pl-24 pr-[30%] flex items-center justify-center overflow-hidden cursor-none"
    >
      <h2 className="z-2">
        Meet and explore the blockchain built to be super
        <span
          className="relative underline pl-3 inline-block text-solanaPurple"
          onMouseEnter={() => setIsFastHovered(true)}
          onMouseLeave={() => setIsFastHovered(false)}
        >
          fast,
          <AnimatePresence>
            {isFastHovered &&
              fastIcons.map(({ id, icon, x, y }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-0 left-0 text-xl"
                >
                  {icon}
                </motion.div>
              ))}
          </AnimatePresence>
        </span>
        <span
          className="relative underline pl-3 inline-block text-solanaPurple"
          onMouseEnter={() => setIsEasyHovered(true)}
          onMouseLeave={() => setIsEasyHovered(false)}
        >
          easy,
          <AnimatePresence>
            {isEasyHovered &&
              easyIcons.map(({ id, icon, x, y }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: id === 1 ? 1.5 : 1, x, y }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-0 left-0 text-xl"
                >
                  {icon}
                </motion.div>
              ))}
          </AnimatePresence>
        </span>
        <span
          className="relative underline pl-3 inline-block text-solanaPurple"
          onMouseEnter={() => setIsFunHovered(true)}
          onMouseLeave={() => setIsFunHovered(false)}
        >
          fun.
          <AnimatePresence>
            {isFunHovered &&
              funIcons.map(({ id, icon, x, y, scale }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    scale: scale,
                    x,
                    y,
                  }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-0 left-0 text-xl"
                >
                  {icon}
                </motion.div>
              ))}
          </AnimatePresence>
        </span>
      </h2>

      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-[10rem] h-[10rem] border border-gray-500 rounded-full pointer-events-none opacity-0 z-20"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full w-full text-center px-1">
          <Pointer className="size-6 mb-2" />
          <p className="text-base leading-tight">
            Click anywhere to start exploring
          </p>
        </div>
      </div>
    </div>
  );
}
