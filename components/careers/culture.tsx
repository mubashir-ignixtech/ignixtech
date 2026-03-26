"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { SectionHeader } from "@/components/section-header"
import { careersContent } from "@/lib/constants"

export function Culture() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={careersContent.culture.badge}
          title={careersContent.culture.title}
          description={careersContent.culture.description}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {careersContent.culture.points.map((point, index) => {
            const cardColors = [
              "bg-[#fff4d1] dark:bg-amber-900/20",
              "bg-[#dcfce7] dark:bg-emerald-900/20",
              "bg-[#f8f9fa] dark:bg-slate-800/40"
            ]
            const colorClass = cardColors[index % cardColors.length]
            
            return (
            <FadeIn key={point.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex gap-4 p-6 rounded-2xl ${colorClass} border border-border/50 hover:border-primary/50 transition-colors h-full shadow-sm`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          )
          })}
        </div>
      </div>
    </section>
  )
}
