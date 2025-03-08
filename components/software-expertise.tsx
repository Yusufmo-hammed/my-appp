"use client"

import { useRef, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import Reveal from "./reveal-animation"

export default function SoftwareExpertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const software = [
    {
      name: "AutoCAD",
      icon: "/autocad.svg",
    },
    {
      name: "Photoshop",
      icon: "/photoshop.svg",
    },
    {
      name: "ArchiCAD",
      icon: "/archicad.svg",
    },
    {
      name: "QGIS",
      icon: "/qgis.svg",
    },
    {
      name: "Python",
      icon: "/python.svg",
    },
    {
      name: "Revit",
      icon: "/revit.svg",
    },
    {
      name: "SketchUp",
      icon: "/sketch.svg",
    },
    // Duplicate items for seamless loop
    ...[
      {
        name: "AutoCAD",
        icon: "/autocad.svg",
      },
      {
        name: "Photoshop",
        icon: "/photoshop.svg",
      },
      {
        name: "ArchiCAD",
        icon: "/archicad.svg",
      },
    ]
  ]

  const animationDistance = useMemo(() => {
    const itemCount = software.length
    const itemWidth = 192 // w-48 (12rem = 192px)
    const gap = 24 // gap-6 (1.5rem = 24px)
    return -(itemCount * (itemWidth + gap))
  }, [software.length])

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

        <div
          ref={ref}
          className="relative py-8 z-20 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 min-w-max"
              animate={{
                x: [0, animationDistance],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {software.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="w-48 h-48 flex flex-col items-center justify-center bg-background rounded-xl border border-primary/20 p-4 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 card-hover"
                >
                  <div className="mb-4 w-full h-32 flex items-center justify-center p-2">
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className="max-w-[80%] max-h-[80%] object-contain"
                      style={{ 
                        width: 'auto',
                        height: 'auto',
                        minWidth: '80px',
                        minHeight: '80px'
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground text-center">{item.name}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

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
