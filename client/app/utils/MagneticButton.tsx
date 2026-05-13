"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  subtitle: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  title,
  subtitle,
  iconLeft,
  iconRight,
  className = "",
  strength = 0.25,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const boundsRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      boundsRef.current = buttonRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!boundsRef.current) return;
    const { left, top, width, height } = boundsRef.current;

    const moveX = (e.clientX - left - width / 2) * strength;
    const moveY = (e.clientY - top - height / 2) * strength;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    boundsRef.current = null;
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative flex items-center justify-between px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-shadow cursor-pointer w-full sm:w-auto min-w-[320px] z-50 ${className}`}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center gap-3">
        {iconLeft && (
          <div className="flex items-center justify-center">{iconLeft}</div>
        )}
        <div className="flex flex-col items-start leading-tight text-left">
          <span>{title}</span>
          <span className="text-[11px] font-mono opacity-80 uppercase tracking-wider">
            {subtitle}
          </span>
        </div>
      </span>
      {iconRight && (
        <div className="relative ml-2 z-10 w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-black transition-all duration-300">
          {iconRight}
        </div>
      )}
      <div className="absolute inset-0 -translate-x-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.4),transparent)] group-hover:animate-[shimmer_1.5s_infinite]" />
    </motion.button>
  );
}
