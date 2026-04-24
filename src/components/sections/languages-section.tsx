"use client"

import { motion } from "framer-motion"
import { Languages } from "lucide-react"
import { languages } from "@/data/cv"
import { Card, CardContent } from "@/components/ui/card"

export function LanguagesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Languages
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary" />
        </motion.div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex items-center gap-3 p-4">
                  <Languages className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{lang.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {lang.level}
                    </p>
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
