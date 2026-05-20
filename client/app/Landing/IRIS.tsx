"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Components/Header";
import { useRef, useState, useEffect } from "react";
import Footer from "../Components/Footer";
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
import StoryChapter, { StoryContent } from "../lib/StoryChapter";
import IrisHero from "../Components/UI/IrisHero";
import { MacbookScroll } from "../constants/MacbookScroll";
import { ContainerScroll } from "../constants/ContainerScroll";

gsap.registerPlugin(ScrollTrigger);

const CodeBlock = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="relative flex items-center justify-between w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-lg p-3 shadow-xl">
        <code className="text-sm font-mono text-[#10b981]">{code}</code>
        <button
          onClick={handleCopy}
          className="ml-4 p-2 rounded-md hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

const IRIS = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isHeroActive, setIsHeroActive] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isHeroVisible) {
      setIsHeroActive(true);
    } else {
      timeout = setTimeout(() => setIsHeroActive(false), 700);
    }
    return () => clearTimeout(timeout);
  }, [isHeroVisible]);

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

  useGSAP(
    () => {
      gsap.to(heroTextRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=800",
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
      <IrisHero
        heroTextRef={heroTextRef}
        isHeroVisible={isHeroVisible}
        isHeroActive={isHeroActive}
      />

      <div
        ref={contentRef}
        className="relative z-10 bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
      >
        <section className="md:flex hidden min-h-screen bg-black justify-center items-start">
          <MacbookScroll
            title={
              <div className="text-center z-20 px-4 flex flex-col items-center">
                <h1
                  className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-[-0.03em] bg-[url('/img/bright-neon-bg.png')] bg-cover bg-center bg-clip-text text-transparent mb-4 pb-2 select-none"
                  style={{
                    filter:
                      "drop-shadow(0px 0px 15px rgba(57, 255, 20, 1)) drop-shadow(0px 0px 50px rgba(57, 255, 20, 0.8))",
                  }}
                >
                  Your AI. Your Rules.
                </h1>
                <h2
                  className="text-2xl md:text-4xl lg:text-5xl text-gray-100 font-normal tracking-tight"
                  style={{ textShadow: "0 0 10px rgba(0,0,0,0.8)" }}
                >
                  One Voice. Total Control Over Your Device.
                </h2>
              </div>
            }
            badge={
              <a href="https://www.instagram.com/irisx.ai/">
                <Image
                  src="/img/Logo.png"
                  alt="Badge"
                  width={100}
                  height={100}
                />
              </a>
            }
            src={`/img/screen.png`}
            showGradient={false}
          />
        </section>

        <section className="hidden md:block min-h-screen bg-black relative z-20">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Run IRIS straight from your <br />
                  <span
                    className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-[url('/img/bright-neon-bg.png')] bg-cover bg-center bg-clip-text text-transparent inline-block pb-2"
                    style={{
                      filter:
                        "drop-shadow(0px 0px 15px rgba(57, 255, 20, 1)) drop-shadow(0px 0px 50px rgba(57, 255, 20, 0.8))",
                    }}
                  >
                    Terminal
                  </span>
                </h1>
                <CodeBlock code="npm install -g iris-ai" />
              </>
            }
          >
            <img
              src={`/img/cli.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full `object-top-left"
              draggable={false}
            />
          </ContainerScroll>
        </section>

        <section className="min-h-screen bg-black flex flex-col items-center pt-32 relative overflow-hidden font-sans">
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-150 h-150 bg-[#10b981]/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-200 h-100 bg-[#16a34a]/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

          <div className="text-center z-20 px-4 flex flex-col items-center">
            <h1
              className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-[-0.03em] bg-[url('/img/bright-neon-bg.png')] bg-cover bg-center bg-clip-text text-transparent mb-4 pb-2 select-none shadow"
              style={{
                filter:
                  "drop-shadow(0px 0px 15px rgba(57, 255, 20, 1)) drop-shadow(0px 0px 50px rgba(57, 255, 20, 0.8))",
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
              className="w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
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
              className="w-[85%] h-[85%] object-contain mask-image-b relative z-20 transition-transform duration-1000 ease-out"
              style={{
                filter:
                  "drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.6)) drop-shadow(0px 0px 45px rgba(16, 185, 129, 0.4))",
              }}
            />
          </div>

          <div className="w-full max-w-4xl mx-auto flex justify-center relative z-20 mt-12 mb-20">
            <div className="flex gap-4 sm:gap-6 relative">
              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4ADE80] to-[#14532D]">
                  24/7
                </span>
                <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                  Autonomous
                </span>
              </div>

              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4ADE80] to-[#14532D]">
                  &lt;1.5s
                </span>
                <span className="text-[#10b981] text-sm sm:text-xl font-medium mt-1">
                  Latency
                </span>
              </div>

              <div className="flex flex-col items-center justify-center w-28 h-28 sm:w-46 sm:h-46 rounded-3xl sm:rounded-4xl border border-[#10b981] bg-black/60 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur-md">
                <span className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-[#4ADE80] to-[#14532D]">
                  128K+
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
                  className="w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.2)]"
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

        <Footer />
      </div>
    </div>
  );
};

export default IRIS;
