import { HeroSection } from "@/components/sections/hero"
import { ServicesPreview } from "@/components/sections/services-preview"
import { AboutPreview } from "@/components/sections/about-preview"
import { ProcessSection } from "@/components/sections/process"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { TechStack } from "@/components/sections/tech-stack"
import { CTASection } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <ProcessSection />
      <WhyChooseUs />
      <TechStack />
      <CTASection />
    </>
  )
}
