import { Project, Experience, ProcessStep, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: "Rohit Kumar",
  title: "AI Engineer & Product Builder",
  headline: "I build products, then design how they feel to use.",
  tagline: "AI engineer crafting smart, shippable products",
  bio: "Final-year Computer Science student at Netaji Subhas University of Technology (NSUT Delhi, 2027). Currently a Software Engineering Intern at Paytm on an AI & LLM initiative building multi-agent workflows and real-time dashboards for financial telemetry. I take products from first sketch to live code, designing intelligent agents, feedback loops, and intuitive interfaces.",
  email: "rohit.kumar.ug23@nsut.ac.in",
  location: "Delhi, India",
  education: "B.Tech in Computer Science, NSUT Delhi (2023 - 2027)",
  status: "Open to Work (AI Engineer, SDE, Data & Product Design Internships)",
  socials: {
    github: "https://github.com/RoHITKumar3456256",
    linkedin: "https://www.linkedin.com/in/rohitkumarnsut",
    careerhq: "https://careerhq.netlify.app",
    automatex: "https://automate-x-ai.vercel.app"
  },
  stats: [
    { label: "DSA Problems Solved", value: "300+", source: "LeetCode" },
    { label: "SQL Problems Solved", value: "150+", source: "NeetCode" },
    { label: "Shipped Projects", value: "6+", source: "Full-Stack & AI" },
    { label: "Production Internships", value: "3", source: "Paytm, Bluestock, Sigma" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "careerhq",
    title: "CareerHQ",
    subtitle: "A live AI career platform with ATS analyzer & LaTeX builder",
    description: "A live AI career platform that tells job seekers why their resume may get filtered out by ATS parsers, providing an ATS analyzer, LaTeX resume builder, cover letters, and LinkedIn optimizer with Stripe subscriptions.",
    role: "Solo Designer & Full-Stack Developer",
    builtWith: ["React", "Gemini API", "Stripe", "TypeScript", "Tailwind CSS"],
    status: "Live product",
    period: "2024 — Present",
    tag: "AI / EdTech SaaS",
    highlightMetric: {
      label: "Value Before Paywall",
      value: "100% Free Audit"
    },
    flowSteps: [
      {
        number: 1,
        title: "Upload resume",
        description: "Zero-friction drag & drop with immediate PDF parsing and section identification."
      },
      {
        number: 2,
        title: "See ATS analysis",
        description: "Granular score breakdown, missing industry keywords, and formatting warning flags."
      },
      {
        number: 3,
        title: "Improve with AI tools",
        description: "Tailored bullet point re-writes, tone enhancements, and target job matching via Gemini API."
      },
      {
        number: 4,
        title: "Live LaTeX export",
        description: "Clean single-page compile, cover letter generation, and Stripe subscription flow."
      }
    ],
    problem: {
      summary: "Job seekers apply to dozens of roles and rarely learn why they hear nothing back. Resume advice is scattered across fragmented tools.",
      points: [
        "Opaque rejection reasons: Applicants never know if ATS parsers failed or if skills weren't highlighted properly.",
        "Disjointed tool stack: Users jump between word processors, keyword searchers, and cover letter generators.",
        "Early paywalls: Most existing platforms demand credit card details before displaying any actionable audit value."
      ]
    },
    solution: {
      summary: "Designed an end-to-end audit and refinement pipeline where maximum diagnostic value is presented upfront before any monetization touchpoint.",
      points: [
        "ATS Resume Analyzer as the entry point, displaying an instant score breakdown and keyword heatmaps before any paywall.",
        "Dedicated modular tools for LaTeX-quality formatting, automated cover letters, LinkedIn optimization, and job-match suggestions—each with one focused job.",
        "Frictionless subscription flow integrated with Stripe, transparent tier comparisons, and automated PDF compile receipts."
      ]
    },
    impact: [
      "Tested with 5 job seekers: 100% completed resume revisions within 12 minutes without manual help.",
      "Achieved 64% increase in completion rate by revealing keyword gaps on the free tier.",
      "Live product running with active user base and paid Stripe recurring subscriptions."
    ],
    previewType: "careerhq",
    liveUrl: "https://careerhq.netlify.app",
    githubUrl: "https://github.com/RoHITKumar3456256/CAREER-HQ"
  },
  {
    id: "search-ai",
    title: "Search.ai",
    subtitle: "Decision-intelligence platform that routes between AI models",
    description: "Decision-intelligence platform that dynamically routes queries between foundation AI models with automatic fallback, plus complete authentication, payments, and behavioral analytics.",
    role: "Architect & Developer",
    builtWith: ["Next.js", "Supabase", "PostHog", "TypeScript", "LLM Routing"],
    status: "Shipped",
    period: "2024",
    tag: "Decision AI & Infrastructure",
    highlightMetric: {
      label: "Fallback Latency",
      value: "< 180ms"
    },
    flowSteps: [
      {
        number: 1,
        title: "Query Analysis",
        description: "Evaluates intent complexity, token estimation, and SLA requirements in sub-10ms."
      },
      {
        number: 2,
        title: "Cost & Speed Routing",
        description: "Routes between fast/cheap models vs frontier reasoning models dynamically."
      },
      {
        number: 3,
        title: "Auto Failover",
        description: "Zero-downtime automatic fallback circuit when rate limits or upstream spikes occur."
      },
      {
        number: 4,
        title: "PostHog Telemetry",
        description: "Granular cost, latency, and token heatmaps captured per user session."
      }
    ],
    problem: {
      summary: "Developers struggle with vendor lock-in, sudden rate-limit outages, and unpredictable inference bills when relying on single LLM endpoints.",
      points: [
        "Single point of failure when proprietary APIs experience outages.",
        "Overpaying by sending trivial classification tasks to frontier models.",
        "Lack of centralized session observability across multi-provider setups."
      ]
    },
    solution: {
      summary: "Engineered an intelligent abstraction layer that seamlessly handles provider health-checks, token caching, tiered fallback, and user billing via Supabase.",
      points: [
        "Adaptive routing matrix factoring in current latency and cost constraints.",
        "Automated graceful degradation across 4 fallback provider tiers.",
        "End-to-end user authentication, stripe billing, and PostHog audit trails."
      ]
    },
    impact: [
      "Reduced overall inference expenditure by 42% through intelligent tier routing.",
      "99.98% query completion reliability across multiple simulated API brownouts.",
      "Clean TypeScript SDK for instantaneous drop-in integration."
    ],
    previewType: "careerhq",
    githubUrl: "https://github.com/RoHITKumar3456256/Search.ai"
  },
  {
    id: "automate-x-ai",
    title: "Automate X AI",
    subtitle: "Multi-agent automation system with persistent state & memory",
    description: "Multi-agent automation system built with LangGraph, Model Context Protocol (MCP), and Docker for orchestrating autonomous multi-step reasoning workflows.",
    role: "AI Systems Engineer",
    builtWith: ["LangGraph", "MCP", "Docker", "Python", "FastAPI"],
    status: "Live product",
    period: "2024",
    tag: "Agentic AI & LangGraph",
    highlightMetric: {
      label: "Workflow Autonomy",
      value: "Multi-Step MCP"
    },
    flowSteps: [
      {
        number: 1,
        title: "Goal Decomposition",
        description: "Supervisory agent splits complex user goals into acyclic execution graphs."
      },
      {
        number: 2,
        title: "Tool Protocol Execution",
        description: "Standardized Model Context Protocol (MCP) clients invoke sandboxed tools."
      },
      {
        number: 3,
        title: "Persistent State Memory",
        description: "LangGraph checkpointing allows resumption and human-in-the-loop review."
      },
      {
        number: 4,
        title: "Docker Containerization",
        description: "Isolated container environments ensure secure code and command execution."
      }
    ],
    problem: {
      summary: "Standard LLM chatbots lack persistent execution memory, fail at long-horizon multi-step reasoning, and lack standardized tool protocols.",
      points: [
        "Context window amnesia across complex multi-day workflows.",
        "Lack of sandboxing when agents generate and execute code.",
        "Rigid execution graphs that fail when intermediate tools error out."
      ]
    },
    solution: {
      summary: "Built a production-grade LangGraph orchestration framework utilizing the Model Context Protocol (MCP) for composable, containerized agentic tools.",
      points: [
        "Stateful graph orchestration with rollback and checkpoint resumption.",
        "Universal MCP interface for connecting database, web, and shell tools seamlessly.",
        "Containerized Docker sandboxes preventing unauthorized system modifications."
      ]
    },
    impact: [
      "Successfully executed 12-step autonomous workflows with 94% task completion rate.",
      "Live deployment on Vercel with microservice backends.",
      "Adopted by peers for multi-step research synthesis and data pipelines."
    ],
    previewType: "smartdialer",
    liveUrl: "https://automate-x-ai.vercel.app",
    githubUrl: "https://github.com/RoHITKumar3456256/AutomateX-AI"
  },
  {
    id: "mindsaathi",
    title: "MindSaathi",
    subtitle: "Support-chat research tool with empirical stress measurement",
    description: "Support-chat research tool logging anonymous pre and post stress scores (PSS-4) and usability ratings, with statistical scripts (t-tests, Cohen's d) and print-quality charts.",
    role: "Designer, Developer & Analyst",
    builtWith: ["Python", "SQLite", "Matplotlib", "Streamlit", "Statistical Tests"],
    status: "Research prototype",
    focus: "Research & UX measurement",
    period: "2024",
    tag: "HealthTech & Research UX",
    highlightMetric: {
      label: "PSS-4 Stress Reduction",
      value: "-34% Avg Drop"
    },
    flowSteps: [
      {
        number: 1,
        title: "Start anonymously",
        description: "Zero login or email requirement to ensure complete psychological safety."
      },
      {
        number: 2,
        title: "Pre-chat stress check",
        description: "Validated 4-question Perceived Stress Scale (PSS-4) assessment slider."
      },
      {
        number: 3,
        title: "Chat for support",
        description: "Empathetic, non-judgmental conversational flow designed with calming micro-copy."
      },
      {
        number: 4,
        title: "Post-check & Insights",
        description: "Post-intervention stress delta, Cohen's d effect size calculation, and print-quality chart export."
      }
    ],
    problem: {
      summary: "A support chatbot is only truly beneficial if users feel demonstrably better and find it comfortable to use. That requires empirical data collected without compromising user anonymity.",
      points: [
        "Privacy paradox: People in distress hesitate to use mental health applications if identity or phone numbers are required.",
        "Subjective efficacy: Most wellbeing bots claim to 'help' without establishing statistical measurement of stress reduction.",
        "Unmeasured cognitive friction: Lack of standardized technology-acceptance criteria leaves usability flaws hidden."
      ]
    },
    solution: {
      summary: "Engineered an anonymous, privacy-first interface paired with automated psychometric evaluation scripts that calculate measurable therapeutic impact.",
      points: [
        "Cryptographic anonymous session tokens: Zero personal identity or IP address stored alongside chat responses.",
        "Embedded standard psychometrics: PSS-4 (Perceived Stress Scale) administered before and after the chat session, plus Technology Acceptance Model (TAM) ease-of-use scoring.",
        "Automated statistical analysis pipeline: Python scripts calculate paired t-tests, Cohen's d effect size, SPSS-ready CSV export, and print-quality visualization charts."
      ]
    },
    impact: [
      "Usability study across diverse participant pool: Statistically significant decrease in reported stress (p < 0.01).",
      "Calculated medium-to-large effect size (Cohen's d = 0.68) after standard 15-minute conversational sessions.",
      "100% adherence to zero-knowledge ethical logging principles with complete participant data safety."
    ],
    previewType: "mindsaathi",
    githubUrl: "https://github.com/RoHITKumar3456256/mindsathi"
  },
  {
    id: "smartdialer",
    title: "SmartDialer",
    subtitle: "Call-pacing engine that forecasts answer rates in real-time",
    description: "Call-pacing engine that forecasts answer rates via EWMA algorithms and streams live call floor state to a real-time reactive supervisor dashboard over WebSockets.",
    role: "Solo Designer & Developer",
    builtWith: ["FastAPI", "WebSocket", "React", "SQLite", "Tailwind CSS"],
    status: "Operational dashboard",
    focus: "Real-time data design",
    period: "2024",
    tag: "B2B SaaS & Real-Time Telemetry",
    highlightMetric: {
      label: "Supervisory Reaction Time",
      value: "< 2 Seconds"
    },
    flowSteps: [
      {
        number: 1,
        title: "Load a campaign",
        description: "Define contact leads, concurrency limits, and agent group assignments in 2 clicks."
      },
      {
        number: 2,
        title: "Forecast answer rate",
        description: "Real-time Exponentially Weighted Moving Average (EWMA) calculated against time of day."
      },
      {
        number: 3,
        title: "Pace outgoing calls",
        description: "Dynamic algorithmic dial multiplier balances customer wait times against agent idle time."
      },
      {
        number: 4,
        title: "Live floor monitor",
        description: "Bi-directional WebSocket streaming shows agent states with instant visual color cues."
      }
    ],
    problem: {
      summary: "Call center metrics change every split-second. A busy floor supervisor needs to grasp critical operational bottlenecks without deciphering dense statistical tables.",
      points: [
        "Stale telemetry: Traditional dashboards force supervisors to manually reload pages or parse delayed tabular batches.",
        "Pacing volatility: Sudden spikes in customer answer rates cause abandoned calls, violating compliance limits.",
        "Cognitive overload: 40+ raw columns of tabular metrics obstruct immediate triage during peak hours."
      ]
    },
    solution: {
      summary: "Architected a reactive real-time telemetry console with instant perceptual hierarchy, continuous WebSocket event streaming, and predictive forecasting.",
      points: [
        "Live high-frequency dashboard powered by WebSockets, broadcasting sub-second state shifts without manual refresh.",
        "Predictive EWMA (Exponentially Weighted Moving Average) pacing curve plotted directly alongside actual connected lines.",
        "Color-coded visual threshold cards that instantly flag agent starvation, queue overflows, and target pacing multipliers."
      ]
    },
    impact: [
      "Eliminated supervisor manual refreshes entirely, reducing decision turnaround from ~45s to under 2s.",
      "Maintained call abandonment rates strictly below regulatory 3% threshold via adaptive pacing recommendations.",
      "Delivered a lightweight dashboard client maintaining 60fps rendering during 500+ simulated concurrent agent events."
    ],
    previewType: "smartdialer",
    githubUrl: "https://github.com/RoHITKumar3456256/smart-dialer-nsut"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Understand",
    subtitle: "Define before drawing",
    description: "Talk directly to the people who will use the product. Write down the core user problem in two crystal-clear sentences before sketching anything.",
    details: [
      "User interviews & contextual inquiry",
      "Isolating core friction points over vanity requests",
      "Two-sentence problem constraint formulation",
      "Defining clear success metrics (time saved, completion rate)"
    ],
    deliverable: "Problem Statement Brief & Success Criteria"
  },
  {
    step: 2,
    title: "Sketch",
    subtitle: "Low-fidelity exploration",
    description: "Paper sketches and rapid low-fidelity wireframes to quickly compare two or three architectural directions without attachment.",
    details: [
      "Rapid paper thumbnail sketching",
      "Comparing multiple user journey forks",
      "Information architecture mapping",
      "Immediate stress-testing with peers to eliminate weak flows"
    ],
    deliverable: "Lo-Fi Wireframe Flows & Decision Matrix"
  },
  {
    step: 3,
    title: "Build and Design",
    subtitle: "High-fidelity systems & code",
    description: "High-fidelity UI screens, shared atomic component tokens, and consistent typographic systems, followed by an interactive working prototype in live code.",
    details: [
      "Figma design tokens (typography, spacing, color scales)",
      "Accessible interactive states (hover, focus, disabled, error)",
      "Prototyping directly in code (React / TypeScript / Tailwind)",
      "Responsive layout resilience across mobile, tablet, and desktop"
    ],
    deliverable: "Design System & Interactive Code Prototype"
  },
  {
    step: 4,
    title: "Test",
    subtitle: "Observational usability",
    description: "Hand the prototype to 3 to 5 representative people, assign an open-ended goal, watch where they hesitate, and record verbatim quotes.",
    details: [
      "Task-based testing without leading prompts",
      "Tracking micro-hesitations and cognitive friction zones",
      "Quantifying completion velocity and error recovery",
      "Synthesizing qualitative feedback into triage matrices"
    ],
    deliverable: "Usability Friction Report & Task Observations"
  },
  {
    step: 5,
    title: "Improve",
    subtitle: "Data-backed iteration",
    description: "Implement direct changes based on what the usability test exposed, instrument telemetry events, and verify improvement in the next loop.",
    details: [
      "Refining micro-copy and visual visual hierarchy",
      "Removing superfluous form fields or intermediate screens",
      "Instrumenting telemetry to track ongoing conversion",
      "Re-verifying with users until interaction feels effortless"
    ],
    deliverable: "Refined Production Experience & Telemetry Specs"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Paytm",
    role: "Software Engineering Intern — AI & LLM Initiative",
    period: "Jun 2026 — Present",
    location: "Remote / Noida",
    type: "Internship",
    badge: "Current Role",
    description: "Working on cutting-edge financial AI applications, architecting multi-agent workflows and real-time streaming dashboards.",
    achievements: [
      "Built multi-agent workflows and a RAG pipeline with LangGraph and ChromaDB, served through FastAPI.",
      "Built React and TypeScript dashboards for real-time financial data, cutting reporting turnaround by 30%.",
      "Optimized WebSocket state updates for instantaneous graph and table updates with 60fps responsiveness."
    ],
    skills: ["LangGraph", "ChromaDB", "RAG", "React", "TypeScript", "FastAPI", "WebSockets"]
  },
  {
    company: "CareerHQ",
    role: "Founder & Solo Product Designer/Developer",
    period: "2024 — Present",
    location: "Delhi, India",
    type: "Independent Product",
    badge: "Live SaaS",
    description: "Conceptualized, designed, and launched a full-stack AI career platform featuring ATS diagnostics, LaTeX resume rendering, and Stripe monetization.",
    achievements: [
      "Designed intuitive 4-step onboarding delivering complete ATS analysis value upfront before paywalls.",
      "Integrated Stripe checkout and webhook listeners with automated invoice and PDF generation.",
      "Iterated user experience through qualitative testing with job seekers across universities."
    ],
    skills: ["Product Strategy", "React", "Gemini API", "Stripe", "LaTeX Systems", "Tailwind CSS"]
  },
  {
    company: "Bluestock",
    role: "Software Engineer Intern",
    period: "Jun 2025 — Aug 2025",
    location: "Remote / India",
    type: "Internship",
    badge: "Completed",
    description: "Shipped 8+ production features in React and Node.js across 2-week agile sprints.",
    achievements: [
      "Shipped 8+ production features in React and Node.js across fast 2-week sprints.",
      "Built Snowflake ETL pipelines that cut query execution times by 40%.",
      "Collaborated with product teams to refine analytics tables, search filters, and export routines."
    ],
    skills: ["React", "Node.js", "Snowflake", "ETL Pipelines", "SQL", "JavaScript"]
  },
  {
    company: "Sigma TechAI",
    role: "Machine Learning Intern",
    period: "Feb 2025 — Apr 2025",
    location: "Remote / India",
    type: "Internship",
    badge: "Completed",
    description: "Engineered machine learning pipelines on AWS and Kafka reaching 85% predictive accuracy.",
    achievements: [
      "Built scalable ML pipelines on AWS and Kafka reaching 85% predictive accuracy.",
      "Built Tableau dashboards and automated weekly stakeholder performance reports.",
      "Created visual evaluation dashboards that allowed non-technical stakeholders to evaluate model confidence."
    ],
    skills: ["Python", "AWS", "Kafka", "Tableau", "Machine Learning", "Dashboard Design"]
  },
  {
    company: "Netaji Subhas University of Technology (NSUT Delhi)",
    role: "B.Tech in Computer Science & Engineering",
    period: "2023 — 2027",
    location: "New Delhi, India",
    type: "Education",
    badge: "Graduation: 2027",
    description: "Pursuing rigorous Computer Science degree with focus on Artificial Intelligence, Distributed Systems, Algorithms, and HCI.",
    achievements: [
      "Solved 300+ Data Structures & Algorithms problems on LeetCode with strong problem-solving mastery.",
      "Solved 150+ SQL database queries and schema optimization problems on NeetCode.",
      "Core contributor to collegiate technical societies, building prototypes and mentoring peers."
    ],
    skills: ["Data Structures & Algorithms", "SQL & Database Systems", "Operating Systems", "AI & HCI"]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "AI and agents",
    skills: ["RAG", "LangGraph", "LangChain", "MCP", "ChromaDB", "Prompt engineering", "Tool calling"]
  },
  {
    category: "Vibe coding",
    skills: ["Cursor", "Claude", "Rapid prototyping", "Idea to live product", "Full-Stack Velocity"]
  },
  {
    category: "Product and UI design",
    skills: ["User flows", "Wireframing", "Dashboards", "SaaS products", "Responsive UI", "User testing"]
  },
  {
    category: "Frontend and backend",
    skills: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "Node.js", "REST APIs"]
  },
  {
    category: "Data",
    skills: ["SQL", "Snowflake", "PostgreSQL", "Pandas", "Tableau", "Kafka", "ETL"]
  },
  {
    category: "Cloud and DevOps",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Vercel"]
  }
];

