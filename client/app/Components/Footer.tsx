import React from "react";
import { ArrowUpRight, Cpu, Activity, TerminalSquare } from "lucide-react";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa6";

const Footer = ({
  footerTextRef,
}: {
  footerTextRef: React.RefObject<HTMLHeadingElement | null>;
}) => {
  return (
    <footer className="footer-section bg-[#050505] pt-24 pb-6 px-6 md:px-20 border-t border-white/5 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-[#10b981]/50 to-transparent" />

      {/* GIANT GSAP TEXT */}
      <div className="w-full flex justify-center mb-20 select-none relative z-10">
        <h1
          ref={footerTextRef}
          className="text-[22vw] font-black leading-none tracking-tighter bg-clip-text text-transparent"
          style={{
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.08)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundImage: "linear-gradient(90deg, #10b981 0%, #044a33 0%)",
            backgroundRepeat: "no-repeat",
          }}
        >
          IRIS
        </h1>
      </div>

      {/* FOOTER GRID */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-sm relative z-10">
        {/* Col 1: Brand & Socials */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 border border-[#10b981]/30 bg-[#10b981]/10 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <Cpu className="text-[#10b981]" size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-white font-bold tracking-widest text-lg">
                IRIS
              </h3>
              <p className="text-[#10b981] text-[10px] tracking-[0.2em] uppercase">
                Neural Interface
              </p>
            </div>
          </div>
          <p className="text-gray-500 leading-relaxed pr-4">
            Bypassing standard algorithms to deliver raw, unfiltered
            system-level automation.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981] hover:bg-[#10b981]/10 transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981] hover:bg-[#10b981]/10 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#10b981] hover:border-[#10b981] hover:bg-[#10b981]/10 transition-all duration-300"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Col 2: About */}
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-bold tracking-widest mb-2 flex items-center gap-2">
            <TerminalSquare size={16} className="text-[#10b981]" /> ABOUT
          </h5>
          {["About Us", "Support", "Terms and Condition", "Privacy Policy"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="group flex items-center text-gray-400 hover:text-white transition-colors w-max"
              >
                <span className="text-[#10b981] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-2">
                  <ArrowUpRight size={16} />
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {link}
                </span>
              </a>
            ),
          )}
        </div>

        {/* Col 3: Company */}
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-bold tracking-widest mb-2 flex items-center gap-2">
            <Activity size={16} className="text-[#10b981]" /> COMPANY
          </h5>
          {["Hire From Us", "Pricing", "Feedback"].map((link) => (
            <a
              key={link}
              href="#"
              className="group flex items-center text-gray-400 hover:text-white transition-colors w-max"
            >
              <span className="text-[#10b981] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-2">
                <ArrowUpRight size={16} />
              </span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                {link}
              </span>
            </a>
          ))}
          <a
            href="#"
            className="group flex items-center text-gray-400 hover:text-white transition-colors w-max"
          >
            <span className="text-[#10b981] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-2">
              <FaDiscord size={16} />
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              Discord Server
            </span>
          </a>
        </div>

        {/* Col 4: Contact & Status */}
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-bold tracking-widest mb-2">
            SYSTEM STATUS
          </h5>
          <div className="p-4 border border-white/5 bg-white/2 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-xs uppercase tracking-wider">
                Network
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                </span>
                <span className="text-[#10b981] text-xs font-bold tracking-widest uppercase">
                  Active
                </span>
              </div>
            </div>
            <div className="h-px w-full bg-white/5" />
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                Parent Command
              </p>
              <p className="text-white font-bold tracking-wider">
                Vital Studio's
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full max-w-7xl mx-auto mt-20 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 relative z-10">
        <p>© {new Date().getFullYear()} Vital Studio's. All rights reserved.</p>
        <p className="tracking-widest uppercase">
          OS_OVERRIDE_UNIT_ALPHA // v9.3
        </p>
      </div>
    </footer>
  );
};

export default Footer;
