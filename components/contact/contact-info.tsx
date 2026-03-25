"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team is here to help.",
    value: "info@ignixtech.ca",
    href: "mailto:info@ignixtech.ca",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come say hello at our office.",
    value: "Toronto, Canada",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "We are available",
    value: "Mon - Fri, 9AM - 6PM EST",
    href: null,
  },
]

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope, but most projects take 4-12 weeks from start to delivery.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We offer comprehensive maintenance and support packages for all our clients.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular sprints, demos, and continuous communication.",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <FadeIn direction="right">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Get in Touch
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

      {/* FAQ Preview */}
      <FadeIn direction="right" delay={0.3}>
        <div className="bg-card rounded-2xl border border-border p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <h3 className="font-medium text-foreground mb-1">
                  {faq.question}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Map Placeholder */}
      <FadeIn direction="right" delay={0.4}>
        <div className="relative h-64 rounded-2xl overflow-hidden border border-border">
          <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Toronto, Canada</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
