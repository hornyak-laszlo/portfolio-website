"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Boxes, CheckCircle2, FileSpreadsheet, TrendingUp, UserCheck, Warehouse, Zap } from "lucide-react"
import { ImageDialog } from "@/components/image-dialog"

const stats = [
  {
    value: "50,000+",
    label: "Distributed SKU",
    icon: Boxes,
  },
  {
    value: "0",
    label: "Excel spreadsheet in the case management",
    icon: FileSpreadsheet,
  },
  {
    value: "95%",
    label: "Above error-free service",
    icon: CheckCircle2,
  },
  {
    value: "10+",
    label: "Case management automation",
    icon: Zap,
  },
]

const technologies = [
  "TypeScript",
  "Node.JS",
  "Express.js",
  "Vue.js",
  "Next.js",
  "PostgreSQL",
  "Prisma",
  "WebSocket",
]

export function EtradingCaseStudy() {
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
                ERP Development
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                Software Design
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              The transformation of eTrading Europe: tackling complex challenges with customised case management solutions
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
              Our client
            </p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="text-lg leading-relaxed text-foreground md:text-xl">
                  eTrading Europe is a dynamic and growing international company operating in the B2B segment, trading PC components and a wide range of electronic products and accessories. Founded in 2011 by two brothers, the company now boasts a headquarters in Hungary, near Budapest, and more than a decade of experience in international trade.
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
                    src="/etrading-casestudy.webp"
                    alt="eTrading Europe case study"
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
                    eTrading Europe has faced a number of challenges due to its outdated administration system. The system was not able to meet the specific needs of the company, so they had to use several different software and Excel spreadsheets to manage their data. This made the information flow complicated and error-prone, often causing administrative problems and slowing down customer service. In addition, processes were difficult to delegate due to the lack of a single interface.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    For eTrading Europe, it was essential to move to an integrated, modern and scalable transaction management system capable of handling increasing business processes and data volumes, enabling the introduction of automated operations, reducing manual labour and improving the speed of response to market changes.
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
                    Superwert worked in close cooperation with the eTrading Europe team to fully map the business processes and determine the most appropriate ways of operating. At specification workshops we not only got to know the processes, but also jointly developed the software specification and wireframes, which formed the basis for further development.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-foreground">
                        Design and specification
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        The first step of the project was the detailed design phase, where eTrading Europe&apos;s needs were thoroughly mapped and analysed. The jointly developed wireframes allowed for a visual overview of the different business processes and the necessary user interactions. This phase ensured that all stakeholders were aware of the functional requirements of the final product.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-foreground">
                        ERP system development
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        As a next step, Superwert started the development of an ERP system tailored for eTrading Europe, which took more than a year. During the development, we not only created a new, modern and scalable system, but also took care of the migration of data from the old system. The new ERP system was fully customised, precisely tailored to eTrading Europe&apos;s business needs.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-foreground">
                        B2B ecommerce store integration
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        In the second phase of the project, we developed an integrated B2B webshop that is closely linked to the ERP system. This webshop enabled eTrading Europe to manage its online trading activities more efficiently, including product management, price updates and order processing. In addition, we implemented several supplier product feeds into the ERP system, which further increased the automation and efficiency of the system.
                      </p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed text-foreground">
                    These steps have significantly contributed to the optimisation of eTrading Europe&apos;s business processes, enabling the company to respond more quickly to market changes and improve its customer service.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5">
                <ImageDialog
                  src="/etrading-dashboard.webp"
                  alt="eTrading Europe dashboard"
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
                  icon: TrendingUp,
                  title: "50,000+ SKU",
                  description:
                    "Automated upgrades and purchases enabled the distribution of an additional 50,000 SKUs.",
                },
                {
                  icon: FileSpreadsheet,
                  title: "Management without Excel spreadsheets",
                  description:
                    "We have completely eliminated the use of Excel spreadsheets in our business processes.",
                },
                {
                  icon: UserCheck,
                  title: "Easier to delegate processes",
                  description:
                    "The integrated system has made it easier for managers to delegate tasks.",
                },
                {
                  icon: CheckCircle2,
                  title: "Increased data accuracy",
                  description:
                    "The new system has reduced data errors and increased the accuracy of data management.",
                },
                {
                  icon: Warehouse,
                  title: "More efficient warehouse management",
                  description:
                    "Using the integrated B2B webshop and ERP system together has improved inventory management and optimisation.",
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
