"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"
import { homeContent } from "@/lib/constants"

export function AboutPreview() {
  return (
    <section className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <FadeIn>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-secondary/10 text-secondary-foreground rounded-full border border-secondary/20 mb-6">
                {homeContent.aboutPreview.badge}
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                {homeContent.aboutPreview.heading}
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground">
                {homeContent.aboutPreview.description}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {homeContent.aboutPreview.highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Visual Element */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-secondary/30 rounded-3xl border border-border/50 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 auto-rows-fr mb-6">
                  {homeContent.aboutPreview.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-5 rounded-2xl bg-background/50 border border-border/30 hover:border-secondary/30 transition-colors"
                    >
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                {/* CEO Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 p-5 rounded-2xl bg-background/50 border border-border/30 hover:border-secondary/30 transition-colors"
                >
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;{homeContent.aboutPreview.ceoQuote.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary/20 flex items-center justify-center flex-shrink-0 border-2 border-secondary/20">
                      {homeContent.aboutPreview.ceoQuote.image ? (
                        <Image
                          src={homeContent.aboutPreview.ceoQuote.image}
                          alt={homeContent.aboutPreview.ceoQuote.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-secondary-foreground font-semibold">{homeContent.aboutPreview.ceoQuote.initials}</span>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{homeContent.aboutPreview.ceoQuote.name}</div>
                      <div className="text-xs text-muted-foreground">{homeContent.aboutPreview.ceoQuote.title}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
