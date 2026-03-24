"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/all";
import {
  Mic,
  MousePointer2,
  Smartphone,
  Cpu,
  Zap,
  Workflow,
  Brain,
  Shield,
  HardDrive,
  Globe,
  User,
  ScanFace,
  Layers,
  Sparkles,
  Code2,
  Database,
} from "lucide-react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import StoryChapter, { StoryContent } from "../lib/StoryChapter";
import LogoLoop from "../utils/LogoLoop";
import {
  SiHuggingface,
  SiNotion,
  SiElectron,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGreensock,
  SiFramer,
  SiOllama,
} from "react-icons/si";
import { FaYahoo } from "react-icons/fa6";
import { PiOpenAiLogo } from "react-icons/pi";
import { RiGeminiFill } from "react-icons/ri";
import { BsAnthropic } from "react-icons/bs";
import { TbBrandSocketIo } from "react-icons/tb";
import { GridScan } from "../utils/GridScan";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Draggable);
}

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

const actualTechLogos = [
  {
    node: <RiGeminiFill className="text-4xl text-white cursor-pointer" />,
    title: "Gemini",
  },
  {
    node: <SiOllama className="text-4xl text-white cursor-pointer" />,
    title: "Llama",
  },
  {
    node: <BsAnthropic className="text-4xl text-white cursor-pointer" />,
    title: "Anthropic",
  },
  {
    node: <PiOpenAiLogo className="text-4xl text-white cursor-pointer" />,
    title: "OpenAI",
  },
  {
    node: <SiHuggingface className="text-4xl text-white cursor-pointer" />,
    title: "Hugging Face",
  },
  {
    node: (
      <span className="text-2xl font-bold tracking-tighter text-white cursor-pointer">
        Tavily
      </span>
    ),
    title: "Tavily",
  },
  {
    node: <SiReact className="text-4xl text-white cursor-pointer" />,
    title: "React",
  },
  {
    node: <SiNextdotjs className="text-4xl text-white cursor-pointer" />,
    title: "Next.js",
  },
  {
    node: <SiNodedotjs className="text-4xl text-white cursor-pointer" />,
    title: "Node.js",
  },
  {
    node: <SiExpress className="text-4xl text-white cursor-pointer" />,
    title: "Express",
  },
  {
    node: <TbBrandSocketIo className="text-4xl text-white cursor-pointer" />,
    title: "WebSockets",
  },
  {
    node: <SiGreensock className="text-4xl text-white cursor-pointer" />,
    title: "GSAP",
  },
  {
    node: <SiFramer className="text-4xl text-white" />,
    title: "Framer Motion",
  },
  { node: <SiElectron className="text-4xl text-white" />, title: "Electron" },
  { node: <SiNotion className="text-4xl text-white" />, title: "Notion" },
  { node: <FaYahoo className="text-4xl text-white" />, title: "Yahoo" },
];

const IRISAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      Draggable.create(".draggable-code", {
        bounds: heroRef.current,
        inertia: true,
        edgeResistance: 0.65,
        type: "x,y",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white selection:bg-[#10b981] selection:text-black font-sans overflow-x-hidden"
    >
      <Header />

      <section
        ref={heroRef}
        className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/10 perspective-1000 bg-black"
      >
        <div className="absolute inset-0 z-0">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
          />
        </div>

        <motion.div
          className="absolute z-0 w-200 h-200 bg-[#10b981]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"
          animate={{ x: mousePos.x * 30, y: mousePos.y * 30 }}
        />

        <div className="relative z-10 text-center px-6 pointer-events-none">
          <motion.div
            animate={{
              x: mousePos.x * 10,
              y: mousePos.y * 10,
              rotateX: mousePos.y * -5,
              rotateY: mousePos.x * 5,
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Sparkles className="w-3 h-3" />
              <span>PROJECT JARVIS • THE AUTONOMOUS AGENT</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-6 leading-[0.9] text-white drop-shadow-2xl">
              NOT A <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-[#10b981] to-[#044a33]">
                CHATBOT.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              IRIS is an{" "}
              <span className="text-white font-bold border-b border-[#10b981]">
                Autonomous Orchestrator
              </span>{" "}
              that controls your desktop, mobile, and workflow through native
              voice commands.
            </p>
          </motion.div>
        </div>

        <div className="draggable-code absolute z-20 top-[20%] right-[10%] cursor-grab active:cursor-grabbing hidden md:block">
          <div className="w-80 md:w-96 bg-[#050505]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:border-[#10b981]/50">
            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center justify-between px-3 cursor-grab active:cursor-grabbing">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500">
                <Cpu className="w-3 h-3" /> iris_kernel.ts
              </div>
            </div>
            <div className="p-4 font-mono text-xs text-gray-400 leading-relaxed pointer-events-none select-none">
              <p>
                <span className="text-purple-400">import</span>{" "}
                {"{ VoiceStream, ElectronBridge }"}{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">'@iris/core'</span>;
              </p>
              <br />
              <p>
                <span className="text-blue-400">const</span> agent ={" "}
                <span className="text-yellow-300">new</span> VoiceStream();
              </p>
              <p>agent.connectFaceRec();</p>
              <br />
              <p className="text-[#10b981] animate-pulse">{`> Listening for Voice Input...`}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 md:px-0 py-12 relative overflow-hidden flex flex-col items-center z-20">
        <p className="text-[#10b981] text-sm tracking-widest uppercase mb-8 font-semibold drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
          Built with a bleeding-edge modern stack
        </p>
        <LogoLoop
          logos={actualTechLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          scaleOnHover={false}
          ariaLabel="IRIS Technology Stack"
        />
      </section>

      <StoryChapter content={storyData} />

      <section className="py-40 bg-black text-center border-t border-[#10b981]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#10b981]/5 blur-3xl pointer-events-none"></div>
        <h2 className="text-5xl md:text-8xl font-bold mb-8 relative z-10 text-white tracking-tighter">
          READY TO <span className="text-[#10b981]">AUTOMATE?</span>
        </h2>
        <button className="relative z-10 px-12 py-5 bg-[#10b981] text-black font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(16,185,129,0.4)]">
          Initialize IRIS Engine
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default IRISAbout;
