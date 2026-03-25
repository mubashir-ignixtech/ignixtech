"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const cardColors = [
  {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: "bg-yellow-100",
    text: "text-yellow-700",
    number: "bg-yellow-400 text-yellow-900"
  },
  {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "bg-emerald-100",
    text: "text-emerald-700",
    number: "bg-emerald-400 text-emerald-900"
  },
  {
    bg: "bg-violet-50",
    border: "border-violet-200",
    icon: "bg-violet-100",
    text: "text-violet-700",
    number: "bg-violet-400 text-violet-900"
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.process.badge}
          title={homeContent.process.title}
          description={homeContent.process.description}
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {homeContent.process.steps.map((step, index) => {
            const colors = cardColors[index % cardColors.length]
            return (
              <StaggerItem key={step.number}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  {/* Connector Line */}
                  {index < homeContent.process.steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-1 bg-gradient-to-r from-cyan-400/50 via-emerald-400/50 to-transparent" />
                  )}
                  
                  <div className={`relative ${colors.bg} rounded-3xl border-2 ${colors.border} p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300`}>
                    {/* Step Number */}
                    <div className={`absolute -top-5 left-8 px-4 py-1.5 ${colors.number} text-sm font-bold rounded-full shadow-md`}>
                      Step {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${colors.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <step.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
                      {step.title}
                    </h3>
                    <p className={`${colors.text} opacity-75 leading-relaxed`}>
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
