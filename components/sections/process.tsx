"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.process.badge}
          title={homeContent.process.title}
          description={homeContent.process.description}
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {homeContent.process.steps.map((step, index) => {
            const cardColors = [
              "bg-[#fff4d1] dark:bg-amber-900/20",
              "bg-[#dcfce7] dark:bg-emerald-900/20",
              "bg-[oklch(0.97_0_0)] dark:bg-slate-800/40"
            ]
            const colorClass = cardColors[index % cardColors.length]
            
            return (
              <StaggerItem key={step.number}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative group h-full"
                >
                  {/* Connector Line */}
                  {index < homeContent.process.steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  
                  <div className={`relative ${colorClass} rounded-2xl border border-border/50 shadow-sm p-8 h-full transition-colors`}>
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8 px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full shadow-md">
                      Step {step.number}
                    </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
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
