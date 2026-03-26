"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { contactContent } from "@/lib/constants"
import { SectionHeader } from "@/components/section-header"

function FaqItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="border-b border-border/60 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className={`text-sm font-semibold transition-colors ${open ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
            open ? "bg-primary border-primary text-primary-foreground shadow-md" : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
          }`}
        >
          <Plus size={14} strokeWidth={2.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground leading-relaxed pb-5 pr-10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function ContactFaq() {
  const half = Math.ceil(contactContent.faq.list.length / 2)
  const left  = contactContent.faq.list.slice(0, half)
  const right = contactContent.faq.list.slice(half)

  return (
    <section className="py-20 bg-card/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title={contactContent.faq.title}
          description="Everything you need to know before getting started with us."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          <div className="bg-card rounded-2xl border border-border/60 px-6 divide-y-0 shadow-sm">
            {left.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i} />
            ))}
          </div>
          <div className="bg-card rounded-2xl border border-border/60 px-6 divide-y-0 shadow-sm mt-8 lg:mt-0">
            {right.map((faq, i) => (
              <FaqItem key={faq.question} faq={faq} index={i + half} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
