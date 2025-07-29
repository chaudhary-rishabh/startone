import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow",
      content:
        "StartOne transformed our influencer marketing strategy. We saw a 300% increase in engagement and 60% lower costs compared to traditional advertising.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Brand Manager",
      company: "StyleCo",
      content:
        "The quality of creators on StartOne is exceptional. Every collaboration has exceeded our expectations and delivered authentic content that resonates with our audience.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Rodriguez",
      role: "CMO",
      company: "FitLife",
      content:
        "We've tried many influencer platforms, but StartOne stands out. The analytics are comprehensive, and the ROI is unmatched. It's become our go-to platform.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What our clients say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from brands who've seen real results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="mb-6">
                <Quote className="h-8 w-8 text-gray-300 mb-4" />
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
