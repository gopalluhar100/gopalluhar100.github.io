const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const publicPath = (path: string) => `${basePath}${path.startsWith("/") ? path : `/${path}`}`;

export const profile = {
  name: "Gopal Luhar",
  firstName: "Gopal",
  role: "Lead Generation & Data Research Professional",
  location: "Pali, Rajasthan, India",
  email: "gopalmalviya100@gmail.com",
  phone: "+91 9549610505",
  phoneHref: "+919549610505",
  linkedin: "https://www.linkedin.com/in/gopalluhar/",
  github: "https://github.com/gopalluhar100",
  portfolio: "https://gopalluhar100.github.io/portfolio/",
  resume: publicPath("/resume/Gopal_Luhar_Resume_VA.pdf"),
  summary:
    "Lead generation and data research professional with 5+ years of experience supporting US and UK clients. Skilled in prospect and decision-maker research, business email and phone research, data mining, data preprocessing, CRM enrichment, list building, quality assurance, and remote operations support. Experienced in converting client requirements into accurate datasets, reliable workflows, and sales-ready deliverables.",
} as const;

export const navigation = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Research & lead generation",
    items: [
      "Lead Generation",
      "Prospect Research",
      "Email & Phone Research",
      "Market Research",
      "Data Mining",
    ],
  },
  {
    title: "Data quality & CRM",
    items: [
      "Data Cleaning & Validation",
      "Data Preprocessing",
      "CRM Enrichment",
      "List Building",
      "Quality Assurance",
    ],
  },
  {
    title: "Operations & collaboration",
    items: [
      "Virtual Assistance",
      "Back-Office Operations",
      "Customer Support",
      "Team Coordination",
      "Process Improvement",
      "Training & Onboarding",
      "Remote Collaboration",
    ],
  },
  {
    title: "Tools & platforms",
    items: [
      "Apollo",
      "HubSpot",
      "iContact",
      "CRM Platforms",
      "Microsoft Excel",
      "Microsoft Word",
      "Kendo",
      "EZLynx",
      "Applied Epic",
      "Slack",
      "Google Maps",
      "Property Appraiser Databases",
    ],
  },
] as const;

export const projects = [
  {
    number: "01",
    title: "EdTech Market Expansion & Strategic Lead Generation",
    description:
      "Researched target organizations, decision-makers, business emails, and contact information; cleaned, standardized, categorized, deduplicated, validated, and enriched records for outreach-ready prospect lists.",
    visual: "lead-list",
    tools: [] as string[],
  },
  {
    number: "02",
    title: "A/R Management & Property Verification",
    description:
      "Supported accounts-receivable research and verified property information using Google Maps and property appraiser databases, organizing findings into accurate follow-up records.",
    visual: "property",
    tools: ["Google Maps", "Property Appraiser Databases"],
  },
  {
    number: "03",
    title: "Quality Assurance & Performance Auditing — Home Services",
    description:
      "Reviewed recorded calls and completed work for accuracy, lead qualification, consistency, and adherence to client requirements; documented issues and performance gaps.",
    visual: "quality",
    tools: [] as string[],
  },
  {
    number: "04",
    title: "Fintech Documentation & Fraud Prevention",
    description:
      "Reviewed borrower documentation, verified information, identified inconsistencies, and maintained accurate loan-tracking data to support fraud-prevention workflows.",
    visual: "documents",
    tools: [] as string[],
  },
  {
    number: "05",
    title: "US Property & Casualty Insurance Operations",
    description:
      "Supported prospect setup, quotes, issuance, renewals, endorsements, cancellations, and policy-document verification.",
    visual: "insurance",
    tools: ["EZLynx", "Applied Epic", "Microsoft Excel", "Microsoft Word"],
  },
] as const;

export const experience = [
  {
    role: "Senior Associate",
    company: "Fusion Business Solutions (P) Limited",
    location: "Udaipur, India",
    dates: "Jan 2021 — May 2026",
    details: [
      "Supported US and UK clients with lead generation, data research, CRM administration, virtual assistance, and back-office operations.",
      "Researched companies, prospects, decision-makers, business emails, phone numbers, and contact details using Apollo, CRM platforms, search engines, and public data sources.",
      "Led work allocation, quality reviews, client responsibilities, onboarding support, and process improvements.",
      "Managed US insurance agency workflows including prospect setup, quote support, policy endorsements, invoice generation, document verification, and customer support.",
    ],
  },
  {
    role: "Customer Care Executive",
    company: "Five Splash Infotech Pvt. Ltd.",
    location: "Udaipur, India",
    dates: "Aug 2020 — Dec 2020",
    details: [
      "Improved standard operating procedures, contributing to an increase in customer satisfaction from 60% to 90%.",
      "Resolved product, service, order, warranty, return, and technical inquiries while documenting outcomes accurately.",
    ],
  },
  {
    role: "Site Supervisor",
    company: "Rukkya Construction Co.",
    location: "Udaipur, India",
    dates: "Jan 2019 — Feb 2020",
    details: [
      "Expanded and led a team from 10 to 60 members while coordinating schedules, materials, labor, and project execution.",
      "Completed construction projects valued at approximately INR 3 Crores within one year.",
      "Prepared cost estimates, tracked progress, and coordinated technical aspects of construction projects.",
    ],
  },
] as const;

export const education = [
  {
    school: "SS College of Engineering, Udaipur",
    degree: "Bachelor of Technology (B.Tech.) — Civil Engineering",
    dates: "2016 — 2019",
    result: "Division: 1st",
  },
  {
    school: "SS Polytechnic College, Udaipur",
    degree: "Polytechnic Diploma",
    dates: "2012 — 2015",
    result: "Division: 1st",
  },
] as const;

export const achievements = [
  {
    value: "60 → 90%",
    title: "Customer satisfaction",
    description:
      "SOP improvements contributed to a rise in customer satisfaction from 60% to 90%.",
  },
  {
    value: "1 / 300",
    title: "Swiggy Headquarters recognition",
    description:
      "Recognized for increasing customer satisfaction — the only person in a team of 300 to receive the recognition.",
  },
  {
    value: "+2",
    title: "Team expansion",
    description:
      "Identified service opportunities that led to two new staff being added within three months to manage increased workload.",
  },
  {
    value: "20%",
    title: "Verified revenue increase",
    description:
      "Helped onboard a new lead-generation client whose special project contributed a verified 20% revenue increase.",
  },
  {
    value: "5×",
    title: "Star Employee of the Month",
    description: "Received the recognition five times.",
  },
  {
    value: "100%",
    title: "Attendance",
    description: "Maintained 100% attendance for two consecutive years.",
  },
] as const;
