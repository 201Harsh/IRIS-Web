"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Cpu,
  ShieldCheck,
  ShieldAlert,
  Monitor,
  Smartphone,
  Server,
  Activity,
  LogOut,
  Settings,
  CreditCard,
  Network,
} from "lucide-react";
import Link from "next/link";
import AxiosInstance from "@/config/AxiosInstacne";

// --- TYPES ---
interface UserData {
  name: string;
  email: string;
  tier: "free" | "pro";
  verified: boolean;
  hwids: string[];
  createdAt: string;
  updatedAt: string;
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await AxiosInstance.get("/users/me");

        console.log(response);

        if (response.status === 200) {
          const data = response.data.user;
          console.log(data);
          setUserData(data);
        }
      } catch (err) {
        console.warn("Backend unreachable, loading mock data for UI preview.");
        setUserData({
          name: "Harsh Pandey",
          email: "harsh@vitalstudios.com",
          tier: "pro",
          verified: true,
          hwids: ["WIN-AB12-XYZ9", "AND-ONEPLUS-9"],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      } finally {
        setTimeout(() => setIsLoading(false), 1500);
      }
    };

    fetchUserData();
  }, []);

  // --- FRAMER MOTION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  // --- LOADING STATE ---
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-[#10b981] font-mono text-sm">
        <Cpu className="w-12 h-12 mb-4 animate-pulse" />
        <p className="tracking-widest uppercase">
          Initializing IRIS Control Nexus...
        </p>
        <div className="w-64 h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
          <motion.div
            className="h-full bg-[#10b981]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    );
  }

  // --- CALCULATIONS ---
  const isPro = userData?.tier === "pro";
  const maxDevices = isPro ? 3 : 1;
  const activeDevices = userData?.hwids || [];
  const emptySlots = Math.max(0, maxDevices - activeDevices.length);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col md:flex-row selection:bg-[#10b981] selection:text-black">
      {/* --- SIDEBAR --- */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-[#0a0a0a] flex flex-col">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Terminal className="w-5 h-5 text-[#10b981]" />
          </div>
          <div>
            <h2 className="font-bold tracking-widest text-lg leading-none">
              IRIS
            </h2>
            <span className="text-[10px] text-[#10b981] font-mono uppercase tracking-widest">
              Control Panel
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <SidebarLink icon={<Activity />} label="System Overview" active />
          <SidebarLink icon={<Network />} label="Network Map" />
          <SidebarLink icon={<CreditCard />} label="Billing & Tier" />
          <SidebarLink icon={<Settings />} label="Engine Settings" />
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="flex items-center gap-3 w-full p-3 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium">
            <LogOut className="w-4 h-4" /> Disconnect Session
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 p-6 md:p-10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 blur-[150px] rounded-full pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-6xl mx-auto relative z-10"
        >
          {/* HEADER */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Welcome back,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-emerald-200">
                  {userData?.name.split(" ")[0]}
                </span>
              </h1>
              <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">
                Session ID:{" "}
                {Math.random().toString(36).substring(2, 10).toUpperCase()} •
                Server: ASIA-SOUTH-1
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center gap-2 text-sm font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                </span>
                Global Network Online
              </div>
            </div>
          </motion.div>

          {/* TOP METRICS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Identity Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-[2rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 text-gray-400 group-hover:text-white transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                {userData?.verified ? (
                  <span className="flex items-center gap-1 text-xs font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded border border-[#10b981]/20">
                    <ShieldCheck className="w-3 h-3" /> VERIFIED
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-mono text-red-400 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
                    <ShieldAlert className="w-3 h-3" /> UNVERIFIED
                  </span>
                )}
              </div>
              <h3 className="text-sm text-gray-500 font-mono uppercase tracking-widest mb-1">
                Identity Node
              </h3>
              <p className="text-lg font-semibold truncate">
                {userData?.email}
              </p>
            </motion.div>

            {/* License Card */}
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-[2rem] bg-[#0a0a0a] border ${isPro ? "border-[#10b981]/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]" : "border-white/5"} relative overflow-hidden`}
            >
              {isPro && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981]/10 blur-[40px] rounded-full" />
              )}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div
                  className={`p-3 rounded-xl ${isPro ? "bg-[#10b981]/10 text-[#10b981]" : "bg-white/5 text-gray-400"}`}
                >
                  <Server className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-gray-500">
                  SINCE{" "}
                  {new Date(userData?.createdAt || "")
                    .toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })
                    .toUpperCase()}
                </span>
              </div>
              <h3 className="text-sm text-gray-500 font-mono uppercase tracking-widest mb-1">
                Engine License
              </h3>
              <p className="text-xl font-black text-white uppercase tracking-wider">
                IRIS {userData?.tier}
              </p>
            </motion.div>

            {/* Device Usage Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-[2rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                  <Activity className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-sm text-gray-500 font-mono uppercase tracking-widest mb-1">
                Network Capacity
              </h3>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-black">
                  {activeDevices.length}
                </span>
                <span className="text-gray-500 mb-1 font-mono">
                  / {maxDevices} ACTIVE NODES
                </span>
              </div>
            </motion.div>
          </div>

          {/* --- CENTER CONTROL: ACTIVE DEVICES --- */}
          <motion.div variants={itemVariants} className="mt-4">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Monitor className="w-6 h-6 text-[#10b981]" /> Hardware Bridge
              Control
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Render Active Devices */}
              {activeDevices.map((hwid, index) => (
                <div
                  key={index}
                  className="p-6 rounded-[2rem] bg-[#050505] border border-[#10b981]/40 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent opacity-50" />

                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-full bg-[#10b981]/10 border border-[#10b981]/20">
                      {hwid.includes("AND") || hwid.includes("IOS") ? (
                        <Smartphone className="w-8 h-8 text-[#10b981]" />
                      ) : (
                        <Monitor className="w-8 h-8 text-[#10b981]" />
                      )}
                    </div>
                    <span className="flex items-center gap-2 text-xs font-mono text-[#10b981] px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />{" "}
                      SYNCED
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1">
                    {hwid.includes("AND") ? "Mobile Node" : "Desktop Node"}
                  </h3>
                  <p className="text-gray-500 font-mono text-xs break-all">
                    HWID: {hwid}
                  </p>

                  <button className="w-full mt-6 py-3 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-sm font-medium hover:bg-red-500/10 hover:border-red-500/40 transition-colors">
                    Sever Connection
                  </button>
                </div>
              ))}

              {/* Render Empty Slots */}
              {Array.from({ length: emptySlots }).map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="p-6 rounded-[2rem] bg-[#0a0a0a] border border-dashed border-white/10 flex flex-col items-center justify-center text-center opacity-70 hover:opacity-100 transition-opacity min-h-[260px]"
                >
                  <div className="p-4 rounded-full bg-white/5 border border-white/10 mb-4 text-gray-500">
                    <Monitor className="w-8 h-8" />
                  </div>
                  <h3 className="text-white font-medium mb-1">Empty Slot</h3>
                  <p className="text-gray-500 text-xs max-w-[200px]">
                    Install IRIS on a new device and login to secure this node.
                  </p>
                </div>
              ))}

              {/* Render Upsell Slot if Free Tier */}
              {!isPro && (
                <div className="p-6 rounded-[2rem] bg-[#050505] border border-dashed border-[#10b981]/30 flex flex-col items-center justify-center text-center min-h-[260px] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-4 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 mb-4 text-[#10b981]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-[#10b981] font-bold mb-1">
                    Unlock Pro Nodes
                  </h3>
                  <p className="text-gray-400 text-xs max-w-[200px] mb-4">
                    Upgrade to connect up to 3 devices simultaneously.
                  </p>
                  <Link
                    href="/pricing"
                    className="px-6 py-2 rounded-lg bg-[#10b981] text-black text-xs font-bold hover:bg-emerald-400 transition-colors z-10"
                  >
                    Upgrade Engine
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

// --- HELPER COMPONENT ---
const SidebarLink = ({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => (
  <a
    href="#"
    className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all text-sm font-medium ${active ? "bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
  >
    <span className="opacity-80">{icon}</span>
    {label}
  </a>
);
