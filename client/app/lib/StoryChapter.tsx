"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StoryContent {
  num: string;
  title: string;
  text: string;
  icon: ReactNode;
  visualTitle: string;
  visualSub: string;
}

interface StoryChapterProps {
  content: StoryContent[];
}

export default function StoryChapter({ content }: StoryChapterProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".pinned-story",
        scrub: 1,
      });

      const storySteps = gsap.utils.toArray(".story-step");

      storySteps.forEach((step: any, index: number) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
            onEnter: () => setActiveStory(index),
            onEnterBack: () => setActiveStory(index),
          },
        });

        tl.fromTo(
          step,
          { opacity: 0.5, x: -30, filter: "blur(4px)" },
          { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.5 },
        ).to(
          step.querySelector(".chapter-num"),
          {
            x: 10,
            duration: 0.2,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
          "<",
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [content]);

  if (!content || content.length === 0) return null;

  return (
    <div ref={containerRef}>
      <section ref={triggerRef} className="relative w-full bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative">
          <div className="md:w-1/2 py-32 px-6 pb-[50vh] mt-20">
            {content.map((item, index) => (
              <div
                key={index}
                className="story-step min-h-[60vh] flex flex-col justify-center border-l-2 border-transparent pl-8 ml-4 transition-all duration-500"
              >
                <div className="chapter-num text-[#10b981] font-mono text-sm mb-4 font-bold tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>{" "}
                  CHAPTER {item.num}
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 mt-40 text-white leading-tight">
                  {item.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden md:flex md:w-1/2 h-screen pinned-story sticky top-0 items-center justify-center p-12">
            <div className="relative w-full h-1/2 bg-[#080808] border border-[#10b981]/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <StoryVisual item={content[activeStory]} key={activeStory} />
              </AnimatePresence>

              <div className="absolute bottom-3 left-12 right-12 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#10b981] shadow-[0_0_10px_#10b981]"
                  animate={{
                    width: `${((activeStory + 1) / content.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" } as any}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const StoryVisual = ({ item }: { item: StoryContent }) => {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}
      exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
      transition={{ duration: 0.5, ease: "backOut" } as any}
      className="flex flex-col items-center justify-center h-full w-full absolute inset-0"
    >
      <div className="mb-8 p-10 bg-[#10b981]/5 rounded-full border border-[#10b981]/20 shadow-[0_0_60px_rgba(16,185,129,0.1)] scale-110">
        {item.icon}
      </div>

      <h3 className="text-5xl font-bold mb-2 text-white uppercase tracking-tighter text-center">
        {item.visualTitle}
      </h3>

      <div className="px-3 py-1 border border-[#10b981]/30 bg-[#10b981]/10 text-[#10b981] font-mono text-xs tracking-widest uppercase rounded mt-2">
        SYS_CORE :: {item.visualSub}
      </div>

      <div className="absolute top-10 left-10 w-8 h-8 border-t-2 border-l-2 border-[#10b981]/40"></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 border-b-2 border-r-2 border-[#10b981]/40"></div>
    </motion.div>
  );
};
