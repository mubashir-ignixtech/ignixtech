"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const statColors = [
  { bg: "bg-cyan-50", text: "text-cyan-600", bar: "from-cyan-400" },
  { bg: "bg-emerald-50", text: "text-emerald-600", bar: "from-emerald-400" },
  { bg: "bg-purple-50", text: "text-purple-600", bar: "from-purple-400" },
  { bg: "bg-blue-50", text: "text-blue-600", bar: "from-blue-400" },
]

export function AboutPreview() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <FadeIn>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-cyan-100 text-cyan-700 rounded-full border border-cyan-200 mb-6">
                {homeContent.aboutPreview.badge}
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                {homeContent.aboutPreview.heading}
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="mt-6 text-lg text-slate-600">
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
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-cyan-200">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/30 to-purple-200/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 rounded-3xl border-2 border-white/80 p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-4 auto-rows-fr mb-6">
                  {homeContent.aboutPreview.stats.map((stat, index) => {
                    const colors = statColors[index % statColors.length]
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className={`text-center p-5 rounded-2xl ${colors.bg} border-2 border-white/60 hover:shadow-md transition-all`}
                      >
                        <div className={`text-3xl font-bold ${colors.text}`}>{stat.value}</div>
                        <div className={`text-xs sm:text-sm ${colors.text} opacity-70 mt-2 font-medium`}>{stat.label}</div>
                      </motion.div>
                    )
                  })}
                </div>
                
                {/* CEO Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mt-6 p-6 rounded-2xl bg-white/70 border-2 border-white/80 hover:shadow-md transition-all"
                >
                  <p className="text-sm text-slate-700 italic leading-relaxed font-medium">
                    &ldquo;{homeContent.aboutPreview.ceoQuote.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-cyan-300 to-emerald-300 flex items-center justify-center flex-shrink-0 border-2 border-cyan-200">
                      {homeContent.aboutPreview.ceoQuote.image ? (
                        <Image
                          src={homeContent.aboutPreview.ceoQuote.image}
                          alt={homeContent.aboutPreview.ceoQuote.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-cyan-700 font-bold">{homeContent.aboutPreview.ceoQuote.initials}</span>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-800">{homeContent.aboutPreview.ceoQuote.name}</div>
                      <div className="text-xs text-slate-600">{homeContent.aboutPreview.ceoQuote.title}</div>
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
