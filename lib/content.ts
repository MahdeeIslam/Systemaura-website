/* ============================================================================
   SystemAura Solutions — Site content
   ----------------------------------------------------------------------------
   All user-facing copy lives here so it can be edited in one place without
   touching layout code. Tone rules: outcome-focused, plain verbs, active voice,
   no jargon (never "React", "AI", "API", "integration" or "development" in
   anything a customer reads).
   ============================================================================ */

import type { IconName } from "@/components/ui/Icon";

export const COMPANY = {
  name: "SystemAura Solutions",
  shortName: "SystemAura",
  location: "Melbourne",
  email: "systemaurasolutions@gmail.com",
  // No public phone number yet.
  primaryCta: "Book a Free Operational Audit",
} as const;

/* --- Primary navigation (shared Header + Footer) --- */
export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
] as const;

/* --- Trust bar (homepage) ----------------------------------------------------
   TODO: replace with real client logos. */
export const TRUST_LOGOS = [
  "GlassCube Victoria",
  "Total Joinery Supplies",
  "ACS Shopfitters",
  "Complete Kitchens",
  "VTF Cabinet Makers",
] as const;

/* --- Solutions (homepage "Solutions" section: four cards) --- */
export interface Solution {
  icon: IconName;
  title: string;
  outcome: string;
}
export const SOLUTIONS: Solution[] = [
  {
    icon: "system",
    title: "Custom Systems",
    outcome: "Tailored business systems built around your unique workflows.",
  },
  {
    icon: "automation",
    title: "Automations",
    outcome: "We automate repetitive tasks and make everyday work run smoother.",
  },
  {
    icon: "app",
    title: "Web Applications",
    outcome:
      "Powerful internal tools that improve efficiency and data visibility.",
  },
  {
    icon: "website",
    title: "Websites",
    outcome: "High-converting websites that generate leads and build trust.",
  },
];

/* --- Services (detailed breakdown on /services) --- */
export interface ServiceDetail extends Solution {
  problem: string;
  includes: string[];
  result: string;
}
export const SERVICES: ServiceDetail[] = [
  {
    icon: "system",
    title: "Custom Systems",
    outcome: "Tailored business systems built around your unique workflows.",
    problem:
      "Off-the-shelf tools force your team to work the way the software wants, not the way your business actually runs. The result is double handling, spreadsheets everywhere, and information that lives in someone's head.",
    includes: [
      "A system mapped to how your jobs, quotes and orders really flow",
      "One place for your team to see the status of every job",
      "Clear roles and permissions so the right people see the right things",
      "Reporting that tells you what's making and costing you money",
    ],
    result:
      "Your whole operation runs from one source of truth — less double handling, fewer mistakes, and decisions backed by real numbers.",
  },
  {
    icon: "automation",
    title: "Automations",
    outcome: "We automate repetitive tasks and make everyday work run smoother.",
    problem:
      "Your best people spend hours every week on copy-paste admin, chasing updates and re-entering the same information. That time is expensive and it's slowing everything down.",
    includes: [
      "Automatic customer updates at each stage of a job",
      "Quotes, invoices and reminders that send themselves",
      "Hand-offs between your team that happen without chasing",
      "Alerts when something needs attention so nothing slips",
    ],
    result:
      "Hours of manual admin disappear every week, your team focuses on the work that matters, and customers feel looked after automatically.",
  },
  {
    icon: "app",
    title: "Web Applications",
    outcome:
      "Powerful internal tools that improve efficiency and data visibility.",
    problem:
      "Once you grow past a few people, spreadsheets and group chats stop keeping up. Nobody has a clear, live picture of what's happening across jobs and teams.",
    includes: [
      "A live dashboard of every job, order and deadline",
      "Tools your team can use on the floor, on site or on the road",
      "Real-time visibility for managers without asking for updates",
      "Information that's secure, backed up and always up to date",
    ],
    result:
      "Everyone works from the same live picture, managers get answers at a glance, and your business can scale without losing control.",
  },
  {
    icon: "website",
    title: "Websites",
    outcome: "High-converting websites that generate leads and build trust.",
    problem:
      "A slow or dated website quietly costs you work. Prospects judge your business in seconds, and a confusing site sends them straight to a competitor.",
    includes: [
      "A fast, modern site that loads instantly on any device",
      "Clear messaging that turns visitors into enquiries",
      "Built so you can be found by the customers searching for you",
      "Easy to update as your business changes",
    ],
    result:
      "A website that works as your best salesperson — bringing in qualified enquiries around the clock and making your business look as good as it is.",
  },
];

/* --- The Problem (homepage: five cards) --- */
export interface ProblemCard {
  icon: IconName;
  title: string;
  description: string;
}
export const PROBLEMS: ProblemCard[] = [
  {
    icon: "clock",
    title: "Manual Processes",
    description: "Time-consuming tasks eating into productivity.",
  },
  {
    icon: "funnel",
    title: "Lost Opportunities",
    description: "Leads falling through the cracks.",
  },
  {
    icon: "eye-off",
    title: "Poor Visibility",
    description: "No real-time insight across jobs and teams.",
  },
  {
    icon: "scale",
    title: "Struggling to Grow",
    description: "Systems that can't keep up as the work grows.",
  },
  {
    icon: "cash",
    title: "Cash Flow Delays",
    description: "Slow invoicing and payment follow-ups.",
  },
];

