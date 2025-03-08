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
                 I am a property valuation and site supervision professional with expertise in construction, asset evaluation and highway road research. 
                 At Commercial Bank of Ethiopia (CBE), I supervised construction, maintenance, and rehabilitation projects, including those in war-affected regions,
                 managing contract administration, site inspections, and contractor coordination to ensure quality and efficiency.
                </p>
                <p className="text-lg leading-relaxed">
                 At Hibret Bank, I specialize in property valuation for collateral, foreclosure, and project finance, assessing a diverse range of assets,
                 including residential and commercial buildings, coffee farms, gas stations, and warehouses. My expertise covers market analysis, zoning regulations,
                 BOQ preparation, and financial risk assessment, ensuring accurate and fair property valuations.
                </p>
                <p className="text-lg leading-relaxed">
                 At the Ethiopian Roads Administration (ERA), I conducted applied research on highway materials to enhance durability and sustainability, 
                 designing and executing laboratory experiments to evaluate material performance under extreme conditions. With a strong foundation in construction, 
                 valuation, and infrastructure research, I bring precision, strategic insight, and hands-on experience to every project.
                </p>
              </div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  )
}

