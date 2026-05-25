"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ArrowLeft, Activity } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Matrix-style random binary string generator
  const generateBinary = () => {
    let str = "";
    for (let i = 0; i < 50; i++) {
      str += Math.random() > 0.5 ? "1 " : "0 ";
    }
    return str;
  };

  return (
    <div className="relative min-h-screen bg-black text-green-400 overflow-hidden font-mono flex flex-col items-center justify-center selection:bg-green-500/40 selection:text-green-100">
      {/* Background Parallax Grid & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      </div>

      {/* Custom Glow Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full bg-green-400/40 blur-md z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovered ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl w-full px-6 flex flex-col items-center text-center">
        {/* Status Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-12 px-4 py-2 rounded-full border border-green-500/50 bg-green-950/20 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          <Activity className="w-4 h-4 animate-pulse text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
          <span className="text-xs uppercase tracking-[0.3em] text-green-300 font-bold drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
            Neural Link Severed
          </span>
        </motion.div>

        {/* Massive 404 Display */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-900 drop-shadow-[0_0_40px_rgba(34,197,94,0.6)] select-none"
            style={{ WebkitTextStroke: "2px rgba(34, 197, 94, 0.2)" }}
          >
            404
          </motion.div>

          {/* Glitch Overlay Text */}
          <motion.div
            animate={{
              opacity: [0, 1, 0, 0.6, 0],
              x: [-6, 6, -3, 3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[12rem] md:text-[16rem] font-black leading-none tracking-tighter text-green-400 opacity-0 mix-blend-overlay pointer-events-none drop-shadow-[0_0_25px_rgba(34,197,94,1)]"
          >
            404
          </motion.div>
        </div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-green-200 mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">
            Sector Not Found
          </h1>
          <p className="text-green-500/90 text-sm md:text-base leading-relaxed">
            IRIS neural core could not locate the requested sector. The routing
            protocol may be corrupted, or this node has been permanently purged
            from the system architecture.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          {/* Back to OS Button */}
          <Link href="/">
            <motion.button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 px-8 py-4 bg-green-500 text-black font-extrabold uppercase tracking-widest text-sm rounded-none overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span>Return to Core</span>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-black" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black" />
            </motion.button>
          </Link>

          {/* Diagnostic Button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center gap-3 px-6 py-4 text-green-400 hover:text-green-200 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] uppercase tracking-widest text-xs font-bold transition-all duration-300"
            onClick={() => window.location.reload()}
          >
            <ShieldAlert className="w-4 h-4 group-hover:animate-spin" />
            <span>Run Diagnostics</span>
          </button>
        </motion.div>
      </div>

      {/* Floating Binary Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 hidden md:block">
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: "-10vh" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-10 text-[10px] whitespace-nowrap text-green-600 writing-vertical-rl font-bold"
          style={{ writingMode: "vertical-rl" }}
        >
          {generateBinary()}
        </motion.div>
        <motion.div
          initial={{ y: "-10vh" }}
          animate={{ y: "100vh" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-20 text-[10px] whitespace-nowrap text-green-700 writing-vertical-rl font-bold"
          style={{ writingMode: "vertical-rl" }}
        >
          {generateBinary()}
        </motion.div>
      </div>

      {/* System Status Footer */}
      <div className="absolute bottom-6 left-6 text-xs text-green-600 font-mono flex items-center gap-4 font-bold">
        <span className="drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
          SYS_ERR: 404
        </span>
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,1)]" />
        <span className="drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]">
          LATENCY: ERR_TIMEOUT
        </span>
      </div>
    </div>
  );
}
