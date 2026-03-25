"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, Floating } from "@/components/motion"
import { homeContent, siteConfig } from "@/lib/constants"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, rgba(244, 20, 31, 0.05), rgba(255, 255, 255, 1), rgba(164, 145, 211, 0.05))" }} />
      <Floating duration={6} distance={30} className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px]" style={{ backgroundColor: "rgba(244, 20, 31, 0.15)" }} />
      <Floating duration={8} distance={20} className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[150px]" style={{ backgroundColor: "rgba(164, 145, 211, 0.15)" }} />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full mb-6" style={{ backgroundColor: "#FFF0ED", color: "#F4141F" }}>
            {homeContent.cta.badge}
          </span>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance" style={{ color: "#2B2B2B" }}>
            {homeContent.cta.title1}
            <br />
            <span style={{ background: "linear-gradient(to right, #F4141F, #087E8B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{homeContent.cta.title2}</span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "#2B2B2B", opacity: 0.8 }}>
            {homeContent.cta.description}
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" style={{ backgroundColor: "#F4141F" }} className="hover:opacity-90 text-white px-8 h-12 text-base">
              <a href={siteConfig.links.calendly} target="_blank" rel="noopener noreferrer">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" className="h-12 px-8 text-base font-semibold" style={{ borderColor: "#087E8B", color: "#087E8B", borderWidth: "2px" }}>
              <Link href="/careers">
                Join Our Team
              </Link>
            </Button>
          </div>
        </FadeIn>
        
        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {homeContent.cta.tags.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full shadow-sm"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderColor: "#FFF0ED", borderWidth: "2px" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "linear-gradient(to right, #F4141F, #087E8B)" }} />
              <span className="text-sm font-medium" style={{ color: "#F4141F" }}>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
