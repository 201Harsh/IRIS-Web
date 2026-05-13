"use client";

/**
 * IrisHero.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Drop-in replacement for the hero <div ref={heroTextRef}> block in IRIS page.
 *
 * Key fixes:
 *  1. GhostEther is at z-0, hero text at z-20 → ghost visible BEHIND text
 *  2. Ghost layer uses mix-blend-screen so it blends into background
 *  3. Professional copy — no "Vital Studio's" mention
 *  4. Added ambient audio-waveform indicator (pure CSS, no deps)
 *  5. Floating status chips with live-ish feel
 * ─────────────────────────────────────────────────────────────────────────────
 */

import Link from "next/link";
import { Command, Download, FileCode2, ArrowRight, Mic } from "lucide-react";
import MagneticButton from "../utils/MagneticButton";
import GhostEther from "./GhostEther";

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
      <style>{`
        /* ── Waveform bars ── */
        @keyframes iris-bar {
          0%,100% { transform: scaleY(0.25); }
          50%      { transform: scaleY(1); }
        }
        .iris-wave-bar {
          display: inline-block;
          width: 2px;
          height: 14px;
          border-radius: 2px;
          background: #10b981;
          transform-origin: bottom;
          animation: iris-bar 1.2s ease-in-out infinite;
        }
        .iris-wave-bar:nth-child(1) { animation-delay: 0s; }
        .iris-wave-bar:nth-child(2) { animation-delay: .12s; }
        .iris-wave-bar:nth-child(3) { animation-delay: .24s; }
        .iris-wave-bar:nth-child(4) { animation-delay: .36s; }
        .iris-wave-bar:nth-child(5) { animation-delay: .48s; }
        .iris-wave-bar:nth-child(6) { animation-delay: .24s; }
        .iris-wave-bar:nth-child(7) { animation-delay: .12s; }

        /* ── Scroll indicator ── */
        @keyframes iris-scroll-dot {
          0%   { transform: translateY(0); opacity: 1; }
          80%  { transform: translateY(10px); opacity: 0; }
          100% { transform: translateY(0); opacity: 0; }
        }
        .iris-scroll-dot {
          animation: iris-scroll-dot 1.8s ease-in-out infinite;
        }

        /* ── Floating chip pulse ── */
        @keyframes iris-chip-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
          50%      { box-shadow: 0 0 14px 2px rgba(16,185,129,0.25); }
        }
        .iris-chip-pulse {
          animation: iris-chip-glow 3s ease-in-out infinite;
        }

        /* ── Badge ping ring ── */
        @keyframes iris-ping {
          0%    { transform: scale(1); opacity: 0.9; }
          80%,100% { transform: scale(2.2); opacity: 0; }
        }
        .iris-ping { animation: iris-ping 1.6s ease-out infinite; }

        /* ── Subtle hero text shimmer ── */
        @keyframes iris-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .iris-title-shimmer {
          background: linear-gradient(
            105deg,
            #10b981 0%,
            #34d399 25%,
            #6ee7b7 40%,
            #ffffff 50%,
            #6ee7b7 60%,
            #34d399 75%,
            #10b981 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: iris-shimmer 6s linear infinite;
        }

        /* ── Ambient grid lines ── */
        .iris-grid-bg {
          background-image:
            linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        /* ── Horizontal rule glow ── */
        .iris-rule {
          border: none;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(16,185,129,0.5) 30%,
            rgba(52,211,153,0.8) 50%,
            rgba(16,185,129,0.5) 70%,
            transparent 100%
          );
          width: 280px;
        }
      `}</style>

      <div
        ref={heroTextRef}
        className="hero-section sticky top-0 h-screen w-full flex flex-col justify-center items-center z-0 overflow-hidden bg-black iris-grid-bg"
      >
        
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

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 25%, transparent 70%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl gap-0">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 mb-8 backdrop-blur-md iris-chip-pulse">
            <span className="relative flex h-2 w-2">
              <span className="iris-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10b981]" />
            </span>
            <span className="text-[10px] md:text-[11px] font-mono text-[#6ee7b7] tracking-[0.25em] uppercase font-bold">
              Beta Release&nbsp;&nbsp;//&nbsp;&nbsp;Q1&nbsp;
              {new Date().getFullYear()}
            </span>
          </div>

          {/* Main title */}
          <div className="relative w-full flex justify-center flex-col items-center mb-2">
            <h1 className="text-[28vw] sm:text-[20vw] md:text-[13vw] font-black tracking-tighter leading-none select-none iris-title-shimmer">
              IRIS AI
            </h1>
          </div>

          {/* Eyebrow tag line under the big word */}
          <div className="flex items-center gap-3 mb-6">
            <hr className="iris-rule" />
          </div>
          <p className="text-[11px] md:text-sm font-mono tracking-[0.35em] uppercase text-[#10b981] mb-2">
            Integrated Responsive Intelligence System
          </p>

          {/* Sub-headline */}
          <p className="mt-5 max-w-xl text-sm md:text-lg text-gray-300 font-mono leading-relaxed drop-shadow-lg">
            Your device. Fully under command.{" "}
            <span className="text-[#34d399]">Speak once</span> — IRIS handles
            the rest. From files and apps to browser and beyond,
            <span className="text-white"> real-time, zero friction.</span>
          </p>

          {/* Waveform + voice hint */}
          <div className="flex items-center gap-3 mt-6 mb-10">
            <Mic className="w-4 h-4 text-[#10b981]" />
            <div className="flex items-end gap-0.75">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="iris-wave-bar" />
              ))}
            </div>
            <span className="text-[11px] font-mono text-[#10b981]/70 tracking-widest uppercase">
              Voice-native AI
            </span>
          </div>

          {/* CTA buttons */}
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
              title="GitHub Repo"
              subtitle="Source Code"
              iconLeft={<FileCode2 className="w-6 h-6 text-[#10b981]" />}
              iconRight={
                <ArrowRight className="w-5 h-5 text-current group-hover:text-[#10b981]" />
              }
              className="bg-transparent border border-white/15 text-white hover:bg-white/5 backdrop-blur-sm shadow-none"
            />
          </div>

          {/* Floating stat chips */}
          <div className="flex items-center gap-3 mt-10 flex-wrap justify-center">
            {[
              { label: "Latency", value: "<3s" },
              { label: "Context", value: "1M+" },
              { label: "Uptime", value: "24/7" },
              { label: "Local AI", value: "On-device" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#10b981]/20 bg-black/60 backdrop-blur-md"
              >
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  {label}
                </span>
                <span className="text-[11px] font-mono text-[#34d399] font-bold">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Scroll cue ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none select-none">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#10b981]/60">
            Scroll to Explore
          </span>
          {/* Mouse icon */}
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
