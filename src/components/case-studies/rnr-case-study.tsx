"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  FileText,
  Gauge,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { ImageDialog } from "@/components/image-dialog"

const stats = [
  {
    value: "12",
    label: "month Development process",
    icon: Calendar,
  },
  {
    value: "20%",
    label: "Increase organisational efficiency",
    icon: Gauge,
  },
  {
    value: "80%",
    label: "fewer administrative errors",
    icon: CheckCircle2,
  },
  {
    value: "60%",
    label: "faster contracting process",
    icon: Zap,
  },
]

const technologies = [
  "TypeScript",
  "Node.JS",
  "tRPC",
  "Next.js",
  "Prisma",
  "PostgreSQL",
]

export function RnrCaseStudy() {
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
                CRM Development
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                Software Design
              </span>
            </div>

            <h1 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              How a unique CRM system brought radical changes to RNR Group
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
                  Founded in 2013, RNR Group has more than 20 years of experience
                  in providing personnel and technical support for theatre and film
                  productions. The company represents a broad range of artists and
                  arts professionals, providing them with legal and financial
                  support while building on mutual trust and high quality service
                  to advance their careers. From contract to payment, RNR Group
                  guarantees a high level of service, always keeping its promises
                  and respecting its clients&apos; interests.
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
                    src="/rnrgroup-casestudy-min.webp"
                    alt="RNR Group case study"
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
                    The RNR team faced serious challenges in managing artists&apos;
                    contracts and finances. An outdated software system, Excel
                    spreadsheets and paper-based methods required significant human
                    resource investment and were a source of frequent errors,
                    undermining workflow efficiency.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The agency&apos;s goal was to develop a modern, integrated CRM
                    system that would comprehensively manage and automate agency
                    processes, increasing efficiency and reducing the potential for
                    errors.
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
                    The CRM system project developed for RNR started with a
                    well-defined software specification, which was adapted as
                    necessary during development. Instead of the initial
                    traditional waterfall model, a hybrid agile methodology was
                    used to meet the changing needs of the customer. This approach
                    allowed us to respond flexibly to new needs and modifications,
                    ensuring the project could dynamically adapt to changes in the
                    business environment over the one-year development period.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-xl font-medium text-foreground">
                        Developing the CRM system
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        The integrated CRM system developed for RNR enables
                        efficient management of company processes. The system also
                        includes a user-friendly partner portal that provides
                        customers with all the information they need, reducing the
                        time spent by company staff. The integrated solution has
                        significantly facilitated the day-to-day operations of the
                        agency, optimising workflows and improving the management
                        of client relationships.
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-foreground">
                        Key features of the software
                      </h3>
                      <ul className="space-y-2 leading-relaxed text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                          Automated generation of customer contracts
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                          Full customer management module
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                          Ticket system, where all incoming requests and cases can
                          be handled transparently
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                          A financial accounting module, where you can manage the
                          complex financial aspects of your clients&apos; orders
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                          Automatic invoicing system based on the financial module
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                          Automated task assignment and status control
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                          Automated checklist management
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-medium text-foreground">
                        Designing a customer portal
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        A user-friendly partner portal was designed to give
                        customers access to all the information they need, from
                        contract status to financial statements. This has reduced
                        the administrative burden on staff while increasing
                        transparency and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <ImageDialog
                  src="/rnr_elszamolasok-min.jpg"
                  alt="RNR Group financial module"
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
                  icon: CheckCircle2,
                  title: "80% reduction in administrative errors",
                  description:
                    "Automated processes have minimised manual errors that were previously common.",
                },
                {
                  icon: FileText,
                  title: "Faster contracting process",
                  description:
                    "Automated contract generation makes contract preparation much faster and more efficient.",
                },
                {
                  icon: Users,
                  title: "Significant increase in customer satisfaction",
                  description:
                    "Following the introduction of the new system, customers gave positive feedback on the transparency and speed of the process.",
                },
                {
                  icon: TrendingUp,
                  title: "Reduced time spent on financial accounting",
                  description:
                    "The automated finance module has reduced the administrative burden, allowing staff to focus on other important tasks.",
                },
                {
                  icon: Users,
                  title: "More effective customer acquisition",
                  description:
                    "The new CRM system has enabled more efficient management and tracking of customer acquisition, which has helped to expand the customer base.",
                },
                {
                  icon: TrendingUp,
                  title: "Significant increase in profit margin",
                  description:
                    "RNR Group's profit margin has also increased thanks to more efficient business processes and faster customer service.",
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
