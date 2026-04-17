import GlitchText from "../components/GlitchText/GlitchText";
import Lanyard from "../components/LanYard/Lanyard";
import React from "react";
import BlurText from "../components/BlurText/BlurText";
import SpotlightCard from "../components/SpotlightCard/SpotlightCard";
import { motion } from "framer-motion";
import { ABOUT_TEXT, RELEVANT_COURSEWORK } from "../constants/AboutConstant";

export default function About() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-16 overflow-hidden">
      <div className="relative sm:absolute sm:top-0 sm:right-0 w-full sm:w-[400px] lg:w-[500px] xl:w-[600px] h-[350px] sm:h-[600px] lg:h-[800px] z-20 pointer-events-auto filter drop-shadow-[0_0_25px_rgba(162,89,247,0.15)] flex justify-center sm:justify-end">
        <Lanyard />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-2xl sm:text-5xl font-mono font-light text-white text-center mb-4 mt-8 md:mt-0">
          <GlitchText
            speed={1.5}
            enableShadows
            enableOnHover={false}
            className='custom-class text-md'
          >
            About Me
          </GlitchText>
        </h2>
        <div className="max-w-4xl text-center mx-auto mb-12 mt-4 px-4 sm:px-0">
          <BlurText 
            text={ABOUT_TEXT}
            delay={30} 
            className="text-gray-300 font-mono text-lg leading-relaxed"
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
            <SpotlightCard className="p-6 mb-6 h-auto" spotlightColor="rgba(162, 89, 247, 0.2)">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="material-icons text-[26px]"
                  style={{ color: "#a259f7" }}
                >
                  trending_up
                </span>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <div className="text-gray-300 space-y-4 max-w-2xl leading-relaxed">
                <p>
                  Currently pursuing a{" "}
                  <strong className="text-white">B.Tech in Computer Science and Engineering</strong> at
                  IPS Academy Institute of Engineering & Science, Indore. I'm in
                  my 3rd year with a CGPA of <strong className="text-white">9.48/10</strong>. Over the
                  last 2 years, I’ve gained hands-on experience building
                  full-stack applications and scalable platforms through
                  internships and independent projects.
                </p>
                <p>
                  I’ve contributed to the development of secure admin panels,
                  real-time dashboards, and responsive user interfaces using the{" "}
                  <strong className="text-white">MERN stack</strong>. My work spans diverse domains—from
                  AI-powered code review tools to grocery delivery platforms and
                  chat applications. I'm always eager to learn new technologies
                  and collaborate on projects that solve real-world challenges.
                </p>
              </div>
            </SpotlightCard>
            
            <div className="flex gap-6 flex-wrap">
              <SpotlightCard className="p-6 text-center min-w-[140px] flex-1" spotlightColor="rgba(162, 89, 247, 0.25)">
                <h3 className="text-3xl font-bold text-white">9.48/10</h3>
                <p className="text-[#a259f7] mt-1 font-medium">Current SGPA</p>
              </SpotlightCard>
              <SpotlightCard className="p-6 text-center min-w-[140px] flex-1" spotlightColor="rgba(162, 89, 247, 0.25)">
                <h3 className="text-3xl font-bold text-white">2+ Years</h3>
                <p className="text-[#a259f7] mt-1 font-medium">Experience</p>
              </SpotlightCard>
            </div>
          </div>
        <SpotlightCard className="p-8 max-w-xl mx-auto w-full mt-10 md:mt-0 h-full" spotlightColor="rgba(162, 89, 247, 0.2)">
          <h2 className="text-white text-xl font-semibold flex items-center gap-2">
            <span
              className="material-icons text-[26px]"
              style={{ color: "#a259f7" }}
            >
              school
            </span>{" "}
            Education
          </h2>
          
          <div className="mt-6">
            <p className="text-xl font-bold text-white">
              B.Tech in Computer Science and Engineering
            </p>
            <p className="text-gray-300 mt-1">
              IPS Academy Institute of Engineering & Science, Indore
            </p>
            <div className="inline-block bg-[#a259f7]/10 border border-[#a259f7]/20 rounded-md px-3 py-1.5 mt-3">
              <p className="text-sm text-[#dfd9ff] font-medium">
                Aug 2023 – July 2027 | SGPA: 9.48/10
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-white font-medium flex items-center gap-2 text-lg">
              <span
                className="material-icons text-[22px]"
                style={{ color: "#a259f7" }}
              >
                menu_book
              </span>{" "}
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-2.5 mt-4">
              {RELEVANT_COURSEWORK.map((course, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(162, 89, 247, 0.2)" }}
                  className="bg-gray-800/60 border border-gray-700 px-4 py-1.5 rounded-full text-sm text-gray-200 cursor-default transition-colors"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <span
                className="material-icons text-[20px]"
                style={{ color: "#a259f7" }}
              >
                location_on
              </span>{" "}
              Indore, Madhya Pradesh, India
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
