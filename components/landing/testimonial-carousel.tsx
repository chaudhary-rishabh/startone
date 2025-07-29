import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

interface Testimonial {
  testimonialText: string
  name: string
  companyLogo: string // URL for the company logo
  rating: number
}

const testimonials: Testimonial[] = [
  {
    testimonialText:
      "Using StartOne for code generation has been a game-changer for our development workflow. The components are clean, well-structured, and integrate seamlessly with our Next.js projects. Highly recommended!",
    name: "Blake Star",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 5,
  },
  {
    testimonialText:
      "The speed at which StartOne generates production-ready code is incredible. It saved us countless hours on boilerplate and allowed us to focus on core features. A must-have tool for any modern web team.",
    name: "David Gilmore",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 5,
  },
  {
    testimonialText:
      "We were able to prototype new features in record time thanks to StartOne. The generated code is easy to understand and customize, making it a powerful asset for rapid development.",
    name: "Gerard White",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 5,
  },
  {
    testimonialText:
      "StartOne's output is consistently high quality. It adheres to best practices and integrates perfectly with our existing shadcn/ui setup. Our team loves it!",
    name: "Alice Johnson",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 4,
  },
  {
    testimonialText:
      "The ability to quickly generate complex components with minimal effort is what sets StartOne apart. It's like having an extra developer on the team, constantly churning out perfect code.",
    name: "Bob Williams",
    companyLogo: "/placeholder.svg?height=24&width=24",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  return (
    <div className="flex justify-center py-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl px-4"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
              <div className="p-1 h-full">
                <Card className="overflow-hidden rounded-3xl shadow-lg flex flex-col h-full">
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">{testimonial.testimonialText}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200">
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
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
      </Carousel>
    </div>
  )
}
