"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Components/Header";
import { useRef } from "react";
import Footer from "../Components/Footer";
import LightPillar from "../utils/LightPillar";
import MagneticButton from "../utils/MagneticButton";
import { Command, Download, FileCode2, ArrowRight } from "lucide-react";
import MagicBento from "../utils/MagicBento";
import Image from "next/image";

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
      <div className="hero-section sticky top-0 h-screen w-full flex flex-col justify-center items-center z-0 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none">
          <LightPillar
            topColor="#022c1e"
            bottomColor="#34d399"
            intensity={1}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>

        <div className="absolute inset-0 z-5 opacity-70 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping absolute"></span>
            <span className="w-2 h-2 rounded-full bg-[#10b981] relative"></span>
            <span className="text-[10px] md:text-xs font-mono text-[#ffffff] tracking-[0.2em] uppercase font-bold">
              Beta Release // Q1 2026
            </span>
          </div>

          <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none text-white drop-shadow-[0_0_40px_rgba(16,185,129,0.2)] select-none">
            IRIS
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-xl text-gray-300 font-mono leading-relaxed drop-shadow-lg">
            Beyond a standard language model. A deep-system neural extension
            engineered by{" "}
            <span className="text-white font-bold">Vital Studio's</span> for
            kernel-level OS automation and zero-trust execution.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 w-full sm:w-auto relative z-20">
            <MagneticButton
              title="Download IRIS"
              subtitle="Get the App"
              iconLeft={<Command className="w-6 h-6" />}
              iconRight={
                <Download className="w-5 h-5 text-current group-hover:text-[#10b981]" />
              }
              className="bg-emerald-500/20 border border-emerald-500/20 text-white shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]"
            />

            <MagneticButton
              title="Get Started"
              subtitle="Join the Beta"
              iconLeft={<FileCode2 className="w-6 h-6 text-[#10b981]" />}
              iconRight={
                <ArrowRight className="w-5 h-5 text-current group-hover:text-[#10b981]" />
              }
              className="bg-transparent border border-white/20 text-white hover:bg-white/5 backdrop-blur-sm shadow-none"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 pointer-events-none">
          <span className="text-[13px] font-mono uppercase tracking-[0.3em] text-[#10b981]">
            Scroll to Explore
          </span>
          <div className="w-px h-16 bg-linear-to-b from-[#10b981] to-transparent animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-white/5">
        <section className="min-h-screen bg-[#050505] flex flex-col items-center pt-32 relative overflow-hidden font-sans">
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-150 h-150 bg-[#10b981]/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-200 h-100 bg-[#16a34a]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

          <div className="text-center z-20 px-4 flex flex-col items-center">
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-[-0.03em] bg-linear-to-r from-emerald-400 via-emerald-500 to-green-600 bg-clip-text text-transparent mb-4 pb-2 select-none">
              Meet IRIS AI
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-100 font-normal tracking-tight">
              The Agentic Assistant Built for the Future
            </h2>
          </div>
          <div className="absolute left-6 sm:left-44 top-52 sm:top-90 w-24 sm:w-64 h-auto pointer-events-none">
            <Image
              src="/img/iris-future.png"
              alt="Try IRIS AI"
              width={300}
              height={300}
              className="w-52 h-52 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            />
          </div>

          <div className="relative w-full max-w-6xl mt-20 flex justify-center z-10 group">
            <Image
              src="/img/graphic.webp"
              alt="3D tech elements"
              width={1400}
              height={900}
              className="w-full h-full object-contain mask-image-b relative z-20 drop-shadow-[0_0_50px_rgba(22,163,74,0.15)] transition-transform duration-1000 ease-out"
              priority
            />
          </div>

          <div className="w-full max-w-4xl mx-auto flex justify-center relative z-20 mt-12 mb-20">
            <div className="flex gap-4 sm:gap-6 relative">
              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4ADE80] to-[#14532D]">
                  24/7
                </span>
                <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                  Autonomous
                </span>
              </div>

              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4ADE80] to-[#14532D]">
                  &lt;1s
                </span>
                <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                  Latency
                </span>
              </div>

              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4ADE80] to-[#14532D]">
                  1M+
                </span>
                <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                  Context Window
                </span>
              </div>

              <div className="absolute -right-12 sm:-right-96 -top-36 sm:-top-24 w-24 sm:w-64 h-auto pointer-events-none">
                <Image
                  src="/img/tryiris.png"
                  alt="Try IRIS AI"
                  width={300}
                  height={300}
                  className="w-52 h-52 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="systems"
          className="min-h-screen w-full px-6 md:px-20 py-32 border-b border-white/5 flex flex-col justify-center bg-[#050505] relative overflow-hidden"
        >
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-200 bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

          <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 px-4 relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 border border-[#10b981]/20 bg-[#10b981]/5 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <span className="w-1.5 h-1.5 bg-[#10b981] animate-pulse rounded-full"></span>
                <span className="text-[#10b981] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
                  IRIS_OS // ACTIVE_MODULES
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 select-none">
                System{" "}
                <span className="text-[#10b981] drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  Capabilities.
                </span>
              </h2>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-mono drop-shadow-md">
                IRIS is not a chatbot; it is a deep-system neural extension. By
                weaponizing{" "}
                <span className="text-white font-bold">
                  kernel-level execution hooks
                </span>
                , autonomous keystroke injection, and a persistent memory
                matrix, IRIS bridges the gap between human thought and OS
                execution.
              </p>
            </div>

            <div className="w-full">
              <MagicBento
                textAutoHide={true}
                enableStars
                enableSpotlight
                enableBorderGlow={true}
                enableTilt
                enableMagnetism={false}
                clickEffect
                spotlightRadius={300}
                particleCount={12}
                glowColor="16, 185, 129"
                disableAnimations={false}
              />
            </div>
          </div>
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

        <Footer footerTextRef={footerTextRef} />
      </div>
    </div>
  );
};

export default IRIS;
