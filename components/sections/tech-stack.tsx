"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const categoryColors: Record<string, { bg: string; border: string; text: string; grad: string; line: string }> = {
  "frontend": { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", grad: "from-blue-100", line: "from-blue-400" },
  "backend": { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-900", grad: "from-emerald-100", line: "from-emerald-400" },
  "database": { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-900", grad: "from-cyan-100", line: "from-cyan-400" },
  "devops": { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-900", grad: "from-purple-100", line: "from-purple-400" },
  "tools": { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", grad: "from-amber-100", line: "from-amber-400" },
  "other": { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-900", grad: "from-pink-100", line: "from-pink-400" },
}

export function TechStack() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-200/30 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.techStack.badge}
          title={homeContent.techStack.title}
          description={homeContent.techStack.description}
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {Object.entries(homeContent.techStack.categories).map(([category, technologies], categoryIndex) => {
            const colors = categoryColors[category.toLowerCase()] || categoryColors.other
            return (
              <FadeIn key={category} delay={categoryIndex * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="group relative h-full flex flex-col"
                >
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.grad} to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className={`relative h-full flex flex-col p-8 rounded-3xl border-2 border-white/70 ${colors.bg} shadow-md hover:shadow-lg transition-all duration-300`}>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-3xl">
                        {homeContent.techStack.icons[category as keyof typeof homeContent.techStack.icons]}
                      </div>
                      <h3 className={`text-lg font-bold ${colors.text} capitalize`}>
                        {category}
                      </h3>
                    </div>

                    {/* Tech Tags */}
                    <StaggerContainer className="flex flex-wrap gap-3 flex-1" staggerDelay={0.03}>
                      {technologies.map((tech) => (
                        <StaggerItem key={tech}>
                          <motion.div
                            whileHover={{ scale: 1.08, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-xl bg-white/70 border border-white/80 ${colors.text} text-sm font-semibold hover:shadow-md transition-all duration-200 cursor-default`}
                          >
                            {tech}
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>

                    {/* Bottom Accent Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + 0.3, duration: 0.6 }}
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${colors.line} to-transparent rounded-full`}
                    />
                  </div>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-12 border-t border-border/30"
        >
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            {homeContent.techStack.footerMessage}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
