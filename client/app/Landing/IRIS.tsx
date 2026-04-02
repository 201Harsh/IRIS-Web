"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Components/Header";
import { useRef, useState, Suspense, lazy } from "react";
import Footer from "../Components/Footer";
import LoadingCore from "../lib/LoadingCore";
import MagneticButton from "../utils/MagneticButton";
import {
  User,
  Mic,
  Zap,
  MousePointer2,
  Workflow,
  Brain,
  HardDrive,
  Database,
  Keyboard,
  Smartphone,
  ScanFace,
  Bell,
  Layers,
  Code2,
  Globe,
  Command,
  Download,
} from "lucide-react";
import MagicBento from "../utils/MagicBento";
import Image from "next/image";
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
import LiquidEther from "../utils/LiquidEther";
import StoryChapter, { StoryContent } from "../lib/StoryChapter";
import Link from "next/link";
const LightPillar = lazy(() => import("../utils/LightPillar"));

gsap.registerPlugin(ScrollTrigger);

const IRIS = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

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

  const storyData: StoryContent[] = [
    {
      num: "01",
      title: "The Broken Paradigm",
      text: "Modern AI is stuck in passive loops—type, wait, read. It responds, but never acts. The real problem isn't intelligence. It's the lack of execution.",
      icon: <User className="w-24 h-24 text-gray-500" />,
      visualTitle: "PASSIVE SYSTEMS",
      visualSub: "The Limitation",
    },
    {
      num: "02",
      title: "A New Interface",
      text: "IRIS eliminates friction. No typing, no waiting. Just speak. Your voice becomes the command layer—natural, fast, and always active.",
      icon: <Mic className="w-24 h-24 text-blue-400" />,
      visualTitle: "VOICE LAYER",
      visualSub: "Natural Control",
    },
    {
      num: "03",
      title: "Real-Time Core",
      text: "Built on persistent WebSocket streams, IRIS processes audio in real time. No request-response delays. Just continuous, live interaction.",
      icon: <Zap className="w-24 h-24 text-yellow-400" />,
      visualTitle: "REAL-TIME",
      visualSub: "Zero Latency",
    },
    {
      num: "04",
      title: "Execution Engine",
      text: "IRIS doesn't reply—it executes. Every command is translated into system-level actions across files, apps, input devices, and processes.",
      icon: <MousePointer2 className="w-24 h-24 text-red-400" />,
      visualTitle: "EXECUTION",
      visualSub: "System Control",
    },
    {
      num: "05",
      title: "Multi-Step Thinking",
      text: "Complex tasks are broken into chains. IRIS plans, sequences, and executes multiple tools autonomously—turning intent into completed workflows.",
      icon: <Workflow className="w-24 h-24 text-[#10b981]" />,
      visualTitle: "CHAINING",
      visualSub: "Autonomous Flow",
    },
    {
      num: "06",
      title: "Dual-Brain Intelligence",
      text: "A hybrid intelligence model powers IRIS. Groq handles ultra-fast execution logic, while Gemini manages deep reasoning and contextual understanding.",
      icon: <Brain className="w-24 h-24 text-purple-500" />,
      visualTitle: "HYBRID AI",
      visualSub: "Speed + Reasoning",
    },
    {
      num: "07",
      title: "Local Autonomy",
      text: "IRIS runs critical tasks locally using on-device LLMs. Files, scripts, and sensitive operations stay on your machine—private and fast.",
      icon: <HardDrive className="w-24 h-24 text-orange-500" />,
      visualTitle: "LOCAL CORE",
      visualSub: "Private AI",
    },
    {
      num: "08",
      title: "System-Level Access",
      text: "Built on Electron, IRIS breaks free from browser limits. It directly interacts with your OS—launching apps, scanning directories, executing commands.",
      icon: <Database className="w-24 h-24 text-pink-500" />,
      visualTitle: "OS ACCESS",
      visualSub: "Full Control",
    },
    {
      num: "09",
      title: "Input Domination",
      text: "IRIS controls keyboard and mouse like a human—executing clicks, typing, navigation, and workflows without manual interaction.",
      icon: <Keyboard className="w-24 h-24 text-red-500" />,
      visualTitle: "INPUT CONTROL",
      visualSub: "Human-Level Actions",
    },
    {
      num: "10",
      title: "Mobile Telekinesis",
      text: "Through ADB integration, IRIS extends beyond desktop—controlling Android devices, reading notifications, launching apps, and mirroring screens.",
      icon: <Smartphone className="w-24 h-24 text-green-400" />,
      visualTitle: "MOBILE LINK",
      visualSub: "Cross-Device Control",
    },
    {
      num: "11",
      title: "Visual Intelligence",
      text: "With integrated face recognition, IRIS verifies identity before executing sensitive commands—bringing biometric security into the AI layer.",
      icon: <ScanFace className="w-24 h-24 text-cyan-400" />,
      visualTitle: "VISION",
      visualSub: "Biometric Security",
    },
    {
      num: "12",
      title: "Persistent Awareness",
      text: "IRIS continuously monitors system signals and notifications, reacting in real time—no prompts required, no missed events.",
      icon: <Bell className="w-24 h-24 text-yellow-300" />,
      visualTitle: "AWARENESS",
      visualSub: "Always Active",
    },
    {
      num: "13",
      title: "Fluid Interface",
      text: "A reactive UI built with React, Tailwind, and motion systems visualizes every action. The interface evolves dynamically with system state.",
      icon: <Layers className="w-24 h-24 text-indigo-400" />,
      visualTitle: "UI SYSTEM",
      visualSub: "Live Feedback",
    },
    {
      num: "14",
      title: "The Architect",
      text: "Designed and engineered from the ground up by Harsh Pandey—focused on pushing the limits of AI systems, performance, and real-world execution.",
      icon: <Code2 className="w-24 h-24 text-white" />,
      visualTitle: "ARCHITECT",
      visualSub: "System Design",
    },
    {
      num: "15",
      title: "The Shift",
      text: "This isn't an app. It's a new computing model. From interaction to execution—the operating system is becoming intelligent.",
      icon: <Globe className="w-24 h-24 text-[#10b981]" />,
      visualTitle: "THE FUTURE",
      visualSub: "AI OS Era",
    },
  ];

  useGSAP(
    () => {
      gsap.to(heroTextRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=800", // Exact scroll distance before animation completes
          scrub: 1,
        },
      });

      ScrollTrigger.create({
        trigger: contentRef.current,
        start: "top top",
        onEnter: () => setIsHeroVisible(false),
        onLeaveBack: () => setIsHeroVisible(true),
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="bg-black text-white relative">
      <Header />
      <div
        ref={heroTextRef}
        className="hero-section sticky top-0 h-screen w-full flex flex-col justify-center items-center z-0 overflow-hidden bg-black"
      >
        <div
          className={`absolute inset-0 z-0 mix-blend-screen pointer-events-none transition-opacity duration-700 ease-in-out ${isHeroVisible ? "opacity-100" : "opacity-0"}`}
        >
          <Suspense fallback={<LoadingCore />}>
            <LightPillar
              topColor="#022c1e"
              bottomColor="#34d399"
              intensity={1}
              rotationSpeed={0.3}
              glowAmount={0.002}
              pillarWidth={3}
              pillarHeight={0.4}
              noiseIntensity={0.5}
              pillarRotation={25}
              interactive={false}
              mixBlendMode="screen"
              quality="high"
              className="md:hidden block"
            />

            <LiquidEther
              colors={["#064e3b", "#10b981", "#34d399"]}
              mouseForce={50}
              cursorSize={50}
              isViscous={false}
              viscous={0}
              iterationsViscous={0}
              iterationsPoisson={10}
              BFECC={false}
              resolution={0.25}
              isBounce={true}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={0.25}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
              className="md:block hidden"
            />
          </Suspense>
        </div>

        <div className="absolute inset-0 z-5 opacity-70 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping absolute"></span>
            <span className="w-2 h-2 rounded-full bg-[#10b981] relative"></span>
            <span className="text-[10px] md:text-xs font-mono text-[#ffffff] tracking-[0.2em] uppercase font-bold">
              Beta Release // Q1 {new Date().getFullYear()}
            </span>
          </div>
          <div className="animatedLetters relative z-100 w-full flex justify-center flex-col items-center">
            <h1
              className="text-[30vw] md:text-[12vw] font-black tracking-tighter leading-none select-none bg-[url('/assets/Text/1.jpg')] bg-cover bg-center bg-clip-text text-transparent"
              style={{
                filter:
                  "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.8)) drop-shadow(0px 0px 45px rgba(16, 185, 129, 0.4))",
              }}
            >
              IRIS AI
            </h1>
          </div>

          <p className="mt-6 max-w-2xl text-xs md:text-xl text-gray-300 font-mono leading-relaxed drop-shadow-lg">
            Beyond a standard language model. A deep-system neural extension
            engineered by{" "}
            <span className="text-white font-bold">Vital Studio's</span> for
            kernel-level OS automation and zero-trust execution.
          </p>

          <div className="mt-12 flex justify-center items-center gap-6 w-full sm:w-auto relative z-20">
            <Link href="/download">
              <MagneticButton
                title="Download IRIS"
                subtitle="Get the App"
                iconLeft={<Command className="w-6 h-6" />}
                iconRight={
                  <Download className="w-5 h-5 text-current group-hover:text-[#10b981]" />
                }
                className="bg-emerald-500/20 border border-emerald-500/20 text-white shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]"
              />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60 pointer-events-none">
          <span className="text-[13px] font-mono uppercase tracking-[0.3em] text-[#10b981]">
            Scroll to Explore
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[#10b981] to-transparent animate-pulse" />
        </div>
      </div>

      <div
        ref={contentRef}
        className="relative z-10 bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
      >
        <section className="min-h-screen bg-black flex flex-col items-center pt-32 relative overflow-hidden font-sans">
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-150 h-150 bg-[#10b981]/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-200 h-100 bg-[#16a34a]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

          <div className="text-center z-20 px-4 flex flex-col items-center">
            <h1
              className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-[-0.03em] bg-[url('/assets/Text/2.jpg')] bg-cover bg-center bg-clip-text text-transparent mb-4 pb-2 select-none shadow-2xl"
              style={{
                filter:
                  "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.8)) drop-shadow(0px 0px 45px rgba(16, 185, 129, 0.4))",
              }}
            >
              Meet IRIS AI
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-100 font-normal tracking-tight">
              The Agentic Assistant Built for the Future
            </h2>
          </div>
          <div className="absolute left-6 sm:left-44 top-52 sm:top-90 w-24 sm:w-64 h-auto pointer-events-none">
            <Image
              src="/img/iris-future.png"
              alt="Try IRIS AI"
              width={300}
              height={300}
              priority
              className="w-52 h-52 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              style={{
                filter:
                  "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.6)) drop-shadow(0px 0px 45px rgba(16, 185, 129, 0.4))",
              }}
            />
          </div>

          <div className="relative w-full max-w-6xl mt-20 flex justify-center z-10 group">
            <Image
              src="/img/graphic.webp"
              alt="3D tech elements"
              width={1400}
              height={900}
              priority
              className="w-full h-full object-contain mask-image-b relative z-20 transition-transform duration-1000 ease-out"
              style={{
                filter:
                  "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.6)) drop-shadow(0px 0px 45px rgba(16, 185, 129, 0.4))",
              }}
            />
          </div>

          <div className="w-full max-w-4xl mx-auto flex justify-center relative z-20 mt-12 mb-20">
            <div className="flex gap-4 sm:gap-6 relative">
              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#4ADE80] to-[#14532D]">
                  24/7
                </span>
                <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                  Autonomous
                </span>
              </div>

              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#4ADE80] to-[#14532D]">
                  &lt;3s
                </span>
                <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                  Latency
                </span>
              </div>

              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#4ADE80] to-[#14532D]">
                  1M+
                </span>
                <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                  Context Window
                </span>
              </div>

              <div className="absolute -right-12 sm:-right-96 -top-36 sm:-top-24 w-24 sm:w-64 h-auto pointer-events-none">
                <Image
                  src="/img/tryiris.png"
                  alt="Try IRIS AI"
                  width={300}
                  height={300}
                  priority
                  className="w-52 h-52 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                  style={{
                    filter:
                      "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.6)) drop-shadow(0px 0px 45px rgba(16, 185, 129, 0.4))",
                  }}
                />
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

        <section
          id="systems"
          className="min-h-screen w-full px-6 md:px-20 py-32 border-b border-white/5 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-200 bg-[#10b981]/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

          <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 px-4 relative z-10">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 border border-[#10b981]/20 bg-[#10b981]/5 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <span className="w-1.5 h-1.5 bg-[#10b981] animate-pulse rounded-full"></span>
                <span className="text-[#10b981] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
                  IRIS_OS // ACTIVE_MODULES
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 select-none">
                System{" "}
                <span className="text-[#10b981] drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  Capabilities.
                </span>
              </h2>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-mono drop-shadow-md">
                IRIS is not a chatbot; it is a deep-system neural extension. By
                weaponizing{" "}
                <span className="text-white font-bold">
                  kernel-level execution hooks
                </span>
                , autonomous keystroke injection, and a persistent memory
                matrix, IRIS bridges the gap between human thought and OS
                execution.
              </p>
            </div>

            <div className="w-full">
              <MagicBento
                textAutoHide={true}
                enableStars
                enableSpotlight
                enableBorderGlow={true}
                enableTilt
                enableMagnetism={false}
                clickEffect
                spotlightRadius={300}
                particleCount={12}
                glowColor="16, 185, 129"
                disableAnimations={false}
              />
            </div>
          </div>
        </section>

        <StoryChapter content={storyData} />

        <Footer />
      </div>
    </div>
  );
};

export default IRIS;
