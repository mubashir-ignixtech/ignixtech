"use client"

import { FadeIn, Floating } from "@/components/motion"

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <Floating duration={4} distance={20} className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <Floating duration={5} distance={15} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20 mb-6">
              About IgnixTech
            </span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              We Ignite Innovation &
              <span className="text-primary"> Transform Businesses</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              IgnixTech is a forward-thinking technology company dedicated to delivering 
              cutting-edge digital solutions that empower businesses to thrive in the modern era.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
