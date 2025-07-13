import React, { useState } from "react";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Name on the left */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-10">
        <div className="container mx-auto flex items-center justify-between relative px-4">
      <div className="flex-shrink-0 text-3xl ml-4 mb-3 font-light tracking-tight text-white  ">
        Fardeen Khan
      </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#a259f7]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="material-icons text-3xl text-[#a259f7]">menu</span>
          </button>
          {/* Pill Navbar Centered (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <nav className="backdrop-blur-md bg-[#1a0036]/80 border border-[#a259f7]/30 rounded-full px-8 py-2 shadow-lg flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.to}
                  href={`#${link.to}`}
                  className="px-4 py-2 rounded-full text-base font-medium transition-all duration-200 text-white hover:bg-gradient-to-r hover:from-[#a259f7] hover:to-[#7c3aed] hover:text-white focus:bg-[#a259f7] focus:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          {/* Spacer for right side (optional, for balance) */}
          <div className="w-8 md:w-48 lg:w-64" />
        </div>
        {/* Mobile Nav Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setMenuOpen(false)}
            />
            {/* Slide-in Nav */}
            <div className="ml-auto w-3/4 max-w-xs h-full bg-[#1a0036]/80 backdrop-blur-lg border-l border-[#a259f7]/30 shadow-2xl flex flex-col p-8 animate-slide-in-right relative">
              <button
                className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#a259f7]"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <span className="material-icons text-2xl text-white">
                  close
                </span>
              </button>
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.to}
                    href={`#${link.to}`}
                    className="px-4 py-3 rounded-full text-lg font-semibold transition-all duration-200 text-white hover:bg-gradient-to-r hover:from-[#a259f7] hover:to-[#7c3aed] hover:text-white focus:bg-[#a259f7] focus:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
      {/* Animation keyframes for slide-in */}
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.35s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </>
  );
}
