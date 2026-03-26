"use client"

import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { CheckCircle2 } from "lucide-react"
import { servicesContent } from "@/lib/constants"
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma,
  SiNodedotjs, SiPython, SiGo, SiPhp, SiGraphql,
  SiFlutter, SiSwift, SiKotlin, SiFirebase,
  SiDocker, SiKubernetes, SiTerraform, SiGithubactions,
  SiGit, SiSelenium, SiCypress,
  SiMetasploit,
  SiOwasp,
  SiBurpsuite,
  SiApachejmeter,
  SiGrafana,
} from "react-icons/si"
import { FaShieldAlt } from "react-icons/fa"
import { VscPlayCircle } from "react-icons/vsc";

// Per-service visual config: background color, accent, tech icons with colors
const serviceVisuals = [
  {
    bg: "bg-[#fff4d1] dark:bg-amber-900/20",
    accentText: "text-amber-600 dark:text-amber-400",
    stat: { value: "100+", label: "Designs Delivered" },
    icons: [
      { Icon: SiReact, color: "#61DAFB", label: "React" },
      { Icon: SiFigma, color: "#F24E1E", label: "Figma" },
      { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
      { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
      { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
    ],
  },
  {
    bg: "bg-[#dcfce7] dark:bg-emerald-900/20",
    accentText: "text-emerald-600 dark:text-emerald-400",
    stat: { value: "200+", label: "APIs Shipped" },
    icons: [
      { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
      { Icon: SiPython, color: "#3776AB", label: "Python" },
      { Icon: SiGo, color: "#00ADD8", label: "Go" },
      { Icon: SiPhp, color: "#777BB4", label: "PHP" },
      { Icon: SiGraphql, color: "#E10098", label: "GraphQL" },
    ],
  },
  {
    bg: "bg-[#f0f4ff] dark:bg-slate-800/40",
    accentText: "text-blue-600 dark:text-blue-400",
    stat: { value: "50+", label: "Apps Published" },
    icons: [
      { Icon: SiReact, color: "#61DAFB", label: "React Native" },
      { Icon: SiFlutter, color: "#02569B", label: "Flutter" },
      { Icon: SiSwift, color: "#F05138", label: "Swift" },
      { Icon: SiKotlin, color: "#7F52FF", label: "Kotlin" },
      { Icon: SiFirebase, color: "#FFCA28", label: "Firebase" },
    ],
  },
  {
    bg: "bg-[#fef0f0] dark:bg-rose-900/20",
    accentText: "text-rose-600 dark:text-rose-400",
    stat: { value: "99.9%", label: "Bug Detection Rate" },
    icons: [
      { Icon: SiSelenium, color: "#43B02A", label: "Selenium" },
      { Icon: SiCypress, color: "#17202C", label: "Cypress" },
      { Icon: SiApachejmeter , color: "#D24939", label: "Apache JMeter" },
      { Icon: SiGrafana, color: "#0052CC", label: "Grafana" },
    ],
  },
  {
    bg: "bg-[#f0f9ff] dark:bg-sky-900/20",
    accentText: "text-sky-600 dark:text-sky-400",
    stat: { value: "99.99%", label: "Uptime SLA" },
    icons: [
      { Icon: SiDocker, color: "#2496ED", label: "Docker" },
      { Icon: SiKubernetes, color: "#326CE5", label: "Kubernetes" },
      { Icon: SiTerraform, color: "#844FBA", label: "Terraform" },
      { Icon: SiGithubactions, color: "#2088FF", label: "GH Actions" },
      { Icon: SiGit, color: "#F05032", label: "Git" },
    ],
  },
  {
    bg: "bg-[#f5f0ff] dark:bg-violet-900/20",
    accentText: "text-violet-600 dark:text-violet-400",
    stat: { value: "0", label: "Known Breaches" },
    icons: [
      { Icon: FaShieldAlt, color: "#8B5CF6", label: "Pen Testing" },
      { Icon: SiMetasploit , color: "#3776AB", label: "Metasploit" },
      { Icon: SiOwasp , color: "#00ADD8", label: "OWASP" },
      { Icon: SiBurpsuite , color: "#181717", label: "SiBurpsuite" },
    ],
  },
]

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

                      {/* Tech Icons Grid */}
                      <div className="relative grid grid-cols-5 gap-3 mb-8">
                        {visual.icons.map(({ Icon, color, label }, i) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.07 }}
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
                          {[0,1,2].map(i => (
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
