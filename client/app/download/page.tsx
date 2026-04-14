"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Monitor,
  Apple,
  Command,
  ShieldCheck,
  Cpu,
  AlertTriangle,
  Info,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Lightning from "../utils/Lightning";

export default function DownloadPage() {
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleDownload = () => {
    setShowWarning(true);
    let counter = 5;
    setCountdown(counter);

    const interval = setInterval(() => {
      counter -= 1;
      setCountdown(counter);
      if (counter <= 0) {
        clearInterval(interval);
        window.location.href =
          "https://github.com/201Harsh/IRIS-AI/releases/download/v1.1.4/iris-ai-1.1.4-setup.exe";
        setTimeout(() => setShowWarning(false), 5000);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-[#10b981]/30 pt-24 overflow-hidden relative">
      <Header />

      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-zinc-950 border border-[#10b981]/30 rounded-2xl p-8 max-w-md w-full relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]"
            >
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <AlertTriangle className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Installation Notice</h3>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                Because IRIS is an open-source project without a corporate code
                certificate, Windows Defender might flag the installer.
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-zinc-400 font-mono flex flex-col gap-2">
                  <span className="text-white">
                    When the blue popup appears:
                  </span>
                  <span>
                    1. Click{" "}
                    <strong className="text-emerald-400">"More info"</strong>
                  </span>
                  <span>
                    2. Click{" "}
                    <strong className="text-emerald-400">"Run anyway"</strong>
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-500 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Downloading shortly...
                </span>
                <span className="font-mono font-bold text-[#10b981] text-xl">
                  00:0{countdown}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.section
          initial="hidden"
          animate="show"
          className="relative py-20 flex flex-col justify-center items-center text-center min-h-[80vh]"
        >
          <div
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 20%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 20%, transparent 70%)",
              opacity: 0.8,
            }}
          >
            <Lightning
              hue={150}
              xOffset={0}
              speed={1.2}
              intensity={1.5}
              size={1.2}
            />
          </div>

          <motion.div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-xs font-mono tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            PUBLIC BETA V1.0.0 LIVE
          </motion.div>

          <motion.h1 className="relative z-10 text-6xl md:text-8xl font-black tracking-tight mb-6">
            Summon The{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#10b981] to-emerald-200 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Ghost.
            </span>
          </motion.h1>

          <motion.p className="relative z-10 max-w-2xl text-zinc-300 text-lg md:text-xl mb-8 leading-relaxed">
            Download the IRIS desktop engine. Experience autonomous file
            management, local deep research, and multimodal AI directly on your
            operating system.
          </motion.p>

          <motion.div className="relative z-10 flex flex-wrap justify-center gap-3 text-sm text-zinc-400 mb-8 max-w-3xl">
            <div className="flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-lg border border-[#10b981]/20 backdrop-blur-md">
              <Monitor className="w-4 h-4 text-[#10b981]" />
              <span>Windows 10/11</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-lg border border-[#10b981]/20 backdrop-blur-md">
              <Cpu className="w-4 h-4 text-[#10b981]" />
              <span>Quad-Core CPU+</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-lg border border-[#10b981]/20 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span>4-8GB RAM Min</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-900/50 px-4 py-2 rounded-lg border border-[#10b981]/20 backdrop-blur-md">
              <Monitor className="w-4 h-4 text-[#10b981]" />
              <span>Decent GPU</span>
            </div>
          </motion.div>

          <motion.div className="relative z-10 flex flex-col items-center gap-4">
            <button
              onClick={handleDownload}
              className="cursor-pointer group relative inline-flex items-center gap-4 px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-black font-bold text-lg rounded-2xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:-translate-y-1"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Download for Windows
              <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
            </button>

            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-zinc-500 font-mono text-xs tracking-widest mt-4 bg-black/50 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md">
              <span className="flex items-center gap-1.5">
                <Monitor className="w-3 h-3" /> Native .exe
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3" /> 100% BYOK
              </span>
              <span className="hidden md:inline">•</span>
              <span>~300 MB</span>
            </div>
          </motion.div>
        </motion.section>

        <motion.section className="py-20 border-t border-white/5 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-widest text-white uppercase font-mono">
              Platform Support
            </h2>
            <p className="text-zinc-500 mt-2">
              Native desktop integration for your preferred ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] border border-[#10b981]/30 rounded-3xl p-8 relative overflow-hidden group hover:border-[#10b981]/60 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Monitor className="w-32 h-32 text-[#10b981]" />
              </div>
              <Monitor className="w-10 h-10 text-[#10b981] mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Windows</h3>
              <p className="text-zinc-400 text-sm mb-8">
                Full support for Windows 10 and 11. Native DPAPI encryption for
                vault keys.
              </p>
              <span className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 rounded text-xs font-bold tracking-widest">
                AVAILABLE NOW
              </span>
            </div>

            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Apple className="w-32 h-32 text-white" />
              </div>
              <Apple className="w-10 h-10 text-zinc-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">macOS</h3>
              <p className="text-zinc-500 text-sm mb-8">
                Apple Silicon (M1/M2/M3) and Intel support. Integration with
                Apple Keychain.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-zinc-400 border border-white/10 rounded text-xs font-bold tracking-widest">
                <Cpu className="w-3 h-3" /> IN DEVELOPMENT
              </span>
            </div>

            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Command className="w-32 h-32 text-white" />
              </div>
              <Command className="w-10 h-10 text-zinc-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Linux</h3>
              <p className="text-zinc-500 text-sm mb-8">
                AppImage and Debian builds. Secret Service API integration for
                vault security.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-zinc-400 border border-white/10 rounded text-xs font-bold tracking-widest">
                <Cpu className="w-3 h-3" /> COMING SOON
              </span>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
