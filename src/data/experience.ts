import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Accounts Payable Analyst",
    organisation: {
      name: "Pan Pacific Travel",
      href: "https://www.panpacific.co.nz/",
    },
    date: "Oct 2025 - Present",
    location: "Auckland, New Zealand",
    description:
      "Analyzed and processed high-volume financial datasets across NZ and AU branches using ERP systems, improving data integrity and invoice workflow efficiency.",
  },
  {
    title: "Insight Analyst",
    organisation: {
      name: "ZHYE",
    },
    date: "Jun 2025 - Sep 2025",
    location: "Auckland, New Zealand",
    description:
      "Analyzed housing market data with Python (Pandas), built predictive models, and created Power BI dashboards to uncover price trends and support real estate insights.",
  },
  {
    title: "Data Analyst Intern",
    organisation: {
      name: "Freemasons",
      href: "https://freemasonsnz.org/",
    },
    date: "Oct 2024 - Feb 2025",
    location: "Auckland, New Zealand",
    description:
      "Analyzed membership churn using SQL and Python (regression and K-means clustering) on a 120+ table database to identify engagement drivers and inform retention strategies.",
  },
];
