import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative mt-32 border-t border-[#a259f7]/30 min-h-[50vh] flex flex-col justify-between pt-16 pb-8 px-6 md:px-16 lg:px-24 z-10 bg-gradient-to-b from-transparent to-[#a259f7]/10 before:absolute before:inset-0 before:-z-10 before:backdrop-blur-sm overflow-hidden" 
          style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      
      <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-[#a259f7]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end pb-8 border-b border-[#a259f7]/30 gap-8 md:gap-0 relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#dfd9ff] leading-none">
          Work with Me
        </h2>
        <a
          href="mailto:fardeen14122004@gmail.com"
          className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#f59e42] border-b-[3px] border-[#f59e42] pb-1 hover:text-[#ffb662] hover:border-[#ffb662] transition-colors leading-none"
        >
          fardeen14122004@gmail.com
        </a>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-start gap-16 md:gap-32 py-16 relative z-10">
        <div className="flex flex-col gap-4 text-purple-200 font-medium">
          <h3 className="text-[#a259f7] font-bold uppercase tracking-widest text-sm mb-2">Sitemap</h3>
          <a href="#about" className="hover:text-white transition-colors">Home</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex flex-col gap-4 text-purple-200 font-medium">
          <h3 className="text-[#a259f7] font-bold uppercase tracking-widest text-sm mb-2">Socials</h3>
          <a
            href="https://github.com/Fardeennnnnnnnnnkhan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <FaGithub className="text-xl" /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/fardeen-khan-077661290/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <FaTwitter className="text-xl" /> Twitter
          </a>
          <a
            href="mailto:fardeen14122004@gmail.com"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <FaEnvelope className="text-xl" /> Email
          </a>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-end mt-auto pt-8 relative z-10">
        <div className="flex relative leading-[0.8] font-black tracking-tighter text-white uppercase text-[clamp(4.5rem,20vw,14rem)] md:-mb-2 select-none drop-shadow-[0_0_15px_rgba(162,89,247,0.2)]">
          FARDEEN
          <span className="text-base md:text-2xl lg:text-3xl font-bold uppercase absolute top-0 -right-6 md:top-2 md:-right-10 lg:-right-12 leading-none text-[#a259f7]">
            ™
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-start md:items-center gap-2 md:gap-12 lg:gap-24 text-purple-300 text-sm font-medium pb-2 mt-12 md:mt-0 right-0">
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors text-left flex items-center gap-2 group"
          >
            Back to top 
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
          <span>Copyright © Fardeen {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
