// components/AnimatedNumber.tsx
"use client";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  isInView: boolean;
  duration?: number;
  ease?: string | number[];
}

export default function AnimatedNumber({ 
  value, 
  suffix = "", 
  isInView,
  duration = 2,
  ease = "easeOut"
}: AnimatedNumberProps) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(0, value, {
        duration,
        ease,
        onUpdate: (latest) => {
          setCurrent(Math.floor(latest));
        },
      });
      return () => animation.stop();
    } else {
      setCurrent(0);
    }
  }, [isInView, value, duration, ease]);

  return <>{current}{suffix}</>;
}
