"use client";

import Link from "next/link";
import { Command, Download, FileCode2, ArrowRight, Mic } from "lucide-react";
import MagneticButton from "../utils/MagneticButton";
import GhostEther from "./GhostEther";
import RippleGrid from "../constants/RippleGrid";

interface IrisHeroProps {
  heroTextRef: React.RefObject<HTMLDivElement | null>;
  isHeroVisible: boolean;
  isHeroActive: boolean;
}

export default function IrisHero({
  heroTextRef,
  isHeroVisible,
  isHeroActive,
}: IrisHeroProps) {
  return (
    <>
      <div
        ref={heroTextRef}
        className="hero-section sticky top-0 h-screen w-full flex flex-col justify-center items-center z-0 overflow-hidden bg-black"
      >
        <div className="w-full h-full absolute inset-0 z-0 bg-black">
          <RippleGrid
            enableRainbow={false}
            gridColor="#0f8218"
            rippleIntensity={0.05}
            gridSize={10}
            gridThickness={5}
            mouseInteraction={true}
            mouseInteractionRadius={10}
            opacity={1}
            fadeDistance={1.5}
            vignetteStrength={5}
            glowIntensity={0.9}
            gridRotation={0}
          />
        </div>
        <div
          className={`
            absolute inset-0 z-90 pointer-events-none hidden md:block
            transition-opacity duration-700 ease-in-out
            ${isHeroVisible ? "opacity-100" : "opacity-0"}
          `}
          style={{ display: isHeroActive ? undefined : "none" }}
        >
          <GhostEther className="block" />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl gap-0">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#10b981]/30 bg-black/70 mb-8 backdrop-blur-md iris-chip-pulse">
            <span className="relative flex h-2 w-2">
              <span className="iris-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
            </span>
            <span className="text-[10px] md:text-[11px] font-mono text-white tracking-[0.25em] uppercase font-bold">
              Beta Release&nbsp;&nbsp;//&nbsp;&nbsp;Q1&nbsp;
              {new Date().getFullYear()}
            </span>
          </div>

          <div className="relative w-full flex justify-center flex-col items-center mb-2">
            <h1
              className="text-[28vw] sm:text-[20vw] md:text-[13vw] font-black tracking-tighter leading-none select-none text-white"
              style={{
                textShadow:
                  "0 0 40px rgba(16,185,129,0.85), 0 0 80px rgba(16,185,129,0.4), 0 2px 6px rgba(0,0,0,1)",
              }}
            >
              IRIS AI
            </h1>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <hr className="iris-rule" />
          </div>

          <p
            className="text-[11px] md:text-sm font-mono tracking-[0.35em] uppercase text-white mb-2 font-bold"
            style={{
              textShadow:
                "0 0 8px rgba(0,0,0,1), 0 0 16px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.9)",
            }}
          >
            Integrated Responsive Intelligence System
          </p>

          <p
            className="mt-5 max-w-xl text-sm md:text-lg text-white font-mono leading-relaxed"
            style={{
              textShadow: "0 1px 8px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.95)",
            }}
          >
            Your device. Fully under command.{" "}
            <span className="text-[#a7f3d0] font-bold">Speak once</span> — IRIS
            handles the rest. From files and apps to browser and beyond,{" "}
            <span className="text-white font-bold">
              real-time, zero friction.
            </span>
          </p>

          <div className="flex items-center gap-3 mt-6 mb-10">
            <Mic className="w-4 h-4 text-white" />
            <div className="flex items-end gap-0.75">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="iris-wave-bar" />
              ))}
            </div>
            <span
              className="text-[11px] font-mono text-white tracking-widest uppercase font-semibold"
              style={{ textShadow: "0 0 10px rgba(0,0,0,1)" }}
            >
              Voice-native AI
            </span>
          </div>

          <div className="flex md:flex-row flex-col justify-center items-center gap-5 w-full sm:w-auto">
            <Link href="/download">
              <MagneticButton
                title="Download IRIS"
                subtitle="Get the App"
                iconLeft={<Command className="w-6 h-6" />}
                iconRight={
                  <Download className="w-5 h-5 text-current group-hover:text-[#10b981]" />
                }
                className="bg-emerald-500/20 border border-emerald-500/30 text-white shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:bg-emerald-500/30"
              />
            </Link>

            <MagneticButton
              onClick={() => {
                window.open("https://github.com/201Harsh/IRIS-AI", "_blank");
              }}
              title="How to Install"
              subtitle="Watch Tutorial"
              iconLeft={<FileCode2 className="w-6 h-6 text-[#10b981]" />}
              iconRight={
                <ArrowRight className="w-5 h-5 text-current group-hover:text-[#10b981]" />
              }
              className="bg-transparent border border-white/15 text-white hover:bg-white/5 backdrop-blur-sm shadow-none"
            />
          </div>

          <div className="flex items-center gap-3 mt-10 flex-wrap justify-center">
            {[
              { label: "Latency", value: "<1.5s" },
              { label: "Context", value: "128k+" },
              { label: "Uptime", value: "24/7" },
              { label: "Local AI", value: "On-device" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#10b981]/30 bg-black/80 backdrop-blur-md"
              >
                <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest">
                  {label}
                </span>
                <span className="text-[11px] font-mono text-[#34d399] font-bold">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none select-none">
          <span
            className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/70"
            style={{ textShadow: "0 0 8px rgba(0,0,0,1)" }}
          >
            Scroll to Explore
          </span>
          <svg
            width="20"
            height="30"
            viewBox="0 0 20 30"
            fill="none"
            className="opacity-50"
          >
            <rect
              x="1"
              y="1"
              width="18"
              height="28"
              rx="9"
              stroke="#10b981"
              strokeWidth="1.5"
            />
            <rect
              x="9"
              y="6"
              width="2"
              height="6"
              rx="1"
              fill="#10b981"
              className="iris-scroll-dot"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
