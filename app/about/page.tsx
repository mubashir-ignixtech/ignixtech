import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { Mission } from "@/components/about/mission"
import { Team } from "@/components/about/team"
import { Values } from "@/components/about/values"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Ignixtech's mission, vision, and the team behind our innovative digital solutions.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Team />
      <CTASection />
    </>
  )
}
