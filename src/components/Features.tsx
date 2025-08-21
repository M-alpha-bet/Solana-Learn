import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLDivElement | null>;
}) {
  const featuresRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!parentRef.current) return;

    gsap.fromTo(
      featuresRef.current,
      { x: -2000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top top+=70",
          end: "+=1000",
          scrub: true,
          markers: true,
        },
      }
    );
  }, [parentRef]);

  return (
    <div ref={featuresRef} className="w-full relative">
      <h2 className="text-4xl font-bold mb-10">Hello World</h2>
      <p className="text-xl">
        This is your new features section that slides in from the left
      </p>
    </div>
  );
}
