import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import PythonSvg from "@/public/icons/python.svg";
import SQLSvg from "@/public/icons/sql.svg";

// Data Visualization
import PowerBISvg from "@/public/icons/powerbi.svg";
import TableauSvg from "@/public/icons/tableau.svg";
import ExcelSvg from "@/public/icons/excel.svg";

// Databases & Data Platforms
import PostgreSQLSvg from "@/public/icons/postgresql.svg";
import MySQLSvg from "@/public/icons/mysql.svg";

// Machine Learning
import TensorflowSvg from "@/public/icons/tensorflow.svg";

// Tools & Platforms
import GitSvg from "@/public/icons/git.svg";
import AwsSvg from "@/public/icons/aws.svg";
import GoogleAnalystSvg from "@/public/icons/googleanalyst.svg";
import SASSvg from "@/public/icons/sas.svg";
import SAPSvg from "@/public/icons/sap.svg";
import SnowflakeSvg from "@/public/icons/snowflake.svg";
import DatabricksSvg from "@/public/icons/databricks.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "Python",
        icon: PythonSvg,
      },
      { name: "SQL", icon: SQLSvg },
    ],
  },
  {
    sectionName: "Data Visualization",
    skills: [
      {
        name: "Power BI",
        icon: PowerBISvg,
      },
      { name: "Tableau", icon: TableauSvg },
      { name: "Excel", icon: ExcelSvg },
    ],
  },
  {
    sectionName: "Databases & Data Platforms",
    skills: [
      { name: "PostgreSQL", icon: PostgreSQLSvg },
      { name: "MySQL", icon: MySQLSvg },
      { name: "Snowflake", icon: SnowflakeSvg },
      { name: "Databricks", icon: DatabricksSvg },
    ],
  },
  {
    sectionName: "Tools & Platforms",
    skills: [
      {
        name: "AWS",
        icon: AwsSvg,
      },
      { name: "Google Analytics", icon: GoogleAnalystSvg },
      { name: "SAS", icon: SASSvg },
      { name: "SAP", icon: SAPSvg },
      { name: "Tensorflow", icon: TensorflowSvg },
      {
        name: "Git",
        icon: GitSvg,
      },
    ],
  },
];
