"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Blob class for animated background shapes
    class Blob {
      x: number
      y: number
      radius: number
      xSpeed: number
      ySpeed: number
      color: string
      angle: number
      angleSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 200 + 100
        this.xSpeed = Math.random() * 0.2 - 0.1
        this.ySpeed = Math.random() * 0.2 - 0.1
        this.color = this.getRandomColor()
        this.angle = 0
        this.angleSpeed = Math.random() * 0.02 - 0.01
      }

      getRandomColor() {
        const colors = [
          "rgba(0, 180, 216, 0.05)", // blue
          "rgba(0, 119, 182, 0.05)", // darker blue
          "rgba(131, 56, 236, 0.05)", // purple
          "rgba(255, 190, 11, 0.05)", // yellow
          "rgba(6, 214, 160, 0.05)", // teal
        ]
        return colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.xSpeed
        this.y += this.ySpeed
        this.angle += this.angleSpeed

        // Bounce off edges
        if (this.x < -this.radius) this.xSpeed = Math.abs(this.xSpeed)
        if (this.x > canvas.width + this.radius) this.xSpeed = -Math.abs(this.xSpeed)
        if (this.y < -this.radius) this.ySpeed = Math.abs(this.ySpeed)
        if (this.y > canvas.height + this.radius) this.ySpeed = -Math.abs(this.ySpeed)
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)

        // Create gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.radius)
        const baseColor = this.color.slice(0, -4) // Remove opacity
        gradient.addColorStop(0, baseColor + "0.15)")
        gradient.addColorStop(0.5, baseColor + "0.1)")
        gradient.addColorStop(1, baseColor + "0)")

        // Draw blob
        ctx.beginPath()

        // Create a blob shape using bezier curves
        for (let i = 0; i < 8; i++) {
          const angle = ((Math.PI * 2) / 8) * i
          const nextAngle = ((Math.PI * 2) / 8) * ((i + 1) % 8)

          const radius1 = this.radius * (0.8 + Math.sin(this.angle * 3 + i) * 0.2)
          const radius2 = this.radius * (0.8 + Math.sin(this.angle * 3 + i + 1) * 0.2)

          const x1 = Math.cos(angle) * radius1
          const y1 = Math.sin(angle) * radius1
          const x2 = Math.cos(nextAngle) * radius2
          const y2 = Math.sin(nextAngle) * radius2

          const cpX1 = Math.cos(angle + Math.PI / 16) * radius1 * 1.2
          const cpY1 = Math.sin(angle + Math.PI / 16) * radius1 * 1.2
          const cpX2 = Math.cos(nextAngle - Math.PI / 16) * radius2 * 1.2
          const cpY2 = Math.sin(nextAngle - Math.PI / 16) * radius2 * 1.2

          if (i === 0) {
            ctx.moveTo(x1, y1)
          }

          ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x2, y2)
        }

        ctx.fillStyle = gradient
        ctx.fill()
        ctx.restore()
      }
    }

    // Particle class for connecting dots
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.3 - 0.15
        this.speedY = Math.random() * 0.3 - 0.15
        this.color = "rgba(0, 180, 216, 0.7)" // blue
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create blobs
    const blobs: Blob[] = []
    const blobCount = 5

    for (let i = 0; i < blobCount; i++) {
      blobs.push(new Blob())
    }

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 15000))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update blobs
      blobs.forEach((blob) => {
        blob.update()
        blob.draw()
      })

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      connectParticles()

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = 150

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 180, 216, ${opacity * 0.2})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }} // Ensure it stays behind all content
    />
  )
}

