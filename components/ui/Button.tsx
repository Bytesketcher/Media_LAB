"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

const variants = {
  primary:
    "bg-[var(--accent)] text-[#07100f] font-semibold hover:bg-[#00b394] active:scale-[0.98]",
  outline:
    "border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost:
    "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled,
  ariaLabel,
}: ButtonProps) {
  const baseClass = cn(
    "inline-flex items-center gap-2 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
    variants[variant],
    sizes[size],
    disabled && "opacity-40 pointer-events-none",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
