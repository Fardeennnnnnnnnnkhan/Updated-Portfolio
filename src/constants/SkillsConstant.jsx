import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaRobot,
  FaTools,
  FaBrain,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiSocketdotio,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Programming Language",
    icon: <FaCode className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-xl text-yellow-400" />,
      },
      { name: "C", icon: <FaCode className="text-xl text-gray-300" /> },
      { name: "C++", icon: <FaCode className="text-xl text-gray-300" /> },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-xl text-blue-400" />,
      },
      {
        name: "Python",
        icon: <SiPython className="text-xl text-yellow-300" />,
      },
    ],
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "HTML", icon: <SiHtml5 className="text-xl text-orange-400" /> },
      { name: "CSS", icon: <SiCss3 className="text-xl text-blue-400" /> },
      { name: "React", icon: <SiReact className="text-xl text-cyan-400" /> },
      { name: "Tailwind", icon: <FaTools className="text-xl text-teal-300" /> },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-xl text-purple-400" />,
      },
    ],
  },
  {
    title: "Backend & Data Tools",
    icon: <FaDatabase className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      {
        name: "Express",
        icon: <SiExpress className="text-xl text-gray-200" />,
      },
      {
        name: "Mongodb",
        icon: <SiMongodb className="text-xl text-green-600" />,
      },
      { name: "Ejs", icon: <FaCode className="text-xl text-gray-300" /> },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-xl text-green-400" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-xl text-gray-200" />,
      },
      {
        name: "Three.js",
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio className="text-xl text-gray-200" />,
      },
    ],
  },
  {
    title: "Python Libraries & Tools",
    icon: <FaTools className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "NumPy", icon: <SiNumpy className="text-xl text-yellow-200" /> },
      { name: "Pandas", icon: <SiPandas className="text-xl text-white" /> },
      {
        name: "Matplotlib",
        icon: <FaCode className="text-xl text-gray-300" />,
      },
      { name: "Seaborn", icon: <FaCode className="text-xl text-gray-300" /> },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="text-xl text-yellow-300" />,
      },
    ],
  },
  {
    title: "Machine Learning",
    icon: <FaBrain className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "Supervised & Unsupervised Learning" },
      { name: "Model Evaluation" },
      { name: "Feature Engineering" },
      { name: "Data Preprocessing" },
    ],
  },
  {
    title: "Other Skills",
    icon: <FaTools className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "Figma", icon: <SiFigma className="text-xl text-pink-400" /> },
      {
        name: "MS Excel",
        icon: <img src={"/mse.png"} className="w-6 h-6 object-cove" alt="" />
      },
      {
        name: "PowerBi",
        icon: <img src={"https://banner2.cleanpng.com/20181110/vfu/kisspng-power-bi-business-intelligence-microsoft-azure-mic-office-365-d-nieuwe-cloud-omgeving-dynamics-on-1713924082630.webp"} className="w-6 h-6 object-cove" alt="" />
      },
      { name: "Git", icon: <SiGit className="text-xl text-orange-300" /> },
      { name: "Github", icon: <SiGithub className="text-xl text-gray-300" /> },
    ],
  },
  {
    title: "IDE & AI-Assisted Coding",
    icon: <FaRobot className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [{ name: "Cursor" }, { name: "Trae" }, { name: "GitHub Copilot" }],
  },
];

export const capsuleSkills = [
  {
    name: "MS Excel",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-2xl text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-2xl text-blue-400" />,
  },
  { name: "Python", icon: <SiPython className="text-2xl text-yellow-300" /> },
  { name: "React", icon: <SiReact className="text-2xl text-cyan-400" /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-2xl text-green-400" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" /> },
  { name: "Git", icon: <SiGit className="text-2xl text-orange-300" /> },
  { name: "GitHub", icon: <SiGithub className="text-2xl text-gray-300" /> },
  { name: "Figma", icon: <SiFigma className="text-2xl text-pink-400" /> },
];
