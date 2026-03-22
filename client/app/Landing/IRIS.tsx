"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Components/Header";

gsap.registerPlugin(ScrollTrigger);

const IRIS = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Mouse Move Parallax
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const yPos = (clientY / window.innerHeight - 0.5) * 2; // -1 to 1

        gsap.to(layer1Ref.current, {
          x: xPos * -20,
          y: yPos * -20,
          ease: "power2.out",
          duration: 1,
        });
        gsap.to(layer2Ref.current, {
          x: xPos * 40,
          y: yPos * 40,
          ease: "power2.out",
          duration: 1,
        });
        gsap.to(layer3Ref.current, {
          x: xPos * -60,
          y: yPos * -60,
          ease: "power2.out",
          duration: 1,
        });
        gsap.to(textRef.current, {
          x: xPos * 30,
          y: yPos * 30,
          ease: "power2.out",
          duration: 1,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Scroll Animations
      gsap.to(textRef.current, {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(section2Ref.current, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef },
  );

  return (
    <div
      className="bg-black min-h-[200vh] text-white overflow-hidden relative"
      ref={containerRef}
    >
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Parallax Layers */}
        <div
          ref={layer1Ref}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-black to-black opacity-60 pointer-events-none"
        />

        <div
          ref={layer2Ref}
          className="absolute w-[60vw] h-[60vw] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        <div
          ref={layer3Ref}
          className="absolute w-[40vw] h-[40vw] rounded-full border border-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        />

        <div className="z-10 text-center pointer-events-none flex flex-col items-center">
          <h1
            ref={textRef}
            className="text-[12vw] font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
          >
            IRIS
          </h1>
          <p className="mt-6 text-xl text-white/50 tracking-widest uppercase animate-pulse">
            Scroll to explore
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div
        ref={section2Ref}
        className="h-screen w-full flex flex-col items-center justify-center border-t border-white/10 px-8 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Discover the Unknown
        </h2>
        <p className="max-w-2xl text-xl text-gray-400">
          This section appears as you scroll down, and the header reacts to your
          scroll direction. Scroll up to see the header re-appear, or scroll
          down to hide it.
        </p>
      </div>
    </div>
  );
};

export default IRIS;
