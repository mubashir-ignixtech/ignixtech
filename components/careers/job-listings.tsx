"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "@/components/section-header"
import { FadeIn } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  ChevronDown, 
  ArrowRight,
  Mail
} from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote / Toronto",
    type: "Full-time",
    description: "We are looking for an experienced Frontend Developer to join our engineering team. You will be working on cutting-edge web applications using React, Next.js, and TypeScript.",
    requirements: [
      "5+ years of experience with React/Next.js",
      "Strong TypeScript skills",
      "Experience with modern CSS and Tailwind",
      "Understanding of web performance optimization",
      "Excellent communication skills",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Toronto",
    type: "Full-time",
    description: "Join our design team to create beautiful, user-centered interfaces. You will be responsible for the entire design process from research to high-fidelity prototypes.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and design systems",
      "Strong portfolio demonstrating user-centered design",
      "Experience with user research and testing",
      "Excellent visual design skills",
    ],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    description: "Help us build and maintain robust infrastructure. You will work on CI/CD pipelines, cloud architecture, and ensure our systems are secure and scalable.",
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of AWS/GCP/Azure",
      "Experience with Docker and Kubernetes",
      "Infrastructure as Code (Terraform)",
      "Strong scripting skills (Python/Bash)",
    ],
  },
  {
    id: 4,
    title: "Mobile Developer",
    department: "Engineering",
    location: "Remote / Toronto",
    type: "Full-time",
    description: "Build beautiful, performant mobile applications for iOS and Android. You will work with React Native and native technologies to deliver exceptional user experiences.",
    requirements: [
      "3+ years of mobile development experience",
      "Proficiency in React Native or Flutter",
      "Experience with native iOS/Android development",
      "Understanding of mobile UI/UX best practices",
      "App Store deployment experience",
    ],
  },
]

export function JobListings() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

  return (
    <section className="py-20 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Open Positions"
          title="Current Opportunities"
          description="Explore our open positions and find your perfect role."
        />

        <div className="mt-16 space-y-4">
          {jobs.map((job, index) => (
            <FadeIn key={job.id} delay={index * 0.1}>
              <motion.div
                layout
                className="bg-background rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Briefcase size={14} />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock size={14} />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-border">
                        <p className="text-muted-foreground mb-4">
                          {job.description}
                        </p>
                        
                        <h4 className="font-semibold text-foreground mb-2">
                          Requirements:
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>

                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <Mail className="w-4 h-4 mr-2" />
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* General Application */}
        <FadeIn delay={0.4}>
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Do not see your role?
            </h3>
            <p className="text-muted-foreground mb-6">
              We are always looking for talented individuals. Send us your resume and we will reach out when a suitable position opens.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Send General Application
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
