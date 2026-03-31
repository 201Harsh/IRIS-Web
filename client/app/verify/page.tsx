"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Shield,
  Fingerprint,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import AxiosInstance from "@/config/AxiosInstacne";

function VerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<"verifying" | "success" | "error">(
    "verifying",
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setErrorMessage("NO CRYPTOGRAPHIC TOKEN DETECTED IN URL.");
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await AxiosInstance.post("/users/verify", {
          token: token,
        });

        if (response.status === 200) {
          setStatus("success");
          setTimeout(() => {
            router.push("/dashboard");
          }, 1500);
        } else {
          setStatus("error");
          setErrorMessage(
            response.data.message || "INVALID OR EXPIRED SECURITY KEY.",
          );
        }
      } catch (error: any) {
        setStatus("error");
        setErrorMessage("NETWORK FAILURE. UNABLE TO REACH IRIS CORE.");
      }
    };

    // Add a slight artificial delay so the scanning animation looks cool before resolving
    const timer = setTimeout(() => {
      verifyToken();
    }, 1500);

    return () => clearTimeout(timer);
  }, [token, router]);

  // --- UI STATES ---
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-10 shadow-2xl relative overflow-hidden w-full max-w-md text-center"
    >
      {/* Dynamic Top Border Glow based on status */}
      <div
        className={`absolute top-0 left-0 w-full h-1 opacity-50 transition-colors duration-500 ${
          status === "verifying"
            ? "bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            : status === "success"
              ? "bg-gradient-to-r from-transparent via-[#10b981] to-transparent"
              : "bg-gradient-to-r from-transparent via-red-500 to-transparent"
        }`}
      />

      {/* VERIFYING STATE */}
      {status === "verifying" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-24 h-24 flex items-center justify-center mb-6">
            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-ping" />
            <div className="absolute inset-0 border-t-2 border-blue-500 rounded-full animate-spin" />
            <Fingerprint className="w-10 h-10 text-blue-400 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Decrypting Key...</h2>
          <p className="text-gray-400 font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2">
            <Loader2 className="w-3 h-3 animate-spin" /> Handshaking with IRIS
            Core
          </p>
        </motion.div>
      )}

      {/* SUCCESS STATE */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-full bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <CheckCircle2 className="w-12 h-12 text-[#10b981]" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">
            Identity Verified
          </h2>
          <p className="text-[#10b981] font-mono text-xs tracking-widest uppercase mb-6 animate-pulse">
            Access Granted. Routing to Dashboard...
          </p>
        </motion.div>
      )}

      {/* ERROR STATE */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <XCircle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-white">Access Denied</h2>
          <p className="text-red-400 font-mono text-xs tracking-widest uppercase mb-8">
            {errorMessage}
          </p>
          <Link
            href="/login"
            className="px-8 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium transition-colors w-full flex items-center justify-center gap-2"
          >
            <Shield className="w-4 h-4" /> Return to Security Node
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
}

// --- MAIN PAGE WRAPPER ---
export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center p-6 relative overflow-hidden selection:bg-[#10b981] selection:text-black">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10b981]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay" />

      <Suspense
        fallback={
          <div className="text-gray-500 font-mono text-xs tracking-widest uppercase animate-pulse flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" /> Initializing
            Scanners...
          </div>
        }
      >
        <VerifyContent />
      </Suspense>
    </div>
  );
}
