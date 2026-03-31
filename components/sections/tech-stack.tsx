"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as SiIcons from 'react-icons/si';
import { LiaAmazon } from "react-icons/lia";
import { VscAzure } from "react-icons/vsc";
import { SectionHeader } from "@/components/section-header"
import { homeContent } from "@/lib/constants"

// Accent color per tab
const tabAccents: Record<string, { gradient: string; pill: string; glow: string; border: string }> = {
  frontend: {
    gradient: "from-sky-500/15 to-blue-600/5",
    pill: "bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-400/30 hover:bg-sky-500/25",
    glow: "#61DAFB",
    border: "border-sky-500/30",
  },
  backend: {
    gradient: "from-emerald-500/15 to-teal-600/5",
    pill: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500/25",
    glow: "#339933",
    border: "border-emerald-500/30",
  },
  mobile: {
    gradient: "from-violet-500/15 to-purple-600/5",
    pill: "bg-violet-500/15 text-violet-700 dark:text-violet-300 border border-violet-400/30 hover:bg-violet-500/25",
    glow: "#61DAFB",
    border: "border-violet-500/30",
  },
  cloud: {
    gradient: "from-orange-500/15 to-amber-600/5",
    pill: "bg-orange-500/15 text-orange-700 dark:text-orange-300 border border-orange-400/30 hover:bg-orange-500/25",
    glow: "#FF9900",
    border: "border-orange-500/30",
  },
  database: {
    gradient: "from-rose-500/15 to-red-600/5",
    pill: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-400/30 hover:bg-rose-500/25",
    glow: "#47A248",
    border: "border-rose-500/30",
  },
  tools: {
    gradient: "from-fuchsia-500/15 to-pink-600/5",
    pill: "bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300 border border-fuchsia-400/30 hover:bg-fuchsia-500/25",
    glow: "#F24E1E",
    border: "border-fuchsia-500/30",
  },
}

export function TechStack() {
  const tabs = homeContent.techStack.tabs
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const active = tabs.find(t => t.id === activeTab) ?? tabs[0]
  const accent = tabAccents[activeTab] ?? tabAccents["frontend"]

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={homeContent.techStack.badge}
          title={homeContent.techStack.title}
          description={homeContent.techStack.description}
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 items-start">

          {/* ── Left Sidebar ── */}
          <div className="flex flex-col lg:sticky lg:top-24 bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-4 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 px-2">Services</p>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative text-left px-4 py-3 mt-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 rounded-xl bg-primary/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {activeTab === tab.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  )}
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* ── Right Panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`relative rounded-3xl border ${accent.border} bg-gradient-to-br ${accent.gradient} p-8 overflow-hidden`}
            >
              {/* Decorative background blobs */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-secondary/10 blur-2xl pointer-events-none" />

              {/* Title */}
              <div className="relative mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  {active.label}{" "}
                  <span className="text-primary">Services</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {active.description}
                </p>
              </div>

              {/* Feature Pills – styled like the screenshot's teal pills */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {active.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.22, delay: i * 0.05 }}
                    className={`flex items-center gap-3 px-5 py-3.5 rounded-xl ${accent.pill} font-medium text-sm shadow-sm cursor-default transition-all`}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* Core Tech Icons */}
              <div className="relative">
                <p className="text-sm font-bold text-foreground mb-5 uppercase tracking-wider">Core Tech:</p>
                <div className="flex flex-wrap gap-5">
                  {active.coreTech.map((tech, i) => {
                    let IconComponent: any = null;
                    if (tech.icon === "LiaAmazon") {
                      IconComponent = LiaAmazon;
                    } else if (tech.icon === "VscAzure") {
                      IconComponent = VscAzure;
                    } else {
                      IconComponent = (SiIcons as any)[tech.icon];
                    }

                    if (!IconComponent) return null;

                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex flex-col items-center gap-2 group cursor-default"
                      >
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center bg-card dark:bg-[#414A4C] shadow-md border border-border/40 transition-all duration-200 group-hover:-translate-y-1.5 group-hover:shadow-lg"
                          style={{ boxShadow: `0 4px 20px ${tech.color}30` }}
                        >
                          <IconComponent color={tech.color} size={24} />
                        </div>
                        <span className="text-[11px] text-muted-foreground font-semibold group-hover:text-foreground transition-colors">
                          {tech.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
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
