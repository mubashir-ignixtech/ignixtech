"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { StaggerContainer, StaggerItem } from "@/components/motion"
import { Search, Lightbulb, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Schedule Consultation",
    description: "Discuss your needs with our expert team today and get started on your digital transformation journey.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Tailored Strategy",
    description: "Receive a customized plan designed for success, aligned with your business goals and industry requirements.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Seamless Execution",
    description: "Our team delivers high-quality solutions on time, ensuring smooth deployment and ongoing support.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Process"
          title="How to Get Started"
          description="Trusted by industry leaders - a simple, proven process designed to deliver results."
        />

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="relative bg-card rounded-2xl border border-border p-8 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                    Step {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
