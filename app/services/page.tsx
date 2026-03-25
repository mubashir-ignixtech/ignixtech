import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { TechStack } from "@/components/sections/tech-stack"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive range of digital services including UI/UX Design, Software Development, Mobile Apps, DevOps, and Cybersecurity.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <TechStack />
      <CTASection />
    </>
  )
}
