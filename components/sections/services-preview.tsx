"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const serviceColors = [
  { bg: "bg-yellow-100", icon: "text-yellow-700", text: "text-gray-800" },
  { bg: "bg-teal-100", icon: "text-teal-700", text: "text-gray-800" },
  { bg: "bg-gray-200", icon: "text-gray-700", text: "text-gray-800" },
  { bg: "bg-blue-100", icon: "text-blue-700", text: "text-gray-800" },
  { bg: "bg-green-100", icon: "text-green-700", text: "text-gray-800" },
  { bg: "bg-purple-100", icon: "text-purple-700", text: "text-gray-800" },
]

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.servicesPreview.badge}
          title={homeContent.servicesPreview.title}
          description={homeContent.servicesPreview.description}
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeContent.servicesPreview.services.map((service, index) => {
            const colors = serviceColors[index % serviceColors.length]
            return (
              <StaggerItem key={service.title}>
                <motion.div whileHover={{ y: -4 }}>
                  <div className={`${colors.bg} rounded-2xl p-8 h-full`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5`}>
                      <service.icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    
                    <h3 className={`text-lg font-semibold ${colors.text} mb-3`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature) => (
                        <span key={feature} className="text-xs px-2 py-1 bg-white/50 text-gray-700 rounded font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
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
