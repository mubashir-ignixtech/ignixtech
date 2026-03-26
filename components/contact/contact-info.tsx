"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { Mail, MapPin, Clock, ArrowRight, Phone, Plus } from "lucide-react"
import { contactDetails as contactDetailsData, contactContent } from "@/lib/constants"

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team is here to help.",
    value: contactDetailsData.email,
    href: `mailto:${contactDetailsData.email}`,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office.",
    value: contactDetailsData.address,
    href: contactDetailsData.mapLink,
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Our team is here to help.",
    value: contactDetailsData.phone,
    href: `tel:${contactDetailsData.phone}`,
  },
  {
    icon: Clock,
    title: contactContent.info.businessHours.title,
    description: contactContent.info.businessHours.description,
    value: contactContent.info.businessHours.value,
    href: null,
  },
]

function FaqItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 + index * 0.04 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className={`text-sm font-semibold transition-colors ${open ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
            open ? "bg-primary border-primary text-primary-foreground" : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary"
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
            <p className="text-sm text-muted-foreground leading-relaxed pb-4 pr-10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <FadeIn direction="right">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            {contactContent.info.title}
          </h2>
          
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <detail.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{detail.title}</h3>
                <p className="text-sm text-muted-foreground">{detail.description}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    {detail.value}
                    <ArrowRight size={14} />
                  </a>
                ) : (
                  <p className="text-foreground mt-1">{detail.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}
