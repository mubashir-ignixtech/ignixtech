"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Code, Smartphone, Shield, Server, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem, GlowCard } from "@/components/motion"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centric design solutions with wireframing, prototyping, visual design, and usability testing.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software and web application development tailored to your business needs.",
    features: ["Custom Software", "Web Apps", "API Integration", "Scalable Solutions"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for Android and iOS platforms.",
    features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"],
  },
  {
    icon: Bug,
    title: "Quality Assurance",
    description: "Comprehensive testing services including manual, functional, automation, and performance testing.",
    features: ["Manual Testing", "Automation", "Performance", "Security Testing"],
  },
  {
    icon: Server,
    title: "DevOps",
    description: "Infrastructure as code, CI/CD pipeline implementation, and monitoring solutions.",
    features: ["CI/CD Pipelines", "Cloud Infrastructure", "Monitoring", "Deployment Automation"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Penetration testing, red teaming, and endpoint security to protect your digital assets.",
    features: ["Penetration Testing", "Red Teaming", "Endpoint Security", "Compliance"],
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Services"
          title="Unleash Your Potential With Our Tailored Solutions"
          description="Comprehensive tech solutions for your every need, from design to deployment and beyond."
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <StaggerItem key={service.title} delay={index * 0.05}>
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
