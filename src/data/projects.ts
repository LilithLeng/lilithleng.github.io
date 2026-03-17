import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Many Games",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Customer Retention Analysis (Cohort & RFM)",
    favicon: "/images/projects/logos/rfm.ico",
    imageUrl: [
      "/images/projects/bikeAnalysis.webp",
      "/images/projects/rfmAnalysis.webp",
    ],
    description:
      "Visualize JSON data format in form of a tree or graph. Application is made using Nextjs, Tailwindcss and Monaco Editor. Design image can be downloaded from this app.",
    sourceCodeHref:
      "https://github.com/LilithLeng/customer-cohort-analysis-retail",
  },
  {
    name: "A/B Testing Analysis for Player Retention (Cookie Cats)",
    favicon: "/images/projects/logos/cookiecat.ico",
    imageUrl: ["/images/projects/cookiecat.webp"],
    description:
      "Analyzed an A/B test to evaluate how game design changes impact player retention and engagement.",
    sourceCodeHref: "https://github.com/LilithLeng/player-retention-ab-test",
  },
  {
    name: "Loan Eligibility Prediction (Machine Learning)",
    favicon: "/images/projects/logos/loan.ico",
    imageUrl: ["/images/projects/loanEligibility.webp"],
    description:
      "Built a machine learning model to predict loan eligibility using applicant financial and demographic data.",
    sourceCodeHref: "https://github.com/LilithLeng/loan-eligibility-ml",
  },
  {
    name: "Retail Sales Analytics Dashboard",
    favicon: "/images/projects/logos/tableau.ico",
    imageUrl: ["/images/projects/tableauData.webp"],
    description:
      "Created an interactive Tableau dashboard to visualize retail sales data and deliver insights on performance, customer segments, and geographic distribution.",
    sourceCodeHref: "https://github.com/LilithLeng/sql-tableau-sales-dashboard",
  },
];
