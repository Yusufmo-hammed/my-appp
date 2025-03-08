"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Reveal from "./reveal-animation"; // Adjust the import path if needed

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-20 bg-background-lighter">
      <div
        ref={ref}
        className="container mx-auto px-4 text-center"
      >
        {/* Heading */}
        <Reveal>
          <h2 className="font-bold mb-2 text-primary text-2xl">
            Get In Touch
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-foreground/80 mb-8">
            Let’s chat about your project and bring you real services
          </p>
        </Reveal>

        {/* Center Icons (placeholders W, T, G) */}
        <Reveal delay={0.2}>
          <div className="flex justify-center space-x-4 mb-8">
            {/* Example: WhatsApp */}
            <a
              href="https://wa.me/251913373481"
              className="w-12 h-12 bg-background rounded-full flex items-center justify-center
                         hover:bg-primary transition-colors border border-primary/20"
            >
              <span className="text-primary font-bold">W</span>
            </a>
            {/* Example: Telegram */}
            <a
              href="https://t.me/..."
              className="w-12 h-12 bg-background rounded-full flex items-center justify-center
                         hover:bg-primary transition-colors border border-primary/20"
            >
              <span className="text-primary font-bold">T</span>
            </a>
            {/* Example: Gmail */}
            <a
              href="mailto:yesufmt@gmail.com"
              className="w-12 h-12 bg-background rounded-full flex items-center justify-center
                         hover:bg-primary transition-colors border border-primary/20"
            >
              <span className="text-primary font-bold">G</span>
            </a>
          </div>
        </Reveal>

        {/* Contact Info in three columns */}
        <Reveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-foreground font-semibold mb-1">Location</h3>
              <p className="text-foreground/80">Addis Ababa, Ethiopia</p>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-1">Phone</h3>
              <p className="text-foreground/80">+251 91 337 3481</p>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-1">Email</h3>
              <p className="text-foreground/80">yesufmt@gmail.com</p>
            </div>
          </div>
        </Reveal>

        {/* Footer */}
        <Reveal delay={0.4}>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} All rights reserved | Yusuf Mohammed Nur
          </p>
        </Reveal>
      </div>
    </section>
  );
}
