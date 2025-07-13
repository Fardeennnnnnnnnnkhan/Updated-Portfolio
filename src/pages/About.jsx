import React from "react";

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-16">
      {/* Section Title */}
      <h2 className="text-4xl sm:text-5xl font-mono font-light text-white text-center mb-4">
        About Me
      </h2>
      <p className="text-gray-300 font-mono text-lg max-w-4xl text-center mx-auto leading-relaxed mb-12">
  I'm a passionate Computer Science Engineering student with a strong foundation in full-stack development. Currently diving into Machine Learning , Data Science and Analytics, I’m driven to explore the broader field of AI and build smart, scalable solutions that solve real-world problems.
</p>

      {/* Main Content Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: My Journey & Stats */}
        <div>
          {/* My Journey */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-icons text-[26px]"
                style={{ color: "#a259f7" }}
              >
                trending_up
              </span>
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
            </div>
            <div className="text-gray-300 space-y-4 max-w-2xl">
              <p>
                Currently pursuing a{" "}
                <strong>B.Tech in Computer Science and Engineering</strong> at
                IPS Academy Institute of Engineering & Science, Indore. I'm in
                my 3rd year with a CGPA of <strong>9.48/10</strong>. Over the
                last 2 years, I’ve gained hands-on experience building
                full-stack applications and scalable platforms through
                internships and independent projects.
              </p>
              <p>
                I’ve contributed to the development of secure admin panels,
                real-time dashboards, and responsive user interfaces using the{" "}
                <strong>MERN stack</strong>. My work spans diverse domains—from
                AI-powered code review tools to grocery delivery platforms and
                chat applications. I'm always eager to learn new technologies
                and collaborate on projects that solve real-world challenges.
              </p>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="flex gap-8 mt-6 flex-wrap">
            <div className="bg-transparent border border-[#a259f7]/30 rounded-lg px-6 py-4 text-center min-w-[140px] flex-1">
              <h3 className="text-3xl font-bold text-white">9.48/10</h3>
              <p className="text-gray-400 mt-1">Current SGPA</p>
            </div>
            <div className="bg-transparent border border-[#a259f7]/30 rounded-lg px-6 py-4 text-center min-w-[140px] flex-1">
              <h3 className="text-3xl font-bold text-white">2+ Years</h3>
              <p className="text-gray-400 mt-1">Experience</p>
            </div>
          </div>
        </div>
        {/* Right: Education Card */}
        <div className="bg-transparent border border-[#a259f7]/30 rounded-xl p-6 shadow-lg max-w-xl mx-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-xl font-semibold flex items-center gap-2">
            <span
              className="material-icons text-[22px]"
              style={{ color: "#a259f7" }}
            >
              school
            </span>{" "}
            Education
          </h2>
          <p className="mt-2 text-lg font-bold text-white">
            B.Tech in Computer Science and Engineering
          </p>
          <p className="text-gray-400">
            IPS Academy Institute of Engineering & Science, Indore
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Aug 2021 – July 2027 | Current SGPA: 9.48/10
          </p>

          <h3 className="text-white mt-4 font-medium flex items-center gap-2">
            <span
              className="material-icons text-[20px]"
              style={{ color: "#a259f7" }}
            >
              menu_book
            </span>{" "}
            Relevant Coursework:
          </h3>
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            <span className="bg-gray-900 px-3 py-1 rounded-full text-gray-300">
              Data Structures & Algorithms
            </span>
            <span className="bg-gray-900 px-3 py-1 rounded-full text-gray-300">
              Operating Systems
            </span>
            <span className="bg-gray-900 px-3 py-1 rounded-full text-gray-300">
              Machine Learning
            </span>
            <span className="bg-gray-900 px-3 py-1 rounded-full text-gray-300">
              Database Management
            </span>
            <span className="bg-gray-900 px-3 py-1 rounded-full text-gray-300">
              Web Technologies
            </span>
            <span className="bg-gray-900 px-3 py-1 rounded-full text-gray-300">
              Computer Networks
            </span>
            <span className="bg-gray-900 px-3 py-1 rounded-full text-gray-300">
              Object Oriented Programming
            </span>
          </div>

          <p className="mt-4 text-sm text-gray-500 flex items-center gap-2">
            <span
              className="material-icons text-[20px]"
              style={{ color: "#a259f7" }}
            >
              location_on
            </span>{" "}
            Indore, Madhya Pradesh, India
          </p>
        </div>
      </div>
    </section>
  );
}
