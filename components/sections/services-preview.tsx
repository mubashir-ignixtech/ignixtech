"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Code, Smartphone, Shield, Server, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem, GlowCard } from "@/components/motion"
import { homeContent } from "@/lib/constants"

export function ServicesPreview() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.servicesPreview.badge}
          title={homeContent.servicesPreview.title}
          description={homeContent.servicesPreview.description}
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {homeContent.servicesPreview.services.map((service, index) => (
            <StaggerItem key={service.title}>
              <GlowCard className="h-full flex flex-col">
                <div className="p-7 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary/90 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
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
