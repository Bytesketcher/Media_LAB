"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface AnimateInViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

const getVariants = (direction: string): Variants => {
  const y = direction === "up" ? 32 : 0;
  const x = direction === "left" ? -32 : direction === "right" ? 32 : 0;
  return {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

export default function AnimateInView({
  children,
  delay = 0,
  className,
  direction = "up",
}: AnimateInViewProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={getVariants(direction)}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
