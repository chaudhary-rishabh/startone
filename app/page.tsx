import Header from "@/components/landing/header"
import HeroSection from "@/components/landing/hero-section"
import CTASection from "@/components/landing/cta-section"
import DemoSlider from "@/components/landing/demo-slider"
import ContentAbout from "@/components/landing/content-about"
import ContentAbout2 from "@/components/landing/content-about-2"
import FAQ from "@/components/landing/faq"
import Testimonials from "@/components/landing/testimonials"
import EmailCTA from "@/components/landing/email-cta"
import GetConnectedSection from "@/components/landing/get-connected-section"
import Footer from "@/components/landing/footer"
import { TestimonialCarousel } from "@/components/landing/testimonial-carousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CTASection />
      <DemoSlider />
      <ContentAbout />
      <ContentAbout2 />
      <GetConnectedSection />
      <TestimonialCarousel />
      <FAQ />
      <EmailCTA />
      <Footer />
    </div>
  )
}
