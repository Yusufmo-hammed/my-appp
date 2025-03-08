"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Building, MapPin } from "lucide-react"
import Reveal from "./reveal-animation"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: "Property Valuation Engineer",
      company: "Hibret Bank",
      location: "Addis Ababa, Ethiopia",
      period: "Nov 2023 - Present",
      description: [
        "Conduct comprehensive property valuations for collateral and project finance purposes",
        "Prepare detailed bills of quantities and specifications for construction projects",
        "Monitor zoning regulation changes and market trends affecting property values",
        "Perform site visits to assess property conditions and verify documentation",
      ],
    },
    {
      title: "Civil Engineer",
      company: "Commercial Bank of Ethiopia",
      location: "Addis Ababa, Ethiopia",
      period: "Aug 2022 - Nov 2023",
      description: [
        "Managed building maintenance projects across multiple bank facilities",
        "Supervised contractor compliance with specifications and payment schedules",
        "Ensured material specification adherence throughout construction phases",
        "Conducted regular site inspections to monitor construction quality",
        "Coordinated with stakeholders to resolve technical issues during construction",
      ],
    },
    {
      title: "Research Engineer-Highway ",
      company: "Ethiopian Roads Administration",
      location: "Addis Ababa, Ethiopia",
      period: "Jan 2022 - Aug 2022",
      description: [
        "Conducted applied research on highway materials to enhance sustainability and durability",
        "Designed and executed laboratory experiments to evaluate material behavior under extreme weather and traffic conditions.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-bold mb-4 text-primary">Professional Experience</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-1 bg-primary mx-auto rounded-full w-24"></div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-accent">My Services</p>
          </Reveal>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/70 rounded-full"></div>

          {experiences.map((exp, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8 md:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 ${
                    index % 2 === 0 ? "md:-left-3" : "left-0 md:-right-3"
                  } w-6 h-6 rounded-full bg-gradient-to-r from-primary to-primary/70 shadow-lg shadow-primary/20 z-10`}
                ></div>

                <div className="relative p-6 rounded-xl overflow-hidden card-hover">
                  <div className="absolute inset-0 bg-background-lightest rounded-xl border border-primary/20"></div>
                  <div className="relative">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>

                    <div className="flex items-center mb-1 text-foreground/80">
                      <Building className="w-4 h-4 mr-2" />
                      <span>{exp.company}</span>
                    </div>

                    <div className="flex items-center mb-4 text-foreground/80">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>

                    <ul className={`space-y-2 text-foreground/90 ${index % 2 !== 0 ? "md:text-right" : ""}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className={`flex items-start ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                          <span
                            className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 ${
                              index % 2 !== 0 ? "md:order-2 md:ml-2" : "mr-2"
                            }`}
                          ></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

