"use client"
import { motion } from "framer-motion"

export default function BackgroundShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top left shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Bottom right shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary rounded-full filter blur-[100px] translate-x-1/2 translate-y-1/2"
      />

      {/* Center shape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-accent rounded-full filter blur-[120px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  )
}

