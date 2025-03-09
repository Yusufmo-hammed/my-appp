// components/AnimatedNumber.tsx
"use client";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  isInView: boolean;
}

export default function AnimatedNumber({ value, suffix = "", isInView }: AnimatedNumberProps) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(0, value, {
        duration: 1,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCurrent(Math.floor(latest));
        },
      });
      return () => animation.stop();
    } else {
      setCurrent(0);
    }
  }, [isInView, value]);

  return <>{current}{suffix}</>;
}
