"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { careersContent } from "@/lib/constants"

export function Benefits() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={careersContent.benefits.badge}
          title={careersContent.benefits.title}
          description={careersContent.benefits.description}
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {careersContent.benefits.list.map((benefit, index) => {
            const cardColors = [
              "bg-[#fff4d1] dark:bg-amber-900/20",
              "bg-[#dcfce7] dark:bg-emerald-900/20",
              "bg-[#f8f9fa] dark:bg-slate-800/40"
            ]
            const colorClass = cardColors[index % cardColors.length]
            
            return (
            <StaggerItem key={benefit.title}>
              <div className={`p-6 rounded-xl ${colorClass} border border-border/50 hover:border-primary/50 transition-colors text-center shadow-sm`}>
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
          )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
} 
