"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  CheckCircle2,
  Zap,
  Star,
  User,
  Mic,
  MousePointer2,
  Brain,
  HardDrive,
  ScanFace,
  Database,
  Smartphone,
  Workflow,
  Layers,
  Code2,
  Shield,
  Globe,
  Lock,
  Cpu,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StoryChapter, { StoryContent } from "../lib/StoryChapter";

// --- STORY DATA (Passed to your StoryChapter component) ---
const storyData: StoryContent[] = [
  {
    num: "01",
    title: "The Passive Flaw",
    text: "Most AI apps today are passive text boxes. You type, wait, and get text back. They don't DO anything. We realized the world doesn't need another chatbot.",
    icon: <User className="w-24 h-24 text-gray-500" />,
    visualTitle: "PASSIVE AI",
    visualSub: "The Chatbot Flaw",
  },
  {
    num: "02",
    title: "Voice First",
    text: "IRIS is designed for real-time conversation. Using custom WebSockets, your voice is streamed instantly to the engine without the painful lag of traditional APIs.",
    icon: <Mic className="w-24 h-24 text-blue-400" />,
    visualTitle: "VOICE FIRST",
    visualSub: "Natural Input",
  },
  {
    num: "03",
    title: "Autonomous Execution",
    text: "Instead of giving you a summary, IRIS acts. It takes your voice command, processes the intent, and directly controls your files, applications, mouse, and keyboard.",
    icon: <MousePointer2 className="w-24 h-24 text-red-400" />,
    visualTitle: "EXECUTION",
    visualSub: "OS Level Control",
  },
  {
    num: "04",
    title: "The Cognitive Engine",
    text: "To be fast and smart, IRIS uses a dual-brain architecture. Groq LPUs handle split-second logic and tool-chaining, while Gemini 1.5 manages massive context and complex reasoning.",
    icon: <Brain className="w-24 h-24 text-purple-500" />,
    visualTitle: "THE BRAIN",
    visualSub: "Gemini + Groq",
  },
  {
    num: "05",
    title: "Local Intelligence",
    text: "Not everything needs the cloud. IRIS hooks into Local LLMs via Ollama. It can process offline tasks, organize local files, and execute scripts with zero data leaving your machine.",
    icon: <HardDrive className="w-24 h-24 text-orange-500" />,
    visualTitle: "LOCAL AI",
    visualSub: "Ollama Privacy",
  },
  {
    num: "06",
    title: "The Eyes (Face Rec)",
    text: "IRIS doesn't just hear you; it sees you. Integrated with a local Face Recognition System, it verifies your identity before executing sensitive OS-level commands or unlocking secure vaults.",
    icon: <ScanFace className="w-24 h-24 text-cyan-400" />,
    visualTitle: "VISION",
    visualSub: "Face Recognition",
  },
  {
    num: "07",
    title: "The Desktop OS",
    text: "Built on Electron, IRIS escapes the browser sandbox. It has raw, unhindered access to your operating system to launch apps, search directories, and execute shell commands.",
    icon: <Database className="w-24 h-24 text-pink-500" />,
    visualTitle: "DESKTOP OS",
    visualSub: "Electron Core",
  },
  {
    num: "08",
    title: "The Mobile Bridge",
    text: "Your phone shouldn't be disconnected from your workflow. IRIS connects to Android via ADB, allowing it to read notifications, mirror your screen, and open mobile apps remotely.",
    icon: <Smartphone className="w-24 h-24 text-green-400" />,
    visualTitle: "MOBILE BRIDGE",
    visualSub: "ADB Integration",
  },
  {
    num: "09",
    title: "Zero Latency",
    text: "A real assistant shouldn't make you wait. By stripping out HTTP overhead and streaming audio binaries directly over WebSockets, the response time drops below human perception.",
    icon: <Zap className="w-24 h-24 text-yellow-400" />,
    visualTitle: "ZERO LATENCY",
    visualSub: "WebSocket Audio",
  },
  {
    num: "10",
    title: "Automation Chaining",
    text: "IRIS thinks in steps. Tell it to 'Find my hardware specs, create a report, and save it to desktop.' The engine chains the OS read tool, the text generation tool, and the file write tool autonomously.",
    icon: <Workflow className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "AUTOMATION",
    visualSub: "Multi-Step Chains",
  },
  {
    num: "11",
    title: "The Fluid Interface",
    text: "While voice is primary, the visual feedback is crucial. Built with React, Tailwind, GSAP, and Framer Motion, the UI breathes and reacts to system states in real-time.",
    icon: <Layers className="w-24 h-24 text-indigo-400" />,
    visualTitle: "UI LAYER",
    visualSub: "React + GSAP",
  },
  {
    num: "12",
    title: "The Architect",
    text: "Engineered by Harsh Pandey. Built from the ground up to push the boundaries of frontend performance, AI infrastructure, and system-level automation.",
    icon: <Code2 className="w-24 h-24 text-white" />,
    visualTitle: "ARCHITECT",
    visualSub: "Harsh Pandey",
  },
  {
    num: "13",
    title: "True Companion",
    text: "This is Project Jarvis realized. Not a helper, but an autonomous companion that manages your digital life, secures your data, and executes your will.",
    icon: <Shield className="w-24 h-24 text-red-500" />,
    visualTitle: "COMPANION",
    visualSub: "Digital Security",
  },
  {
    num: "14",
    title: "The Next Era",
    text: "The era of typing is ending. The era of execution has begun. Prepare to upgrade your operating system to true intelligence.",
    icon: <Globe className="w-24 h-24 text-[#10b981]" />,
    visualTitle: "THE ERA",
    visualSub: "Future of OS",
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

      {/* --- NATIVE OS HERO SECTION --- */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/10 bg-[#050505] perspective-1000">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>

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
                <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl">
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

      {/* --- INTEGRATED STORY CHAPTERS --- */}
      <StoryChapter content={storyData} />

      {/* --- DEPLOYMENT TIERS (FREE VS PAID) --- */}
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
            {/* TIER 1: FREE */}
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
                    "open_app / close_app",
                    "read_directory / create_folder",
                    "read_file / write_file",
                    "smart_drop_zones",
                  ]}
                />
                <FeatureCategory
                  title="Vector Search & Local Knowledge"
                  tools={[
                    "index_Folder / smart_file_search",
                    "read_gallery / analyze_direct_photo",
                  ]}
                  badge="NEWLY FREE"
                />
                <FeatureCategory
                  title="Developer & Terminal Tools"
                  tools={[
                    "run_terminal / open_project",
                    "activate_protocol",
                    "build_file",
                    "execute_sequence",
                  ]}
                  badge="NEWLY FREE"
                />
                <FeatureCategory
                  title="Desktop UI, Vision & Automation"
                  tools={[
                    "teleport_windows / create_widget",
                    "click_on_screen / scroll_screen",
                    "press_shortcut / ghost_type",
                  ]}
                />
                <FeatureCategory
                  title="Memory & Information"
                  tools={[
                    "save_core_memory / retrieve_core_memory",
                    "save_note / read_notes",
                    "read_emails",
                  ]}
                  badge="NEWLY FREE"
                />
                <FeatureCategory
                  title="Web, Media & Financials"
                  tools={[
                    "Google Search / open_map",
                    "play_spotify_music",
                    "get_stock_price",
                    "hack_live_website",
                  ]}
                />
                <FeatureCategory
                  title="Basic Protocol"
                  tools={["lock_system_vault", "send_whatsapp", "draft_email"]}
                />
              </div>

              <button className="w-full mt-12 py-4 rounded-xl border border-[#10b981]/30 bg-[#10b981]/5 text-[#10b981] font-bold hover:bg-[#10b981]/10 transition-colors">
                Download Free Engine
              </button>
            </div>

            {/* TIER 2: PRO */}
            <div className="bg-[#050505] rounded-[2.5rem] p-10 border border-[#10b981]/50 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/20 blur-[80px] rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-emerald-300 shadow-[0_0_20px_#10b981]"></div>

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
                  title="Mobile Link (Hardware Ecosystem)"
                  tools={[
                    "get_mobile_notifications",
                    "get_mobile_info",
                    "push_file / pull_file",
                    "open_mobile_app",
                    "tap / swipe_mobile_screen",
                  ]}
                  pro
                />
                <FeatureCategory
                  title="Autonomous Research & RAG"
                  tools={[
                    "deep_research (Llama 3 Web Crawl)",
                    "read_notion_reports",
                    "ingest_codebase",
                    "consult_oracle",
                  ]}
                  pro
                />
                <FeatureCategory
                  title="Premium Dev & Network Tools"
                  tools={[
                    "build_animated_website",
                    "deploy_wormhole / close_wormhole",
                    "execute_macro",
                  ]}
                  pro
                />
                <FeatureCategory
                  title="Advanced AI Gen & Actions"
                  tools={[
                    "generate_image (HuggingFace)",
                    "send_email (Autonomous Dispatch)",
                    "schedule_whatsapp (Cron-based)",
                  ]}
                  pro
                />
                <FeatureCategory
                  title="Pro Security & OS Features"
                  tools={[
                    "Multi-Face Biometric Encryption",
                    "iris_snip_extract (OCR Tool)",
                    "iris_ghost_coder (Inline IDE)",
                  ]}
                  pro
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

// Small helper component for the tier lists
const FeatureCategory = ({
  title,
  tools,
  badge,
  pro = false,
}: {
  title: string;
  tools: string[];
  badge?: string;
  pro?: boolean;
}) => (
  <div>
    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
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
    <ul className="space-y-2">
      {tools.map((tool, i) => (
        <li
          key={i}
          className="text-sm text-gray-400 font-mono flex items-start gap-2"
        >
          <span className="text-gray-600 mt-0.5">{`>`}</span> {tool}
        </li>
      ))}
    </ul>
  </div>
);
