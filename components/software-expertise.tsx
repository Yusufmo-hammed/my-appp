"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Reveal from "./reveal-animation"

export default function SoftwareExpertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const software = [
    {
      name: "AutoCAD",
      icon: "/autocad.jpg?height=40&width=40",
    },
    {
      name: "ETABS",
      icon: "/Etabs.png?height=40&width=40",
    },
    {
      name: "ArchiCAD",
      icon: "/archicad.jpg?height=40&width=40",
    },
    {
      name: "QGIS",
      icon: "/qgis.png?height=40&width=40",
    },
    {
      name: "Python",
      icon: "/python.jpg?height=40&width=40",
    },
   
    {
      name: "Revit",
      icon: "/revit.jpg?height=40&width=40",
    },
    {
      name: "SketchUp",
      icon: "/sketch.jpg?height=40&width=40",
    },
    // Duplicate items to create a continuous scrolling effect
    {
      name: "AutoCAD",
      icon: "/autocad.jpg?height=40&width=40",
    },
    {
      name: "ETABS",
      icon: "/Etabs.jpg?height=40&width=40",
    },
    {
      name: "ArchiCAD",
      icon: "/archicad.jpg?height=40&width=40",
    },
    {
      name: "QGIS",
      icon: "/qgis.png?height=40&width=40",
    },
  ]

  return (
    <section id="software-expertise" className="py-20 relative bg-background-lighter">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-bold mb-4 text-primary">Software Expertise</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-1 bg-primary mx-auto rounded-full w-24"></div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-accent">My Skill Set</p>
          </Reveal>
        </div>

        {/* Scrolling container with proper isolation */}
        <div
          ref={ref}
          className="relative py-8 z-20 overflow-hidden"
          style={{
            isolation: "isolate", // Creates a new stacking context
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          {/* Horizontal scrolling container */}
          <div className="flex overflow-hidden">
            {/* First scrolling row */}
            <motion.div
              className="flex gap-6 min-w-max"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {software.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="w-48 h-48 flex flex-col items-center justify-center bg-background rounded-xl border border-primary/20 p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 card-hover"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <img src={item.icon || "/placeholder.svg"} alt={item.name} className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground text-center">{item.name}</h3>
                </div>
              ))}
            </motion.div>

            {/* Duplicate for seamless scrolling */}
            <motion.div
              className="flex gap-6 min-w-max absolute left-full top-8"
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {software.map((item, index) => (
                <div
                  key={`${item.name}-duplicate-${index}`}
                  className="w-48 h-48 flex flex-col items-center justify-center bg-background rounded-xl border border-primary/20 p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 card-hover"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <img src={item.icon || "/placeholder.svg"} alt={item.name} className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground text-center">{item.name}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Gradient overlays to create fade effect at the edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-background-lighter to-transparent pointer-events-none z-30"
          style={{ marginTop: "12rem" }}
        ></div>
        <div
          className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-background-lighter to-transparent pointer-events-none z-30"
          style={{ marginTop: "12rem" }}
        ></div>

        <Reveal delay={0.3}>
          <div className="mt-16 text-center relative z-20">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full border border-primary/20"></div>
              <a
                href="#contact"
                className="relative px-8 py-3 rounded-full inline-block text-foreground font-medium hover:text-primary transition-colors"
              >
                Need expertise for your project?
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

