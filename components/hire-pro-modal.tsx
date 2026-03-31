"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle2, Sparkles, ArrowRight, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface HireProModalProps {
  isOpen: boolean
  onClose: () => void
}

const SERVICES = [
  "UI/UX Design",
  "Software Development",
  "Mobile App",
  "Cloud & DevOps",
  "Quality Assurance",
  "Cybersecurity",
  "AI & Automation",
  "Other",
]

const TRUST_BADGES = [
  { icon: Zap, label: "24hr Response" },
  { icon: Shield, label: "NDA Protected" },
  { icon: Clock, label: "Free Consultation" },
]

export function HireProModal({ isOpen, onClose }: HireProModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleKeyDown])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "")
    formData.set("Service", selectedService)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setIsSubmitted(true)
      }
    } catch {
      // handle silently
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    onClose()
    // Reset after animation
    setTimeout(() => {
      setIsSubmitted(false)
      setSelectedService("")
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Premium gradient border effect */}
              <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/60 via-primary/20 to-purple-500/40 pointer-events-none" />

              <div className="relative rounded-3xl bg-background/95 backdrop-blur-xl overflow-hidden">

                {/* Header gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    // ── Success State ──
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-10 flex flex-col items-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1, stiffness: 200, damping: 15 }}
                        className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-6"
                      >
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-3xl font-bold text-foreground mb-3">You're all set! 🎉</h3>
                        <p className="text-muted-foreground mb-2 text-lg">
                          Thanks for reaching out. Our team will get back to you within{" "}
                          <span className="text-primary font-semibold">24 hours</span>.
                        </p>
                        <p className="text-sm text-muted-foreground mb-8">In the meantime, feel free to browse our services.</p>
                        <Button
                          onClick={handleClose}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 rounded-xl gap-2"
                        >
                          Back to Site <ArrowRight size={16} />
                        </Button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    // ── Form State ──
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8"
                    >
                      {/* Title section */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                            <Sparkles size={11} />
                            Hire a Professional
                          </span>
                        </div>
                        <h2 className="text-3xl font-bold text-foreground tracking-tight mb-2">
                          Let's Build Something{" "}
                          <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                            Amazing
                          </span>
                        </h2>
                        <p className="text-muted-foreground">
                          Tell us about your project and we'll match you with the right expert.
                        </p>

                        {/* Trust badges */}
                        <div className="flex flex-wrap gap-3 mt-4">
                          {TRUST_BADGES.map(({ icon: Icon, label }) => (
                            <span
                              key={label}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border/50"
                            >
                              <Icon size={11} className="text-primary" />
                              {label}
                            </span>
                          ))}
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="modal-firstName" className="text-sm font-medium">First Name</Label>
                            <Input
                              id="modal-firstName"
                              name="First Name"
                              placeholder="John"
                              required
                              className="h-11 rounded-xl bg-muted/40 border-border/60 focus:border-primary transition-colors"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="modal-lastName" className="text-sm font-medium">Last Name</Label>
                            <Input
                              id="modal-lastName"
                              name="Last Name"
                              placeholder="Doe"
                              required
                              className="h-11 rounded-xl bg-muted/40 border-border/60 focus:border-primary transition-colors"
                            />
                          </div>
                        </div>

                        {/* Email + Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="modal-email" className="text-sm font-medium">Email Address</Label>
                            <Input
                              id="modal-email"
                              name="Email"
                              type="email"
                              placeholder="john@company.com"
                              required
                              className="h-11 rounded-xl bg-muted/40 border-border/60 focus:border-primary transition-colors"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="modal-company" className="text-sm font-medium">
                              Company <span className="text-muted-foreground font-normal">(optional)</span>
                            </Label>
                            <Input
                              id="modal-company"
                              name="Company"
                              placeholder="Your Company"
                              className="h-11 rounded-xl bg-muted/40 border-border/60 focus:border-primary transition-colors"
                            />
                          </div>
                        </div>

                        {/* Service selector */}
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Service Needed</Label>
                          <div className="flex flex-wrap gap-2">
                            {SERVICES.map((service) => (
                              <button
                                key={service}
                                type="button"
                                onClick={() => setSelectedService(service)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all duration-150 ${
                                  selectedService === service
                                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                    : "bg-muted/40 text-muted-foreground border-border/60 hover:border-primary/50 hover:text-foreground"
                                }`}
                              >
                                {service}
                              </button>
                            ))}
                          </div>
                          {/* Hidden input for form submission */}
                          <input type="hidden" name="Service" value={selectedService} />
                        </div>

                        {/* Message */}
                        <div className="space-y-1.5">
                          <Label htmlFor="modal-message" className="text-sm font-medium">
                            Tell us about your project
                          </Label>
                          <Textarea
                            id="modal-message"
                            name="Message"
                            placeholder="Describe your project, goals, timeline, and any specific requirements..."
                            rows={4}
                            required
                            className="rounded-xl bg-muted/40 border-border/60 focus:border-primary resize-none transition-colors"
                          />
                        </div>

                        {/* Submit */}
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold gap-2 shadow-lg shadow-primary/25 transition-all duration-200"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              Send My Request
                              <Send size={16} />
                            </>
                          )}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          No commitment required • Free initial consultation • Reply within 24 hours
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
