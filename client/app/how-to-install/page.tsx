"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Terminal as TerminalIcon,
  Play,
  Key,
  ChevronRight,
  Smartphone,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Terminal from "../Components/Terminal"; // Assuming your component is here

export default function InstallGuide() {
  return (
    <div className="min-h-screen bg-[#000000] text-zinc-100 font-sans selection:bg-[#10b981]/30 pt-24 overflow-hidden relative">
      <Header />

      <main className="max-w-7xl mx-auto px-6 relative z-10 pb-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-xs font-mono tracking-widest mb-6">
            DOCUMENTATION
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            How to Install <span className="text-[#10b981]">IRIS</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
            Choose your deployment method. Install the native Desktop
            Application or spin up the headless CLI Core directly from your
            terminal.
          </p>
        </motion.div>

        {/* Global API Key Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-20 bg-gradient-to-r from-zinc-900 to-zinc-950 border border-[#10b981]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#10b981]/10 rounded-xl">
              <Key className="w-6 h-6 text-[#10b981]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Prerequisite: API Keys
              </h3>
              <p className="text-zinc-400 text-sm">
                Both versions of IRIS require a Google Gemini Live API key to
                function. We have prepared a complete guide on how to generate
                and secure your keys.
              </p>
            </div>
          </div>
          <Link
            href="/guide"
            className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-[#10b981]/20 border border-white/10 hover:border-[#10b981]/50 text-white rounded-xl font-mono text-sm transition-all group"
          >
            Read API Guide
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#10b981]" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Desktop Installation Track */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <Monitor className="w-8 h-8 text-[#10b981]" />
              <h2 className="text-3xl font-bold">Desktop App</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-[#10b981]/50 flex items-center justify-center text-[#10b981] font-mono font-bold text-sm">
                    1
                  </div>
                  <div className="w-px h-full bg-gradient-to-b from-[#10b981]/50 to-transparent my-2"></div>
                </div>
                <div className="pb-8">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Download the Installer
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Grab the latest native <code>.exe</code> from the download
                    page. It contains everything needed for deep OS integration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-[#10b981]/50 flex items-center justify-center text-[#10b981] font-mono font-bold text-sm">
                    2
                  </div>
                  <div className="w-px h-full bg-gradient-to-b from-[#10b981]/50 to-transparent my-2"></div>
                </div>
                <div className="pb-8">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Run & Bypass Defender
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    If Windows SmartScreen appears, click{" "}
                    <strong>More Info</strong> and then{" "}
                    <strong>Run Anyway</strong>. This is normal for uncertified
                    open-source software.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#10b981] text-black flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Configure Keys & Launch
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Open the app, paste your Gemini API key in the settings,
                    select your voice model, and start talking.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://instagram.com/your-reel-link" // <-- UPDATE WITH YOUR INSTA LINK
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 w-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-[#10b981]/50 text-white font-bold py-4 rounded-2xl transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/0 via-[#10b981]/10 to-[#10b981]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Play className="w-5 h-5 text-[#10b981] fill-[#10b981]" />
              Watch Video Tutorial
            </a>
          </motion.section>

          {/* CLI Installation Track */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <TerminalIcon className="w-8 h-8 text-[#10b981]" />
              <h2 className="text-3xl font-bold">CLI Core</h2>
            </div>

            <p className="text-zinc-400 text-sm">
              For power users. Ensure you have{" "}
              <strong className="text-white">Node.js 24+</strong> installed on
              your machine before running the global installation.
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
              <div className="bg-zinc-900 border-b border-white/10 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="text-zinc-500 font-mono text-xs ml-2">
                  iris-setup.sh
                </span>
              </div>
              <div className="p-4 h-[400px] overflow-y-auto custom-scrollbar">
                {/* Your Custom Terminal Component */}
                <Terminal
                  commands={[
                    "npm install -g iris-mini",
                    "iris",
                    "AIzaSy...[REDACTED]",
                    "Lyra",
                    "y",
                  ]}
                  outputs={{
                    0: [
                      "added 42 packages, and audited 43 packages in 3s",
                      "found 0 vulnerabilities",
                      "✔ Installed iris-mini globally.",
                    ],
                    1: [
                      "██╗██████╗ ██╗███████╗   ███╗   ███╗██╗███╗   ██╗██╗",
                      "██║██╔══██╗██║██╔════╝   ████╗ ████║██║████╗  ██║██║",
                      "██║██████╔╝██║███████╗   ██╔████╔██║██║██╔██╗ ██║██║",
                      "██║██╔══██╗██║╚════██║   ██║╚██╔╝██║██║██║╚██╗██║██║",
                      "██║██║  ██║██║███████║   ██║ ╚═╝ ██║██║██║ ╚████║██║",
                      "╚═╝╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝",
                      "",
                      "SETUP   ·   Voice Assistant   ·   Powered by Gemini",
                      "────────────────────────────────────────────────────────",
                      "Looks like your first time here — let's get you set up.",
                      "",
                      "─────── 1 / 2 · API KEY ───────",
                      "· Get your free key at -> https://aistudio.google.com/app/api-keys",
                      "? Gemini API key",
                    ],
                    2: [
                      "✔ Validating key format...",
                      "",
                      "─────── 2 / 2 · VOICE ───────",
                      "? Pick a voice (Lyra/Puck)",
                    ],
                    3: [
                      "─────── REVIEW ───────",
                      "API key  →  •••••••••••••••••",
                      "Voice    →  Lyra",
                      "? Save and launch IRIS? (Y/n)",
                    ],
                    4: [
                      "✔ Configuration saved.",
                      "",
                      "─────── STARTING ───────",
                      "✔ Loading config...",
                      "✔ Connecting API...",
                      "",
                      "[ NEURAL CORE ONLINE ]",
                      "[ UI PORT ]  http://localhost:6753",
                      "[ AGENT ]    Awaiting Connection...",
                      "[ EXIT ]     Press Ctrl + C to stop",
                      "========================================================",
                      "CREATED BY  Harsh (@irisxai)",
                      "GITHUB      https://github.com/201Harsh",
                      "INSTAGRAM   https://www.instagram.com/201harshs/",
                      "========================================================",
                    ],
                  }}
                  typingSpeed={20}
                  delayBetweenCommands={1000}
                />
              </div>
            </div>
          </motion.section>
        </div>

        {/* IRIS-X Mobile Announcement Card */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-24 max-w-4xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981] to-emerald-900 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-[#050505] border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Smartphone className="w-48 h-48 text-[#10b981]" />
            </div>

            <div className="relative z-10 max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-8 h-8 text-[#10b981]" />
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  IRIS-X Mobile
                </h2>
              </div>
              <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                The agentic neural core is expanding. Soon, you will be able to
                control your Android device, schedule background tasks, and
                automate apps using natural language.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 rounded-lg text-sm font-bold tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                </span>
                Development in Progress
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-[4px] border-dashed border-[#10b981]/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                <Smartphone className="w-12 h-12 text-[#10b981]/50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-mono font-bold text-lg">
                  Q3
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
