"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Reveal from "./reveal-animation"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 relative bg-background-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="font-bold mb-4 text-primary">About Me</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-1 bg-primary mx-auto rounded-full w-24"></div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative p-8 rounded-2xl overflow-hidden card-hover">
              <div className="absolute inset-0 bg-background-lightest rounded-2xl border border-primary/20"></div>
              <div className="relative space-y-6 text-foreground/90">
                <p className="text-lg leading-relaxed">
                  I specialize in property valuation and site supervision, with extensive experience at Commercial Bank
                  of Ethiopia (CBE), Hibret Bank and Ethiopian Roads Administration (ERA). Throughout my career, I have
                  successfully managed construction projects, conducted site inspections, and coordinated with
                  contractors to ensure quality and efficiency.
                </p>
                <p className="text-lg leading-relaxed">
                  My expertise includes valuing properties for collateral, foreclosure, and project finance with a focus
                  on market analysis. I bring strategic insight and precision to every project I handle, combining
                  technical knowledge with practical experience to deliver exceptional results.
                </p>
                <p className="text-lg leading-relaxed">
                  With a BSc in Civil Engineering from Addis Ababa Science and Technology University and an MA in
                  Project Management from Addis Ababa University, I have the educational foundation to complement my
                  professional experience. I am committed to continuous learning and staying updated with the latest
                  industry standards and technologies.
                </p>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  )
}

