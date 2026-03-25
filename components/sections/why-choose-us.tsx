"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-card/50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.whyChooseUs.badge}
          title={homeContent.whyChooseUs.title}
          description={homeContent.whyChooseUs.description}
        />

        <StaggerContainer className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {homeContent.whyChooseUs.benefits.map((benefit, index) => (
            <StaggerItem key={benefit.title}>
              <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-background/60 transition-all duration-300 h-full">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className="h-0.5 w-0 group-hover:w-8 bg-primary transition-all duration-300" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
