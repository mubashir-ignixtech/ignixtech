"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { aboutContent } from "@/lib/constants"

export function Values() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={aboutContent.values.badge}
          title={aboutContent.values.title}
          description={aboutContent.values.description}
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {aboutContent.values.list.map((value, index) => {
            const cardColors = [
              "bg-[#fff4d1] dark:bg-amber-900/20",
              "bg-[#dcfce7] dark:bg-emerald-900/20",
              "bg-[#f8f9fa] dark:bg-slate-800/40"
            ]
            const colorClass = cardColors[index % cardColors.length]
            
            return (
              <StaggerItem key={value.title}>
                <div className={`text-center p-8 rounded-2xl ${colorClass} border border-border/50 hover:border-primary/50 transition-colors h-full shadow-sm`}>
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
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
