"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Compass,
  LineChartIcon as ChartLine,
  Building,
  FileSpreadsheet,
  Ruler,
  Hammer,
  Briefcase,
  Users,
} from "lucide-react"
import Reveal from "./reveal-animation"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    {
      title: "Design & Analysis",
      icon: <Compass className="w-10 h-10" />,
      items: ["AutoCAD", "ETABS", "ArchiCAD", "QGIS/ArcGIS"],
      color: "from-primary to-primary/70",
    },
    {
      title: "Project Management",
      icon: <ChartLine className="w-10 h-10" />,
      items: ["Contract Administration", "Budget Control", "Quality Assurance", "Team Leadership"],
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Construction Supervision",
      icon: <Building className="w-10 h-10" />,
      items: ["Site Inspection", "Quality Control", "Progress Monitoring", "Safety Compliance"],
      color: "from-amber-400 to-orange-500",
    },
    {
      title: "Property Valuation",
      icon: <FileSpreadsheet className="w-10 h-10" />,
      items: ["Market Analysis", "Cost Estimation", "Collateral Valuation", "Foreclosure Assessment"],
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Technical Drawing",
      icon: <Ruler className="w-10 h-10" />,
      items: ["Structural Drawings", "Architectural Plans", "As-Built Documentation", "3D Modeling"],
      color: "from-primary to-sky-600",
    },
    {
      title: "Construction Materials",
      icon: <Hammer className="w-10 h-10" />,
      items: ["Material Testing", "Quality Verification", "Specification Compliance", "Alternative Materials"],
      color: "from-pink-500 to-red-600",
    },
    {
      title: "Contract Management",
      icon: <Briefcase className="w-10 h-10" />,
      items: ["Bid Evaluation", "Contract Preparation", "Claim Analysis", "Dispute Resolution"],
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Team Coordination",
      icon: <Users className="w-10 h-10" />,
      items: ["Stakeholder Management", "Team Building", "Resource Allocation", "Performance Evaluation"],
      color: "from-primary to-sky-400",
    },
  ]

  return (
    <section id="skills" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-bold mb-4 text-primary">Technical Skills</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-1 bg-primary mx-auto rounded-full w-24"></div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-accent">Equipped with the knowledge to turn challenges into innovations</p>
          </Reveal>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={0.1 * index}>
              <motion.div className="relative group h-full">
                <div className="absolute inset-0 bg-background-lighter rounded-xl border border-primary/20 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-primary/10"></div>
                <div className="relative p-6 rounded-xl h-full flex flex-col">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4 w-fit text-white`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{skill.title}</h3>
                  <ul className="space-y-2 text-foreground/80 flex-grow">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

