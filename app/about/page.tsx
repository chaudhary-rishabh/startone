import HeroSection from "@/components/about/HeroSection"
import ImageSection from "@/components/about/ImageSection"
import InteractiveSwitcher from "@/components/about/InteractiveSwitcher"
import EmailCTA from "@/components/about/EmailCTA"
import TestimonialCarousel from "@/components/about/TestimonialCarousel"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ImageSection />
      <TestimonialCarousel />
      <InteractiveSwitcher />
      <EmailCTA />
    </div>
  )
}
