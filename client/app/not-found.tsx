"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import {
  Home,
  ArrowLeft,
  Cpu,
  Terminal,
  WifiOff,
  Activity,
  Zap,
  Scan,
  AlertTriangle,
  Radio,
} from "lucide-react";
import {
  RiFingerprintLine,
  RiRadarLine,
  RiCpuLine,
  RiSignalTowerLine,
} from "react-icons/ri";
import Link from "next/link";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const diagRef = useRef<HTMLDivElement>(null);

  const [glitchText, setGlitchText] = useState("404");
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 30, stiffness: 100 };
  const rotX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springCfg);
  const rotY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springCfg);
  const transX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springCfg);
  const transY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springCfg);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
      setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const original = "404";
    let interval: NodeJS.Timeout;

    const triggerGlitch = () => {
      let iter = 0;
      const inner = setInterval(() => {
        setGlitchText(
          original
            .split("")
            .map((c, i) => (i < iter ? original[i] : chars[Math.floor(Math.random() * chars.length)]))
            .join("")
        );
        iter += 0.4;
        if (iter >= original.length) clearInterval(inner);
      }, 35);
    };

    triggerGlitch();
    interval = setInterval(triggerGlitch, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(".iris-canvas", { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .fromTo(
        ".grid-h",
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 0.15, duration: 1.2, stagger: 0.12, transformOrigin: "center" },
        "-=1"
      )
      .fromTo(
        ".grid-v",
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 0.15, duration: 1.2, stagger: 0.12, transformOrigin: "center" },
        "-=1.2"
      )
      .fromTo(
        ".iris-badge",
        { y: -30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        titleRef.current,
        { y: 60, opacity: 0, skewX: 8 },
        { y: 0, opacity: 1, skewX: 0, duration: 1 },
        "-=0.4"
      )
      .fromTo(
        ".sub-status",
        { opacity: 0, letterSpacing: "0px" },
        { opacity: 1, letterSpacing: "0.25em", duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        diagRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ".iris-btn",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      )
      .fromTo(
        ".corner-deco",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.6"
      );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulse: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 1.8 + 0.5,
        pulse: Math.random() * Math.PI,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, W, H);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.05;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const alpha = 0.4 + Math.sin(p.pulse) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,65,${alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,255,65,${0.15 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-black overflow-hidden text-[#00ff41] selection:bg-[#00ff41] selection:text-black font-mono"
    >
      <canvas ref={canvasRef} className="iris-canvas absolute inset-0 z-0 opacity-0" />

      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-linear(rgba(0,255,65,0.04)_1px,transparent_1px)] bg-size-[100%_3px]" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-linear(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)]" />

      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="grid-h absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00ff41] to-transparent"
            style={{ top: `${15 + i * 14}%` }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="grid-v absolute top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#00ff41] to-transparent"
            style={{ left: `${15 + i * 14}%` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#00ff41]"
            style={{
              left: `${8 + i * 20}%`,
              top: `${5 + (i % 3) * 35}%`,
              opacity: 0.08,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {i % 2 === 0 ? <Scan size={32 + i * 8} /> : <RiRadarLine size={32 + i * 8} />}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="pointer-events-none fixed z-30 mix-blend-screen"
        animate={{ x: coords.x - 40, y: coords.y - 40 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      >
        <div className="relative w-20 h-20 rounded-full border border-[#00ff41]/30 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#00ff41]/10 animate-ping" />
          <div className="w-2 h-2 bg-[#00ff41] rounded-full shadow-[0_0_10px_#00ff41]" />
          <RiCpuLine className="absolute text-[#00ff41]/40 text-xs bottom-2" />
        </div>
      </motion.div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          className="iris-badge mb-10 flex items-center gap-3 px-5 py-2 rounded-full border border-[#00ff41]/40 bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,65,0.1)]"
        >
          <Radio className="w-4 h-4 animate-pulse text-[#00ff41]" />
          <span className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase">
            IRIS Neural Core
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff41]" />
          </span>
        </motion.div>

        <motion.div
          style={{ rotateX: rotX, rotateY: rotY, perspective: 1200 }}
          className="relative mb-8 cursor-default"
        >
          <h1
            ref={titleRef}
            className="relative text-[7rem] sm:text-[9rem] md:text-[13rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-[#00ff41] via-[#00cc33] to-[#006622] drop-shadow-[0_0_25px_rgba(0,255,65,0.4)] select-none"
          >
            {glitchText}
          </h1>

          <span
            aria-hidden
            className="absolute top-0 left-0 w-full text-center text-[7rem] sm:text-[9rem] md:text-[13rem] font-black leading-none tracking-tighter text-[#00ff41]/10 -translate-x-0.75 mix-blend-screen"
          >
            404
          </span>
          <span
            aria-hidden
            className="absolute top-0 left-0 w-full text-center text-[7rem] sm:text-[9rem] md:text-[13rem] font-black leading-none tracking-tighter text-[#00ff41]/10 translate-x-0.75 mix-blend-screen"
          >
            404
          </span>

          <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-[#00ff41]/30 text-2xl hidden md:block">
            {"<<"}
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#00ff41]/30 text-2xl hidden md:block">
            {"/>"}
          </div>
        </motion.div>

        <div className="sub-status text-center mb-2">
          <p className="text-lg md:text-2xl font-bold tracking-[0.2em] uppercase text-[#00ff41]/90">
            PAGE_NOT_FOUND
          </p>
        </div>

        <div className="flex items-center gap-2 mb-10 text-sm text-[#00ff41]/50">
          <WifiOff className="w-4 h-4" />
          <span className="tracking-widest uppercase">Pathway Not Found</span>
        </div>

        <motion.div
          ref={diagRef}
          style={{ x: transX, y: transY }}
          className="w-full max-w-lg mb-12 border border-[#00ff41]/30 bg-black/70 backdrop-blur-lg rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,255,65,0.05)]"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-[#00ff41]/20 bg-[#00ff41]/5">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#00ff41]/80">
              <Terminal className="w-3.5 h-3.5" />
              <span>DIAGNOSTIC_STREAM</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00ff41]/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#00ff41]/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#00ff41]/10" />
            </div>
          </div>

          <div className="p-4 space-y-2 text-xs md:text-sm font-mono">
            {[
              { label: "ERROR_CODE", value: "0x404_PAGE_NULL", icon: AlertTriangle },
              { label: "AI_CORE", value: "IRIS_OFFLINE", icon: Activity },
              { label: "REALITY_ANCHOR", value: "UNSTABLE", icon: Zap },
              { label: "TIMESTAMP", value: new Date().toISOString(), icon: RiSignalTowerLine },
            ].map((row, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-1 border-b border-[#00ff41]/10 last:border-0"
              >
                <span className="flex items-center gap-2 text-[#00ff41]/50">
                  <row.icon className="w-3.5 h-3.5" />
                  {row.label}
                </span>
                <span className="text-[#00ff41]/90 text-right truncate max-w-[50%]">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="h-1 w-full bg-[#00ff41]/10">
            <motion.div
              className="h-full bg-linear-to-r from-[#00ff41] to-[#008f11]"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-5 w-full max-w-md sm:max-w-none justify-center">
          <Link href="/" className="iris-btn block">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="group relative w-full sm:w-auto px-10 py-4 bg-transparent border border-[#00ff41] text-[#00ff41] font-bold tracking-[0.2em] uppercase overflow-hidden rounded-sm transition-colors duration-300 hover:text-black"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Home className="w-5 h-5" />
                Return to Base
              </span>
              <div className="absolute inset-0 bg-[#00ff41] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => window.history.back()}
            className="iris-btn group relative w-full sm:w-auto px-10 py-4 bg-[#00ff41]/5 border border-[#00ff41]/40 text-[#00ff41] font-bold tracking-[0.2em] uppercase overflow-hidden rounded-sm hover:border-[#00ff41] hover:bg-[#00ff41]/10 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <ArrowLeft className="w-5 h-5" />
              Previous PAGE
            </span>
          </motion.button>
        </div>
      </div>

      <div className="corner-deco absolute top-6 left-6 w-24 h-24 border-l-2 border-t-2 border-[#00ff41]/40 z-20 pointer-events-none" />
      <div className="corner-deco absolute top-6 right-6 w-24 h-24 border-r-2 border-t-2 border-[#00ff41]/40 z-20 pointer-events-none" />
      <div className="corner-deco absolute bottom-6 left-6 w-24 h-24 border-l-2 border-b-2 border-[#00ff41]/40 z-20 pointer-events-none" />
      <div className="corner-deco absolute bottom-6 right-6 w-24 h-24 border-r-2 border-b-2 border-[#00ff41]/40 z-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-6 z-20 flex items-center gap-2 text-[10px] md:text-xs text-[#00ff41]/30 tracking-wider"
      >
        <RiFingerprintLine className="w-4 h-4" />
        <span>IRIS_v1.2.4 // VOID_PAGE_SEVERED</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 right-6 z-20 flex items-center gap-2 text-[10px] md:text-xs text-[#00ff41]/30 tracking-wider"
      >
        <Cpu className="w-4 h-4 animate-pulse" />
        <span>IRIS_LINK: SEVERED</span>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden opacity-[0.03]">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 text-[#00ff41] text-xs font-mono whitespace-nowrap"
            style={{ left: `${i * 10}%` }}
            animate={{ y: ["-10%", "110%"] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(20)].map(() => Math.round(Math.random())).join(" ")}
          </motion.div>
        ))}
      </div>
    </div>
  );
}