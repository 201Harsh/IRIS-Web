"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const showAnim = gsap
      .from(headerRef.current, {
        yPercent: -150,
        opacity: 0,
        paused: true,
        duration: 0.8,
        ease: "back.out(1.8)",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  return (
    <div
      ref={headerRef}
      className="fixed top-5 left-1/4 w-1/2 p-6 flex justify-between items-center bg-black/30 backdrop-blur-sm z-100 border-b border-[#10b981]/20 text-white"
    >
      <div className="flex items-center gap-2 group cursor-pointer">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
          unoptimized
        />
        <span className="text-2xl font-black tracking-tighter text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
          IRIS
        </span>
      </div>

      <nav className="hidden md:flex gap-10 text-xs font-bold uppercase tracking-[0.2em]">
        <a
          href="#about"
          className="hover:text-[#10b981] transition-all duration-300 relative group"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#10b981] group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="#work"
          className="hover:text-[#10b981] transition-all duration-300 relative group"
        >
          Systems
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#10b981] group-hover:w-full transition-all duration-300" />
        </a>
        <a
          href="#contact"
          className="hover:text-[#10b981] transition-all duration-300 relative group"
        >
          Terminal
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#10b981] group-hover:w-full transition-all duration-300" />
        </a>
      </nav>

      <div className="px-4 py-2 border border-[#10b981]/50 text-[#10b981] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#10b981] hover:text-black transition-all cursor-pointer">
        Connect to Core
      </div>
    </div>
  );
};

export default Header;
