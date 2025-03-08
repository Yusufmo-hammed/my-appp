"use client"

import { useState, useEffect, useRef } from "react"

interface TypingAnimationProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterPhrase?: number
}

export default function TypingAnimation({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterPhrase = 1500,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  // Use a ref to track if we're pausing after completing a phrase
  const isPausingRef = useRef(false)

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  // Typing animation effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex]

    // If we're pausing, don't do anything
    if (isPausingRef.current) return

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.substring(0, displayText.length + 1))
          } else {
            // Finished typing the current phrase
            isPausingRef.current = true
            setTimeout(() => {
              setIsDeleting(true)
              isPausingRef.current = false
            }, delayAfterPhrase)
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1))
          } else {
            // Finished deleting, move to next phrase
            setIsDeleting(false)
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, delayAfterPhrase])

  return (
    <span className="inline-block">
      {displayText}
      <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>|</span>
    </span>
  )
}

