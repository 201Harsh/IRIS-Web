"use client";

import { motion } from "framer-motion";
import {
  Download,
  Terminal,
  Monitor,
  Apple,
  Command,
  ShieldCheck,
  Cpu,
  Github,
  Instagram,
} from "lucide-react";


export default function DownloadPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-[#10b981]/30 pt-24 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#10b981]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <Header />

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="py-20 flex flex-col items-center text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-xs font-mono tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            PUBLIC BETA V1.0.0 LIVE
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
          >
            Summon The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-emerald-200">
              Ghost.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed"
          >
            Download the IRIS desktop engine. Experience autonomous file
            management, local deep research, and multimodal AI directly on your
            operating system.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4"
          >
            <a
              href="/releases/IRIS-Setup-1.0.0.exe"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-black font-bold text-lg rounded-2xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:-translate-y-1"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              Download for Windows
              <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
            </a>

            <div className="flex items-center gap-6 text-zinc-500 font-mono text-xs tracking-widest mt-2">
              <span className="flex items-center gap-1.5">
                <Monitor className="w-3 h-3" /> Windows 10/11
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3" /> 100% BYOK
              </span>
              <span>•</span>
              <span>~145 MB</span>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 border-t border-white/5"
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-widest text-white uppercase font-mono">
              Platform Support
            </h2>
            <p className="text-zinc-500 mt-2">
              Native desktop integration for your preferred ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0a] border border-[#10b981]/30 rounded-3xl p-8 relative overflow-hidden group">
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

            <div className="bg-black border border-white/5 rounded-3xl p-8 relative overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
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

            <div className="bg-black border border-white/5 rounded-3xl p-8 relative overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
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
