"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  CheckCircle2,
  Zap,
  Star,
  Mic,
  MousePointer2,
  Brain,
  HardDrive,
  Database,
  Smartphone,
  Code2,
  Shield,
  Globe,
  Fingerprint,
  MessageCircle,
  Search,
  LayoutTemplate,
  Braces,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StoryChapter, { StoryContent } from "../lib/StoryChapter";

const storyData: StoryContent[] = [
  {
    num: "01",
    title: "The OS Layer",
    text: "IRIS doesn't just chat; it controls. It natively manages your file system, opens applications, and sorts your messy directories into categorized drop zones automatically.",
    icon: <Database className="w-24 h-24 text-gray-400" />,
    visualTitle: "SYSTEM CONTROL",
    visualSub: "Native OS Access",
  },
  {
    num: "02",
    title: "Voice First",
    text: "Typing is friction. By stripping out HTTP overhead and streaming audio binaries directly over WebSockets, IRIS achieves sub-second latency for real-time conversation.",
    icon: <Mic className="w-24 h-24 text-blue-400" />,
    visualTitle: "ZERO LATENCY",
    visualSub: "WebSocket Audio",
  },
  {
    num: "03",
    title: "Biometric Vault",
    text: "Security isn't just a password. IRIS uses Local Face Recognition to verify your physical presence before executing sensitive OS-level commands or unlocking the system vault.",
    icon: <Fingerprint className="w-24 h-24 text-emerald-400" />,
    visualTitle: "VISION SECURITY",
    visualSub: "Multi-Face Encryption",
  },
  {
    num: "04",
    title: "The Mobile Bridge",
    text: "Your PC and phone are now one. IRIS connects via ADB to read notifications, toggle hardware like Wi-Fi, and even swipe or tap specific coordinates on your mobile screen.",
    icon: <Smartphone className="w-24 h-24 text-purple-400" />,
    visualTitle: "ECOSYSTEM LINK",
    visualSub: "Android Telemetry",
  },
  {
    num: "05",
    title: "Neural Communication",
    text: "Dictate and dispatch. IRIS can instantly draft emails, send WhatsApp messages, or even schedule delayed cron-based texts without you ever touching the keyboard.",
    icon: <MessageCircle className="w-24 h-24 text-green-400" />,
    visualTitle: "AUTONOMOUS COMMS",
    visualSub: "WhatsApp & Email",
  },
  {
    num: "06",
    title: "Deep Research Agent",
    text: "Need a report? IRIS deploys an autonomous Llama 3 web crawler to scour the internet, synthesize data, and seamlessly sync the final research report directly to your Notion.",
    icon: <Search className="w-24 h-24 text-orange-400" />,
    visualTitle: "RAG ENGINE",
    visualSub: "Llama 3 Web Crawl",
  },
  {
    num: "07",
    title: "UI Teleportation",
    text: 'Command your workspace. Tell IRIS to "move code to the left and browser to the right." It physically resizes and stacks your application windows for ultimate flow state.',
    icon: <LayoutTemplate className="w-24 h-24 text-cyan-400" />,
    visualTitle: "WORKSPACE MGR",
    visualSub: "Window Teleportation",
  },
  {
    num: "08",
    title: "The Live Forge",
    text: "Describe a website, and watch it build. IRIS spawns a live window and generates fully animated React and GSAP components in real-time right before your eyes.",
    icon: <Code2 className="w-24 h-24 text-pink-400" />,
    visualTitle: "AGENTIC BUILDER",
    visualSub: "Tailvy Integration",
  },
  {
    num: "09",
    title: "The Local Brain",
    text: "Complete privacy. IRIS indexes your massive project folders into a local Vector Database, allowing you to semantically search and interact with your data completely offline.",
    icon: <HardDrive className="w-24 h-24 text-yellow-400" />,
    visualTitle: "VECTOR MEMORY",
    visualSub: "Semantic Indexing",
  },
  {
    num: "10",
    title: "Visual Hacking",
    text: 'A viral party trick with real power. Command IRIS to "Hack Apple," and it injects custom JavaScript to visually mutate live websites with your own cinematic text and themes.',
    icon: <Braces className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "DOM MUTATION",
    visualSub: "Live CSS/JS Injection",
  },
  {
    num: "11",
    title: "Network Wormholes",
    text: "Need to share localhost? IRIS can autonomously open a secure tunnel, exposing your local dev server to the public internet so clients can see your work instantly.",
    icon: <Globe className="w-24 h-24 text-indigo-400" />,
    visualTitle: "PORT EXPOSURE",
    visualSub: "Localhost Tunnels",
  },
  {
    num: "12",
    title: "The Cognitive Core",
    text: "Powered by a dual-brain architecture. Groq LPUs handle split-second tool chaining and logic, while Gemini 2.5 Flash manages massive context and complex reasoning.",
    icon: <Brain className="w-24 h-24 text-white" />,
    visualTitle: "DUAL INTELLIGENCE",
    visualSub: "Gemini + Groq",
  },
  {
    num: "13",
    title: "Absolute Automation",
    text: "IRIS thinks in steps. It can execute complex JSON arrays of keyboard shortcuts, mouse movements, and UI clicks to automate your most repetitive daily tasks.",
    icon: <MousePointer2 className="w-24 h-24 text-red-500" />,
    visualTitle: "MACRO ENGINE",
    visualSub: "Ghost Typing & Clicks",
  },
  {
    num: "14",
    title: "The Architect",
    text: "Built from the ground up by Harsh Pandey to push the boundaries of what frontend performance, AI infrastructure, and system-level desktop automation can achieve together.",
    icon: <Shield className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "PROJECT JARVIS",
    visualSub: "The Next OS Standard",
  },
];

