"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, Floating } from "@/components/motion"
import { homeContent, siteConfig } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      
      {/* Animated Orbs */}
      <Floating duration={4} distance={20} className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-[100px]" />
      <Floating duration={5} distance={15} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary-foreground text-sm font-medium mb-8">
              <span>{homeContent.hero.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
              {homeContent.hero.heading1}
              <br />
              <span className="text-primary">{homeContent.hero.heading2}</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              {homeContent.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base">
                <a href={siteConfig.links.calendly} target="_blank" rel="noopener noreferrer">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary h-12 px-8 text-base">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <FadeIn delay={0.4}>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl mx-auto lg:mx-0">
                {homeContent.hero.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Visual - Hero Images */}
          <div className="relative hidden lg:block">
            <FadeIn delay={0.2}>
              <div className="relative">
                {/* Main Dashboard Image - Strictly Generic & Professional */}
                <div className="relative z-10">
                  <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-white/50 backdrop-blur-sm">
                    <Image
                      src="/images/hero-dashboard-final.png"
                      alt="Ignixtech modern generic enterprise dashboard interface"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                </div>
 
                {/* Floating Collaboration Scene - Generic & Professional */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -left-12 top-1/2 -translate-y-1/2 z-20"
                >
                  <Floating duration={5} distance={8}>
                    <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-white/60 shadow-2xl p-1 bg-white/80">
                      <Image
                        src="/images/hero-collaboration-final.png"
                        alt="Ignixtech expert team collaboration"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </Floating>
                </motion.div>
 
                {/* Floating Mobile UX - Generic & Professional */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -right-8 bottom-4 z-20"
                >
                  <Floating duration={6} distance={10}>
                    <div className="relative w-44 h-28 rounded-2xl overflow-hidden border-2 border-white/60 shadow-2xl p-1 bg-white/80">
                      <Image
                        src="/images/hero-mobile-final.png"
                        alt="Ignixtech sleek generic mobile user experience"
                        width={176}
                        height={112}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </Floating>
                </motion.div>
 
                {/* Decorative Elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -top-4 right-12 w-20 h-20 rounded-full bg-secondary/20 blur-xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute bottom-12 -left-4 w-16 h-16 rounded-full bg-primary/30 blur-lg"
                />
 
                {/* Tech Lines */}
                <svg className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none z-0" viewBox="0 0 400 300">
                  <motion.path
                    d="M 50 150 Q 100 50 200 100 T 350 80"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    className="text-secondary/20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <motion.path
                    d="M 30 200 Q 150 250 250 200 T 380 220"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    className="text-primary/10"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.7 }}
                  />
                </svg>
              </div>
            </FadeIn>
          </div>
        </div>
 
        {/* Mobile Hero Image */}
        <div className="lg:hidden mt-12">
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-white/50 backdrop-blur-sm">
            <Image
              src="/images/hero-dashboard-final.png"
              alt="Ignixtech modern generic enterprise dashboard interface"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ height: ["20%", "80%", "20%"] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
