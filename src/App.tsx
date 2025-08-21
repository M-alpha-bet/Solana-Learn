import Hero from "./components/IntroHero";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import { useRef, useState } from "react";
import gsap from "gsap";

export default function App() {
  const introRef = useRef<HTMLDivElement>(null);
  const [showHome, setShowHome] = useState(false);

  const handleIntroClick = () => {
    gsap.to(introRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => setShowHome(true),
    });
  };

  return (
    <main className="relative h-dvh w-screen">
      <Navbar />
      {!showHome ? (
        <div ref={introRef} onClick={handleIntroClick}>
          <Hero />
        </div>
      ) : (
        <HomeHero />
      )}
    </main>
  );
}
