"use client";
import { motion } from "framer-motion";
import { Download, Terminal, Monitor, FileText } from "lucide-react";

const steps = [
  {
    title: "Download the Installer",
    desc: "Choose the installer for your operating system (Windows, macOS, or Linux). The installer includes the CLI and Desktop app.",
    icon: Download,
  },
  {
    title: "Run the Installation",
    desc: "Run the downloaded installer. For Windows, this is an .exe file. On macOS, it's a .dmg. On Linux, it's a .deb or .AppImage.",
    icon: FileText,
  },
  {
    title: "Configure CLI Access",
    desc: 'Once installed, open your terminal and type "" for CLI or " " for Desktop app. Follow the on-screen prompts to link your GitHub account.',
    icon: Terminal,
  },
  {
    title: "Start Monitoring",
    desc: "After setup, IRIS will automatically monitor your GitHub activity. Use the desktop app or CLI commands to view your stats, insights, and more.",
    icon: Monitor,
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-zinc-300 pt-32 pb-12 px-6 overflow-hidden relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 mb-4 tracking-tight">
            How to Install IRIS
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            Follow these simple steps to get IRIS running on your system.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
              }}
              className="relative group bg-[#0f0f0f] border border-[#10b981]/30 rounded-2xl p-8 transition-all hover:border-[#10b981]/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:-translate-y-1 cursor-pointer"
            >
              <div className="absolute top-0 right-0 mt-6 mr-6">
                <span className="text-5xl md:text-7xl font-bold text-[#10b981]/20 group-hover:text-[#10b981]/30 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="w-16 h-16 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#10b981]/20 transition-colors">
                <step.icon className="w-8 h-8 text-[#10b981]" />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#10b981] transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
