"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

const LoadingCore = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create a pulsating glitch effect with GSAP
      gsap.to(coreRef.current, {
        scale: 1.1,
        opacity: 0.9,
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
      });

      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "linear",
      });

      // Random glitchy spikes
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.5 });
      tl.to(coreRef.current, { skewX: 10, duration: 0.05 })
        .to(coreRef.current, { skewX: -10, duration: 0.05 })
        .to(coreRef.current, { skewX: 0, duration: 0.05 });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col items-center justify-center bg-transparent overflow-hidden relative z-50 pointer-events-none"
    >
      {/* Background ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-100 h-100 rounded-full bg-[#10b981] blur-[120px] mix-blend-screen pointer-events-none"
      />

      {/* Main Core HUD */}
      <div className="relative flex items-center justify-center">
        {/* Outer Rotating Ring */}
        <div
          ref={ringRef}
          className="absolute w-56 h-56 border-2 border-dashed border-[#10b981]/30 rounded-full"
          style={{
            boxShadow: "0 0 30px rgba(16,185,129,0.1) inset",
          }}
        />

        {/* Inner Scanning Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute w-36 h-36 border-t-2 border-b-2 border-[#10b981] rounded-full opacity-70"
        />

        {/* The Core */}
        <div
          ref={coreRef}
          className="w-12 h-12 bg-[#10b981] flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_rgba(16,185,129,0.6)]"
          style={{
            transform: "rotate(45deg)",
          }}
        >
          <div className="w-6 h-6 bg-black border border-[#10b981]/50 mix-blend-overlay" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 flex flex-col items-center gap-3"
      >
        <div className="flex gap-2 items-center px-4 py-1.5 bg-[#10b981]/10 border border-[#10b981]/20 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 bg-[#10b981] animate-ping rounded-full absolute" />
          <span className="w-2 h-2 bg-[#10b981] rounded-full relative" />
          <p className="text-[#10b981] font-mono text-[11px] tracking-[0.4em] uppercase font-bold">
            Loading_System_Core...
          </p>
        </div>

        {/* Progress bar line */}
        <div className="w-56 h-0.5 bg-white/5 relative overflow-hidden mt-2 rounded-full">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-linear-to-r from-transparent via-[#10b981] to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingCore;
