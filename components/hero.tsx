"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Navbar from "./navbar"
import Reveal from "./reveal-animation"
import TypingAnimation from "./typing-animation"

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <Navbar />

      <div className="container mx-auto z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <motion.div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/20 text-primary font-medium">
                Civil Engineer & Property Valuation Expert
              </span>
            </motion.div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-bold mb-6 text-foreground">
              <TypingAnimation
                phrases={["Yusuf Mohammednur", "I'm a Civil Engineer", "Property Valuation Engineer"]}
                typingSpeed={100}
                deletingSpeed={50}
                delayAfterPhrase={2000}
              />
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl overflow-hidden bg-background-lighter border border-primary/10 shadow-xl card-hover">
              <p className="relative text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed">
                I specialize in property valuation and site supervision, with experience at Commercial Bank of Ethiopia
                (CBE), Hibret Bank and Ethiopian Roads Administration (ERA). I bring strategic insight and precision to
                every project, ensuring quality and efficiency in construction management and property valuation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base flex items-center justify-center"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-transparent border border-primary text-primary font-medium hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base flex items-center justify-center"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

