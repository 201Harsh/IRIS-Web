"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Components/Header";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const IRIS = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const footerTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.to(heroTextRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

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
      <div className="hero-section sticky top-0 h-screen w-full flex flex-col justify-center items-center z-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_50%)]" />

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
          <div className="w-px h-12 bg-linear-to-b from-[#10b981] to-transparent animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-white/5">
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
            <div className="aspect-square border border-[#10b981]/20 rounded-xl flex items-center justify-center bg-[#10b981]/5 relative overflow-hidden">
              <span className="text-[#10b981] font-mono opacity-50">
                [ SCHEMATIC ASSET DROPZONE ]
              </span>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 border-b border-white/5">
          <h2 className="text-4xl font-bold mb-16 text-center">
            System Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
            <div className="p-8 border border-white/10 bg-white/5 hover:border-[#10b981]/50 transition-colors">
              <h4 className="text-xl font-bold mb-2 text-[#10b981]">
                Deep Search
              </h4>
              <p className="text-gray-400 text-sm">
                Bypasses standard algorithms to fetch raw, unfiltered data
                metrics.
              </p>
            </div>
            <div className="p-8 border border-white/10 bg-white/5 hover:border-[#10b981]/50 transition-colors">
              <h4 className="text-xl font-bold mb-2 text-[#10b981]">
                App Control
              </h4>
              <p className="text-gray-400 text-sm">
                Directly interfaces with installed software via OS-level
                bridging.
              </p>
            </div>
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

        <section className="min-h-[50vh] flex flex-col justify-center items-center px-6 border-b border-[#10b981]/20 bg-linear-to-b from-transparent to-[#10b981]/10">
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            Ready to override?
          </h2>
          <button className="px-10 py-4 bg-[#10b981] text-black font-black tracking-widest uppercase hover:bg-white transition-all">
            Initialize Core
          </button>
        </section>
        <footer className="footer-section bg-black pt-20 pb-10 px-6 md:px-20 overflow-hidden">
          <div className="w-full flex justify-center mb-16 select-none">
            <h1
              ref={footerTextRef}
              className="text-[20vw] font-black leading-none tracking-tighter bg-clip-text text-transparent"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.15)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                backgroundImage:
                  "linear-gradient(90deg, #10b981 0%, #044a33 0%)",
                backgroundRepeat: "no-repeat",
              }}
            >
              IRIS
            </h1>
          </div>

          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
            <div>
              <div className="w-12 h-12 border-2 border-[#10b981] rounded flex items-center justify-center mb-6">
                <div className="w-4 h-4 bg-[#10b981]" />
              </div>
              <div className="flex gap-4">
                <span className="hover:text-[#10b981] cursor-pointer">IG</span>
                <span className="hover:text-[#10b981] cursor-pointer">IN</span>
                <span className="hover:text-[#10b981] cursor-pointer">X</span>
              </div>
            </div>

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
