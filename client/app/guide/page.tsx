"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Key,
  CheckCircle2,
  AlertTriangle,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const apiKeysData = [
  {
    id: "gemini",
    name: "Google Gemini API",
    status: "Required",
    description: "The primary reasoning and generative engine for IRIS.",
    steps: [
      "Navigate to Google AI Studio.",
      "Sign in with your Google Account.",
      "Click 'Get API Key' in the left sidebar.",
      "Create a key in a new or existing project.",
    ],
    link: "https://aistudio.google.com/app/apikey",
    envVar: "GEMINI_API_KEY",
    buttonText: "Get Gemini Key",
  },
  {
    id: "groq",
    name: "Groq API",
    status: "Required",
    description:
      "Used for ultra-fast, low-latency agent routing and quick decisions.",
    steps: [
      "Go to the Groq Cloud Console.",
      "Log in or create an account.",
      "Navigate to the 'API Keys' section.",
      "Click 'Create API Key' and copy it immediately.",
    ],
    link: "https://console.groq.com/keys",
    envVar: "GROQ_API_KEY",
    buttonText: "Get Groq Key",
  },
  {
    id: "tavily",
    name: "Tavily Search API",
    status: "Optional",
    description: "Powers the Deep Research agent for real-time web crawling.",
    steps: [
      "Sign up at the Tavily Developer Portal.",
      "Navigate to your dashboard.",
      "Generate a new API key (Free tier available).",
    ],
    link: "https://app.tavily.com/home",
    envVar: "TAVILY_API_KEY",
    buttonText: "Get Tavily Key",
  },
  {
    id: "huggingface",
    name: "Hugging Face Token",
    status: "Optional",
    description: "Required only if you are downloading local inference models.",
    steps: [
      "Create a Hugging Face account.",
      "Go to Settings > Access Tokens.",
      "Create a new token with 'Read' permissions.",
    ],
    link: "https://huggingface.co/settings/tokens",
    envVar: "HUGGINGFACE_API_KEY",
    buttonText: "Get Hugging Face Token",
  },
];

export default function ApiKeysGuide() {
  const [copiedVar, setCopiedVar] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedVar(text);
    setTimeout(() => setCopiedVar(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-emerald-50 font-sans selection:bg-emerald-500/30">
      <Header />

      <main className="grow p-6 md:p-12 lg:p-24 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center gap-3 mb-4 text-emerald-500">
            <Terminal size={32} />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              System Keys
            </h1>
          </div>
          <p className="text-lg text-emerald-100/60 leading-relaxed">
            IRIS operates locally, but requires specific API keys to bridge the
            gap to large language models and search engines. Follow this guide
            to forge your keys and initialize the system. Your keys are stored
            locally on your machine and never sent to our servers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {apiKeysData.map((key) => (
            <motion.div
              key={key.id}
              variants={itemVariants}
              className="group relative bg-zinc-950 border border-emerald-900/30 rounded-xl p-6 hover:border-emerald-500/50 transition-colors duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-2">
                    <Key size={20} />
                    {key.name}
                  </h2>

                  <button
                    onClick={() => handleCopy(key.envVar)}
                    className="cursor-pointer flex items-center gap-2 text-xs text-emerald-500/50 mt-2 hover:text-emerald-400 transition-colors"
                    title="Copy to clipboard"
                  >
                    <code>.env: {key.envVar}</code>
                    {copiedVar === key.envVar ? (
                      <Check size={14} className="text-emerald-400" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1 ${
                    key.status === "Required"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-zinc-800 text-zinc-400 border border-zinc-700"
                  }`}
                >
                  {key.status === "Required" ? (
                    <AlertTriangle size={12} />
                  ) : (
                    <CheckCircle2 size={12} />
                  )}
                  {key.status}
                </span>
              </div>

              <p className="text-zinc-400 text-sm mb-6 relative z-10 min-h-10">
                {key.description}
              </p>

              <div className="mb-6 relative z-10">
                <h3 className="text-sm font-semibold text-emerald-500 mb-2 uppercase tracking-wider">
                  How to get it:
                </h3>
                <ul className="space-y-2 min-h-25">
                  {key.steps.map((step, index) => (
                    <li
                      key={index}
                      className="text-sm text-zinc-300 flex items-start gap-2"
                    >
                      <span className="text-emerald-500 mt-0.5">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={key.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 py-2.5 px-4 rounded-lg transition-all duration-200 text-sm font-medium relative z-10 group-hover:border-emerald-500"
              >
                {key.buttonText} <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
