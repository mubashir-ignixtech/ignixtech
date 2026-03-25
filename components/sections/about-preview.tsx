"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"

const highlights = [
  "User-Centric Design Approach",
  "Scalable & Secure Solutions",
  "Agile Development Process",
  "24/7 Support & Maintenance",
  "Industry Best Practices",
  "Continuous Innovation",
]

export function AboutPreview() {
  return (
    <section className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <FadeIn>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20 mb-6">
                About Us
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                From Concept to Impact, We Ignite It All
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground">
                At IgnixTech, we are passionate about transforming innovative ideas into powerful digital solutions. 
                With a team of experienced developers, designers, and strategists, we deliver excellence at every step.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
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
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-secondary/30 rounded-3xl border border-border/50 p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 auto-rows-fr mb-6">
                  {[
                    { value: "100%", label: "Client Satisfaction" },
                    { value: "50+", label: "Projects Completed" },
                    { value: "5+", label: "Years of Experience" },
                    { value: "24/7", label: "Support Available" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-center p-5 rounded-2xl bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
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
                  className="mt-6 p-5 rounded-2xl bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;At IgnixTech, we believe in transforming visions into reality through innovation and excellence.&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">RS</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Rizwan Saieed</div>
                      <div className="text-xs text-muted-foreground">Co-Founder & CEO</div>
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
