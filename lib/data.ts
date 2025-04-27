import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCertificate } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import IDE from "@/public/IDE.png";
import Dash from "@/public/Dash.png";
import Artisary from "@/public/Artisary.png";
import EMS from "@/public/EMS.png";
import CropTrack from "@/public/CropTrack.png";
import PSII from "@/public/PSII.png";
import PSI from "@/public/PSI.png";
import NPTEL from "@/public/NPTEL.png";
import PythonML from "@/public/PyhtonML.png";
import hack1 from "@/public/images/hack1.jpg";
import hack2 from "@/public/images/hack2.jpg";
import hack3 from "@/public/images/hack3.jpg";
import LPUrank from "@/public/images/LPUrank.png";
import leetcode from "@/public/images/leetcode.jpg";


export const projects = [
  "6 projects experience",
  "Online IDE",
  "Artisary",
  "Automatic fire extinguisher",
  "Employee management system",
  "CropTrack",
  "LiveFit",
];

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "Diploma in Engineering",
    location: "Aligarh Muslim University, Aligarh, Uttar Pradesh",
    description: "I completed my diploma in engineering, focusing on core technical subjects.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "BTech",
    location: "Lovely Professional University, Phagwara, Punjab",
    description: "Currently pursuing BTech with a focus on software development and engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2026",
  },
];

export const certificatesData = [
  {
    title: "Python & Data Science with ML Integrated",
    location: "Online",
    description: "A comprehensive course on Python, Data Science, and Machine Learning from CipherSchools.",
    icon: React.createElement(FaCertificate),
    date: "Jun 2024 - Jul 2024",
  },
];

export const certificates = [
  {
    title: "Problem Solving I",
    description:
      "An introductory course focused on building strong logical thinking and algorithmic problem-solving skills using fundamental programming constructs and data structures.",
    tags: ["Algorithms", "Logic Building", "Programming Fundamentals"],
    imageUrl: PSI,
    url: "https://github.com/M-Pushkar-Varshney-K/My-Certificates/blob/main/HakerRank/HCAKER%20RANK%20_problem%20solving.pdf",
  },
  {
    title: "Problem Solving II",
    description:
      "An advanced continuation of Problem Solving I, covering more complex data structures, optimization techniques, and competitive programming practices.",
    tags: ["Data Structures", "Dynamic Programming", "Competitive Programming"],
    imageUrl: PSII,
    url: "https://github.com/M-Pushkar-Varshney-K/My-Certificates/blob/main/HakerRank/HACKER%20RANK%20INTERMEDIATE%20problem%20solving.pdf",
  },
  {
    title: "Python Data-Science with ML Integrated",
    description:
      "A comprehensive course covering Python programming, data analysis, visualization, and machine learning models to equip learners with skills in data science workflows.",
    tags: ["Python", "Pandas", "Matplotlib", "Machine Learning"],
    imageUrl: PythonML,
    url: "https://github.com/M-Pushkar-Varshney-K/CipherSchools-Hybrid-DS-ML",
  },
  {
    title: "Internet of Things by NPTEL",
    description:
      "A foundational course on IoT concepts, architecture, and applications, providing hands-on experience with sensors, embedded systems, and network integration.",
    tags: ["IoT", "Sensors", "Embedded Systems", "NPTEL"],
    imageUrl: NPTEL,
    url: "https://drive.google.com/file/d/1c_fI0wOsN-IWvujRe6XLKtmj-5S4Y0Oy/view?usp=sharing",
  }
] as const;

export const projectsData = [
  {
    title: "Online IDE",
    description:
      "An in-browser code editor that supports multiple programming languages. Users can write, compile, and run code in real-time, save the code, share the code and formate the code, making it perfect for learning and testing small programs instantly.",
    tags: ["React", "MongoDB", "Tailwind", "Express", "Node.js", ],
    imageUrl: IDE,
    url: "https://github.com/M-Pushkar-Varshney-K/Online-IDE",
  },
  {
    title: "PowerBI Dashboard",
    description:
      "A detailed and interactive PowerBI dashboard project that visualizes real-time data for analysis and decision making. Built as a capstone project for the DS-ML hybrid course.",
    tags: ["Power BI","Excel", "Data Visualization", "Data Analysis"],
    imageUrl: Dash,
    url: "https://github.com/M-Pushkar-Varshney-K/CipherSchools-Hybrid-DS-ML/tree/main/Final%20Project",
  },
  {
    title: "Artisary",
    description:
      "An artistic e-commerce platform that supports local artisans. Users can browse, buy, and showcase handmade art products while artists get a dedicated space to promote their craft.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"],
    imageUrl: Artisary,
    url: "https://github.com/CoderKumarS/Artistry",
  },
  {
    title: "EMS (Employee Management System)",
    description:
      "A web-based Employee Management System for HR operations. It allows tracking of employee details, attendance, roles, departments, and performance insights in one place.",
    tags: ["React","Tailwind", "ShadCN", "FireBase"],
    imageUrl: EMS,
    url: "https://react-project-jade-eight.vercel.app/",
  },
  {
    title: "CropTrack",
    description:
      "An Android application that assists farmers in tracking crop health, weather forecasts, and farming best practices. It helps improve productivity by enabling smart agricultural decisions.",
    tags: ["Android Studio", "Kotlin", "XML"],
    imageUrl: CropTrack,
    url: "https://github.com/M-Pushkar-Varshney-K/AndroidProject-CropTrack-",
  }
] as const;


export const skillsData = [
  { name: "HTML", color: "#e34c26" },
  { name: "CSS", color: "#264de4" },
  { name: "JavaScript", color: "#f0db4f" },
  { name: "TypeScript", color: "#007acc" },
  { name: "Angular", color: "#dd0031" },
  { name: "Android Studio", color: "#3ddc84" },
  { name: "Java", color: "#f89820" },
  { name: "C++", color: "#00599c" },
  { name: "Figma", color: "#a259ff" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Material UI", color: "#0081cb" },
  { name: "Shadcn", color: "#000000" },
  { name: "Bootstrap", color: "#7952b3" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#000000" },
  { name: "Node.js", color: "#68a063" },
  { name: "Git", color: "#f34f29" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Express", color: "#000000" },
  { name: "Python", color: "#306998" },
  { name: "Power BI", color: "#f2c94c" },
] as const;

export const achievement = [
  {
    name:"Leetcode",
    title: "Global Rank 4375th",
    img: leetcode,
    description: "Among 22k+ participants in LeetCode Weekly Contest 426.",
  },
  {
    name:"Leetcode",
    title: "Top 26.19% on LeetCode",
    img:leetcode,
    description: "Ranked in the top 26.19% of all LeetCode users, achieving a peak rating of 1601.",
  },
  {
    name:"LPU",
    title: "S-1 Rank in LPU",
    img: LPUrank,
    description: "Among all LPU B.Tech students, I got S-1 rank with Top 11-50%.",
  },
  {
    name:"Hackathon",
    title: "Finalist in Web-a-Thon",
    img: [hack1, hack2, hack3],
    description: "Reached the final round of Web-a-Thon, securing a spot in the top 10 teams out of 250+ participants.",
  },
];