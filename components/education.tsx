"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar } from "lucide-react"
import Reveal from "./reveal-animation"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const education = [
    {
      degree: "MA in Project Management",
      institution: "Addis Ababa University",
      logo: "/aau.svg",
      period: "2024 - 2027",
    },
    {
      degree: "BSc in Civil Engineering",
      institution: "Addis Ababa Science and Technology University",
      logo: "/aastu.svg",
      period: "2016 - 2021",
    },
  ]

  return (
    <section id="education" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-bold mb-4 text-primary">Education</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-1 bg-primary mx-auto rounded-full w-24"></div>
          </Reveal>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <motion.div className="relative group card-hover">
                <div className="absolute inset-0 bg-background-lightest rounded-xl border border-primary/20 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-primary/10"></div>
                <div className="relative p-6 rounded-xl">
                  <div className="flex items-start">
                    {/* Updated logo container */}
                    <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center mr-4 rounded-xl border border-primary/20 shrink-0">
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={item.institution}
                        className="w-16 h-16 object-contain p-2"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        <span className="text-sm text-primary">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.degree}</h3>
                      <p className="text-foreground/80 mb-4">{item.institution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
