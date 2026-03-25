"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { SectionHeader } from "@/components/section-header"
import { Sparkles, Users, Rocket, Heart } from "lucide-react"

const culturePoints = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We encourage creative thinking and embrace new ideas. Every team member has the opportunity to contribute to groundbreaking projects.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work alongside talented professionals in a supportive, team-oriented culture where knowledge sharing is valued.",
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "We invest in your professional development with training, mentorship, and clear career progression paths.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and a culture that respects your personal time and well-being.",
  },
]

export function Culture() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Culture"
          title="Why Join IgnixTech?"
          description="More than just a workplace - we are a community of innovators, creators, and problem-solvers."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {culturePoints.map((point, index) => (
            <FadeIn key={point.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex gap-4 p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
