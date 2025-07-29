"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DemoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const demos = [
    {
      title: "Campaign Creation",
      description: "See how easy it is to create and launch your first campaign",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Creator Discovery",
      description: "Find the perfect creators for your brand with our advanced filters",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Performance Analytics",
      description: "Track your campaign performance with detailed analytics",
      thumbnail: "/placeholder.svg?height=300&width=500",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % demos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + demos.length) % demos.length)
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">See StartOne in action</h2>
          <p className="text-xl text-gray-600">Watch how brands are creating successful Products with StartOne</p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={demos[currentSlide].thumbnail || "/placeholder.svg"}
                alt={demos[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-4">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{demos[currentSlide].title}</h3>
              <p className="text-gray-600">{demos[currentSlide].description}</p>
            </div>
          </div>

          <Button
            onClick={prevSlide}
            variant="outline"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 bg-transparent"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 bg-transparent"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {demos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
