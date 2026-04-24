"use client"

import { motion } from "framer-motion"
import { Mail, Download, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { personalInfo } from "@/data/cv"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Get In Touch
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href={`mailto:${personalInfo.email}`}>
            <Button size="lg" className="w-full gap-2 sm:w-auto">
              <Mail className="h-4 w-4" />
              Send Email
            </Button>
          </a>
          <a href="/CV.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2 sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-12 flex items-center justify-center gap-6"
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-background p-3 transition-colors hover:border-primary hover:text-primary"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-background p-3 transition-colors hover:border-primary hover:text-primary"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-full border border-border bg-background p-3 transition-colors hover:border-primary hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        <Separator className="mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <div className="mb-2 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{personalInfo.location}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
