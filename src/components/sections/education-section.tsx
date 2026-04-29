"use client"

import { motion } from "framer-motion"
import { education } from "@/data/cv"

export function EducationSection() {
  return (
    <section id="education" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Background
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Education
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <p className="text-sm font-medium text-muted-foreground">
                {edu.period}
              </p>
              <h3 className="mt-2 text-xl font-medium text-foreground">
                {edu.degree}
              </h3>
              <p className="mt-1 text-muted-foreground">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
