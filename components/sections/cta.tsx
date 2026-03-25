"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, Floating } from "@/components/motion"
import { homeContent, siteConfig } from "@/lib/constants"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/40 via-white to-purple-100/30" />
      <Floating duration={6} distance={30} className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-[150px]" />
      <Floating duration={8} distance={20} className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/20 rounded-full blur-[150px]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-cyan-100 text-cyan-700 rounded-full border border-cyan-200 mb-6">
            {homeContent.cta.badge}
          </span>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-slate-900">
            {homeContent.cta.title1}
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">{homeContent.cta.title2}</span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {homeContent.cta.description}
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-cyan-200 px-8 h-12 text-base">
              <a href={siteConfig.links.calendly} target="_blank" rel="noopener noreferrer">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-cyan-400 text-cyan-600 hover:bg-cyan-50 h-12 px-8 text-base font-semibold">
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
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border-2 border-cyan-200 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
              <span className="text-sm text-cyan-700 font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
