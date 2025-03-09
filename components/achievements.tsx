"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Award, ExternalLink } from "lucide-react"
import Reveal from "./reveal-animation"
import Image from "next/image"

interface Certificate {
  title: string
  issuer: string
  date: string
  image: string
  description: string
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  const certificates: Certificate[] = [
    {
      title: "Excellence in Property Valuation",
      issuer: "Ethiopian Association of Civil Engineers",
      date: "2023",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Awarded for outstanding contributions to property valuation methodologies and practices in the Ethiopian real estate market.",
    },
    {
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      date: "2022",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Internationally recognized certification in project management principles, methodologies, and best practices.",
    },
    {
      title: "Construction Quality Management",
      issuer: "Ethiopian Construction Authority",
      date: "2022",
      image: "/placeholder.svg?height=600&width=800",
      description: "Certification in advanced construction quality management techniques and standards compliance.",
    },
    {
      title: "Sustainable Construction Practices",
      issuer: "Green Building Council of Ethiopia",
      date: "2021",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Recognition for implementing sustainable and environmentally friendly construction practices in major projects.",
    },
    {
      title: "Outstanding Civil Engineer Award",
      issuer: "Addis Ababa University",
      date: "2020",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Awarded to alumni who have demonstrated exceptional professional achievement and contributions to the field of civil engineering.",
    },
    {
      title: "Advanced Structural Analysis",
      issuer: "Ethiopian Institute of Architecture",
      date: "2020",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Certification in advanced structural analysis techniques and software applications for complex building designs.",
    },
    {
      title: "Leadership in Construction Management",
      issuer: "Construction Management Association",
      date: "2019",
      image: "/placeholder.svg?height=600&width=800",
      description: "Recognition for exemplary leadership in managing large-scale construction projects and teams.",
    },
  ]

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="achievements" className="py-20 relative bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-bold mb-4 text-primary">Achievements & Awards</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-1 bg-primary mx-auto rounded-full w-24"></div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-accent">Recognition of Excellence</p>
          </Reveal>
        </div>

        <div className="relative" ref={ref}>
          {/* Left scroll button */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary/10 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right scroll button */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 text-primary hover:bg-primary/10 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar"
            onScroll={handleScroll}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex gap-6 px-4">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[280px] md:w-[320px] card-hover cursor-pointer"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <div className="relative h-[200px] rounded-t-xl overflow-hidden">
                    <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block px-2 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium border border-primary/20">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 border border-primary/20 border-t-0 rounded-b-xl bg-background-lighter">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground line-clamp-1">{cert.title}</h3>
                        <p className="text-sm text-foreground/70">{cert.issuer}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-foreground/80 line-clamp-2">{cert.description}</p>
                    <div className="mt-4 flex justify-end">
                      <button className="text-xs flex items-center text-primary hover:underline">
                        View Certificate <ExternalLink className="ml-1 w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate modal */}
        {selectedCertificate && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative bg-background-lighter rounded-xl border border-primary/20 w-full max-w-4xl overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background-lightest/50 text-foreground hover:bg-background-lightest/70 transition-colors"
                onClick={() => setSelectedCertificate(null)}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={selectedCertificate.image || "/placeholder.svg"}
                    alt={selectedCertificate.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20 mb-4">
                    {selectedCertificate.date}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{selectedCertificate.title}</h3>
                  <p className="text-foreground/80 mb-4">{selectedCertificate.issuer}</p>
                  <p className="text-foreground/70 mb-6">{selectedCertificate.description}</p>

                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                    Download Certificate <ExternalLink className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gradient overlays for scroll fade effect */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[40px] bg-gradient-to-r from-background to-transparent pointer-events-none z-[1]"
          style={{ marginTop: "8rem" }}
        ></div>
        <div
          className="absolute right-0 top-0 bottom-0 w-[40px] bg-gradient-to-l from-background to-transparent pointer-events-none z-[1]"
          style={{ marginTop: "8rem" }}
        ></div>
      </div>
    </section>
  )
}

