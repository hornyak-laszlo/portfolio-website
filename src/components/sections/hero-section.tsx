"use client"

import { motion } from "framer-motion"
import { ArrowDownRight, Download, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { personalInfo } from "@/data/cv"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end pt-32 pb-16 md:items-center md:pt-0 md:pb-0"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 lg:col-span-3"
          >
            <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-lg bg-muted md:max-w-none">
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="h-full w-full object-cover grayscale-[20%]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-8 lg:col-span-9"
          >
            <div className="flex flex-col gap-8 md:gap-10">
              <div>
                <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{personalInfo.location}</span>
                </div>
                <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                  {personalInfo.title}
                </p>
                <h1 className="text-5xl leading-[0.95] font-medium tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                  {personalInfo.name}
                </h1>
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {personalInfo.summary}
              </p>

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    <span>LinkedIn</span>
                    <ArrowDownRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                    <ArrowDownRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                    <ArrowDownRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                  </a>
                </div>

                <a
                  href="/CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
