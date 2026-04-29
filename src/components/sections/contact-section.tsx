"use client"

import { motion } from "framer-motion"
import { Mail, ArrowUpRight, Download } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { personalInfo } from "@/data/cv"

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Contact
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center justify-between border-b border-border pb-4 transition-colors hover:border-foreground"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg font-medium text-foreground">
                  Send an email
                </span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/CV.pdf"
              download
              className="group flex items-center justify-between border-b border-border pb-4 transition-colors hover:border-foreground"
            >
              <div className="flex items-center gap-3">
                <Download className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg font-medium text-foreground">
                  Download CV
                </span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-border pb-4 transition-colors hover:border-foreground"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg font-medium text-foreground">
                  LinkedIn
                </span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-border pb-4 transition-colors hover:border-foreground"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-lg font-medium text-foreground">
                  GitHub
                </span>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-24 border-t border-border pt-8 md:mt-32"
        >
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
