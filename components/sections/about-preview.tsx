"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion"
import { homeContent } from "@/lib/constants"

const statColors = [
  { bg: "bg-teal-100", text: "text-teal-700" },
  { bg: "bg-yellow-100", text: "text-yellow-700" },
  { bg: "bg-blue-100", text: "text-blue-700" },
  { bg: "bg-purple-100", text: "text-purple-700" },
]

export function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <FadeIn>
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase bg-teal-100 text-teal-700 rounded-full mb-4">
                {homeContent.aboutPreview.badge}
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {homeContent.aboutPreview.heading}
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-base text-gray-700 mb-8 leading-relaxed">
                {homeContent.aboutPreview.description}
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="space-y-3 mb-8">
                {homeContent.aboutPreview.highlights.map((item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          {/* Stats & Quote */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {homeContent.aboutPreview.stats.map((stat, index) => {
                  const colors = statColors[index % statColors.length]
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`text-center p-4 rounded-xl ${colors.bg}`}
                    >
                      <div className={`text-2xl font-bold ${colors.text}`}>{stat.value}</div>
                      <div className={`text-xs ${colors.text} opacity-75 mt-1 font-medium`}>{stat.label}</div>
                    </motion.div>
                  )
                })}
              </div>
              
              {/* CEO Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-xl p-6"
              >
                <p className="text-sm text-gray-700 italic leading-relaxed mb-4">
                  &ldquo;{homeContent.aboutPreview.ceoQuote.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-teal-200 flex items-center justify-center flex-shrink-0">
                    {homeContent.aboutPreview.ceoQuote.image ? (
                      <Image
                        src={homeContent.aboutPreview.ceoQuote.image}
                        alt={homeContent.aboutPreview.ceoQuote.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-teal-700 font-bold text-xs">{homeContent.aboutPreview.ceoQuote.initials}</span>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800">{homeContent.aboutPreview.ceoQuote.name}</div>
                    <div className="text-xs text-gray-600">{homeContent.aboutPreview.ceoQuote.title}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
