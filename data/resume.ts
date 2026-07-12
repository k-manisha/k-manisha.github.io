export const hero = {
  name: 'Manisha Kashyap',
  tagline: 'Software Engineer building toward fullstack + AI',
  subline: '7 years · React, TypeScript, Vue · Bangalore, India',
  links: {
    linkedin: 'https://linkedin.com/in/manisha-kashyap',
    github: 'https://github.com/k-manisha',
    email: 'kashyapmanisha29@gmail.com',
  },
}

export type ExperienceItem = {
  company: string
  title: string
  period: string
  location: string
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'SAP Labs',
    title: 'Developer',
    period: 'October 2023 – present',
    location: 'Bangalore, India',
    bullets: [
      'Sole frontend engineer on a cross-functional team of 8, owning frontend implementation and end-to-end delivery across two enterprise product UIs.',
      'Architected Dictionary as a Micro-Frontend (Module Federation) within Collaboration Hub, delivering a unified read/explore experience with tree-structured analytical table views using UI5 Web Components and React.',
      'Owned Suite Attributes UI end-to-end — full CRUD across asset setup, attribute configuration, and value management — coordinating frontend integration across 3 cross-suite teams, including bidirectional MFE integration support.',
      'Contributed to a 2× application performance improvement through lazy loading of category/subcategory data, React Query caching, and optimized data-fetching patterns.',
      'Leveraging AI-assisted tooling (OpenRewrite) to accelerate legacy ExtJS-to-React migration; uses Claude Code with MCP for day-to-day development productivity.',
      'Standardized frontend code quality by configuring ESLint rules and best practices adopted team-wide; write Vitest unit tests as part of standard feature delivery.',
      'Broke down and analysed frontend stories each release cycle, defining API contracts as the sole frontend decision-maker; conducted ~5 frontend code reviews per sprint within the team.',
      'Guided 3 junior engineers on React architecture, component design, and frontend best practices.',
    ],
  },
  {
    company: 'Great Software Laboratory',
    title: 'Software Engineer',
    period: 'August 2021 – October 2023',
    location: 'Remote',
    bullets: [
      'Sole frontend engineer on the Chargebee Integrations team, owning end-to-end UI delivery for 4 third-party integrations — HubSpot, NetSuite, Intacct, and Xero — from Figma to production in Vue.js.',
      'Decoupled frontend from backend delivery across all integrations, enabling independent frontend deployment and eliminating UI bundling from backend builds.',
      'Built advanced filter and search UI components across integrations; collaborated directly with backend engineers to finalize API contracts.',
      'Contributed UI fields for multi-entity support and led frontend rebranding (iconography and color system) across integrations, mentoring a junior engineer through the process.',
      'Operated as the sole frontend decision-maker on the team, reaching across to a senior frontend engineer in another team for architectural review when needed.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    title: 'Systems Engineer',
    period: 'June 2019 – August 2021',
    location: 'Pune, India',
    bullets: [
      'Built a reusable Angular widget library (MediaList, TileViewer, Data Grid, Filter with Redux, CDK Scroll) and composable experience widgets (Dependent Forms, multi-step flows) designed for org-wide reuse, enabling near-zero app-level boilerplate.',
      'Led Angular v8→v9 migration independently; contributed REST controllers, service interfaces, and DTOs in Spring Boot, with JUnit tests for backend and Jest tests for frontend as part of standard widget delivery.',
      'Operated as primary frontend contributor on a team of 10, regularly demoing work to stakeholders.',
    ],
  },
]

export type SkillGroup = {
  label: string
  values: string[]
}

export const skills: SkillGroup[] = [
  { label: 'Languages', values: ['TypeScript', 'JavaScript', 'Java'] },
  { label: 'Frontend', values: ['React', 'Vue.js', 'Angular', 'Next.js'] },
  { label: 'Styling', values: ['CSS', 'SCSS', 'UI5 Web Components'] },
  { label: 'State', values: ['Zustand', 'React Query', 'VueX'] },
  { label: 'Architecture', values: ['Micro-Frontends (Module Federation)', 'Component Libraries'] },
  { label: 'Testing', values: ['Vitest', 'Jest', 'React Testing Library'] },
  { label: 'Tooling', values: ['ESLint', 'Webpack', 'Git'] },
  { label: 'Backend', values: ['Spring Boot', 'REST APIs'] },
  { label: 'AI Tooling', values: ['Claude Code (Pair programming, MCP, Agents, Skills, Plugins)'] },
]

export type HackathonItem = {
  name: string
  result: string
  location: string
  period: string
  bullets: string[]
}

export const hackathons: HackathonItem[] = [
  {
    name: 'Signavio Code Camp 2025',
    result: 'Topic Winner',
    location: 'Berlin, Germany',
    period: 'Sep 29 – Oct 1, 2025',
    bullets: [
      'Won Topic Winner in the AI-Powered Technical Debt Solver challenge.',
      'Built Documate: AI-powered solution for automated technical documentation generation.',
      'Rapidly prototyped and demonstrated the solution using AI-assisted development tools.',
    ],
  },
  {
    name: 'AI Innovation Camp Goa, SAP',
    result: 'Participant',
    location: 'Goa, India',
    period: 'Apr 13–16, 2026',
    bullets: [
      "Selected via manager nomination for SAP's AI Innovation Camp and Hackathon.",
      'Built frontend and backend components for an AI-driven Jira-to-PR automation workflow.',
      'Utilised Claude and MCP integrations to streamline requirement analysis and code generation.',
    ],
  },
]

export type ProjectItem = {
  name: string
  note: string
  description: string
  bullets: string[]
  githubUrl?: string
  liveUrl?: string
}

export const projects: ProjectItem[] = [
  {
    name: 'Cleanup Agent',
    note: 'SAP internal project',
    description: 'AI-powered dictionary discovery and cleanup agent',
    bullets: [
      'Built with PydanticAI, integrating dictionary APIs to accelerate onboarding.',
      'Enables users to explore metadata, understand hierarchical relationships, and identify unused entries.',
      'Validates cleanup recommendations through dry-run execution before applying changes.',
    ],
  },
]

export const footer = {
  email: 'kashyapmanisha29@gmail.com',
  linkedin: 'https://linkedin.com/in/manisha-kashyap',
  github: 'https://github.com/k-manisha',
  credit: 'Built with Next.js · Deployed on GitHub Pages',
}
