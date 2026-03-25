import { Metadata } from "next"
import { CareersHero } from "@/components/careers/careers-hero"
import { Culture } from "@/components/careers/culture"
import { Benefits } from "@/components/careers/benefits"
import { JobListings } from "@/components/careers/job-listings"
import { CTASection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join our team of innovators. Explore exciting career opportunities at IgnixTech and be part of something extraordinary.",
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <Culture />
      <Benefits />
      <JobListings />
      <CTASection />
    </>
  )
}
