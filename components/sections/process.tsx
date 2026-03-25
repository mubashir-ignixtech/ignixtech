"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const cardColors = [
  { bg: "#FFF0ED", icon: "#F4141F", text: "#2B2B2B" },
  { bg: "#FFF5F2", icon: "#F4141F", text: "#2B2B2B" },
  { bg: "#E0F5F5", icon: "#087E8B", text: "#2B2B2B" },
  { bg: "#F4EDFD", icon: "#A491D3", text: "#2B2B2B" },
]

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.process.badge}
          title={homeContent.process.title}
          description={homeContent.process.description}
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeContent.process.steps.map((step, index) => {
            const colors = cardColors[index % cardColors.length]
            return (
              <StaggerItem key={step.number}>
                <motion.div whileHover={{ y: -6 }}>
                  <div className="rounded-3xl p-8 h-full transition-all" style={{ backgroundColor: colors.bg }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: colors.icon }}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3" style={{ color: colors.text }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: colors.text, opacity: 0.8 }}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