/* --- Industries -------------------------------------------------------------
   Four industries have dedicated pages; "Shopfitting" is shown as a tile that
   points to the industries overview. */
export interface Industry {
  slug: string;
  name: string; // short label used on tiles
  icon: IconName;
  /** When false, the tile links to the /industries overview instead of a page */
  hasPage: boolean;
  headline: string;
  intro: string;
  pains: string[];
  solutions: { title: string; description: string }[];
  caseAngle: string;
}
export const INDUSTRIES: Industry[] = [
  {
    slug: "glass-manufacturers",
    name: "Glass Manufacturing",
    icon: "glass",
    hasPage: true,
    headline: "Systems built for glass manufacturers who can't afford a remake.",
    intro:
      "Glass is unforgiving — one wrong measurement or missed update and a panel becomes a costly remake. We build systems that keep every order accurate and every customer informed, from quote to delivery.",
    pains: [
      "Tracking jobs across dozens of panels and orders on whiteboards and spreadsheets",
      "Quote errors that quietly eat your margin",
      "Breakages and remakes that are hard to trace and account for",
      "Customers calling for updates because they're left in the dark",
    ],
    solutions: [
      {
        title: "Accurate job and panel tracking",
        description:
          "Every order, panel and stage tracked in one place, so nothing gets lost between the saw and the truck.",
      },
      {
        title: "Quoting that protects your margin",
        description:
          "Consistent, fast quotes built on your real costs — fewer errors and no more guesswork.",
      },
      {
        title: "Breakage and remake visibility",
        description:
          "Log remakes the moment they happen and see exactly what they're costing you over time.",
      },
      {
        title: "Automatic customer updates",
        description:
          "Customers are notified at each stage automatically, so your phone stops ringing for status checks.",
      },
    ],
    caseAngle:
      "A Melbourne glass manufacturer cut admin time and sped up payments after we automated job tracking, customer updates and reminders.",
  },
  {
    slug: "cabinet-makers",
    name: "Cabinet Making",
    icon: "cabinet",
    hasPage: true,
    headline: "Run every cabinet job from one clear, calm system.",
    intro:
      "Custom cabinetry lives or dies on detail. We build systems that keep every job, material order and install on track — so you can take on more work without the chaos.",
    pains: [
      "Job details scattered across emails, texts and the workshop whiteboard",
      "Material orders and lead times that slip and stall installs",
      "No clear view of which jobs are profitable",
      "Installs booked in without the right information ready",
    ],
    solutions: [
      {
        title: "One home for every job",
        description:
          "Drawings, measurements, materials and dates in one place your whole team can see.",
      },
      {
        title: "Material and lead-time tracking",
        description:
          "Know what's ordered, what's arrived and what's holding up an install before it becomes a problem.",
      },
      {
        title: "Job profitability at a glance",
        description:
          "See estimated versus actual cost on every job, so you quote the next one with confidence.",
      },
      {
        title: "Smoother scheduling and installs",
        description:
          "Bookings, reminders and checklists that keep installs running on time.",
      },
    ],
    caseAngle:
      "A cabinet maker reclaimed days of admin each month by replacing whiteboards and spreadsheets with one shared job system.",
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "construction",
    hasPage: true,
    headline: "Keep every project, crew and cost under control.",
    intro:
      "Construction runs on coordination. We build systems that connect the office, the site and your subbies — so jobs stay on schedule and on budget.",
    pains: [
      "Site updates trapped in phone calls and group chats",
      "Variations and costs that aren't captured until it's too late",
      "Compliance and documents scattered across folders and inboxes",
      "No live view of where each project actually stands",
    ],
    solutions: [
      {
        title: "Office-to-site visibility",
        description:
          "A live view of every project's progress, costs and deadlines — no chasing required.",
      },
      {
        title: "Variation and cost capture",
        description:
          "Log variations and costs as they happen so nothing slips through and margins stay protected.",
      },
      {
        title: "Documents and compliance in order",
        description:
          "Certificates, checklists and paperwork stored and tracked, ready when you need them.",
      },
      {
        title: "Automated updates and reminders",
        description:
          "Clients, crews and subbies kept in the loop automatically at every milestone.",
      },
    ],
    caseAngle:
      "A construction firm gained a real-time view of every project and stopped variations from eating into margins.",
  },
  {
    slug: "trades",
    name: "Trades & Services",
    icon: "trades",
    hasPage: true,
    headline: "Less time on admin. More time on the tools.",
    intro:
      "When you're on the tools all day, admin happens at night. We build systems that handle scheduling, quoting and invoicing for you — so you get paid faster and your evenings back.",
    pains: [
      "Quotes and invoices done after hours instead of on the job",
      "Missed follow-ups that cost you work",
      "Double bookings and forgotten jobs",
      "Slow payments and awkward chasing",
    ],
    solutions: [
      {
        title: "Quoting and invoicing on the spot",
        description:
          "Send a professional quote or invoice from the job in minutes, not after dinner.",
      },
      {
        title: "Scheduling that keeps you booked",
        description:
          "A clear calendar with reminders so no job — or customer — slips through the cracks.",
      },
      {
        title: "Automatic follow-ups",
        description:
          "Quotes and leads followed up for you, turning more enquiries into booked work.",
      },
      {
        title: "Faster payments",
        description:
          "Automated invoices and reminders that get money in the door without the awkward chase.",
      },
    ],
    caseAngle:
      "A trades business stopped doing admin at night and got paid an average of two weeks faster.",
  },
  {
    slug: "shopfitting",
    name: "Shopfitting",
    icon: "shopfitting",
    hasPage: false, // tile links to /industries overview
    headline: "",
    intro: "",
    pains: [],
    solutions: [],
    caseAngle: "",
  },
];

