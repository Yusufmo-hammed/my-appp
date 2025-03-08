"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Reveal from "./reveal-animation"

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Commercial Complex",
      category: "Property Valuation",
      description:
        "Comprehensive valuation of a mixed-use commercial complex in the heart of Addis Ababa-Bole Atlas. The assessment included market analysis, income approach valuation, and replacement cost estimation.",
      image: "/Project 1.jpg?height=600&width=800",
    },
    {
      title: "Office Building",
      category: "Property Valuation",
      description:
        "Comprehensive valuation of a office building in Addis Ababa-Bole Atlas. The assessment included market analysis, income approach valuation, and replacement cost estimation.",
      image: "/Project 2.jpg?height=600&width=800",
    },
    {
      title: "Residential Apartment",
      category: "Property Valuation",
      description:
        "Comprehensive valuation of residential apartment building in Addis Ababa-Megenagna. The assessment included market analysis, income approach valuation, and replacement cost estimation",
      image: "/Project 3.jpg?height=600&width=800",
    },
    {
      title: "Residential Building",
      category: "Property Valuation",
      description:
        "Conducted valuation for a residential building for collateral purposes. The assessment included detailed analysis of rental income, cost approach, and market comparables.",
      image: "/Project 4.jpg?height=600&width=800",
    },
    {
      title: "Office Buildings",
      category: "Property Valuation",
      description:
        "Conducted valuation for a office building for collateral purposes. The assessment included detailed analysis of rental income, cost approach, and market comparables.",
      image: "/Project 5.jpg?height=600&width=800",
    },
    {
      title: "Apartment Buildings",
      category: "Property Valuation",
      description:
        "Conducted valuation for a apartment building for collateral purposes. The assessment included detailed analysis of rental income, cost approach, and market comparables.",
      image: "/Project 6.jpg?height=600&width=800",
    },
    {
      title: "Commercial Complex",
      category: "Property Valuation",
      description:
        "Conducted valuation for a commercial complex for collateral purposes. The assessment included detailed analysis of rental income, cost approach, and market comparables.",
      image: "/Project 7.jpg?height=600&width=800",
    },
    {
      title: "Commerical Complex",
      category: "Property Valuation",
      description:
        "Conducted valuation for a commercial complex for collateral purposes. The assessment included detailed analysis of rental income, cost approach, and market comparables.",
      image: "/Project 8.jpg?height=600&width=800",
    },
  ]

  return (
    <section id="portfolio" className="py-20 relative bg-background-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-bold mb-4 text-primary">Project Portfolio</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-1 bg-primary mx-auto rounded-full w-24"></div>
          </Reveal>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={0.05 * index}>
              <motion.div
                className="relative group cursor-pointer card-hover"
                onClick={() => setSelectedProject(index)}
              >
                <div className="absolute inset-0 bg-background rounded-xl border border-primary/20 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-primary/10 overflow-hidden">
                  <div className="absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-60">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="relative p-6 h-64 flex flex-col justify-end">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs font-medium border border-primary/20">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 transition-transform duration-300 group-hover:translate-y-0">
                    {project.title}
                  </h3>
                  <div className="h-0 overflow-hidden transition-all duration-300 group-hover:h-auto group-hover:mt-2">
                    <p className="text-sm text-foreground/80 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-gradient-to-br from-background to-background-lighter rounded-xl border border-primary/20 w-full max-w-4xl overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background-lightest/50 text-foreground hover:bg-background-lightest/70 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src={projects[selectedProject].image || "/placeholder.svg"}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary text-xs font-medium border border-primary/20 mb-4">
                    {projects[selectedProject].category}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{projects[selectedProject].title}</h3>
                  <p className="text-foreground/80 mb-6">{projects[selectedProject].description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground/60 mb-1">Project Scope</h4>
                      <p className="text-foreground">Comprehensive assessment and detailed analysis</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/60 mb-1">Methodologies Used</h4>
                      <p className="text-foreground">Market comparison, income approach, cost approach</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground/60 mb-1">Client</h4>
                      <p className="text-foreground">Real Estate Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

