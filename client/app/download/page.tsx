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
  Terminal,
  Copy,
  Check,
  Smartphone,
  Layers,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Lightning from "../utils/Lightning";

export default function DownloadPage() {
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [copied, setCopied] = useState(false);

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
          "https://github.com/201Harsh/IRIS-AI/releases/download/v1.2.3/iris-ai-1.2.3-setup.exe";
        setTimeout(() => setShowWarning(false), 5000);
      }
    }, 1000);
  };

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npm install -g iris-mini");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          className="relative py-20 flex flex-col justify-center items-center text-center min-h-[85vh]"
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
            PUBLIC BETA V1.0.2 LIVE
          </motion.div>

          <motion.h1 className="relative z-10 text-6xl md:text-8xl font-black tracking-tight mb-6">
            Summon The{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#10b981] to-emerald-200 drop-shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              Ghost.
            </span>
          </motion.h1>

          <motion.p className="relative z-10 max-w-2xl text-zinc-300 text-lg md:text-xl mb-12 leading-relaxed">
            Experience autonomous file management, local deep research, and
            multimodal AI. Install the native desktop UI or deploy the headless
            CLI engine.
          </motion.p>

          <motion.div className="relative z-10 flex flex-col md:flex-row items-center gap-6 mb-12">
            <button
              onClick={handleDownload}
              className="cursor-pointer group relative flex items-center justify-center gap-3 w-full md:w-70 h-16 bg-[#10b981] hover:bg-[#059669] text-black font-bold text-lg rounded-2xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:-translate-y-1"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Desktop App
              <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
            </button>

            <span className="text-zinc-500 font-mono text-sm hidden md:block">
              OR
            </span>

            <div className="relative group flex items-center justify-between bg-[#0a0a0a] border border-white/10 hover:border-[#10b981]/50 w-full md:w-95 h-16 rounded-2xl p-2 pl-6 pr-2 shadow-2xl transition-all">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-[#10b981]" />
                <code className="text-sm md:text-base font-mono text-zinc-300">
                  npm install -g iris-mini
                </code>
              </div>
              <button
                onClick={handleCopyCli}
                className="flex items-center justify-center w-12 h-12 bg-white/5 hover:bg-[#10b981]/20 rounded-xl text-zinc-400 hover:text-[#10b981] transition-colors"
                title="Copy to clipboard"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-[#10b981]" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>

          <motion.div className="relative z-10 flex flex-wrap justify-center items-center gap-3 md:gap-6 text-zinc-500 font-mono text-xs tracking-widest bg-black/50 px-6 py-3 rounded-full border border-white/5 backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <Monitor className="w-3 h-3" /> Win 10/11
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3 h-3" /> Node.js 24+
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3" /> 100% BYOK
            </span>
          </motion.div>
        </motion.section>

        <motion.section className="py-20 border-t border-white/5 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold tracking-widest text-white uppercase font-mono">
              The Ecosystem
            </h2>
            <p className="text-zinc-500 mt-2">
              Native integrations designed for your preferred platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0a0a0a] border border-[#10b981]/30 rounded-3xl p-8 relative overflow-hidden group hover:border-[#10b981]/60 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Monitor className="w-32 h-32 text-[#10b981]" />
              </div>
              <Monitor className="w-10 h-10 text-[#10b981] mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">Windows</h3>
              <p className="text-zinc-400 text-sm mb-8">
                Full OS integration. Deep Windows API hooks for file management
                and system automation.
              </p>
              <span className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 rounded text-xs font-bold tracking-widest">
                AVAILABLE NOW
              </span>
            </div>

            <div className="bg-[#0a0a0a] border border-[#10b981]/30 rounded-3xl p-8 relative overflow-hidden group hover:border-[#10b981]/60 transition-colors">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Command className="w-32 h-32 text-[#10b981]" />
              </div>
              <Terminal className="w-10 h-10 text-[#10b981] mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">CLI Core</h3>
              <p className="text-zinc-400 text-sm mb-8">
                Global NPM package. Blazing fast, headless terminal access
                tailored for power users.
              </p>
              <span className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 rounded text-xs font-bold tracking-widest">
                NPM REGISTRY
              </span>
            </div>

            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Apple className="w-32 h-32 text-white" />
              </div>
              <Apple className="w-10 h-10 text-zinc-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">macOS</h3>
              <p className="text-zinc-500 text-sm mb-8">
                Apple Silicon (M-Series) and Intel support. Deep integration
                with Apple Keychain.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 text-zinc-400 border border-white/10 rounded text-xs font-bold tracking-widest">
                <Cpu className="w-3 h-3" /> IN DEVELOPMENT
              </span>
            </div>

            <div className="bg-[#050505] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-[#10b981]/20 transition-colors duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Smartphone className="w-32 h-32 text-[#10b981]" />
              </div>
              <Layers className="w-10 h-10 text-zinc-400 group-hover:text-[#10b981] transition-colors mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">
                IRIS-X Mobile
              </h3>
              <p className="text-zinc-500 text-sm mb-8">
                Agentic control for Android devices. Features background task
                scheduling and native device automation.
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-linear-to-r from-[#10b981]/20 to-emerald-900/40 text-emerald-400 border border-[#10b981]/30 rounded text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Smartphone className="w-3 h-3" /> COMING SOON
              </span>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
