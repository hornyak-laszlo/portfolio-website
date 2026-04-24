"use client"

import { motion } from "framer-motion"
import { experiences } from "@/data/cv"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            Professional Experience
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 flex flex-col gap-4 last:mb-0 md:flex-row md:gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 md:pr-8 md:text-right">
                {index % 2 === 0 && (
                  <div className="hidden md:block">
                    <span className="text-sm text-muted-foreground">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                )}
              </div>

              <div className="absolute left-4 mt-2 h-3 w-3 rounded-full border-2 border-background bg-primary md:left-1/2 md:-translate-x-1.5" />

              <Card className="ml-10 flex-1 md:ml-0 md:w-1/2">
                <CardContent className="p-6">
                  <div className="mb-2 md:hidden">
                    <span className="text-sm text-muted-foreground">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>

                  {index % 2 !== 0 && (
                    <div className="mb-1 hidden md:block">
                      <span className="text-sm text-muted-foreground">
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mb-1 font-medium text-primary">{exp.company}</p>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {exp.location}
                  </p>

                  <ul className="mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="shrink-0 leading-relaxed text-primary">
                          •
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
