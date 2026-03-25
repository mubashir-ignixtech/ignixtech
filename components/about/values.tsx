"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { Lightbulb, Users, Shield, Zap, Globe, Award } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in working closely with our clients, treating their goals as our own.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honesty and transparency are at the core of all our business relationships.",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "We embrace diversity and think globally while acting locally for our clients.",
  },
  {
    icon: Award,
    title: "Client Success",
    description: "Our success is measured by the success of our clients and the impact we create together.",
  },
]

export function Values() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Values"
          title="What Drives Us"
          description="Our core values shape our culture and guide our approach to every project."
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
