"use client"

import { motion } from "framer-motion"
import { Mail, Download, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/cv"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center pt-16"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 shadow-xl md:h-48 md:w-48">
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="mb-2 flex items-center justify-center gap-2 text-muted-foreground md:justify-start">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{personalInfo.location}</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              {personalInfo.name}
            </h1>

            <h2 className="mb-6 text-xl font-medium text-primary md:text-2xl">
              {personalInfo.title}
            </h2>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {personalInfo.summary}
            </p>

            <div className="mb-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <Button variant="outline" size="sm" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <a href="/CV.pdf" download>
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-border pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
