"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Components/Header";

gsap.registerPlugin(ScrollTrigger);

const IRIS = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const footerTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // 1. Hero Text Parallax/Fade on Scroll
      gsap.to(heroTextRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1, // Smooth scrubbing
        },
      });

      // 2. Footer Giant Text Fill Animation
      gsap.fromTo(
        footerTextRef.current,
        { backgroundImage: "linear-gradient(90deg, #10b981 0%, #044a33 0%)" },
        {
          backgroundImage: "linear-gradient(90deg, #10b981 100%, #044a33 100%)",
          scrollTrigger: {
            trigger: ".footer-section",
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="bg-black text-white relative">
      <Header />

      {/* =========================================
          SECTION 1: HERO (STICKY)
      ========================================= */}
      <div className="hero-section sticky top-0 h-screen w-full flex flex-col justify-center items-center z-0 overflow-hidden bg-black">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.1)_0%,_transparent_50%)]" />

        <h1
          ref={heroTextRef}
          className="text-[15vw] md:text-[18vw] font-black tracking-tighter leading-none text-white drop-shadow-[0_0_40px_rgba(16,185,129,0.3)] select-none"
        >
          IRIS
        </h1>
        <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs uppercase tracking-[0.3em] text-[#10b981]">
            Scroll to override
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#10b981] to-transparent animate-pulse" />
        </div>
      </div>

      {/* =========================================
          MAIN CONTENT WRAPPER (SLIDES OVER HERO)
      ========================================= */}
      <div className="relative z-10 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-white/5">
        {/* SECTION 2: THE REVEAL */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 border-b border-white/5">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Beyond an Assistant.
            <br />
            <span className="text-[#10b981]">A Neural OS Extension.</span>
          </h2>
          <p className="max-w-2xl text-center text-gray-400 text-lg md:text-xl font-mono">
            IRIS does not just answer questions. It integrates directly into
            your operating system, executing complex macros, parsing screen
            data, and automating your workflow at the kernel level.
          </p>
        </section>

        {/* SECTION 3: AUTOMATION SCHEMATICS */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 bg-black/50 border-b border-white/5">
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-[#10b981]">
                Phantom Coder Engine
              </h3>
              <p className="text-gray-400 font-mono">
                Initiate automated keystrokes and API hooks. IRIS takes control
                when commanded, drafting architecture and deploying code while
                you monitor the execution.
              </p>
            </div>
            {/* Placeholder for the Transparent Schematic Image */}
            <div className="aspect-square border border-[#10b981]/20 rounded-xl flex items-center justify-center bg-[#10b981]/5 relative overflow-hidden">
              <span className="text-[#10b981] font-mono opacity-50">
                [ SCHEMATIC ASSET DROPZONE ]
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 4: CAPABILITIES */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 border-b border-white/5">
          <h2 className="text-4xl font-bold mb-16 text-center">
            System Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="p-8 border border-white/10 bg-white/5 hover:border-[#10b981]/50 transition-colors">
              <h4 className="text-xl font-bold mb-2 text-[#10b981]">
                Deep Search
              </h4>
              <p className="text-gray-400 text-sm">
                Bypasses standard algorithms to fetch raw, unfiltered data
                metrics.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-8 border border-white/10 bg-white/5 hover:border-[#10b981]/50 transition-colors">
              <h4 className="text-xl font-bold mb-2 text-[#10b981]">
                App Control
              </h4>
              <p className="text-gray-400 text-sm">
                Directly interfaces with installed software via OS-level
                bridging.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-8 border border-white/10 bg-white/5 hover:border-[#10b981]/50 transition-colors">
              <h4 className="text-xl font-bold mb-2 text-[#10b981]">
                Contextual Memory
              </h4>
              <p className="text-gray-400 text-sm">
                Retains session states and learns from your operational
                patterns.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="min-h-[50vh] flex flex-col justify-center items-center px-6 border-b border-[#10b981]/20 bg-gradient-to-b from-transparent to-[#10b981]/10">
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Ready to override?
          </h2>
          <button className="px-10 py-4 bg-[#10b981] text-black font-black tracking-widest uppercase hover:bg-white transition-all">
            Initialize Core
          </button>
        </section>

        {/* =========================================
            SECTION 6: THE GIANT FOOTER
        ========================================= */}
        <footer className="footer-section bg-black pt-20 pb-10 px-6 md:px-20 overflow-hidden">
          {/* Giant Outlined Text */}
          <div className="w-full flex justify-center mb-16 select-none">
            <h1
              ref={footerTextRef}
              className="text-[20vw] font-black leading-none tracking-tighter bg-clip-text text-transparent"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)", // The outline
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                backgroundImage:
                  "linear-gradient(90deg, #10b981 0%, #044a33 0%)", // Starts empty, filled by GSAP
                backgroundRepeat: "no-repeat",
              }}
            >
              IRIS
            </h1>
          </div>

          {/* Footer Links Grid */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
            {/* Col 1: Brand */}
            <div>
              <div className="w-12 h-12 border-2 border-[#10b981] rounded flex items-center justify-center mb-6">
                {/* Replace with your final logo SVG */}
                <div className="w-4 h-4 bg-[#10b981]" />
              </div>
              <div className="flex gap-4">
                <span className="hover:text-[#10b981] cursor-pointer">IG</span>
                <span className="hover:text-[#10b981] cursor-pointer">IN</span>
                <span className="hover:text-[#10b981] cursor-pointer">X</span>
              </div>
            </div>

            {/* Col 2: About */}
            <div className="flex flex-col gap-3">
              <h5 className="text-white font-bold mb-2">ABOUT</h5>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms and Condition
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>

            {/* Col 3: Company */}
            <div className="flex flex-col gap-3">
              <h5 className="text-white font-bold mb-2">COMPANY</h5>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Hire From Us
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Discord
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Pricing
              </a>
            </div>

            {/* Col 4: Contact */}
            <div className="flex flex-col gap-3">
              <h5 className="text-white font-bold mb-2">CONTACT</h5>
              <p className="text-gray-400">Online: 11am - 8pm</p>
              <p className="text-[#10b981]">System Status: ACTIVE</p>
              <p className="text-gray-400 mt-4">Parent Company:</p>
              <p className="text-white font-bold">Vital Studio's</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default IRIS;
