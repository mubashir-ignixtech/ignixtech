"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { Palette, Code, Smartphone, Shield, Server, Bug, CheckCircle2 } from "lucide-react"

const services = [
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX Design",
    description: "Create stunning, intuitive interfaces that delight users and drive engagement. Our design process focuses on understanding your users and crafting experiences that convert.",
    features: [
      "User-Centric Design",
      "Wireframing and Prototyping",
      "Visual Design",
      "Interaction Design",
      "Usability Testing",
      "Design Systems",
    ],
  },
  {
    id: "software",
    icon: Code,
    title: "Software Development",
    description: "Build powerful, scalable software solutions tailored to your unique business requirements. We use modern technologies and best practices to deliver robust applications.",
    features: [
      "Custom Software Development",
      "Web Application Development",
      "API Development & Integration",
      "Enterprise Solutions",
      "Legacy System Modernization",
      "Cloud-Native Applications",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Reach your customers wherever they are with native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS Development (Swift)",
      "Android Development (Kotlin)",
      "React Native Apps",
      "Flutter Development",
      "App Store Optimization",
      "Mobile App Maintenance",
    ],
  },
  {
    id: "qa",
    icon: Bug,
    title: "Quality Assurance",
    description: "Ensure your software performs flawlessly with comprehensive testing services. We catch bugs before your users do, guaranteeing reliable and high-quality products.",
    features: [
      "Manual Testing",
      "Functional Testing",
      "Automation Testing",
      "Performance Testing",
      "Security Testing",
      "Regression Testing",
    ],
  },
  {
    id: "devops",
    icon: Server,
    title: "DevOps",
    description: "Accelerate your development cycles and improve deployment reliability with our DevOps expertise. We help you build efficient, automated pipelines.",
    features: [
      "Infrastructure as Code (IaC)",
      "CI/CD Pipeline Implementation",
      "Monitoring and Logging",
      "Cloud Infrastructure Setup",
      "Container Orchestration",
      "Site Reliability Engineering",
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security services. We identify vulnerabilities and implement robust security measures to keep your business safe.",
    features: [
      "Penetration Testing",
      "Red Teaming",
      "Endpoint Security",
      "Security Audits",
      "Compliance Implementation",
      "Incident Response",
    ],
  },
]

export function ServicesList() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
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
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                    <div className="relative bg-card rounded-3xl border border-border p-8 aspect-square flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary/20" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-3xl" />
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
