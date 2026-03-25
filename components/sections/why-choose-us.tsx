"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const benefitColors = [
  { bg: "#FFEBEA", icon: "#F4141F", text: "#2B2B2B" },
  { bg: "#E0F5F5", icon: "#087E8B", text: "#2B2B2B" },
  { bg: "#F4EDFD", icon: "#A491D3", text: "#2B2B2B" },
  { bg: "#FFEBEA", icon: "#F4141F", text: "#2B2B2B" },
  { bg: "#E0F5F5", icon: "#087E8B", text: "#2B2B2B" },
  { bg: "#F4EDFD", icon: "#A491D3", text: "#2B2B2B" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.whyChooseUs.badge}
          title={homeContent.whyChooseUs.title}
          description={homeContent.whyChooseUs.description}
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeContent.whyChooseUs.benefits.map((benefit, index) => {
            const colors = benefitColors[index % benefitColors.length]
            return (
              <StaggerItem key={benefit.title}>
                <div className="rounded-3xl p-7 transition-all" style={{ backgroundColor: colors.bg }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: colors.icon }}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: colors.text }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: colors.text, opacity: 0.8 }}>
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
