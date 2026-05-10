"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  Boxes,
  Clock,
  Expand,
  Rocket,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react"
import { ImageDialog } from "@/components/image-dialog"

const stats = [
  {
    value: "90%",
    label: "time savings in processing product data",
    icon: Clock,
  },
  {
    value: "20%",
    label: "increase in online visibility",
    icon: TrendingUp,
  },
  {
    value: "50%",
    label: "Faster time to market",
    icon: Rocket,
  },
  {
    value: "5000+",
    label: "SKU Management",
    icon: Boxes,
  },
]

const technologies = [
  "TypeScript",
  "Node.JS",
  "Next.js",
  "PostgreSQL",
  "OpenAI",
]

export function SmartcatalogerCaseStudy() {
  return (
    <article className="min-h-screen">
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/"
              className="group mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to portfolio
            </a>

            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                AI Development
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                Software Design
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              The power of AI in product management: the SmartCataloger story
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              About the project
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="text-lg leading-relaxed text-foreground md:text-xl">
                  The idea came from a client who had a database of thousands of
                  products. In this project, the task was to use AI to generate
                  product descriptions and specifications, as well as categorise
                  and label. Although excellent AI solutions already exist to
                  achieve these goals, the large volume of products means that
                  they can only be achieved through coding.
                </p>
              </div>
              <div className="md:col-span-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/smartcataloger-casestudy.webp"
                    alt="SmartCataloger case study"
                    className="w-full rounded-lg"
                  />
                </motion.div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <stat.icon className="mb-2 h-5 w-5 text-muted-foreground" />
                  <span className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm leading-snug text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              The challenge
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-foreground">
                    The client had a database of thousands of products that
                    required detailed product descriptions, specifications,
                    categorisation and labelling. Traditional product description
                    methods proved time-consuming and error-prone.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The need was to develop a system that would allow these tasks
                    to be managed efficiently from an easy-to-use interface, while
                    exploiting the full potential of AI.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Solution
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="space-y-8">
                  <p className="text-lg leading-relaxed text-foreground">
                    The AI models and protocols were already available during the
                    customer engagement and were tested before development. Our
                    first step was to design a user-friendly interface. Once this
                    was done, we set about designing and building the database and
                    then writing the AI integrations. Finally, we implemented the
                    design plan.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-foreground">
                        AI-powered product management
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        SmartCataloger is a system that allows you to manage your
                        products continuously and efficiently. The simple user
                        interface allows product data to be processed quickly and
                        efficiently, minimising manual work and increasing
                        accuracy. Through AI integration, product descriptions and
                        specifications are automatically generated, categorised
                        and labelled, optimising the overall database.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-foreground">
                        Development process
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        This project was an excellent opportunity for our team to
                        work on an exciting and freer internal project, while
                        deepening their knowledge of AI solutions. We approached
                        the development systematically: first designing the
                        interface, then building the database architecture,
                        followed by AI integrations, and finally implementing the
                        complete design plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <ImageDialog
                  src="/smartcataloger-min.jpg"
                  alt="SmartCataloger interface"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              The results
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  icon: Clock,
                  title: "90% saves time in processing product data",
                  description:
                    "With AI and automated processes, product data management has become significantly faster.",
                },
                {
                  icon: TrendingUp,
                  title: "20% increase in online visibility",
                  description:
                    "AI-optimised product data improved search rankings and online presence.",
                },
                {
                  icon: Rocket,
                  title: "Faster time to market",
                  description:
                    "Automated product descriptions and specifications have allowed products to be brought to market faster, shortening the time between purchase and sale.",
                },
                {
                  icon: Expand,
                  title: "Flexible scalability",
                  description:
                    "The system easily handled the increasing volume of products, allowing the database to be scaled without the need for additional manual work.",
                },
                {
                  icon: Target,
                  title: "Optimised advertising campaigns",
                  description:
                    "With AI-generated ad copy and keyword lists, ad campaigns can target relevant audiences more effectively, increasing conversion rates and reducing ad costs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <item.icon className="h-6 w-6 text-muted-foreground" />
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
              Technologies used in the development
            </p>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  )
}
