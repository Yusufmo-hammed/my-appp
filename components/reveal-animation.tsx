// components/reveal-animation.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "full" | "auto";
  delay?: number;
}

export default function Reveal({ children, width = "full", delay = 0 }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`${width === "full" ? "w-full" : "w-auto"} overflow-hidden`}
    >
      <motion.div
        initial={{ y: 75, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ 
          duration: 0.5, 
          delay,
          ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic bezier for smoother animation
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
