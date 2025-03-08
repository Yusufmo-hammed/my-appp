"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "Application Development",
      description: "Developing and Deploying Mobile Applications for Android and iOS",
      icon: "/mobile-app.svg",
    },
    {
      title: "Web Application Development",
      description: "Designing & Developing High-performance Web Applications",
      icon: "/web-app.svg",
    },
    {
      title: "Software Consulting",
      description: "Delivering Expert Software Consulting Services for Optimal Solutions",
      icon: "/consulting.svg",
    },
    {
      title: "AI Systems Design",
      description: "AI Chatbots & Model Development and Robotics Solutions",
      icon: "/ai.svg",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#00b4d8] mb-4"
          >
            My Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#ffd700]"
          >
            Empowering Businesses with Customized Software Solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-lg bg-[#1a2c35]/50 backdrop-blur-sm hover:bg-[#1a2c35]/70 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00b4d8]/10 flex items-center justify-center">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={24}
                    height={24}
                    className="text-[#00b4d8]"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#00b4d8] mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Image
            src="/services-illustration.svg"
            alt="Services Illustration"
            width={600}
            height={400}
            className="w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  )
}

