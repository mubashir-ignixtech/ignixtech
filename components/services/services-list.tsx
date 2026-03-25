"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { CheckCircle2 } from "lucide-react"
import { servicesContent } from "@/lib/constants"

export function ServicesList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {servicesContent.list.map((service, index) => (
            <FadeIn key={service.id} delay={0.1}>
              <div
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg bg-teal-100 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-800">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative bg-teal-100 rounded-2xl p-12 aspect-square flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-teal-400 opacity-50" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
