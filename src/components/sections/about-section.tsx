"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/cv"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-primary" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            {personalInfo.summary}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
