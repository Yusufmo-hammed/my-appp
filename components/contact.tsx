"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Reveal from "./reveal-animation"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-20 relative bg-background-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-bold mb-4 text-primary">Get In Touch</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-1 bg-primary mx-auto rounded-full w-24"></div>
          </Reveal>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center mr-4 border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-1">Email</h4>
                    <p className="text-foreground/80">yesufmt@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center mr-4 border border-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-1">Phone</h4>
                    <p className="text-foreground/80">+251 91 337 3481</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center mr-4 border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-1">Location</h4>
                    <p className="text-foreground/80">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-foreground mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/yusufmohammednur"
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20 hover:from-primary/30 hover:to-primary/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yusufmohammednur"
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20 hover:from-primary/30 hover:to-primary/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yusufmohammednur"
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20 hover:from-primary/30 hover:to-primary/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yusufmohammednur"
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20 hover:from-primary/30 hover:to-primary/20 transition-colors"
                  >
                    <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative p-6 md:p-8 rounded-xl overflow-hidden card-hover">
              <div className="absolute inset-0 bg-background rounded-xl border border-primary/20 shadow-lg"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background-lighter border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="Nebil Mohammed"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background-lighter border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="nebil@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background-lighter border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background-lighter border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium hover:from-primary/90 hover:to-primary/70 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-primary/25 flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

