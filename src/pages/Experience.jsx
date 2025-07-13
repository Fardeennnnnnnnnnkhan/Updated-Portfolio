import React from "react";

const experiences = [
  {
    title: "SDE Intern",
    company: "Metafic",
    companyColor: "#a259f7 ",
    date: "April 2025 - June 2025",
    location: "On Site",
    github: null,
    bullets: [
      "Developed and optimized full-stack features using the MERN stack, contributing to backend API design and frontend performance improvements.",
      "Led the creation of a secure admin panel with role-based access control, streamlined workflows, and reduced manual overhead.",
      "Implemented efficient API structures, improved data handling, and reduced dashboard load time by over 20%.",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Full Stak Developer Intern",
    company: "Astraeus Next Gen",
    companyColor: "#a259f7 ",
    date: "Jan 2025 - May 2025",
    location: "Remote",
    github: null,
    bullets: [
      "Focused on crafting responsive and interactive UI components using React.js, integrating backend logic with Node.js & MongoDB.",
      "Built real-time data flows and optimized API calls, resulting in a 30% decrease in frontend bugs and improved responsiveness.",
      "Collaborated in code reviews, feature engineering, and scalability improvements.",
    ],
    tech: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Frontend Developer",
    company: "WebExcep",
    companyColor: "#a259f7 ",
    date: "Jan 2025 - Feb 2025",
    location: "Remote",
    github: null,
    bullets: [
      "Led frontend development of a media-focused web platform using React.js and Tailwind CSS.",
      "Created reusable components, smooth animations, and ensured mobile compatibility.",
      "Integrated RESTful APIs and improved visual performance, reducing UI development time by over 40%.",
    ],
    tech: ["React.js", "Tailwind CSS", "REST API"],
  },
];

export default function Experience() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-16 ]">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-2">
        Experience
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl text-center mx-auto mb-12">
        My professional Journey and Experiences
      </p>
      <div className="w-full max-w-5xl flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-transparent border border-[#a259f7]/30 rounded-xl p-6 shadow-lg transition-all duration-200 hover:shadow-2xl hover:border-[#a259f7]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {exp.title}
                </h3>
                <span
                  className="font-semibold text-base "
                  style={{ color: exp.companyColor }}
                >
                  {exp.company}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-2 sm:mt-0">
                <span className="flex items-center gap-1 text-gray-400 text-sm">
                  <span
                    className="material-icons text-base"
                    style={{ color: "#a259f7" }}
                  >
                    calendar_today
                  </span>
                  {exp.date}
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-sm">
                  <span
                    className="material-icons text-base"
                    style={{ color: "#a259f7" }}
                  >
                    location_on
                  </span>
                  {exp.location}
                </span>
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#f59e42] text-sm hover:underline"
                  >
                    <span className="material-icons text-base align-middle">
                      open_in_new
                    </span>{" "}
                    GitHub
                  </a>
                )}
              </div>
            </div>
            <ul className="mt-4 mb-4 space-y-2">
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-300 text-base"
                >
                  <span
                    className="mt-1 material-icons text-xs"
                    style={{ color: "#a259f7 " }}
                  >
                    fiber_manual_record
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className=" text-gray-200 px-3 py-1 rounded-full text-xs font-medium border border-[#232323]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
