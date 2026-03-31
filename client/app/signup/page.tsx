'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight, Cpu, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center p-6 relative overflow-hidden selection:bg-[#10b981] selection:text-black">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#10b981]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#044a33]/30 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-md relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/30 shadow-[0_0_20px_rgba(16,185,129,0.2)] mb-6">
            <Cpu className="w-8 h-8 text-[#10b981]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-emerald-200">IRIS</span>
          </h1>
          <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">
            Create your access key
          </p>
        </motion.div>

        {/* Main Form Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10b981]/50 to-transparent opacity-50" />

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name Input */}
            <div className="space-y-1">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500 group-focus-within:text-[#10b981] transition-colors" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Harsh Pandey"
                  className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-[#10b981] transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="harsh@vitalstudios.com"
                  className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider ml-1">Secure Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500 group-focus-within:text-[#10b981] transition-colors" />
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  className="w-full bg-[#050505] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative group overflow-hidden rounded-xl bg-[#10b981] text-black font-bold py-4 mt-2 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <div className="flex items-center justify-center gap-2 relative z-10">
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Deploy Engine</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Or Auth With</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#050505] border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-sm font-medium text-gray-300">
              <FcGoogle className="w-5 h-5" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#050505] border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-sm font-medium text-gray-300">
              <FaGithub className="w-5 h-5" />
              GitHub
            </button>
          </div>

        </motion.div>

        {/* Footer Link */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Already have an access key?{' '}
            <Link href="/login" className="text-[#10b981] font-semibold hover:text-emerald-400 transition-colors flex items-center justify-center gap-1 inline-flex">
              Sign In <Sparkles className="w-3 h-3" />
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}