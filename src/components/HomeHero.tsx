import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArrowRight, ChevronsDown } from "lucide-react";
import Lenis from "lenis";
import SpeedTransactions from "./SpeedTransactions";
import LowCostIcons from "./LowCostIcons";
import EcoConsciousIcons from "./EcoConsciousIcons";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HomeHero() {
  const refs = {
    main: useRef<HTMLDivElement>(null),
    container: useRef<HTMLDivElement>(null),
    container2: useRef<HTMLDivElement>(null),
    right1: useRef<HTMLDivElement>(null),
    left: useRef<HTMLDivElement>(null),
    right2: useRef<HTMLDivElement>(null),
    gradient: useRef<HTMLDivElement>(null),
    description: useRef<HTMLDivElement>(null),
    description2: useRef<HTMLDivElement>(null),
    scrollText: useRef<HTMLDivElement>(null),
    speedFeatures: useRef<HTMLDivElement>(null),
    lowCostFeatures: useRef<HTMLDivElement>(null),
    ecoConsciousFeatures: useRef<HTMLDivElement>(null),
  };

  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  useGSAP(() => {
    const {
      main,
      container,
      container2,
      right1,
      left,
      right2,
      gradient,
      description,
      description2,
      scrollText,
      speedFeatures,
      lowCostFeatures,
      ecoConsciousFeatures,
    } = refs;

    const speedSplit = new SplitText(["#speed-text"], {
      type: "chars",
      smartWrap: true,
    });

    const lowCostsplit = new SplitText(["#lowCost-text"], {
      type: "chars",
      smartWrap: true,
    });

    const ecoConsciousSplit = new SplitText(["#ecoConscious-text"], {
      type: "chars",
      smartWrap: true,
    });

    gsap.set([speedSplit.chars, lowCostsplit.chars, ecoConsciousSplit.chars], {
      opacity: 0.5,
    });

    gsap.set(["#arrow-right1", "#arrow-right2"], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top top+=70",
        end: () => "+=" + Number(main.current?.offsetHeight) * 50,
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      // Parralelograms Entrance and Scroll Text Diasppears
      [right1.current, left.current, right2.current],
      {
        x: (i) => (i === 1 ? -3500 : 3500),
        rotate: (i) => (i === 1 ? 30 : -30),
      },
      { x: 0, rotate: 0, duration: 2, ease: "power2.out" },
      "<+1"
    )
      .fromTo(
        scrollText.current,
        { opacity: 5 },
        { opacity: 0, duration: 0.6 },
        "<"
      )

      // Parralelograms Scale Down
      .to(container2.current, {
        scale: 0.45,
        transformOrigin: "center center",
        ease: "power2.out",
      })

      // Parralelograms turn to white, Parralelogram text fades out and Gradient BG appears
      .to([right1.current, left.current, right2.current], {
        backgroundColor: "white",
        color: "white",
        ease: "power2.out",
        duration: 2,
      })
      .to(
        ".parralelogram-text",
        {
          opacity: 0,
        },
        "<"
      )
      .fromTo(
        gradient.current,
        { scale: 0 },
        {
          scale: 1,
          ease: "power2.out",
          duration: 1,
          transformOrigin: "center center",
        },
        "<"
      )

      // Parralelograms move to the left and description text enters
      .to(container.current, {
        x: -300,
        scale: 0.7,
        ease: "power2.out",
        duration: 2,
      })
      .fromTo(
        description.current,
        { opacity: 0, x: 2000 },
        {
          opacity: 1,
          x: 800,
          ease: "power2.out",
          duration: 2,
        },
        "<"
      )

      // Description text fades out and container comes back to position
      .to(description.current, {
        opacity: 0,
        duration: 2,
      })
      .to(
        container.current,
        {
          x: 0,
          ease: "power2.out",
          duration: 1,
          zIndex: 10,
        },
        "<"
      )

      // Gradient BG moves up, right1 and gradient BG fades out and the other two transforms
      .to(gradient.current, {
        yPercent: -200,
        duration: 2,
      })
      .to(
        right1.current,
        {
          xPercent: -200,
          opacity: 0,
          duration: 1,
        },
        "<"
      )
      .to(
        [left.current, right2.current],
        {
          background: "linear-gradient(to left, #14F195, #9945FF)",
          rotate: -90,
          skewX: (i) => (i === 1 ? 45 : -45),
          y: (i) => (i === 1 ? -195 : 0),
          x: (i) => (i === 1 ? 95 : -95),
        },
        "<"
      )
      .to(gradient.current, {
        visibility: "hidden",
        duration: 0.2,
      })

      // Parralelograms enlarge, container moves down and text fades in from top
      .to([left.current, right2.current], {
        skewX: (i) => (i === 1 ? 30 : -30),
        scale: 17,
        xPercent: (i) => (i === 1 ? 280 : -280),
      })
      .to(
        container2.current,
        {
          x: 0,
          yPercent: 370,
        },
        "<"
      )
      .fromTo(
        description2.current,
        { opacity: 0, y: -1000 },
        {
          opacity: 1,
          y: -450,
        },
        "<"
      )

      // Description text moves to the top left and parralelogram fades out
      .to(description2.current, {
        x: 0,
        y: 0,
        position: "fixed",
        top: "4rem",
        left: "5rem",
        scale: 0.2,
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingLeft: "100px",
        paddingRight: "100px",
        borderRadius: "100px",
        border: "2px solid #e9e9e9",
        duration: 2,
        transformOrigin: "top left",
        ease: "power2.out",
      })
      .to(
        container2.current,
        {
          y: 600,
          opacity: 0,
        },
        "<"
      )

      // Speed text fades in from the left
      .fromTo(
        "#speed",
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, ease: "power2.out" }
      )

      // Speed feature desciption fades in from the left
      .fromTo("#speed-text", { x: -1000 }, { x: 0, ease: "power2.out" })

      // Speed features icons enter the screen
      .fromTo(
        speedFeatures.current,
        { y: 1200 },
        { y: -550, ease: "power2.inOut" }
      )

      // Speed feature characters stagger and change opacity
      .to([speedSplit.chars], {
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1,
      })

      // Speed feature icons and description text fade out
      .to([speedFeatures.current, "#speed-text"], {
        opacity: 0,
        ease: "power2.out",
        y: -1500,
        duration: 1,
      })

      // Speed text moves to the top right and low-cost text fades in
      .to("#speed", {
        xPercent: 160,
        yPercent: -110,
        opacity: 1,
        fontSize: "64px",
        color: "#d9d9d9",
        duration: 0.6,
        ease: "power2.out",
      })
      .fromTo(
        "#low-cost",
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, ease: "power2.out" },
        "<"
      )

      // Low-cost description text fades in from the left
      .fromTo("#lowCost-text", { x: -1000 }, { x: 0, ease: "power2.out" })

      // Low-cost features icons enter the screen
      .fromTo(
        lowCostFeatures.current,
        { y: 1000 },
        { y: -80, ease: "power2.inOut" }
      )

      // Low-cost feature characters stagger and change opacity
      .to([lowCostsplit.chars], {
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1,
      })

      // Low-cost feature icons and description text fade out
      .to([lowCostFeatures.current, "#lowCost-text"], {
        opacity: 0,
        ease: "power2.out",
        y: -1500,
        duration: 1,
      })

      // Low-cost text moves to the top right, speed text adjusts, arrow1 is visible and eco-conscious text fades in
      .to("#low-cost", {
        xPercent: 150,
        yPercent: -110,
        opacity: 1,
        fontSize: "64px",
        color: "#d9d9d9",
        duration: 0.6,
        ease: "power2.out",
      })
      .to("#speed", { xPercent: 120 }, "<")
      .to("#arrow-right1", { opacity: 1 }, "<")
      .fromTo(
        "#eco-conscious",
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0, ease: "power2.out" },
        "<"
      )

      // Eco-conscious description text fades in from the left
      .fromTo("#ecoConscious-text", { x: -1000 }, { x: 0, ease: "power2.out" })

      // Low-cost features icons enter the screen
      .fromTo(
        ecoConsciousFeatures.current,
        { y: 1000 },
        { y: -550, ease: "power2.inOut" }
      )

      // Eco-conscious feature characters stagger and change opacity
      .to([ecoConsciousSplit.chars], {
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1,
      });
  });

  return (
    <div>
      <div ref={refs.main}>
        <div className="relative w-screen" ref={refs.container}>
          <div className="relative w-full h-full z-10" ref={refs.container2}>
            <div className="flex flex-col items-center space-y-[35px] pt-10">
              <div className="absolute inset-0 z-10 flex flex-col items-center pt-20 justify-center pointer-events-none">
                <p className="parralelogram-text">Fast</p>
                <p className="parralelogram-text">Economical</p>
                <p className="parralelogram-text">User Friendly</p>
              </div>
              <div ref={refs.right1} className="parralelogram-right" />
              <div ref={refs.left} className="parralelogram-left" />
              <div ref={refs.right2} className="parralelogram-right" />
            </div>
          </div>

          <div
            ref={refs.gradient}
            className="bg-gradient-to-tr from-[#9945FF] to-[#14F195] gradient-bg"
          />

          <div ref={refs.scrollText} className="scroll-down-content">
            <ChevronsDown className="size-5" />
            <p className="text-sm">Scroll down to explore</p>
          </div>
        </div>
        <div
          ref={refs.description}
          className="absolute top-1/2 right-1/2 -translate-x-1/2 transform -translate-y-1/2 max-w-[600px]"
        >
          <p className="solana-description-text text-[48px] leading-[54px]">
            Solana's got something for everyone, whether you're a power user or
            just getting started!
          </p>
        </div>
        <div
          ref={refs.description2}
          className="absolute z-11 left-1/2 -translate-x-1/2"
        >
          <p className="solana-description-text text-[120px] leading-[124px]">
            Why Solana?
          </p>
        </div>
        <div className="absolute top-[10rem] left-[6rem]">
          <div>
            <h1 id="speed" className="text-[120px] leading-[124px]">
              Speed{" "}
              <ArrowRight
                id="arrow-right1"
                className="inline-block ml-3 size-8"
              />
            </h1>
            <p
              id="speed-text"
              className="items-center pt-5  features-text max-w-[46.875rem]"
            >
              Solana’s got block times
              <span className="inline-block -mb-8">
                <img
                  className="inline-block align-middle h-auto w-[9.5rem]"
                  src="/icons/speed-features/tx-sec.png"
                  style={{
                    transform: "translateY(-0.6em)",
                  }}
                />
              </span>
              of just 400 milliseconds, and as tech keeps getting quicker, the
              network will too!
            </p>
          </div>
        </div>
        <div ref={refs.speedFeatures}>
          <SpeedTransactions />
        </div>
        <div className="absolute top-[10rem] left-[6rem]">
          <div>
            <h1
              id="low-cost"
              className="text-[120px] leading-[124px] flex items-center"
            >
              Low cost{" "}
              <ArrowRight
                id="arrow-right2"
                className="inline-block ml-3 size-8"
              />
            </h1>
            <p
              id="lowCost-text"
              className="items-center pt-5  features-text max-w-[46.875rem]"
            >
              It’s so cheeeeap.
              <span className="inline-block -mb-8">
                <img
                  className="inline-block align-middle h-auto w-[5rem] "
                  src="/icons/lowcost-features/moneybag.png"
                  style={{
                    transform: "translateY(-0.2em)",
                  }}
                />
              </span>
              <span className="inline-block -mb-8">
                <img
                  className="inline-block align-middle h-auto w-[9rem] "
                  src="/icons/lowcost-features/low-cost-tx.png"
                  style={{
                    transform: "translateY(-0.4em)",
                  }}
                />
              </span>
              Most transactions cost less than a cent!
            </p>
          </div>
        </div>
        <div ref={refs.lowCostFeatures}>
          <LowCostIcons />
        </div>
        <div className="absolute top-[10rem] left-[6rem]">
          <div>
            <h1 id="eco-conscious" className="text-[120px] leading-[124px]">
              Eco conscious
            </h1>
            <p
              id="ecoConscious-text"
              className="items-center pt-5  features-text max-w-[46.875rem]"
            >
              It uses way less energy{" "}
              <span className="inline-block -mb-8">
                <img
                  className="inline-block align-middle h-auto w-[10rem] "
                  src="/icons/eco-features/eco-conscious1.png"
                  style={{
                    transform: "translateY(-0.1em)",
                  }}
                />
              </span>
              About the same as doing a few Google searches{" "}
              <span className="inline-block -mb-8">
                <img
                  className="inline-block align-middle h-auto w-[9rem] "
                  src="/icons/eco-features/google-search.png"
                  style={{
                    transform: "translateY(-0.1em)",
                  }}
                />
              </span>
              . That means it’s fast and better for the planet.
            </p>
          </div>
        </div>
        <div ref={refs.ecoConsciousFeatures}>
          <EcoConsciousIcons />
        </div>
      </div>
    </div>
  );
}
