import GlitchText from "../components/GlitchText/GlitchText";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants/ProjectConstant";

gsap.registerPlugin(ScrollTrigger);

function ProjectCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  return (
    <div className="relative w-full rounded-2xl overflow-hidden mb-6 group shrink-0">
      <img
        src={images[current]}
        alt={`Project screenshot ${current + 1}`}
        className="w-full h-96 md:h-[400px] object-cover object-top transition-all duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#160f27]/80 hover:bg-[#a259f7] text-white rounded-full p-2 shadow-lg transition-all duration-200 opacity-80 group-hover:opacity-100 backdrop-blur-md"
            onClick={prev}
            aria-label="Previous image"
            type="button"
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#160f27]/80 hover:bg-[#a259f7] text-white rounded-full p-2 shadow-lg transition-all duration-200 opacity-80 group-hover:opacity-100 backdrop-blur-md"
            onClick={next}
            aria-label="Next image"
            type="button"
          >
            <span className="material-icons">chevron_right</span>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 p-1.5 rounded-full bg-black/40 backdrop-blur-sm">
            {images.map((_, i) => (
              <span
                key={i}
                className={`inline-block w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === current ? "bg-[#a259f7]" : "bg-white/40"
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
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    const setupAnimations = (isMobile) => {
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        if (idx > 0) {
          const prevCard = cardsRef.current[idx - 1];
          if (prevCard) {
            const prevInner = prevCard.querySelector('.project-card');
            if (prevInner) {
              gsap.to(prevInner, {
                scale: isMobile ? 0.95 : 0.90,
                opacity: isMobile ? 0.6 : 0.3,
                scrollTrigger: {
                  trigger: card,
                  start: "top 100%", 
                  end: "top 0%", 
                  scrub: true,
                },
                ease: "none",
              });
            }
          }
        }
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top", 
        end: "bottom bottom", 
        snap: {
          snapTo: 1 / (projects.length - 1),
          duration: { min: 0.2, max: 0.5 },
          delay: 0.05, 
          ease: "power2.inOut"
        }
      });
    };

    mm.add("(min-width: 768px)", () => setupAnimations(false)); 
    mm.add("(max-width: 767px)", () => setupAnimations(true)); 

    return () => mm.revert(); 
  }, []);

  return (
    <section className="w-[100vw] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] flex flex-col items-center">
      <div className="w-full flex flex-col items-center justify-center py-24 px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-6">
          <GlitchText
            speed={1}
            enableShadows
            enableOnHover={false}
            className="custom-class"
          >
            Featured Projects
          </GlitchText>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl text-center">
          A showcase of my technical projects and innovations that solve
          real-world problems
        </p>
      </div>

      <div 
        ref={containerRef}
        className="w-full flex flex-col relative"
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="sticky top-0 w-[100vw] h-[100vh] flex flex-col justify-center items-center overflow-hidden"
            style={{
              zIndex: idx, 
            }}
          >
            <div className="project-card w-full max-w-5xl md:max-w-6xl bg-[#160f27]/70 backdrop-blur-2xl border border-[#a259f7]/20 rounded-[2.5rem] p-6 lg:p-12 shadow-2xl transition-all duration-300 mx-4 flex flex-col justify-center">
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="flex items-center gap-1 bg-[#a259f7] text-white text-xs font-semibold px-3 py-1 rounded-full shadow transition-transform duration-200">
                      <span className="material-icons text-base align-middle">
                        star
                      </span>{" "}
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <ProjectCarousel images={project.images} />

              <div className="mb-4">
                <p className="text-xl text-gray-200 font-semibold mb-3">
                  {project.description}
                </p>
                {Array.isArray(project.details) ? (
                  <ul className="text-gray-400 text-base md:text-lg leading-relaxed list-outside pl-5 space-y-2">
                    {project.details.map((point, i) => (
                      <li key={i} className="list-disc pl-1 text-left">{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed text-left">
                    {project.details}
                  </p>
                )}
              </div>

              <hr className="border-t border-[#232323] my-6" />

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="material-icons text-base"
                    style={{ color: "#a259f7" }}
                  >
                    fiber_manual_record
                  </span>
                  <span className="font-semibold text-white tracking-wide">
                    Technologies Used
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-[#232323] text-gray-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-[#232323] hover:bg-[#a259f7] hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                {(project.githubLink || project.link) && (
                  <a
                    href={project.githubLink || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#a259f7] hover:bg-[#8e9c78] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md focus:outline-none hover:-translate-y-0.5"
                  >
                    <span className="material-icons text-base">code</span> View Code
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent border-2 border-[#a259f7] hover:bg-[#a259f7] hover:text-white text-[#a259f7] font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md focus:outline-none hover:-translate-y-0.5"
                  >
                    <span className="material-icons text-base">open_in_new</span> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

