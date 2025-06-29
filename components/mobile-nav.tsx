"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Users, Briefcase, Award, Phone, Calendar } from "lucide-react"

interface MobileNavProps {
  onBookConsultation: () => void
}

export function MobileNav({ onBookConsultation }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#about", label: "About", icon: Users },
    { href: "#services", label: "Services", icon: Briefcase },
    { href: "#cases", label: "Case Studies", icon: Award },
    { href: "#contact", label: "Contact", icon: Phone },
  ]

  const toggleNav = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleNav}
        className="md:hidden relative z-50"
        aria-label="Toggle navigation menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleNav}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <img src="/demotact-logo.png" alt="DEMOTACT" className="h-8 w-auto" />
                    <span className="text-xl font-bold text-primary">DEMOTACT</span>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <a
                          href={item.href}
                          onClick={toggleNav}
                          className="flex items-center space-x-4 text-lg text-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/5"
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Button */}
                <div className="p-6 border-t border-gray-200">
                  <Button
                    onClick={() => {
                      onBookConsultation()
                      toggleNav()
                    }}
                    className="w-full bg-button-gradient hover:bg-reverse-gradient text-white border-0"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