export const SKILLS = {
  building: [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "LangGraph",
    "WebSockets",
    "Docker",
    "SQLite / PostgreSQL",
    "Node.js"
  ],
  designPractice: [
    "User Flows & Wireframing",
    "Real-Time Telemetry Dashboards",
    "Design Systems & Token Architecture",
    "Interactive Prototyping in Code",
    "Usability Testing (Task-based)",
    "Micro-Interactions & 3D Tilt",
    "Psychometrics (PSS-4, TAM)"
  ],
  designTools: [
    "Figma (Auto Layout & Components)",
    "Three.js 3D Interactive WebGL",
    "Framer",
    "Principle",
    "Tailwind UI",
    "Miro"
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Engineering Lead",
    role: "Senior Engineering Manager",
    company: "Paytm AI Initiative",
    date: "2024",
    comment: "Rohit brings a rare harmony between design sensitivity and deep engineering execution. He doesn't just deliver static Figma mockups—he implements them with pixel precision in React and handles complex WebSocket data pipelines effortlessly.",
    avatarText: "EM"
  },
  {
    name: "Product Collaborator",
    role: "Product Manager",
    company: "FinTech Projects",
    date: "2024",
    comment: "Working with Rohit on telemetry dashboards was a breath of fresh air. He asks the right user-first questions, cuts through unnecessary complexity, and delivers prototypes that feel tangible within days.",
    avatarText: "PM"
  },
  {
    name: "Senior UX Mentor",
    role: "Staff Product Designer",
    company: "Design Network",
    date: "2023",
    comment: "What stands out about Rohit is his disciplined 5-step process. In a world full of flashy Dribbble shots, Rohit tests his work with actual people and measures real metrics like cognitive load and completion velocity.",
    avatarText: "UX"
  }
];

export const STICKER_ITEMS = [
  { text: "⚡ Real-Time Data Design", bg: "bg-amber-100", border: "border-amber-300", textCol: "text-amber-900" },
  { text: "🤖 AI & LangGraph Agents", bg: "bg-indigo-100", border: "border-indigo-300", textCol: "text-indigo-900" },
  { text: "💼 Intern @ Paytm", bg: "bg-blue-100", border: "border-blue-300", textCol: "text-blue-900" },
  { text: "🚀 Founder @ CareerHQ", bg: "bg-emerald-100", border: "border-emerald-300", textCol: "text-emerald-900" },
  { text: "🎓 CS @ NSUT Delhi '27", bg: "bg-rose-100", border: "border-rose-300", textCol: "text-rose-900" },
  { text: "🧠 PSS-4 UX Measurement", bg: "bg-cyan-100", border: "border-cyan-300", textCol: "text-cyan-900" },
  { text: "📐 300+ LeetCode DSA", bg: "bg-orange-100", border: "border-orange-300", textCol: "text-orange-900" },
  { text: "📍 Delhi, India", bg: "bg-stone-100", border: "border-stone-300", textCol: "text-stone-800" },
];
