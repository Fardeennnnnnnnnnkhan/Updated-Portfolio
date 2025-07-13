import React from "react";
import FardeenPP from "/FardeenPP.jpeg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Home() {
  return (
    <section className="relative z-10 flex items-center justify-center min-h-screen py-24 px-2 sm:px-4 md:px-8 ">
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-12">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <span className="inline-flex items-center px-3 py-1 mb-5 bg-transparent text-xs font-semibold rounded-full text-white border border-[#a259f7] shadow-sm animate-fade-in">
            <svg
              className="w-4 h-4 mr-1 text-[#a259f7] animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12.93V17a1 1 0 11-2 0v-2.07A6.002 6.002 0 014 10a6 6 0 1112 0 6.002 6.002 0 01-5 4.93z" />
            </svg>
            Available for Opportunities
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 text-white leading-tight drop-shadow-lg animate-fade-in-up">
            Hey, I'm <br />
            <span
              className="font-semibold transition-all duration-300 hover:scale-105 inline-block cursor-pointer"
              style={{
                WebkitTextStroke: "0.4px white",
                color: "transparent",
              }}
            >
              Fardeen Khan
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-lg text-[#e0d7f7] mb-5 max-w-xl leading-relaxed animate-fade-in delay-100">
            CS Engineering Student at IPS Academy, Indore | MERN Stack Dev |
            Passionate about Full Stack, AI/ML , Data Science & building
            scalable solutions | Lifelong learner & Problem Solver
          </p>

          <div className="flex flex-wrap gap-3 mb-7 animate-fade-in delay-200">
            <span className="bg-transparent text-white text-xs font-semibold px-4 py-1 rounded-full border border-[#3d246c] shadow-sm hover:scale-105 transition-transform duration-200 cursor-pointer">
              Full Stack Developer
            </span>
            <span className="bg-tranparent text-white text-xs font-semibold px-4 py-1 rounded-full border border-[#3d246c] shadow-sm hover:scale-105 transition-transform duration-200 cursor-pointer">
              AI/ML Enthusiast
            </span>
            <span className="bg-transparent text-white text-xs font-semibold px-4 py-1 rounded-full border border-[#3d246c] shadow-sm hover:scale-105 transition-transform duration-200 cursor-pointer">
              Data Science
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in delay-300 w-full max-w-md">
            <a
              href="https://www.linkedin.com/in/fardeen-khan-077661290/"
              className="flex-1 px-2 py-2 bg-white text-[#a259f7] rounded font-semibold hover:bg-gradient-to-r hover:from-[#a259f7] hover:to-[#7c3aed] hover:text-white hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md focus:outline-none focus:ring-2 focus:ring-[#a259f7] focus:ring-offset-2 text-center justify-center animate-bounce-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex-1 px-2 py-2 bg-white border border-[#a259f7] text-[#a259f7] rounded font-semibold hover:bg-gradient-to-r hover:from-[#a259f7] hover:to-[#7c3aed] hover:text-white hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md focus:outline-none focus:ring-2 focus:ring-[#a259f7] focus:ring-offset-2 text-center justify-center animate-bounce-in delay-100"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-6 text-2xl text-[#a259f7] mt-2 animate-fade-in delay-400">
            <a
              href="mailto:fardeen14122004@gmail.com"
              aria-label="Email"
              className="hover:text-white transition-colors duration-200"
            >
              <span className="material-icons">mail</span>
            </a>
            <a
              href="tel:+919399912220"
              aria-label="Phone"
              className="hover:text-white transition-colors duration-200"
            >
              <span className="material-icons">call</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fardeen-khan-077661290/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-200"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://github.com/Fardeennnnnnnnnnkhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors duration-200"
            >
              <FaGithub className="text-lg" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center justify-center w-full animate-fade-in-up delay-200">
          <div className="bg-[#0a0b1a] rounded-2xl px-8 py-10 flex flex-col items-center shadow-2xl border border-[#a259f7] relative group transition-all duration-300 hover:shadow-[0_0_32px_8px_rgba(255,255,255,0.35)] w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#a259f7] mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300 bg-white flex items-center justify-center">
              <img
                src={FardeenPP}
                alt="Fardeen Khan"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-2 mt-2">
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[#a259f7] drop-shadow">
                  10+
                </span>
                <span className="text-xs sm:text-sm text-[#e0d7f7]">
                  Projects Built
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[#a259f7] drop-shadow">
                  3+
                </span>
                <span className="text-xs sm:text-sm text-[#e0d7f7]">
                  Internships
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[#a259f7] drop-shadow">
                  250+
                </span>
                <span className="text-xs sm:text-sm text-[#e0d7f7]">
                  Problems Solved
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-bold text-[#a259f7] drop-shadow">
                  9.48
                </span>
                <span className="text-xs sm:text-sm text-[#e0d7f7]">CGPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s both;
        }
        .animate-fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
          animation: fade-in-up 0.7s both;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-move {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 3s ease-in-out infinite;
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-in {
          animation: bounce-in 0.7s both;
        }
      `}</style>
    </section>
  );
}
