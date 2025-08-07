import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

interface cta {
  ctaText: string
  name: string
  companyLogo: string // URL for the company logo
  rating: number
}

const info: cta[] = [
  {
    ctaText:
      "Using StartOne for code generation has been a game-changer for our development workflow. The components are clean, well-structured, and integrate seamlessly with our Next.js projects. Highly recommended!",
    name: "Blake Star",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 5,
  },
  {
    ctaText:
      "The speed at which StartOne generates production-ready code is incredible. It saved us countless hours on boilerplate and allowed us to focus on core features. A must-have tool for any modern web team.",
    name: "David Gilmore",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 5,
  },
  {
    ctaText:
      "We were able to prototype new features in record time thanks to StartOne. The generated code is easy to understand and customize, making it a powerful asset for rapid development.",
    name: "Gerard White",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 5,
  },
  {
    ctaText:
      "StartOne's output is consistently high quality. It adheres to best practices and integrates perfectly with our existing shadcn/ui setup. Our team loves it!",
    name: "Alice Johnson",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 4,
  },
  {
    ctaText:
      "The ability to quickly generate complex components with minimal effort is what sets StartOne apart. It's like having an extra developer on the team, constantly churning out perfect code.",
    name: "Bob Williams",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 5,
  },
]

export function CTASection() {
  return (
    <div className="flex justify-center py-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl px-4"
      >
        <CarouselContent className="-ml-4">
          {info.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 rounded-3xl basis-full sm:basis-1/2 md:basis-1/3">
              <div className="p-1 h-full rounded-3xl">
                <Card className="relative overflow-hidden rounded-3xl shadow-lg flex flex-col h-full bg-gradient-to-br from-blue-300 via-gray-100 to-purple-400">
                  {/* Grainy Texture */}
                  <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch' seed='7'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      mixBlendMode: "color-burn",
                    }}
                  />

                  {/* Shimmer Layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer pointer-events-none" />

                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="leading-relaxed font-bold text-gray-700 mb-4">{testimonial.ctaText}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto p-3 rounded-2xl shadow-xl bg-white">
                      <Image
                        src={testimonial.companyLogo || "/placeholder.svg"}
                        alt={`${testimonial.name}'s company logo`}
                        width={24}
                        height={24}
                        className="rounded-full object-cover"
                      />
                      <span className="font-semibold text-gray-900">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="text-center mt-5">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg flex items-center space-x-2 mx-auto">
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
    </div>
  )
}
