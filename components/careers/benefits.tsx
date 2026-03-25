"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { 
  Wallet, 
  GraduationCap, 
  Clock, 
  HeartPulse, 
  Laptop, 
  Coffee,
  Plane,
  PartyPopper
} from "lucide-react"

const benefits = [
  {
    icon: Wallet,
    title: "Competitive Salary",
    description: "Market-leading compensation packages with regular reviews.",
  },
  {
    icon: HeartPulse,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when you are most productive with flexible scheduling.",
  },
  {
    icon: Laptop,
    title: "Remote Work",
    description: "Work from anywhere with our remote-first culture.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and certifications.",
  },
  {
    icon: Coffee,
    title: "Team Events",
    description: "Regular team building activities and social events.",
  },
  {
    icon: Plane,
    title: "Paid Time Off",
    description: "Generous vacation policy to recharge and explore.",
  },
  {
    icon: PartyPopper,
    title: "Performance Bonus",
    description: "Reward for exceptional work and achievements.",
  },
]

export function Benefits() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Benefits"
          title="Perks of Working With Us"
          description="We take care of our team with comprehensive benefits designed to support your well-being and growth."
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
