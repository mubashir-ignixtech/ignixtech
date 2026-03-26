"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2 } from "lucide-react"
import { contactContent } from "@/lib/constants"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    console.log(process.env.NEXT_PUBLIC_WEB3FORMS_KEY)
    
    const formData = new FormData(e.currentTarget)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE")
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      
      const data = await response.json()
      
      if (data.success) {
        setIsSubmitted(true)
      } else {
        console.error("Form submission failed:", data)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <FadeIn>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-card rounded-2xl border border-border p-8 text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {contactContent.form.successTitle}
          </h3>
          <p className="text-muted-foreground mb-6">
            {contactContent.form.successDescription}
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            {contactContent.form.buttonRetry}
          </Button>
        </motion.div>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      <div className="relative bg-[#f0f9ff] dark:bg-sky-900/10 rounded-3xl border border-border/50 p-8 sm:p-10 overflow-hidden shadow-sm">
        {/* Subtle SVG Noise Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            {contactContent.form.title}
          </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="First Name"
                placeholder="John"
                required
                className="bg-background border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="Last Name"
                placeholder="Doe"
                required
                className="bg-background border-border"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="Email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-background border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company (Optional)</Label>
            <Input
              id="company"
              name="Company"
              placeholder="Your Company"
              className="bg-background border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="Subject"
              placeholder="How can we help?"
              required
              className="bg-background border-border"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="Message"
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="bg-background border-border resize-none"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 shadow-sm relative z-10"
          >
            {isLoading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
              />
            ) : (
              <>
                {contactContent.form.buttonText}
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
        </div>
      </div>
    </FadeIn>
  )
}
