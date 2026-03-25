"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const cardColors = [
  { bg: "bg-yellow-100", icon: "text-yellow-700", text: "text-gray-800" },
  { bg: "bg-teal-100", icon: "text-teal-700", text: "text-gray-800" },
  { bg: "bg-violet-100", icon: "text-violet-700", text: "text-gray-800" },
  { bg: "bg-blue-100", icon: "text-blue-700", text: "text-gray-800" },
]

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <motion.div whileHover={{ y: -4 }}>
                  <div className={`${colors.bg} rounded-2xl p-8 h-full`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5`}>
                      <step.icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    
                    <h3 className={`text-lg font-semibold ${colors.text} mb-3`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
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
