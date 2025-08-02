"use client"

import { useEffect } from "react"

export default function CarouselNavigation() {
  useEffect(() => {
    let currentIndex = 0
    let isAnimating = false
    const totalCards = 5
    const cardWidth = 400 // Increased card width
    const gap = 32 // Gap between cards

    // Create infinite loop by duplicating cards
    function setupInfiniteLoop() {
      const container = document.getElementById("cards-container")
      if (!container) return

      // Clone first few cards and append to end
      const cards = container.children
      for (let i = 0; i < 3; i++) {
        const clone = cards[i].cloneNode(true) as HTMLElement
        clone.id = `card-clone-${i}`
        container.appendChild(clone)
      }

      // Clone last few cards and prepend to beginning
      for (let i = totalCards - 1; i >= totalCards - 3; i--) {
        const clone = cards[i].cloneNode(true) as HTMLElement
        clone.id = `card-clone-back-${i}`
        container.insertBefore(clone, container.firstChild)
      }

      // Set initial position to show first real card in center
      const initialOffset = -(3 * (cardWidth + gap)) // Offset for prepended clones
      container.style.transform = `translateX(${initialOffset}px)`
      currentIndex = 0
    }

    function updateCarousel(instant = false) {
      if (isAnimating && !instant) return

      const container = document.getElementById("cards-container")
      if (!container) return

      if (!instant) isAnimating = true

      // Calculate position to center the current card
      const baseOffset = -(3 * (cardWidth + gap)) // Account for prepended clones
      const currentOffset = -(currentIndex * (cardWidth + gap))
      const totalOffset = baseOffset + currentOffset

      if (instant) {
        container.style.transition = "none"
        container.style.transform = `translateX(${totalOffset}px)`
        // Force reflow
        container.offsetHeight
        container.style.transition = "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
      } else {
        container.style.transform = `translateX(${totalOffset}px)`
      }

      // Update dots (only show 5 dots for original cards)
      for (let i = 0; i < totalCards; i++) {
        const dot = document.getElementById(`dot-${i}`)
        if (dot) {
          const actualIndex = ((currentIndex % totalCards) + totalCards) % totalCards
          if (i === actualIndex) {
            dot.className =
              "w-3 h-3 rounded-full bg-[#14b8a6] transition-all duration-300 cursor-pointer transform scale-110"
          } else {
            dot.className =
              "w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 cursor-pointer"
          }
        }
      }

      if (!instant) {
        setTimeout(() => {
          isAnimating = false
          handleInfiniteLoop()
        }, 600)
      }
    }

    function handleInfiniteLoop() {
      const container = document.getElementById("cards-container")
      if (!container) return

      // If we've scrolled past the end, jump to beginning
      if (currentIndex >= totalCards) {
        currentIndex = 0
        updateCarousel(true)
      }
      // If we've scrolled before the beginning, jump to end
      else if (currentIndex < 0) {
        currentIndex = totalCards - 1
        updateCarousel(true)
      }
    }

    function nextCard() {
      if (isAnimating) return
      currentIndex++
      updateCarousel()
    }

    function prevCard() {
      if (isAnimating) return
      currentIndex--
      updateCarousel()
    }

    function goToCard(index: number) {
      if (isAnimating) return
      currentIndex = index
      updateCarousel()
    }

    // Event listeners
    const nextBtn = document.getElementById("nextBtn")
    const prevBtn = document.getElementById("prevBtn")

    if (nextBtn) {
      nextBtn.addEventListener("click", nextCard)
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", prevCard)
    }

    // Dot navigation
    for (let i = 0; i < totalCards; i++) {
      const dot = document.getElementById(`dot-${i}`)
      if (dot) {
        dot.addEventListener("click", () => goToCard(i))
      }
    }

    // Keyboard navigation
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        prevCard()
      } else if (event.key === "ArrowRight") {
        nextCard()
      }
    }

    document.addEventListener("keydown", handleKeyPress)

    // Initialize
    setTimeout(() => {
      setupInfiniteLoop()
      updateCarousel(true)
    }, 100)

    // Cleanup
    return () => {
      if (nextBtn) {
        nextBtn.removeEventListener("click", nextCard)
      }
      if (prevBtn) {
        prevBtn.removeEventListener("click", prevCard)
      }
      for (let i = 0; i < totalCards; i++) {
        const dot = document.getElementById(`dot-${i}`)
        if (dot) {
          dot.removeEventListener("click", () => goToCard(i))
        }
      }
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  return null
}
