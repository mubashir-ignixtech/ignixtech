"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const benefitColors = [
  { bg: "bg-blue-100", icon: "text-blue-700", text: "text-gray-800" },
  { bg: "bg-teal-100", icon: "text-teal-700", text: "text-gray-800" },
  { bg: "bg-emerald-100", icon: "text-emerald-700", text: "text-gray-800" },
  { bg: "bg-purple-100", icon: "text-purple-700", text: "text-gray-800" },
  { bg: "bg-violet-100", icon: "text-violet-700", text: "text-gray-800" },
  { bg: "bg-pink-100", icon: "text-pink-700", text: "text-gray-800" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className={`${colors.bg} rounded-2xl p-7`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h3 className={`text-base font-semibold ${colors.text} mb-2`}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
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
