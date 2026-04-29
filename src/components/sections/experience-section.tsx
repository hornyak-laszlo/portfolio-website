"use client"

import { motion } from "framer-motion"
import { experiences } from "@/data/cv"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Career
          </p>
          <h2 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Professional Experience
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-t border-border py-10 md:py-12"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <p className="text-sm font-medium text-muted-foreground">
                    {exp.startDate} — {exp.endDate}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <h3 className="text-xl font-medium text-foreground md:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-lg text-muted-foreground">
                    {exp.company}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
