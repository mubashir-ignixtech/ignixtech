"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import { navLinks, siteConfig } from "@/lib/constants"
import { HireProModal } from "@/components/hire-pro-modal"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHireModalOpen, setIsHireModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-serif text-2xl font-bold tracking-tight"
              >
                <Image src="/icon-light.svg" alt="Ignixtech Logo" width={150} height={150} className="block dark:hidden" />
                <Image src="/icon.svg" alt="Ignixtech Logo" width={150} height={150} className="hidden dark:block" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors group ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )
              })}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button asChild className="bg-transparent text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer border border-primary" onClick={() => setIsHireModalOpen(true)}>
                <span>Get in Touch</span>
              </Button>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={siteConfig.links.calendly} target="_blank" rel="noopener noreferrer">Get a Quote</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-background pt-20"
          >
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-xl font-medium transition-colors ${
                      pathname === link.href ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button asChild className="bg-transparent text-primary hover:bg-primary hover:text-primary-foreground cursor-pointer border border-primary" onClick={() => setIsHireModalOpen(true)}>
                  <span>Get in Touch</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a
                    href={siteConfig.links.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Quote
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hire a Pro Modal */}
      <HireProModal isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} />
    </>
  )
}
