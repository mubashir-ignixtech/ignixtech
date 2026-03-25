"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { Mail, MapPin, Clock, ArrowRight, Phone } from "lucide-react"
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

      {/* FAQ Preview */}
      <FadeIn direction="right" delay={0.3}>
        <div className="bg-card rounded-2xl border border-border p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">
            {contactContent.faq.title}
          </h2>
          
          <div className="space-y-4">
            {contactContent.faq.list.map((faq, index) => (
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

      {/* Google Maps Embed */}
      <FadeIn direction="right" delay={0.4}>
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d354.37565862206196!2d-63.707623!3d44.719504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5989808ea44b81%3A0x4ce22e7f81c7bc9!2s299%20Gary%20Martin%20Dr%2C%20Bedford%2C%20NS%20B4B%202E9%2C%20Canada!5e0!3m2!1sen!2sus!4v1774428479842!5m2!1sen!2sus"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </FadeIn>
    </div>
  )
}
