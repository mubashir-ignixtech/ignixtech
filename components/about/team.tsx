"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { Linkedin, Twitter } from "lucide-react"
import { aboutContent } from "@/lib/constants"

export function Team() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={aboutContent.team.badge}
          title={aboutContent.team.title}
          description={aboutContent.team.description}
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 auto-rows-fr">
          {aboutContent.team.members.map((member) => (
            <StaggerItem key={member.name}>
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.initials}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary mt-1">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-3 mt-4">
                  <a href={member.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter size={18} />
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
