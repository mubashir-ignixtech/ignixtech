"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { Target, Eye, Heart } from "lucide-react"

export function Mission() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div>
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Our Story
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to bridge the gap between innovative ideas and 
                  technological excellence, IgnixTech has grown into a trusted partner 
                  for businesses seeking digital transformation.
                </p>
                <p>
                  Our journey began with a simple belief: that technology should empower, 
                  not complicate. This philosophy drives everything we do, from our approach 
                  to software development to how we engage with our clients.
                </p>
                <p>
                  Today, we are proud to have helped numerous businesses across various 
                  industries achieve their digital goals, delivering solutions that are 
                  not just functional but transformative.
                </p>
              </div>
            </FadeIn>
          </div>
          
          {/* Mission, Vision, Values Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To deliver innovative digital solutions that empower businesses to achieve their goals and drive meaningful impact in their industries.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "To be the leading technology partner for businesses worldwide, known for excellence, innovation, and unwavering commitment to client success.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "Integrity, Innovation, Excellence, and Client-Centricity form the foundation of everything we do at IgnixTech.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ x: -5 }}
                className="flex gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
