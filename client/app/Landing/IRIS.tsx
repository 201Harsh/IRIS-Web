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
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 2;
        const yPos = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to(layer1Ref.current, {
          x: xPos * -15,
          y: yPos * -15,
          duration: 1.5,
          ease: "sine.out",
        });
        gsap.to(layer2Ref.current, {
          x: xPos * 30,
          y: yPos * 30,
          duration: 1.5,
          ease: "sine.out",
        });
        gsap.to(layer3Ref.current, {
          x: xPos * -50,
          y: yPos * -50,
          duration: 1.5,
          ease: "sine.out",
        });
        gsap.to(textRef.current, {
          x: xPos * 20,
          y: yPos * 20,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      gsap.to(textRef.current, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: containerRef },
  );

  return (
    <div
      className="bg-[#050505] min-h-[300vh] text-white selection:bg-[#10b981] selection:text-black"
      ref={containerRef}
    >
      <Header />

      <div className="hero relative w-full h-screen flex justify-center items-center overflow-hidden">
        <div
          ref={layer1Ref}
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div
          ref={layer2Ref}
          className="absolute w-[70vw] h-[70vw] rounded-full border border-[#10b981]/10 pointer-events-none blur-sm"
        />
        <div
          ref={layer3Ref}
          className="absolute w-[40vw] h-[40vw] rounded-full border border-[#10b981]/30 pointer-events-none shadow-[0_0_100px_rgba(16,185,129,0.1)]"
        />

        <div className="z-10 text-center flex flex-col items-center">
          <h1
            ref={textRef}
            className="text-[18vw] font-black tracking-tighter leading-none text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            IRIS
          </h1>
          <div className="mt-4 px-6 py-1 bg-[#10b981] text-black text-[10px] font-black uppercase tracking-[0.5em]">
            Vital Studio's Artificial Intelligence
          </div>
          <p className="mt-10 text-[10px] text-[#10b981] font-mono tracking-widest uppercase animate-pulse">
            [ System Override Ready ]
          </p>
        </div>
      </div>

      <div
        ref={section2Ref}
        className="min-h-screen w-full flex flex-col items-center justify-center relative p-20"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#10b981]/50 to-transparent" />

        <h2 className="text-6xl font-black mb-10 text-center uppercase tracking-tighter">
          Neural <span className="text-[#10b981]">Core</span>
        </h2>
        <p className="max-w-xl text-center text-gray-500 font-mono text-sm leading-relaxed">
          Integrating deep-level kernel hooks with Vital Studio's architecture.
          IRIS is not a chatbot; it is a system-level extension of your digital
          reality.
        </p>

        <div className="mt-20 w-[60%] aspect-video border border-[#10b981]/20 bg-[#10b981]/5 flex items-center justify-center">
          <span className="text-[#10b981] font-mono animate-pulse">
            Waiting for Schematic Asset...
          </span>
        </div>
      </div>
    </div>
  );
};

export default IRIS;
