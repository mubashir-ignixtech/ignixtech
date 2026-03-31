"use client"

import { motion } from "framer-motion"
import { FaCheckCircle } from 'react-icons/fa'; // Replaced Lucide icon
import { servicesContent, serviceVisuals } from '@/lib/constants';
import { FadeIn } from '@/components/motion';

export function ServicesList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {servicesContent.list.map((service, index) => {
            const visual = serviceVisuals[index % serviceVisuals.length]

            return (
              <FadeIn key={service.id} delay={0.1}>
                <div
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Content Panel */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wider">
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
                          className="flex items-center gap-3"
                        >
                          <FaCheckCircle className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                          <span className="text-foreground text-sm font-medium leading-tight">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Rich Visual Panel */}
                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className={`relative ${visual.bg} rounded-3xl border border-border/50 p-8 shadow-sm overflow-hidden`}
                    >
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/5 -translate-y-10 translate-x-10" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-secondary/10 translate-y-6 -translate-x-6" />

                      {/* Header */}
                      <div className="relative flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-base leading-tight">{service.title}</p>
                          <p className={`text-xs font-semibold ${visual.accentText}`}>Core Technologies</p>
                        </div>
                      </div>

                      {/* Tech Icons Grid - Updated to handle 8 items cleanly */}
                      <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-4 mb-8">
                        {visual.icons.map(({ Icon, color, label }, i) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.05 }}
                            className="flex flex-col items-center gap-2 group"
                          >
                            <div
                              className="w-14 h-14 rounded-2xl bg-card dark:bg-[#414A4C] shadow-sm border border-border/30 flex items-center justify-center transition-transform group-hover:-translate-y-1"
                              style={{ boxShadow: `0 4px 14px ${color}22` }}
                            >
                              <Icon style={{ color }} size={26} />
                            </div>
                            <span className="text-[10px] text-muted-foreground font-medium text-center leading-tight group-hover:text-foreground transition-colors">
                              {label}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Stat Badge */}
                      <div className="relative flex items-center justify-between pt-5 border-t border-border/40">
                        <div>
                          <p className={`text-2xl font-black ${visual.accentText}`}>{visual.stat.value}</p>
                          <p className="text-xs text-muted-foreground font-medium">{visual.stat.label}</p>
                        </div>
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-primary/30" />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}