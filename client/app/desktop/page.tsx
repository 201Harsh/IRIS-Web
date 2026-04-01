"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Loader2,
  Download,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

function RedirectLogic() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<
    "initializing" | "redirecting" | "fallback"
  >("initializing");

  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");

  const buildDeepLink = () => {
    let link = "iris://dashboard";
    if (accessToken && refreshToken) {
      link += `?accessToken=${accessToken}&refreshToken=${refreshToken}`;
    }
    return link;
  };

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setStatus("redirecting");
      window.location.href = buildDeepLink();
    }, 2000);

    const fallbackTimer = setTimeout(() => {
      setStatus("fallback");
    }, 6000);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(fallbackTimer);
    };
  }, [accessToken, refreshToken]);

  const handleManualTrigger = () => {
    window.location.href = buildDeepLink();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center p-6 relative overflow-hidden selection:bg-[#10b981] selection:text-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#10b981]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none mix-blend-overlay" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-lg relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="bg-[#0a0a0a] border border-white/10 rounded-4xl p-10 shadow-[0_0_50px_rgba(16,185,129,0.05)] relative overflow-hidden text-center flex flex-col items-center"
        >
          <div
            className={`absolute top-0 left-0 w-full h-1 opacity-50 transition-all duration-1000 ${status === "redirecting" ? "bg-linear-to-r from-transparent via-[#10b981] to-transparent" : "bg-white/10"}`}
          />

          <div className="relative w-28 h-28 flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              {status === "initializing" && (
                <motion.div
                  key="init"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="absolute inset-0 border-2 border-dashed border-[#10b981]/30 rounded-full animate-[spin_4s_linear_infinite]" />
                  <div className="absolute inset-2 border-2 border-[#10b981]/20 rounded-full animate-ping opacity-20" />
                  <Terminal className="w-10 h-10 text-[#10b981] animate-pulse" />
                </motion.div>
              )}

              {status === "redirecting" && (
                <motion.div
                  key="redirect"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="absolute inset-0 border-2 border-[#10b981] rounded-full animate-spin border-t-transparent" />
                  <ExternalLink className="w-10 h-10 text-[#10b981]" />
                </motion.div>
              )}

              {status === "fallback" && (
                <motion.div
                  key="fallback"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-[#10b981]/10 border border-[#10b981]/30 rounded-full"
                >
                  <CheckCircle2 className="w-12 h-12 text-[#10b981]" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-24">
            <AnimatePresence mode="wait">
              {status === "initializing" && (
                <motion.div
                  key="text-init"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-2xl font-bold mb-2">
                    Establishing Link...
                  </h2>
                  <p className="text-gray-400 text-sm font-mono tracking-widest uppercase flex items-center justify-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin" /> Packaging Auth
                    Tokens
                  </p>
                </motion.div>
              )}

              {status === "redirecting" && (
                <motion.div
                  key="text-redirect"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-2xl font-bold mb-2">
                    Launching IRIS Engine
                  </h2>
                  <p className="text-[#10b981] text-sm font-mono tracking-widest uppercase animate-pulse">
                    Please confirm the browser prompt
                  </p>
                </motion.div>
              )}

              {status === "fallback" && (
                <motion.div
                  key="text-fallback"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-2xl font-bold mb-2">
                    Authentication Sent
                  </h2>
                  <p className="text-gray-400 text-sm">
                    You can safely close this window once the desktop engine
                    connects.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {status === "fallback" && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                className="w-full flex flex-col gap-3 overflow-hidden"
              >
                <div className="h-px w-full bg-white/10 mb-2" />

                <button
                  onClick={handleManualTrigger}
                  className="w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" /> Try Opening Again
                </button>

                <button className="w-full py-3 rounded-xl border border-[#10b981]/30 bg-[#10b981]/10 hover:bg-[#10b981]/20 text-[#10b981] font-medium transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer">
                  <Download className="w-4 h-4" /> Download Local Engine
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function DesktopRedirectPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-[#10b981] font-mono tracking-widest text-sm">
          PREPARING NEURAL UPLINK...
        </div>
      }
    >
      <RedirectLogic />
    </Suspense>
  );
}
