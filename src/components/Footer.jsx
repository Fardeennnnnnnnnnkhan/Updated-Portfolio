import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-purple-900 py-8 flex flex-col items-center mt-16 relative z-10">
      {/* Navigation */}
      <nav className="flex gap-10 mb-6">
        {["About", "Experience", "Projects", "Skills", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-purple-200 hover:text-purple-400 transition-colors text-lg font-medium tracking-wide"
            >
              {item}
            </a>
          )
        )}
      </nav>
      {/* Social Icons */}
      <div className="flex gap-10 mb-6 text-2xl text-purple-300">
        <a
          href="mailto:fardeen14122004@gmail.com"
          aria-label="Email"
          className="hover:text-purple-400 transition-colors"
        >
          <FaEnvelope />
        </a>
        <a
          href="tel:+919399912220"
          aria-label="Phone"
          className="hover:text-purple-400 transition-colors"
        >
          <FaPhone />
        </a>
        <a
          href="https://github.com/Fardeennnnnnnnnnkhan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-purple-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/fardeen-khan-077661290/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-purple-400 transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
      {/* Copyright */}
      <div className="text-purple-200 text-center text-base">
        © 2025 Fardeen Khan. Built with React and ThreeJS.
      </div>
    </footer>
  );
}
