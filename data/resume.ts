export const hero = {
  name: "Manisha Kashyap",
  tagline: "Software Engineer | Full-Stack & AI",
  subline: "7 years · React, TypeScript, Vue · Bangalore, India",
  links: {
    linkedin: "https://linkedin.com/in/manisha-kashyap",
    github: "https://github.com/k-manisha",
    email: "kashyapmanisha29@gmail.com",
  },
};

export const about =
  "Frontend engineer with 7 years of experience building enterprise web applications at SAP, Chargebee, and TCS. I specialise in React, TypeScript, and micro-frontend architecture — owning end-to-end frontend delivery as the sole engineer on every team I have been part of. Currently expanding into fullstack development and AI engineering, building toward roles where I can own the full product stack.";

export type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "SAP Labs",
    title: "Developer",
    period: "Oct 2023 – present",
    location: "Bangalore, India",
    summary:
      "As the sole frontend engineer in a cross-functional team, I own the architecture and end-to-end delivery of enterprise React applications. I architect React-based micro-frontends, drive cross-team integrations, and define frontend architecture, API contracts, and engineering standards. I also mentor junior engineers, champion code quality through testing and reviews, and leverage AI-assisted development to accelerate modernization.",
    bullets: [
      "Sole frontend engineer on a cross-functional team of 8, owning frontend implementation and end-to-end delivery across two enterprise product UIs.",
      "Architected Dictionary as a Micro-Frontend (Module Federation) within Collaboration Hub, delivering a unified read/explore experience with tree-structured analytical table views using UI5 Web Components and React.",
      "Owned Suite Attributes UI end-to-end — full CRUD across asset setup, attribute configuration, and value management — coordinating frontend integration across 3 cross-suite teams, including bidirectional MFE integration support.",
      "Contributed to a 2× application performance improvement through lazy loading of category/subcategory data, React Query caching, and optimized data-fetching patterns.",
      "Leveraging AI-assisted tooling (OpenRewrite) to accelerate legacy ExtJS-to-React migration; uses Claude Code with MCP for day-to-day development productivity.",
      "Standardized frontend code quality by configuring ESLint rules and best practices adopted team-wide; write Vitest unit tests as part of standard feature delivery.",
      "Broke down and analysed frontend stories each release cycle, defining API contracts as the sole frontend decision-maker; conducted ~5 frontend code reviews per sprint within the team.",
      "Guided 3 junior engineers on React architecture, component design, and frontend best practices.",
    ],
    tech: ["React", "TypeScript", "Module Federation", "React Query", "Zustand", "Vitest", "ESLint", "UI5 Web Components"],
  },
  {
    company: "Great Software Laboratory",
    title: "Software Engineer",
    period: "Aug 2021 – Oct 2023",
    location: "Remote",
    summary:
      "As the sole frontend engineer on the Chargebee Integrations team, I owned end-to-end UI delivery for multiple third-party integrations using Vue.js. Built scalable integration experiences, decoupled frontend deployments from backend releases, and developed reusable search and filtering components. Collaborated on API design, led UI rebranding efforts, and mentored a junior engineer while driving frontend architecture and delivery decisions independently.",
    bullets: [
      "Sole frontend engineer on the Chargebee Integrations team, owning end-to-end UI delivery for 4 third-party integrations — HubSpot, NetSuite, Intacct, and Xero — from Figma to production in Vue.js.",
      "Decoupled frontend from backend delivery across all integrations, enabling independent frontend deployment and eliminating UI bundling from backend builds.",
      "Built advanced filter and search UI components across integrations; collaborated directly with backend engineers to finalize API contracts.",
      "Contributed UI fields for multi-entity support and led frontend rebranding (iconography and color system) across integrations, mentoring a junior engineer through the process.",
      "Operated as the sole frontend decision-maker on the team, reaching across to a senior frontend engineer in another team for architectural review when needed.",
    ],
    tech: ["Vue.js", "JavaScript", "VueX", "REST APIs", "Webpack", "SCSS"],
  },
  {
    company: "Tata Consultancy Services",
    title: "Systems Engineer",
    period: "Jun 2019 – Aug 2021",
    location: "Pune, India",
    summary:
      "Built reusable Angular component libraries and composable widgets that reduced application-level boilerplate across projects. Independently led the Angular v8→v9 migration while contributing to Spring Boot backend services and automated testing. As the primary frontend engineer, collaborated closely with stakeholders, regularly demoing features and delivering scalable solutions for enterprise applications.",
    bullets: [
      "Built a reusable Angular widget library (MediaList, TileViewer, Data Grid, Filter with Redux, CDK Scroll) and composable experience widgets (Dependent Forms, multi-step flows) designed for org-wide reuse, enabling near-zero app-level boilerplate.",
      "Led Angular v8→v9 migration independently; contributed REST controllers, service interfaces, and DTOs in Spring Boot, with JUnit tests for backend and Jest tests for frontend as part of standard widget delivery.",
      "Operated as primary frontend contributor on a team of 10, regularly demoing work to stakeholders.",
    ],
    tech: ["Angular", "TypeScript", "Spring Boot", "Jest", "Redux", "Java"],
  },
];