/* Only industries that have their own page (used for static generation). */
export const INDUSTRY_PAGES = INDUSTRIES.filter((i) => i.hasPage);

/* --- The Process (homepage: four steps) --- */
export const PROCESS = [
  {
    step: "01",
    title: "Discover",
    description:
      "We look at how your business runs and find what's slowing you down.",
  },
  {
    step: "02",
    title: "Design",
    description: "We design a tailored solution and roadmap for your business.",
  },
  {
    step: "03",
    title: "Build",
    description: "We build, connect, and automate your systems so everything works together.",
  },
  {
    step: "04",
    title: "Optimize",
    description: "We monitor performance and continuously improve results.",
  },
] as const;

/* --- Case studies -----------------------------------------------------------
   NOTE: these figures are illustrative examples until replaced with real,
   verified client numbers. */
export interface CaseStudy {
  slug: string;
  industry: string;
  problem: string[];
  solution: string[];
  result: string[];
  featured?: boolean;
}
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "glass-manufacturing",
    industry: "Glass Manufacturing Business",
    featured: true,
    problem: [
      "Manual job tracking",
      "Customer update issues",
      "Payment follow-up delays",
    ],
    solution: [
      "Automated workflow",
      "Scheduled customer updates",
      "Automated payment reminders",
    ],
    result: [
      "Reduced admin workload",
      "Improved customer communication",
      "Faster payments",
    ],
  },
  {
    slug: "cabinet-making",
    industry: "Cabinet Making Business",
    problem: [
      "Job details spread across whiteboards and texts",
      "Material delays stalling installs",
      "Unclear job profitability",
    ],
    solution: [
      "One shared job system",
      "Material and lead-time tracking",
      "Estimated vs actual cost reporting",
    ],
    result: [
      "Days of admin saved each month",
      "Fewer install delays",
      "More confident quoting",
    ],
  },
  {
    slug: "construction",
    industry: "Construction Firm",
    problem: [
      "Site updates lost in group chats",
      "Variations captured too late",
      "No live view of project costs",
    ],
    solution: [
      "Office-to-site project dashboard",
      "Real-time variation and cost capture",
      "Automated milestone updates",
    ],
    result: [
      "Live visibility on every project",
      "Protected margins",
      "Fewer surprises at handover",
    ],
  },
];

/* --- Why SystemAura (homepage: three points) --- */
export const WHY_POINTS = [
  {
    title: "Business First Approach",
    description: "We solve business problems, not just build software.",
  },
  {
    title: "Tailored Solutions",
    description: "Every solution is designed around your operations.",
  },
  {
    title: "Long-Term Partnership",
    description: "We keep improving your systems as your business grows.",
  },
] as const;

/* --- Outcome strip (homepage) --- */
export const OUTCOMES: { icon: IconName; label: string }[] = [
  { icon: "gauge", label: "Efficiency" },
  { icon: "automation", label: "Automation" },
  { icon: "integration", label: "Integration" },
  { icon: "growth", label: "Growth" },
  { icon: "support", label: "Support" },
];

/* --- Testimonials -----------------------------------------------------------
   TODO: replace with real testimonials. */
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We went from chasing job updates all day to having everything in one place. Our team gets more done and customers actually notice the difference.",
    name: "Operations Manager",
    company: "Glass Manufacturing Business",
  },
  {
    quote:
      "The admin that used to swallow my evenings just… happens now. I get paid faster and I finally have a clear picture of every job.",
    name: "Owner",
    company: "Cabinet Making Business",
  },
  {
    quote:
      "They understood how we actually work before suggesting anything. It feels less like software and more like a better way to run the business.",
    name: "Director",
    company: "Construction Firm",
  },
];

/* --- Industry options for the contact form dropdown --- */
export const INDUSTRY_OPTIONS = [
  "Glass Manufacturing",
  "Cabinet Making",
  "Construction",
  "Shopfitting",
  "Trades & Services",
  "Other",
] as const;
