import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import SoftwareExpertise from "@/components/software-expertise"
import Experience from "@/components/experience"
import Portfolio from "@/components/portfolio"
import Education from "@/components/education"
import Contact from "@/components/contact"
import BackgroundShapes from "@/components/background-shapes"
import FloatingNav from "@/components/floating-nav"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <BackgroundShapes />
      <Hero />
      <About />
      <Skills />
      <SoftwareExpertise />
      <Experience />
      <Portfolio />
      <Education />
      <Contact />
      <FloatingNav />
      <ThemeToggle />
    </main>
  )
}

