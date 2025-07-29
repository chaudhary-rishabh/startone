"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Features } from "@/components/landing/features"

// Dummy data for features
const features = [
  {
    id: 1,
    type: "text",
    quote:
      "I have been using Tinyflow for over a year now and I love it! I can't imagine life without it, it's so easy to use, and the customer service is great.",
    author: "Imtiaz Ali",
    title: "VP, Design, Apple Inc",
    avatar: "/placeholder.svg?height=40&width=40",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  }as const,
  {
    id: 2,
    type: "image",
    quote:
      '"wiza allows us to export a search into a usable CSV which saves us a lot of time when setting up a new Sales email campaign"',
    author: "Imtiaz Ali",
    title: "VP, Design, Apple Inc",
    image: "/placeholder.svg?height=400&width=600",
  }as const,
  {
    id: 3,
    type: "text",
    quote:
      "Tinyflow has revolutionized our workflow. The intuitive interface and powerful features have made our team incredibly efficient. Highly recommend!",
    author: "Jane Doe",
    title: "CEO, Tech Solutions",
    avatar: "/placeholder.svg?height=40&width=40",
    bgColor: "bg-white",
    textColor: "text-gray-800",
  }as const,
  {
    id: 4,
    type: "text",
    quote:
      "The customer support is outstanding! They are always quick to respond and incredibly helpful. It's a pleasure working with Tinyflow.",
    author: "John Smith",
    title: "Product Manager, Global Corp",
    avatar: "/placeholder.svg?height=40&width=40",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  }as const,
  {
    id: 5,
    type: "text",
    quote:
      "An absolute game-changer for our business. The features are exactly what we needed, and the performance is top-notch.",
    author: "Emily White",
    title: "Marketing Director, Innovate Co.",
    avatar: "/placeholder.svg?height=40&width=40",
    bgColor: "bg-lime-100",
    textColor: "text-lime-800",
  }as const,
]

// Constants for card animation properties
const CARD_OFFSET_X = 50 // Horizontal offset for stacked cards (increased for more spread)
const CARD_OFFSET_Y = 25 // Vertical offset for stacked cards (increased for more spread)
const CARD_SCALE_DECREMENT = 0.08
const CARD_ROTATION_DEGREES = 10 // Increased for more tilt
const DRAG_THRESHOLD = 50 // Pixels to drag to trigger slide change
const VISIBLE_STACK_COUNT = 3 // How many cards are visibly stacked behind the active one

export default function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalCards = features.length

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  // Function to get animation properties for each card based on its position relative to the current index
  const getCardProps = (index: number) => {
    // Calculate the position of the card relative to the current index in a circular manner
    // 0 for current, 1 for next, ..., totalCards-1 for previous (conceptually)
    const relativeIndex = (index - currentIndex + totalCards) % totalCards

    let x = 0
    let y = 0
    let scale = 1
    let rotate = 0
    let zIndex = 0
    let opacity = 1

    if (relativeIndex === 0) {
      // Active card
      x = 0
      y = 0
      scale = 1
      rotate = 0
      zIndex = totalCards // Highest z-index to be on top
      opacity = 1
    } else if (relativeIndex > 0 && relativeIndex <= VISIBLE_STACK_COUNT) {
      // Cards to the right, visibly stacked behind
      x = relativeIndex * CARD_OFFSET_X
      y = relativeIndex * CARD_OFFSET_Y
      scale = 1 - relativeIndex * CARD_SCALE_DECREMENT
      rotate = -relativeIndex * CARD_ROTATION_DEGREES // Always tilt left
      zIndex = totalCards - relativeIndex
      opacity = 1
    } else {
      // Cards that are not the current one and not in the visible stack
      // These should be hidden off-screen to the left, ready to loop back to the right.
      x = -CARD_OFFSET_X * (VISIBLE_STACK_COUNT + 2) // Position far left, out of view
      y = 0
      scale = 0.7 // Smaller, consistent with hidden state
      rotate = 0 // No rotation when hidden
      zIndex = 0 // Lowest z-index when hidden
      opacity = 0 // Hidden
    }

    scale = Math.max(0.7, scale) // Ensure scale doesn't go too small

    return {
      x,
      y,
      scale,
      rotate,
      zIndex,
      opacity,
    }
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-50 py-12">
      {/* Green background shape */}
      <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-t-[100px] bg-purple-200 md:rounded-t-[200px]" />

      <h2 className="relative z-20 mb-12 text-4xl font-bold text-gray-800 md:text-5xl">StartOne Features</h2>

      <div
        ref={containerRef}
        className="relative flex h-[300px] w-full max-w-md items-center justify-center md:h-[350px] md:max-w-lg lg:max-w-xl xl:max-w-2xl"
      >
        {features.map((feature, i) => {
          const { x, y, scale, rotate, zIndex, opacity } = getCardProps(i)
          return (
            <motion.div
              key={feature.id}
              className="absolute h-[200px] w-[calc(100%-40px)] origin-center md:h-[240px] md:max-w-[380px] lg:h-[260px] lg:max-w-[420px]"
              style={{
                x,
                y,
                scale,
                rotate,
                zIndex,
                opacity,
                // Center the cards within the parent container
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag={i === currentIndex ? "x" : false} // Only allow drag on the active card
              dragConstraints={{ left: 0, right: 0 }} // Constrain actual movement, but allow drag gesture
              onDragEnd={(event:any, info:any) => {
                if (i === currentIndex) {
                  if (info.offset.x > DRAG_THRESHOLD) {
                    handlePrev()
                  } else if (info.offset.x < -DRAG_THRESHOLD) {
                    handleNext()
                  }
                }
              }}
            >
              <Features {...feature} />
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Arrows and Pagination Dots */}
      <div className="relative z-20 mt-8 flex items-center justify-center space-x-4">
        <button
          onClick={handlePrev}
          className="rounded-full bg-white p-3 shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>

        <div className="flex space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-colors",
                currentIndex === index ? "bg-purple-500" : "bg-gray-300 hover:bg-gray-400",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="rounded-full bg-white p-3 shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </div>
  )
}
