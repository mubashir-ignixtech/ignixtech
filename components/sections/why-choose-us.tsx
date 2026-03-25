"use client"

import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const benefitColors = [
  { bg: "bg-blue-50", icon: "bg-blue-100 text-blue-600", text: "text-blue-900", bar: "bg-blue-400" },
  { bg: "bg-cyan-50", icon: "bg-cyan-100 text-cyan-600", text: "text-cyan-900", bar: "bg-cyan-400" },
  { bg: "bg-emerald-50", icon: "bg-emerald-100 text-emerald-600", text: "text-emerald-900", bar: "bg-emerald-400" },
  { bg: "bg-purple-50", icon: "bg-purple-100 text-purple-600", text: "text-purple-900", bar: "bg-purple-400" },
  { bg: "bg-violet-50", icon: "bg-violet-100 text-violet-600", text: "text-violet-900", bar: "bg-violet-400" },
  { bg: "bg-pink-50", icon: "bg-pink-100 text-pink-600", text: "text-pink-900", bar: "bg-pink-400" },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.whyChooseUs.badge}
          title={homeContent.whyChooseUs.title}
          description={homeContent.whyChooseUs.description}
        />

        <StaggerContainer className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {homeContent.whyChooseUs.benefits.map((benefit, index) => {
            const colors = benefitColors[index % benefitColors.length]
            return (
              <StaggerItem key={benefit.title}>
                <div className={`group flex flex-col gap-4 p-7 rounded-3xl ${colors.bg} border-2 border-white/60 hover:shadow-xl transition-all duration-300 h-full`}>
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <benefit.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold ${colors.text} mb-2`}>
                      {benefit.title}
                    </h3>
                    <p className={`${colors.text} opacity-75 text-sm leading-relaxed`}>
                      {benefit.description}
                    </p>
                  </div>
                  <div className={`h-1 w-0 group-hover:w-8 ${colors.bar} transition-all duration-300 rounded-full`} />
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
