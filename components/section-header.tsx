"use client"

import { FadeIn } from "./motion"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {badge && (
        <FadeIn>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20 mb-6">
            {badge}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
