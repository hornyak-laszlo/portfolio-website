export interface Experience {
  id: string
  company: string
  location: string
  role: string
  startDate: string
  endDate: string
  description: string[]
  stack: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
}

export interface Language {
  name: string
  level: string
}

export interface SkillCategory {
  category: string
  technologies: string[]
}

export interface PersonalInfo {
  name: string
  title: string
  summary: string
  location: string
  email: string
  linkedin: string
  github: string
}

export const personalInfo: PersonalInfo = {
  name: "László Hornyák",
  title: "Full-Stack Developer & AI Engineer",
  summary:
    "Experienced Full-Stack Developer and AI Software Engineer with over 10 years of industry experience, including technical leadership as CTO and co-founder. Proficient in modern web frameworks, cloud platforms, and AI/LLM technologies. Proven track record building scalable automation tools, chatbot solutions, and enterprise software. Strong problem-solving skills and quick adaptability to new technologies.",
  location: "Würzburg, Germany",
  email: "hornyak.laszlo88@gmail.com",
  linkedin: "https://www.linkedin.com/in/lhornyak/",
  github: "https://github.com/hornyak-laszlo",
}

export const experiences: Experience[] = [
  {
    id: "eye-able",
    company: "Eye-Able GmbH",
    location: "Würzburg, DE",
    role: "Full Stack Software Engineer",
    startDate: "December 2025",
    endDate: "Present",
    description: [
      "Contributing to the development of a Digital Accessibility Platform to improve web accessibility",
      "Designing and implementing AI features based on OpenAI LLMs for automated analysis and optimization of web content",
      "Developing frontend and backend components in close collaboration with product and design teams",
    ],
    stack: ["React", "Node.js", "MySQL", "Scaleway", "OpenAI"],
  },
  {
    id: "ososoft",
    company: "Ososoft GmbH",
    location: "Würzburg, DE",
    role: "AI Software Developer",
    startDate: "November 2024",
    endDate: "November 2025",
    description: [
      "Developed ProcessBridge, an AI-based automation platform using Anthropic LLMs",
      "Designed and implemented frontend features and backend APIs (React & Python)",
      "Built AI-driven pipelines to optimize business processes",
      "Worked agile in a Scrum team of 4–6 developers",
    ],
    stack: [
      "React",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Azure",
    ],
  },
  {
    id: "superwert",
    company: "Superwert Kft.",
    location: "Budapest, HU — Remote",
    role: "Chief Technology Officer",
    startDate: "September 2022",
    endDate: "October 2024",
    description: [
      "Led the development of custom B2B software solutions and internal tools",
      "Built and managed a remote development team while actively contributing to the codebase",
      "Delivered complex systems including CRM platforms and trading applications",
      "Responsible for delivery, resource planning, and technical roadmap",
      "Architected and implemented cloud-native systems",
    ],
    stack: [
      "Node.js (TypeScript)",
      "Express",
      "Hono",
      "Bun",
      "React (Next)",
      "Vue (Nuxt)",
      "PostgreSQL",
      "TRPC",
      "Strapi",
      "Astro",
      "DigitalOcean",
      "GCP",
    ],
  },
  {
    id: "botfriends",
    company: "BOTfriends GmbH",
    location: "Würzburg, DE",
    role: "Full Stack Software Engineer",
    startDate: "October 2018",
    endDate: "October 2024",
    description: [
      "Developed an AI agent platform for voicebot, chatbot, and email channels",
      "Designed and implemented event-driven, cloud-native, and microservice architectures",
      "Extensive and in-depth use of Google Cloud Platform services",
      "Applied the latest LLM and generative AI technologies in customer service",
      "Worked agile in a Scrum team of 5–8 developers; mentored junior developers",
      "OKR-based development",
    ],
    stack: [
      "Node.js (TypeScript)",
      "Express",
      "Nest",
      "Vue (Nuxt)",
      "MongoDB",
      "Firestore",
      "Redis",
      "GCP",
      "Dialogflow",
      "Azure",
      "AWS",
    ],
  },
  {
    id: "compronet",
    company: "Compronet GmbH",
    location: "Fürth, DE",
    role: "Full Stack Software Engineer",
    startDate: "March 2016",
    endDate: "September 2018",
    description: [
      "Contributed to major projects including a clothing management system (DBL), weather statistics, and BMW Car Tracking",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "Angular.js",
      "Angular",
      "MongoDB",
      "Atlassian toolchain",
    ],
  },
  {
    id: "concept-online",
    company: "Concept Online Kft.",
    location: "Budapest, HU",
    role: "Full Stack Software Engineer",
    startDate: "August 2012",
    endDate: "February 2016",
    description: [
      "Delivered complete solutions for clients including Mercedes-Benz and educational institutions",
    ],
    stack: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Node.js",
      "Express.js",
      "AngularJS",
      "MySQL",
      "MongoDB",
      "Linux",
      "Git",
      "Atlassian",
      "AWS",
    ],
  },
]

export const education: Education[] = [
  {
    degree: "MSc in Business Informatics",
    institution: "Budapest University of Technology and Economics",
    period: "2011–2013",
  },
  {
    degree: "BSc in Electrical Engineering",
    institution: "Budapest University of Technology and Economics",
    period: "2007–2011",
  },
]

export const languages: Language[] = [
  { name: "Hungarian", level: "Native" },
  { name: "English", level: "Business fluent" },
  { name: "German", level: "Business fluent" },
]

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    technologies: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Node.js",
      "PHP",
      "Java",
      "SQL",
      "CSS",
      "HTML",
    ],
  },
  {
    category: "Frameworks",
    technologies: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Astro",
      "Angular",
      "Express.js",
      "Nest.js",
      "FastAPI",
      "Django",
      "Hono",
      "Laravel",
      "TRPC",
      "Strapi",
    ],
  },
  {
    category: "CSS Frameworks",
    technologies: [
      "Tailwind",
      "ShadCN",
      "React MUI",
      "Vuetify",
      "Ant Design",
      "Bootstrap",
      "Bulma",
      "Element Plus",
      "PicoCSS",
    ],
  },
  {
    category: "Databases",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Google Firestore",
    ],
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      "GCP",
      "AWS",
      "Azure",
      "DigitalOcean",
      "Cloud Build",
      "GitHub Actions",
    ],
  },
  {
    category: "AI & Generative AI",
    technologies: ["OpenAI", "Anthropic", "Dialogflow", "LLM Integration"],
  },
  {
    category: "Tools",
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "Jira",
      "Confluence",
      "Bitbucket",
    ],
  },
]

export const softSkills: string[] = [
  "Fast learner",
  "Creative thinker",
  "Solution-oriented",
  "Communicative",
  "Open to learning and growth",
]
