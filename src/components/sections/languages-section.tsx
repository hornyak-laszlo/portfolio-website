"use client"

import { motion } from "framer-motion"
import { languages } from "@/data/cv"

export function LanguagesSection() {
  return (
    <section id="languages" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-2 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Communication
            </p>
            <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
              Languages
            </h2>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <p className="font-medium text-foreground">{lang.name}</p>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
