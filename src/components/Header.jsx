import React from "react";
import StaggeredMenu from "./StaggeredMenu/StaggeredMenu";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "contact", label: "Contact" },
];

// Reformat links for StaggeredMenu integration
const staggerMenuItems = navLinks.map(link => ({
  label: link.label,
  link: `#${link.to}`
}));

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-8 pointer-events-none md:pointer-events-auto">
        <div className="container mx-auto flex items-center justify-between relative px-4 pointer-events-auto">
          
          {/* Logo/Name (Visible on both) */}
          <div className="flex-shrink-0 text-3xl ml-2 md:ml-4 font-light tracking-tight text-white relative z-50">
            Fardeen Khan
          </div>

          {/* Staggered Menu For Mobile */}
          <div className="md:hidden block absolute inset-0">
             <StaggeredMenu
                isFixed={true}
                items={staggerMenuItems}
                displaySocials={true}
                socialItems={[
                    { label: "Github", link: "https://github.com/Fardeennnnnnnnnnkhan" },
                    { label: "LinkedIn", link: "https://www.linkedin.com/in/fardeen-khan-077661290/" },
                ]}
                logoUrl=""
                accentColor="#a259f7"
                colors={['#160F27', '#4b2184', '#a259f7']}
             />
          </div>

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
          
          {/* Spacer for right side balance */}
          <div className="hidden md:block w-8 lg:w-64" />
        </div>
      </header>
    </>
  );
}
