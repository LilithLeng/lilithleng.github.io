import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Customer Retention",
    href: "/projects",
    tags: ["Python", "EDA", "Cohort Analysis", "RFM Segmentation"],
    image: {
      LIGHT: "/images/projects/bikeAnalysis.webp",
      DARK: "/images/projects/bikeAnalysis.webp",
    },
  },
  {
    index: 1,
    title: "A/B Testing",
    href: "/projects",
    tags: ["Python", "A/B Testing", "Hypothesis Testing"],
    image: {
      LIGHT: "/images/projects/cookiecat.webp",
      DARK: "/images/projects/cookiecat.webp",
    },
  },
  {
    index: 2,
    title: "Membership Decline",
    href: "/projects",
    tags: ["SQL", "Python", "Demographic Analysis", "Regression Analysis"],
    image: {
      LIGHT: "/images/projects/freemason.webp",
      DARK: "/images/projects/freemason.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Customer Retention Analysis (Cohort & RFM)",
    favicon: "/images/projects/logos/rfm.ico",
    imageUrl: ["/images/projects/bikeAnalysis.webp"],
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
    name: "Membership Analysis for Recruitment and Retention (Freemasons NZ)",
    favicon: "/images/projects/logos/freemason.ico",
    imageUrl: ["/images/projects/freemason.webp"],
    description:
      "Explored membership decline drivers using internal SQL data and census data to support recruitment and retention strategy.",
    sourceCodeHref:
      "https://github.com/LilithLeng/freemason-membership-analysis",
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
  {
    name: "Kraken Koffee Infographic Project",
    favicon: "/images/projects/logos/powerbi.ico",
    imageUrl: ["/images/projects/cafe.jpg"],
    description:
      "Built an interactive Power BI dashboard to analyze sales performance, customer behavior, and product trends, delivering data-driven insights and forecasts.",
    sourceCodeHref:
      "https://github.com/LilithLeng/kraken-koffee-powerbi-dashboard",
    liveWebsiteHref:
      "https://app.powerbi.com/view?r=eyJrIjoiY2Q2YTE2ZmQtMzdiZS00ZWYzLWFjYTctNTFhNDc0MDJhZGEyIiwidCI6IjFiZDVmZGRjLTk5YjUtNDlmZS04M2U2LTVlNTg2ZTIwZjc0OSIsImMiOjJ9",
  },
  {
    name: "MUELLER Brand Competitive Analysis (Pasta Category)",
    favicon: "/images/projects/logos/pasta.ico",
    imageUrl: ["/images/projects/mueller.jpg"],
    description:
      "Analyzed brand performance using SQL and Python, applying the Dirichlet model to evaluate market share, customer behavior, and competitive positioning.",
    sourceCodeHref: "https://github.com/LilithLeng/mueller-pasta-analysis",
  },
  {
    name: "Advertising Effectiveness & Budget Optimization (AdStock Model)",
    favicon: "/images/projects/logos/warehouse.ico",
    imageUrl: ["/images/projects/warehouseAd.jpg"],
    description:
      "Analyzed the impact of advertising spend on sales using the AdStock model to evaluate channel effectiveness and optimize marketing budget allocation.",
    sourceCodeHref: "https://github.com/LilithLeng/warehouse_ad_analysis",
  },
  {
    name: "Psychological Distress & Net Worth Analysis (OLS Regression)",
    favicon: "/images/projects/logos/sas.ico",
    imageUrl: ["/images/projects/distress.jpg"],
    description:
      "Applied OLS regression to analyze the impact of psychological distress on net worth, uncovering relationships between mental health, income, and wealth outcomes.",
    sourceCodeHref: "https://github.com/LilithLeng/applied_economic",
  },
  {
    name: "Labour Market & Education Impact Analysis (New Zealand)",
    favicon: "/images/projects/logos/python.ico",
    imageUrl: ["/images/projects/education.jpeg"],
    description:
      "Analyzed labour market and education data in New Zealand to uncover how unemployment, income, and higher education participation interact.",
    sourceCodeHref: "https://github.com/LilithLeng/prosperity_analysis",
  },
];
