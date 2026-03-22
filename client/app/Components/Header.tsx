"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const showAnim = gsap.from(headerRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: "power2.out"
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });
  });

  return (
    <div
      ref={headerRef}
      className="fixed top-0 left-0 w-full p-6 flex justify-between items-center bg-black/50 backdrop-blur-md z-50 text-white"
    >
      <div className="text-xl font-bold tracking-widest">IRIS</div>
      <nav className="flex gap-6 text-sm uppercase tracking-wider">
        <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
        <a href="#work" className="hover:text-gray-400 transition-colors">Work</a>
        <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
