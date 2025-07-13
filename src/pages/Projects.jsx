import React, { useState } from "react";
const projects = [
  {
    title: "CodeCureAI",
    date: "2024",
    featured: true,
    description:
      "Developed a full-stack web application that leverages Google Gemini Pro (Gemini 2.5 Flash) to provide real-time AI-based code reviews. Users can input or upload code, and the system generates insightful feedback, highlights issues, and suggests improvements.",
    details:
      "Built using React (Vite) for the frontend and Node.js with Express for the backend, with Tailwind CSS for styling and Render for deployment.",
    tech: [
      "React (Vite)",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Gemini Pro",
      "Render",
    ],
    link: "https://github.com/Fardeennnnnnnnnnkhan/Code_Reviewer-Frontend",
    images: ['/CodeCure1.png','/CC2.png','/CC3.png','/CC4.png','/CC5.png'],
  }, 
  {
    title: "StrangerSync (Anonymous Chat Application)",
    date: "Dec 2024",
    featured: false,
    description:
      "A full-stack web application enabling real-time, anonymous video and text chat between users. Inspired by Omegle but built with a custom vision.",
    details:
      "StrangerSync uses Node.js, Express, and Socket.io to deliver seamless WebSocket communication. The backend efficiently manages user sessions, pairing logic, and secure peer-to-peer connections, ensuring high availability and scalability.",
    tech: ["Node.js", "Express.js", "Socket.io", "WebRTC"],
    link: "https://github.com/Fardeennnnnnnnnnkhan/StrangerSync",
    images: [],
  },
  {
    title: "EaseLearn (E-Learning Platform)",
    date: "Jan 2025",
    featured: false,
    description:
      "EaseLearn is a full-stack e-learning platform built with Node.js, Express, and MongoDB, focused on delivering a smooth learning experience through modular backend architecture.",
    details:
      "I developed a robust backend system supporting secure user authentication, course management, and an admin dashboard for course creation, editing, and user handling.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://github.com/Fardeennnnnnnnnnkhan/EaseLearn_FinalSetup",
    images: [],
  },
  {
    title: "F-Mart (E-commerce Website)",
    date: "March 2025",
    featured: false,
    description:
      "Designed and implemented the backend for a full-featured e-commerce platform using Node.js, Express, and MongoDB. The system includes product management, user authentication, cart handling, and a secure checkout process with payment gateway integration.",
    details:
      "Built RESTful APIs for managing orders, user data, and product listings, ensuring fast and reliable communication between the frontend and backend.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Payment Gateway"],
    link: "https://github.com/Fardeennnnnnnnnnkhan/F-Mart---An-E-Commerce-Shopping-App",
    images: [],
  },
  {
    title: "GroceryNow (Grocery Delivery App)",
    date: "Feb 2025",
    featured: false,
    description:
      "A backend system powering a real-time grocery delivery experience, inspired by Blinkit and tailored for modern logistics.",
    details:
      "Built using Node.js, Express, and MongoDB, GroceryNow includes modules for user authentication, order processing, inventory tracking, and delivery scheduling.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    link: "https://github.com/Fardeennnnnnnnnnkhan/GroceryNow",
    images: [],
  },

 
];

function ProjectCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  return (
    <div className="relative w-full rounded-lg overflow-hidden mb-4 group">
      <img
        src={images[current]}
        alt={`Project screenshot ${current + 1}`}
        className="w-full h-96 object-cover object-top transition-all duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#232323]/80 hover:bg-[#a259f7] text-white rounded-full p-2 shadow transition-all duration-200 opacity-80 group-hover:opacity-100"
            onClick={prev}
            aria-label="Previous image"
            type="button"
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#232323]/80 hover:bg-[#a259f7] text-white rounded-full p-2 shadow transition-all duration-200 opacity-80 group-hover:opacity-100"
            onClick={next}
            aria-label="Next image"
            type="button"
          >
            <span className="material-icons">chevron_right</span>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <span
                key={i}
                className={`inline-block w-2 h-2 rounded-full ${
                  i === current ? "bg-[#a259f7]" : "bg-gray-500/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-16 ">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-2">
        Featured Projects
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl text-center mx-auto mb-8">
        A showcase of my technical projects and innovations that solve
        real-world problems
      </p>
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative  border border-[#a259f7]/30 rounded-xl p-6 shadow-lg transition-all duration-200 hover:shadow-2xl hover:border-[#a259f7] group"
          >
            {/* Project Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="flex items-center gap-1 bg-[#a259f7] text-white text-xs font-semibold px-3 py-1 rounded-full shadow hover:scale-105 transition-transform duration-200">
                    <span className="material-icons text-base align-middle">
                      star
                    </span>{" "}
                    Featured
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 mt-2 md:mt-0">
               
              </div>
            </div>
            {/* Project Image Carousel (if available) */}
            <ProjectCarousel images={project.images} />
            {/* Project Description */}
            <p className="text-lg text-gray-200 font-semibold mb-2">
              {project.description}
            </p>
            <p className="text-gray-400 mb-4">{project.details}</p>
            <hr className="border-t border-[#232323] my-4" />
            {/* Technologies Used */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="material-icons text-base"
                  style={{ color: "#a259f7" }}
                >
                  fiber_manual_record
                </span>
                <span className="font-semibold text-white">
                  Technologies Used
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#232323] text-gray-200 px-3 py-1 rounded-full text-xs font-medium border border-[#232323] hover:bg-[#a259f7] hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* View Code Button */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#a259f7] hover:bg-[#8e9c78] text-white font-semibold px-5 py-2 rounded-lg mt-2 transition-colors duration-200 shadow focus:outline-none focus:ring-2 focus:ring-[#a259f7] focus:ring-offset-2 hover:scale-105"
              >
                <span className="material-icons text-base">code</span> View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
