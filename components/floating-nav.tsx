"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, GraduationCap, Mail, Menu, X, Code, Award } from "lucide-react"

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "#about", icon: <User className="w-5 h-5" /> },
    { name: "Skills", href: "#skills", icon: <Award className="w-5 h-5" /> },
    { name: "Software", href: "#software-expertise", icon: <Code className="w-5 h-5" /> },
    { name: "Experience", href: "#experience", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Portfolio", href: "#portfolio", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Education", href: "#education", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="relative flex flex-col items-center">
            {/* Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>

            {/* Horizontal Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: -10 }}
                  exit={{ opacity: 0, scale: 0.9, y: 0 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-background-lighter backdrop-blur-md rounded-lg border border-primary/20 shadow-lg p-3 w-auto max-w-full px-4"
                >
                  <div className="flex flex-wrap justify-center gap-3">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col items-center p-2 rounded-md hover:bg-primary/10 transition-colors text-foreground hover:text-primary"
                      >
                        {item.icon}
                        <span className="text-xs mt-1">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
