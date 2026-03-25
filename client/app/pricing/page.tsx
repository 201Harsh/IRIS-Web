"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Activity, Sparkles, Ticket } from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ScratchCard } from "../Components/ScratchCard";

export default function PricingPage() {
  const [discountActive, setDiscountActive] = useState(false);
  const [discountPercent, setDiscountPercent] = useState(15);

  useEffect(() => {
    setDiscountPercent(Math.floor(Math.random() * 6) + 10);
  }, []);

  const basePrice = 499;
  const discountedPrice = Math.floor(basePrice * (1 - discountPercent / 100));

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#10b981] selection:text-black">
      <Header />

      <section className="pt-40 pb-20 px-6 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] text-xs font-mono mb-8 backdrop-blur-md">
            <Activity className="w-3 h-3" />
            <span className="uppercase tracking-widest">System Deployment</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            CHOOSE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#10b981] to-[#044a33]">
              INTELLIGENCE
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deploy IRIS as a powerful local OS controller, or unleash the full
            autonomous ecosystem across your network and mobile devices.
          </p>
        </motion.div>
      </section>

      <section className="py-12 relative z-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-[2rem] bg-[#0a0a0a] border border-dashed border-[#10b981]/30 relative overflow-hidden"
          >
            <Ticket className="w-8 h-8 text-[#10b981] mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-bold mb-2">Decrypt a Network Key</h3>
            <p className="text-gray-400 mb-8 text-sm max-w-md mx-auto">
              Scratch the cryptographic foil below to reveal a specialized
              network key for a lifetime discount on the Pro Engine.
            </p>
            <ScratchCard
              onReveal={() => setDiscountActive(true)}
              discountAmount={discountPercent}
            />

            <AnimatePresence>
              {discountActive && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#10b981] font-mono text-sm mt-6 animate-pulse"
                >
                  {`> KEY ACCEPTED: ${discountPercent}% DISCOUNT APPLIED GLOBALLY`}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/10 flex flex-col hover:border-white/20 transition-colors"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">IRIS Free</h3>
              <div className="text-4xl font-black text-white mb-4">
                ₹0
                <span className="text-lg font-normal text-gray-500 tracking-normal">
                  /forever
                </span>
              </div>
              <p className="text-sm text-gray-400 h-10">
                The ultimate local workstation and OS controller.
              </p>
            </div>

            <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5 font-mono text-xs">
              <div className="text-gray-500 mb-2 uppercase tracking-widest font-bold">
                Rate Limits
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Active Devices:</span> <span>2 (Local Only)</span>
                </li>
                <li className="flex justify-between">
                  <span>Voice Commands:</span> <span>50 / day</span>
                </li>
                <li className="flex justify-between">
                  <span>Local RAG Queries:</span> <span>10 / day</span>
                </li>
                <li className="flex justify-between">
                  <span>Llama 3 Web Crawls:</span> <span>5 / day</span>
                </li>
                <li className="flex justify-between">
                  <span>Latency:</span>{" "}
                  <span className="text-yellow-500">Standard</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 flex-1">
              <FeatureItem text="Desktop App & Process Control" />
              <FeatureItem text="Deep File Operations & Drop Zones" />
              <FeatureItem text="Local Vector Search & Vision API" />
              <FeatureItem text="Terminal & Script Execution" />
              <FeatureItem text="Window Teleportation & Live Widgets" />
            </div>

            <button className="w-full mt-10 py-4 rounded-xl border border-white/20 bg-transparent text-white font-bold hover:bg-white/5 transition-colors">
              Initialize Free Engine
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#050505] rounded-[2.5rem] p-10 border border-[#10b981]/50 flex flex-col relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-emerald-300" />

            <div className="mb-8 relative z-10">
              <div className="flex justify-between items-start">
                <h3 className="text-3xl font-bold mb-2 flex items-center gap-2">
                  IRIS Pro <Sparkles className="w-5 h-5 text-[#10b981]" />
                </h3>
              </div>
              <div className="text-4xl font-black text-white mb-4 flex items-end gap-3">
                {discountActive ? (
                  <>
                    <span className="text-2xl text-gray-500 line-through decoration-red-500/50">
                      ₹{basePrice}
                    </span>
                    <span className="text-[#10b981]">₹{discountedPrice}</span>
                  </>
                ) : (
                  <span>₹{basePrice}</span>
                )}
                <span className="text-lg font-normal text-gray-500 tracking-normal mb-1">
                  /month
                </span>
              </div>
              <p className="text-sm text-gray-400 h-10">
                The powerhouse ecosystem with deep mobile links and action
                agents.
              </p>
            </div>

            <div className="mb-8 p-4 rounded-xl bg-[#10b981]/5 border border-[#10b981]/20 font-mono text-xs relative z-10">
              <div className="text-[#10b981] mb-2 uppercase tracking-widest font-bold">
                Pro Rate Limits
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Active Devices:</span>{" "}
                  <span className="text-[#10b981]">Up to 4</span>
                </li>
                <li className="flex justify-between">
                  <span>Voice Commands:</span>{" "}
                  <span className="text-[#10b981]">Unlimited</span>
                </li>
                <li className="flex justify-between">
                  <span>Local RAG Queries:</span>{" "}
                  <span className="text-[#10b981]">Unlimited</span>
                </li>
                <li className="flex justify-between">
                  <span>Llama 3 Web Crawls:</span> <span>500 / day</span>
                </li>
                <li className="flex justify-between">
                  <span>Latency:</span>{" "}
                  <span className="text-[#10b981]">
                    Priority Groq LPU {"(<500ms)"}
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 flex-1 relative z-10">
              <FeatureItem text="Everything in Free, plus:" pro />
              <FeatureItem
                text="Full Mobile Link (ADB Telemetry & Control)"
                pro
              />
              <FeatureItem text="Autonomous Deep Research & Notion Sync" pro />
              <FeatureItem text="Live Web Forge & Localhost Wormholes" pro />
              <FeatureItem text="Multi-Face Biometric OS Encryption" pro />
              <FeatureItem text="Ghost Coder (Inline IDE Generation)" pro />
            </div>

            <button className="w-full mt-10 py-4 rounded-xl bg-[#10b981] text-black font-bold hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] relative z-10">
              Upgrade to Pro Engine
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deep Architecture Comparison
          </h2>
          <p className="text-gray-400">
            A detailed breakdown of system capabilities.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-widest text-gray-500">
                <th className="py-4 px-6 font-bold">Capability</th>
                <th className="py-4 px-6 font-bold text-center">Free</th>
                <th className="py-4 px-6 font-bold text-center text-[#10b981]">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-300">
              <TableRow
                title="Connected Ecosystem Devices"
                free="2"
                pro="Up to 4"
              />
              <TableRow
                title="Local File & Process Control"
                free="Yes"
                pro="Yes"
              />
              <TableRow
                title="Semantic Vector Search"
                free="Limited (10/day)"
                pro="Unlimited"
              />
              <TableRow
                title="Voice Latency Engine"
                free="Standard WebSockets"
                pro="Priority Groq LPU"
              />
              <TableRow
                title="Mobile Notification Intercept"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Mobile Screen Execution (Tap/Swipe)"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Live Web Hacking (CSS/JS Injection)"
                free="Yes"
                pro="Yes"
              />
              <TableRow
                title="Deploy Localhost Wormholes"
                free="No"
                pro="Yes"
              />
              <TableRow
                title="Autonomous Email Dispatch"
                free="Drafts Only"
                pro="Draft & Send"
              />
              <TableRow
                title="Biometric Security (Face ID)"
                free="Basic PIN Lock"
                pro="Multi-Face Encryption"
              />
              <TableRow
                title="HuggingFace Image Generation"
                free="No"
                pro="Yes"
              />
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const FeatureItem = ({
  text,
  pro = false,
}: {
  text: string;
  pro?: boolean;
}) => (
  <div className="flex items-start gap-3">
    {pro ? (
      <Zap className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
    ) : (
      <CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
    )}
    <span className={pro ? "text-gray-200 font-medium" : "text-gray-400"}>
      {text}
    </span>
  </div>
);

const TableRow = ({
  title,
  free,
  pro,
}: {
  title: string;
  free: string;
  pro: string;
}) => (
  <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
    <td className="py-4 px-6 font-medium text-gray-200">{title}</td>
    <td className="py-4 px-6 text-center text-gray-400">{free}</td>
    <td className="py-4 px-6 text-center font-medium text-[#10b981]">{pro}</td>
  </tr>
);