export default function FeaturesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const BackgroundParticles = () => {
    const particles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      char: Math.random() > 0.5 ? "1" : "0",
    }));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute text-[#10b981]/20 font-mono text-xs select-none"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          >
            {p.char}
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#10b981] selection:text-black"
    >
      <Header />

      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/10 bg-[#050505] perspective-1000">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#050505] to-transparent z-10"></div>

        <BackgroundParticles />

        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              <Terminal className="w-3 h-3 animate-pulse" />
              <span className="tracking-widest uppercase">
                Autonomous Capabilities
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
              BEYOND <br />
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-[#10b981]/20 blur-lg opacity-50 animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-linear-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl">
                  PASSIVE CHAT
                </span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Web wrappers are dead. <br className="hidden md:block" />
              <span className="text-white font-bold border-b border-[#10b981]">
                IRIS is a native execution engine
              </span>{" "}
              that gives you raw access to your file system, local NPU, and
              mobile hardware.
            </motion.p>
          </motion.div>
        </div>

        {/* HUD FOOTER */}
        <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/50 backdrop-blur-sm z-30">
          <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></div>
                WEBSOCKET: STREAMING
              </span>
              <span className="hidden md:block">LATENCY: {"<"}1.0s</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#10b981]">SYSTEM WRITE: ENABLED</span>
              <span className="hidden md:block">LOCAL MEM: INDEXED</span>
            </div>
          </div>
        </div>
      </section>

      <StoryChapter content={storyData} />

      <section className="py-32 bg-[#050505] relative z-20 border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white">
              Engine <span className="text-[#10b981]">Tiers</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you need a powerful local workstation or a deep ecosystem
              automation engine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-[#0a0a0a] rounded-[2.5rem] p-10 border border-white/10 relative overflow-hidden group hover:border-[#10b981]/30 transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/10 blur-[50px] rounded-full"></div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-gray-300 font-mono text-xs tracking-widest uppercase mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500"></div> TIER 1
              </div>
              <h3 className="text-4xl font-bold mb-2">IRIS Free</h3>
              <p className="text-[#10b981] font-mono mb-8">
                The Ultimate Local Workstation
              </p>
              <p className="text-gray-400 mb-8 pb-8 border-b border-white/5">
                The sticky, highly-capable local OS. It manages files, memory,
                codebase, and local data, making it an indispensable daily
                driver.
              </p>

              <div className="space-y-8">
                <FeatureCategory
                  title="System & File Management"
                  tools={[
                    {
                      name: "App & Process Control",
                      desc: "Instantly open or force-close any installed desktop application.",
                    },
                    {
                      name: "Deep File Operations",
                      desc: "Create, read, write, move, and manage files across your OS.",
                    },
                    {
                      name: "Smart Drop Zones",
                      desc: "Visually sort and physically move files into categorized folders.",
                    },
                  ]}
                />
                <FeatureCategory
                  title="Vector Search & Knowledge"
                  badge="NEWLY FREE"
                  tools={[
                    {
                      name: "Semantic Folder Indexing",
                      desc: "Memorize projects into a local Vector DB for semantic search.",
                    },
                    {
                      name: "Local Vision API",
                      desc: "Scan your gallery and analyze photos locally without the cloud.",
                    },
                    {
                      name: "Omni-Search",
                      desc: "Ultra-fast, deep file search across your entire nested system.",
                    },
                  ]}
                />
                <FeatureCategory
                  title="Developer & Terminal Tools"
                  badge="NEWLY FREE"
                  tools={[
                    {
                      name: "Protocol Execution",
                      desc: "Run shell commands, open projects, and activate Coding Mode.",
                    },
                    {
                      name: "Direct Disk Writing",
                      desc: "Autonomously write and save code directly to your file system.",
                    },
                    {
                      name: "JSON Sequences",
                      desc: "Run complex automation flows using JSON-based instructions.",
                    },
                  ]}
                />
                <FeatureCategory
                  title="Desktop UI & Vision"
                  tools={[
                    {
                      name: "Window Teleportation",
                      desc: "Move, resize, and stack physical application windows via voice.",
                    },
                    {
                      name: "Live Widgets",
                      desc: "Spawn functional, floating HTML/CSS widgets on your screen.",
                    },
                    {
                      name: "Ghost Typing",
                      desc: "Simulate keyboard shortcuts, mouse clicks, and scroll events.",
                    },
                  ]}
                />
                <FeatureCategory
                  title="Web, Media & Comms"
                  tools={[
                    {
                      name: "Market & Web Pulse",
                      desc: "Real-time stock charts, live weather, and interactive maps.",
                    },
                    {
                      name: "Visual Web Hacking",
                      desc: "Mutate live websites with custom CSS/JS injections.",
                    },
                    {
                      name: "Instant WhatsApp",
                      desc: "Draft and send WhatsApp messages or files instantly.",
                    },
                  ]}
                />
              </div>

              <button className="w-full mt-12 py-4 rounded-xl border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] font-bold hover:bg-[#10b981]/10 transition-colors">
                Download Free Engine
              </button>
            </div>

            <div className="bg-[#050505] rounded-[2.5rem] p-10 border border-[#10b981]/50 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/20 blur-[80px] rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#10b981] to-emerald-300 shadow-[0_0_20px_#10b981]"></div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] font-mono text-xs tracking-widest uppercase mb-6 border border-[#10b981]/30">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />{" "}
                TIER 2
              </div>
              <div className="flex justify-between items-end mb-2">
                <h3 className="text-4xl font-bold">IRIS Pro</h3>
                <div className="text-2xl font-bold text-white">
                  $15
                  <span className="text-sm font-normal text-gray-500">/mo</span>
                </div>
              </div>
              <p className="text-[#10b981] font-mono mb-8">
                The Deep Ecosystem & Action Agents
              </p>
              <p className="text-gray-400 mb-8 pb-8 border-b border-white/5">
                The powerhouse tier. For users who want IRIS to physically
                control mobile devices, deploy real internet infrastructure, and
                act autonomously.
              </p>

              <div className="space-y-8">
                <FeatureCategory
                  title="Mobile Link (Hardware Bridge)"
                  pro
                  tools={[
                    {
                      name: "Android Hardware Control",
                      desc: "Toggle Wi-Fi, Bluetooth, Flashlight, and read battery telemetry.",
                    },
                    {
                      name: "Mobile Screen Execution",
                      desc: "Tap exact X/Y coordinates, swipe, and open apps on your phone.",
                    },
                    {
                      name: "Device File Sync",
                      desc: "Push and pull files instantly between your PC and mobile device.",
                    },
                    {
                      name: "Notification Intercept",
                      desc: "Read incoming messages and alerts directly from your phone.",
                    },
                  ]}
                />
                <FeatureCategory
                  title="Autonomous Research & RAG"
                  pro
                  tools={[
                    {
                      name: "Deep Web Crawler",
                      desc: "Autonomous Llama 3 agents that research, synthesize, and sync to Notion.",
                    },
                    {
                      name: "Codebase Oracle",
                      desc: "Ingest massive local repositories and perform deep RAG queries.",
                    },
                  ]}
                />
                <FeatureCategory
                  title="Premium Dev & Networks"
                  pro
                  tools={[
                    {
                      name: "Live Web Forge",
                      desc: "Generate fully animated React/GSAP websites in real-time.",
                    },
                    {
                      name: "Network Wormholes",
                      desc: "Expose local server ports to the public internet instantly.",
                    },
                    {
                      name: "Macro Engine",
                      desc: "Trigger complex, named automation routines via voice.",
                    },
                  ]}
                />
                <FeatureCategory
                  title="Advanced AI Gen & Actions"
                  pro
                  tools={[
                    {
                      name: "Autonomous Dispatch",
                      desc: "Actually send emails and schedule delayed WhatsApp messages.",
                    },
                    {
                      name: "HuggingFace Gen",
                      desc: "Generate high-quality cinematic or realistic images natively.",
                    },
                  ]}
                />
                <FeatureCategory
                  title="Pro Security & OS Features"
                  pro
                  tools={[
                    {
                      name: "Biometric Encryption",
                      desc: "Multi-face recognition to verify identity for OS-level commands.",
                    },
                    {
                      name: "Ghost Coder & OCR",
                      desc: "Inline IDE generation and instant screen OCR extraction tools.",
                    },
                  ]}
                />
              </div>

              <button className="w-full mt-12 py-4 rounded-xl bg-[#10b981] text-black font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Upgrade to Pro Engine
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const FeatureCategory = ({
  title,
  tools,
  badge,
  pro = false,
}: {
  title: string;
  tools: { name: string; desc: string }[];
  badge?: string;
  pro?: boolean;
}) => (
  <div>
    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
      {pro ? (
        <Zap className="w-4 h-4 text-[#10b981]" />
      ) : (
        <CheckCircle2 className="w-4 h-4 text-gray-500" />
      )}
      {title}
      {badge && (
        <span className="ml-2 px-2 py-0.5 rounded bg-[#10b981]/10 text-[#10b981] text-[10px] font-mono border border-[#10b981]/20">
          {badge}
        </span>
      )}
    </h4>
    <ul className="space-y-4 pl-6 border-l border-white/5">
      {tools.map((tool, i) => (
        <li key={i} className="flex flex-col gap-1">
          <span className="text-sm text-gray-200 font-semibold">
            {tool.name}
          </span>
          <span className="text-xs text-gray-500 font-mono leading-relaxed">
            {tool.desc}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
