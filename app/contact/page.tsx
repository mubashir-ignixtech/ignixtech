import { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactFaq } from "@/components/contact/contact-faq"
import { OfficesMap } from "@/components/contact/offices-map"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Ignixtech. We'd love to hear from you and discuss how we can help transform your business.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <OfficesMap />
      <ContactFaq />
    </>
  )
}
