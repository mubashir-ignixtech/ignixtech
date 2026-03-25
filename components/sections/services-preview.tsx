"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const serviceColors = [
  { bg: "#FFF0ED", icon: "#F4141F", text: "#2B2B2B" },
  { bg: "#FFF5F2", icon: "#F4141F", text: "#2B2B2B" },
  { bg: "#E0F5F5", icon: "#087E8B", text: "#2B2B2B" },
  { bg: "#FFF0ED", icon: "#F4141F", text: "#2B2B2B" },
  { bg: "#F4EDFD", icon: "#A491D3", text: "#2B2B2B" },
  { bg: "#FFF5F2", icon: "#F4141F", text: "#2B2B2B" },
]

export function ServicesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <motion.div whileHover={{ y: -6 }}>
                  <div className="rounded-3xl p-8 h-full transition-all" style={{ backgroundColor: colors.bg }}>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: colors.icon }}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3" style={{ color: colors.text }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: colors.text, opacity: 0.8 }}>
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 2).map((feature) => (
                        <span key={feature} className="text-xs px-2 py-1 rounded font-medium" style={{ backgroundColor: `${colors.icon}20`, color: colors.icon }}>
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
          <Button asChild size="lg" style={{ backgroundColor: "#F4141F" }} className="hover:opacity-90 text-white">
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
