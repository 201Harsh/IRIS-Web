"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useGSAP(() => {
    const showAnim = gsap
      .from(headerRef.current, {
        yPercent: -150,
        opacity: 0,
        paused: true,
        duration: 0.3,
        ease: "back.out(1.2)",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  });

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        ref={headerRef}
        className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] lg:w-[50%] max-w-3xl px-5 py-5 flex justify-between items-center bg-black/40 backdrop-blur-lg z-100 border border-[#10b981]/20 rounded-full text-white shadow-[0_4px_30px_rgba(16,185,129,0.15)]"
      >
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="rounded-full group-hover:scale-105 transition-transform"
              unoptimized
            />
            <span className="text-lg sm:text-xl font-black tracking-tighter text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
              IRIS
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em]">
          {["About", "Features", "Pricing"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-[#10b981] transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#10b981] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/download">
            <div className="hidden md:block px-4 py-2 rounded-full border border-[#10b981]/50 bg-[#10b981]/10 text-[#ffffff] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#099443] hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all cursor-pointer">
              Download IRIS
            </div>
          </Link>
          <button
            className="md:hidden text-[#10b981] p-1 rounded-full hover:bg-[#10b981]/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-101 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-[#050505] border-l border-[#10b981]/20 z-102 flex flex-col p-8 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] md:hidden"
            >
              <Link href="/">
                <div className="flex justify-between items-center mb-16">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/img/logo.png"
                      alt="Logo"
                      width={30}
                      height={30}
                      className="rounded-full"
                      unoptimized
                    />
                    <span className="text-xl font-black tracking-tighter text-[#10b981]">
                      IRIS
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-gray-400 hover:text-[#10b981] rounded-full hover:bg-[#10b981]/10 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </Link>

              <nav className="flex flex-col gap-10 text-sm font-bold uppercase tracking-[0.2em]">
                {["About", "Features", "Pricing"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-300 hover:text-[#10b981] transition-colors border-b border-white/5 pb-4"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <Link href="/download">
                  <div className="w-full text-center px-4 py-4 rounded-full border border-[#10b981]/50 bg-[#10b981]/10 text-[#10b981] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#10b981] hover:text-black hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all cursor-pointer">
                    Download IRIS
                  </div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
