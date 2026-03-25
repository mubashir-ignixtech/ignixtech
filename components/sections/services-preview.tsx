"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Code, Smartphone, Shield, Server, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem, GlowCard } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const serviceColors = [
  { bg: "bg-gradient-to-br from-cyan-50 to-blue-50", icon: "bg-cyan-100 text-cyan-600", badge: "bg-cyan-100 text-cyan-700", text: "text-cyan-900" },
  { bg: "bg-gradient-to-br from-emerald-50 to-teal-50", icon: "bg-emerald-100 text-emerald-600", badge: "bg-emerald-100 text-emerald-700", text: "text-emerald-900" },
  { bg: "bg-gradient-to-br from-purple-50 to-pink-50", icon: "bg-purple-100 text-purple-600", badge: "bg-purple-100 text-purple-700", text: "text-purple-900" },
  { bg: "bg-gradient-to-br from-amber-50 to-orange-50", icon: "bg-amber-100 text-amber-600", badge: "bg-amber-100 text-amber-700", text: "text-amber-900" },
  { bg: "bg-gradient-to-br from-blue-50 to-indigo-50", icon: "bg-blue-100 text-blue-600", badge: "bg-blue-100 text-blue-700", text: "text-blue-900" },
  { bg: "bg-gradient-to-br from-rose-50 to-red-50", icon: "bg-rose-100 text-rose-600", badge: "bg-rose-100 text-rose-700", text: "text-rose-900" },
]

export function ServicesPreview() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.servicesPreview.badge}
          title={homeContent.servicesPreview.title}
          description={homeContent.servicesPreview.description}
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {homeContent.servicesPreview.services.map((service, index) => {
            const colors = serviceColors[index % serviceColors.length]
            return (
              <StaggerItem key={service.title}>
                <div className={`${colors.bg} rounded-3xl border-2 border-white/50 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden`}>
                  <div className="p-8 flex flex-col h-full">
                    <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-5`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
                      {service.title}
                    </h3>
                    
                    <p className={`${colors.text} opacity-70 text-sm mb-6 leading-relaxed flex-1`}>
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className={`text-xs px-3 py-1.5 rounded-lg ${colors.badge} font-medium`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            <Link href="/services">
              See All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
