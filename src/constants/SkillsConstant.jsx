import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaRobot,
  FaTools,
  FaBrain,
  FaServer,
  FaCloud,
  FaCodeBranch,
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
    title: "Programming Languages",
    description: "A strong foundation in multiple paradigms, allowing me to choose the best language for performance, scalability, and maintainability across domains.",
    icon: <FaCode className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-xl text-yellow-400" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-xl text-blue-400" />,
      },
      {
        name: "Python",
        icon: <SiPython className="text-xl text-yellow-300" />,
      },
      { name: "Java", icon: <FaCode className="text-xl text-orange-400" /> },
      { name: "C / C++", icon: <FaCode className="text-xl text-blue-300" /> },
      { name: "SQL", icon: <FaDatabase className="text-xl text-blue-200" /> },
    ],
  },
  {
    title: "Frontend UI/UX",
    description: "Creating highly interactive, cinematic, and responsive user interfaces using modern frameworks, prioritizing performance and pixel-perfect design.",
    icon: <FaLaptopCode className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "React", icon: <SiReact className="text-xl text-cyan-400" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-xl text-gray-200" />,
      },
      { name: "Tailwind", icon: <FaTools className="text-xl text-teal-300" /> },
      { name: "GSAP & Framer", icon: <FaCode className="text-xl text-pink-400" /> },
      { name: "Three.js", icon: <FaCode className="text-xl text-gray-300" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-xl text-orange-400" /> },
      { name: "CSS3", icon: <SiCss3 className="text-xl text-blue-400" /> },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Designing robust RESTful APIs, securing authentication flows, and architecting scalable schemas using high-performance relational and NoSQL databases.",
    icon: <FaServer className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-xl text-green-400" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-xl text-gray-200" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-xl text-green-600" />,
      },
      { name: "PostgreSQL", icon: <FaDatabase className="text-xl text-blue-400" /> },
      {
        name: "Socket.io",
        icon: <SiSocketdotio className="text-xl text-gray-200" />,
      },
      { name: "Redis", icon: <FaDatabase className="text-xl text-red-500" /> },
      { name: "REST APIs", icon: <FaCode className="text-xl text-gray-300" /> },
    ],
  },
  {
    title: "Generative AI",
    description: "Integrating powerful large language models using advanced prompt engineering, RAG pipelines, and modern orchestration frameworks for intelligent applications.",
    icon: <FaRobot className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "Google Gemini", icon: <FaBrain className="text-xl text-blue-400" /> },
      { name: "OpenAI API", icon: <FaBrain className="text-xl text-green-400" /> },
      { name: "LLM Orchestration", icon: <FaTools className="text-xl text-purple-400" /> },
      { name: "RAG Architecure", icon: <FaDatabase className="text-xl text-yellow-300" /> },
      { name: "Prompt Engineering", icon: <FaRobot className="text-xl text-gray-200" /> },
      { name: "Vercel AI SDK", icon: <FaCode className="text-xl text-gray-100" /> },
    ],
  },
  {
    title: "Python Libraries & Tools",
    description: "Leveraging industry-standard Python libraries for high-performance data manipulation, scientific computing, and robust machine learning workflows.",
    icon: <FaTools className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "NumPy", icon: <SiNumpy className="text-xl text-yellow-200" /> },
      { name: "Pandas", icon: <SiPandas className="text-xl text-white" /> },
      {
        name: "Scikit-learn",
        icon: <SiScikitlearn className="text-xl text-yellow-300" />,
      },
      { name: "TensorFlow", icon: <FaBrain className="text-xl text-orange-400" /> },
      { name: "PyTorch", icon: <FaBrain className="text-xl text-red-400" /> },
      {
        name: "Matplotlib & Seaborn",
        icon: <FaCode className="text-xl text-gray-300" />,
      },
    ],
  },
  {
    title: "Data Science & Core ML",
    description: "Building sophisticated analytical models, engineering complex features, and applying deep learning principles to uncover actionable data-driven insights.",
    icon: <FaBrain className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "Deep Learning Concepts", icon: <FaBrain className="text-xl text-pink-400" /> },
      { name: "NLP (Natural Language Processing)", icon: <FaCode className="text-xl text-blue-300" /> },
      { name: "Supervised & Unsupervised Learning", icon: <FaBrain className="text-xl text-green-300" /> },
      { name: "Feature Engineering & Preprocessing", icon: <FaTools className="text-xl text-gray-300" /> },
      { name: "Model Evaluation & Deployment", icon: <FaServer className="text-xl text-yellow-200" /> },
    ],
  },
  {
    title: "IDE & AI-Assisted Coding",
    description: "Maximizing development velocity and eliminating boilerplate by integrating state-of-the-art AI pair-programmers directly into modern development environments.",
    icon: <FaLaptopCode className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "Cursor", icon: <FaCode className="text-xl text-blue-400" /> },
      { name: "Claude Code", icon: <FaRobot className="text-xl text-orange-300" /> },
      { name: "Trae", icon: <FaCode className="text-xl text-gray-300" /> },
      { name: "Antigravity", icon: <FaRobot className="text-xl text-purple-400" /> },
      { name: "Orchids", icon: <FaBrain className="text-xl text-pink-400" /> },
      { name: "GitHub Copilot", icon: <SiGithub className="text-xl text-gray-100" /> },
    ],
  },
  {
    title: "DevOps & Core Tools",
    description: "Ensuring continuous integration, reliable version control, and containerized deployments across modern cloud infrastructure for high availability systems.",
    icon: <FaCloud className="text-3xl mx-auto mb-2 text-yellow-400" />,
    skills: [
      { name: "Git & Version Control", icon: <SiGit className="text-xl text-orange-500" /> },
      { name: "GitHub Actions", icon: <SiGithub className="text-xl text-white" /> },
      { name: "Docker", icon: <FaServer className="text-xl text-blue-500" /> },
      { name: "Cloud Platforms (AWS, Render)", icon: <FaCloud className="text-xl text-orange-300" /> },
      { name: "Figma UI Design", icon: <SiFigma className="text-xl text-pink-400" /> },
      { name: "Postman/API Testing", icon: <FaTools className="text-xl text-orange-400" /> },
    ],
  },
];

export const capsuleSkills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-2xl text-gray-200" /> },
  { name: "React", icon: <SiReact className="text-2xl text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-2xl text-yellow-400" /> },
  { name: "Python", icon: <SiPython className="text-2xl text-yellow-300" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-2xl text-green-400" /> },
  { name: "PostgreSQL", icon: <FaDatabase className="text-2xl text-blue-400" /> },
  { name: "Tailwind CSS", icon: <FaTools className="text-2xl text-teal-300" /> },
  { name: "Google Gemini", icon: <FaRobot className="text-2xl text-blue-400" /> },
  { name: "GitHub Copilot", icon: <SiGithub className="text-2xl text-gray-300" /> },
];