export type SkillCategory = {
  label: string;
  icon: string;
  values: string[];
};

export const skills: SkillCategory[] = [
  { icon: "⌨️", label: "Languages", values: ["TypeScript", "JavaScript", "Java"] },
  { icon: "🖥️", label: "Frontend", values: ["React", "Vue.js", "Angular", "Next.js"] },
  { icon: "🎨", label: "Styling", values: ["CSS", "SCSS", "UI5 Web Components"] },
  { icon: "🔄", label: "State", values: ["Zustand", "React Query", "VueX"] },
  { icon: "🧱", label: "Architecture", values: ["Module Federation", "Component Libraries", "Micro-Frontends"] },
  { icon: "🧪", label: "Testing", values: ["Vitest", "Jest", "React Testing Library"] },
  { icon: "🔧", label: "Tooling", values: ["ESLint", "Webpack", "Git"] },
  { icon: "⚙️", label: "Backend", values: ["Spring Boot", "REST APIs"] },
  { icon: "🤖", label: "AI", values: ["Claude Code", "MCP", "Agents", "AI-assisted dev"] },
];

export type HackathonItem = {
  name: string;
  result: string;
  location: string;
  period: string;
  bullets: string[];
};

export const hackathons: HackathonItem[] = [
  {
    name: "Signavio Code Camp 2025",
    result: "Topic Winner",
    location: "Berlin, Germany",
    period: "Sep 29 – Oct 1, 2025",
    bullets: [
      "Topic Winner — AI-Powered Technical Debt Solver challenge.",
      "Built Documate: AI-powered automated technical documentation generation.",
    ],
  },
  {
    name: "AI Innovation Camp Goa, SAP",
    result: "Participant",
    location: "Goa, India",
    period: "Apr 13–16, 2026",
    bullets: [
      "Selected via manager nomination.",
      "Built a Jira-to-PR automation workflow using Claude and MCP integrations.",
    ],
  },
];

export type ProjectItem = {
  name: string;
  note: string;
  description: string;
  bullets: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Cleanup Agent",
    note: "SAP internal project",
    description:
      "AI-powered dictionary discovery and cleanup agent built with PydanticAI",
    bullets: [
      "Integrates dictionary APIs to explore metadata and understand hierarchical relationships.",
      "Identifies unused entries and validates cleanup recommendations via dry-run before applying.",
    ],
  },
];

export const footer = {
  email: "kashyapmanisha29@gmail.com",
  linkedin: "https://linkedin.com/in/manisha-kashyap",
  github: "https://github.com/k-manisha",
  credit: "Built with Next.js · Deployed on GitHub Pages",
};
