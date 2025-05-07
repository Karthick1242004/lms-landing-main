"use client"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Twitter, BookOpen } from "lucide-react"
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision"

function Footerdemo() {
  return (
    <BackgroundBeamsWithCollision className="h-auto py-0">
      <footer className="bg-backgroundrelative z-10 border-t text-foreground transition-colors duration-300 w-full">
        <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Quantum Path</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Quantum Path is a modern Learning Management System designed to empower educators and learners. Our platform provides intuitive tools for course creation, student engagement, and educational achievement.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <a href="#home" className="transition-colors hover:text-primary">
                  Home
                </a>
                <a href="#about" className="transition-colors hover:text-primary">
                  About
                </a>
                <a href="#services" className="transition-colors hover:text-primary">
                  Features
                </a>
                <a href="#faq" className="transition-colors hover:text-primary">
                  FAQ
                </a>
                <a href="#careers" className="transition-colors hover:text-primary">
                  Pricing
                </a>
                <a href="#contact" className="transition-colors hover:text-primary">
                  Contact
                </a>
                <a href="/terms-of-service" className="transition-colors hover:text-primary">
                  Terms of Service
                </a>
                <a href="/privacy-policy" className="transition-colors hover:text-primary">
                  Privacy Policy
                </a>
              </nav>
            </div>

            {/* Social Media */}
            <div className="relative">
              <h3 className="mb-4 text-lg font-semibold">Stay Connected</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Twitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Instagram className="h-4 w-4" />
                          <span className="sr-only">Instagram</span>
                        </Button>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with us on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="mt-6">
                <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Subscribe to our newsletter for the latest updates and educational resources.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 rounded-md border border-border px-3 py-2 text-sm"
                    required
                  />
                  <Button type="submit" size="sm">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Quantum Path LMS. All rights reserved.</p>
            <nav className="flex gap-4 text-sm">
              <a href="/terms-of-service" className="transition-colors hover:text-primary">
                Terms
              </a>
              <a href="/privacy-policy" className="transition-colors hover:text-primary">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                Cookie Settings
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  )
}

export { Footerdemo }

