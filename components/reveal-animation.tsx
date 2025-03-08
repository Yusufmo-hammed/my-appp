"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  width?: "full" | "auto"
  delay?: number
}

export default function Reveal({ children, width = "full", delay = 0 }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`${width === "full" ? "w-full" : "w-auto"} overflow-hidden`}>
      <motion.div
        initial={{ y: 75, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 75, opacity: 0 }}
        transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

