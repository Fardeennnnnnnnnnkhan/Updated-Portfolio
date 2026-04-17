import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";
import Lightning from "../components/Lightning/Lighting";

gsap.registerPlugin(ScrollTrigger);

// --- MAGNETIC BUTTON WRAPPER ---
const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    let xTo = gsap.quickTo(ref.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"});
    let yTo = gsap.quickTo(ref.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"});
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const {height, width, left, top} = ref.current.getBoundingClientRect();
      const x = clientX - (left + width/2);
      const y = clientY - (top + height/2);
      xTo(x * 0.35); // Magic magnetic pull ratio
      yTo(y * 0.35);
    };
    
    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const currentRef = ref.current;
    if(currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    }
  }, []);

  return <div ref={ref} className={`w-fit cursor-pointer ${className || ''}`}>{children}</div>;
};

// --- CRAZY BEST IN CLASS HOME COMPONENT ---
export default function Home() {
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const subElementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      // INITIAL STATE: Centered text hidden below with premium blur
      gsap.set(textRefs.current, { y: 150, opacity: 0, filter: "blur(15px)" });
      gsap.set(subElementsRef.current, { opacity: 0, scale: 0.9, y: 20 });

      // DRAMATIC ENTRANCE: Typography slides up beautifully via staggering
      tl.to(textRefs.current, { 
        y: 0, 
        opacity: 1, 
        filter: "blur(0px)",
        duration: 1.5, 
        stagger: 0.15, 
        ease: "power4.out"
      });

      // FADE UP SUB-ELEMENTS: Body text, buttons, tags
      tl.to(subElementsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out"
      }, "-=0.9"); // Overlapping timelines for continuity

      // PARALLAX SCROLL EFFECT: Moves the hero slower than normal document scroll
      gsap.to(containerRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleWords = ["ELEVATING", "DIGITAL", "EXPERIENCES."];

  return (
 <section ref={containerRef} className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-8 lg:pb-12 overflow-hidden rounded-[2rem] mt-4 mb-16 border border-white/5 shadow-2xl">
      
      {/* --- BACKGROUND LIGHTING EFFECTS --- */}
      <div className="absolute inset-0 z-0">
         <Lightning hue={260} speed={1.2} intensity={1.5} size={0.8} />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#090a1a]/50 to-[#090a1a] pointer-events-none" />

      {/* --- MAIN CENTERED LAYOUT CONTAINER --- */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center h-full">
        
        {/* Status Pill */}
        <div ref={el => subElementsRef.current[0] = el} className="flex items-center gap-3 mb-8 px-5 py-2 border border-[#a259f7]/40 bg-[#160F27]/60 backdrop-blur-xl rounded-full shadow-[0_0_20px_rgba(162,89,247,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a259f7] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dfd9ff] shadow-[0_0_10px_#dfd9ff]" />
          </span>
          <span className="text-white/90 text-[10px] md:text-sm font-mono tracking-[0.25em] uppercase font-semibold">
            Status : Building Scalable Digital Experiences
          </span>
        </div>

        {/* Big Central Typography */}
        <div className="flex flex-col mb-8 w-full items-center">
           {titleWords.map((word, i) => (
              <div key={i} className="overflow-hidden leading-[1.05] py-2">
                 <h1 
                   ref={el => textRefs.current[i] = el}
                   className="text-white font-black text-[3.2rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] tracking-tighter uppercase drop-shadow-2xl"
                   style={
                     i === 1 
                       ? {
                           WebkitTextFillColor: 'transparent',
                           WebkitTextStroke: '2px rgba(162, 89, 247, 0.9)',
                           backgroundImage: 'linear-gradient(to right, rgba(162,89,247,0.4), rgba(162,89,247,0.1))',
                           WebkitBackgroundClip: 'text',
                         }
                       : {}
                   }
                 >
                   {word}
                 </h1>
              </div>
           ))}
        </div>

        {/* Body Text */}
        <p ref={el => subElementsRef.current[1] = el} className="text-gray-400 text-sm md:text-base lg:text-xl font-light max-w-2xl leading-relaxed mb-12">
          I design and build <strong className="text-white font-medium">high-performance web applications</strong> 
          powered by modern technologies and intelligent systems. <br className="hidden md:block"/>
          Specializing in <strong className="text-white font-medium">Full Stack Development</strong>, 
          <strong className="text-white font-medium"> Machine Learning</strong>, and 
          <strong className="text-white font-medium"> Generative AI</strong> — focused on creating scalable, 
          efficient, and visually compelling digital products.
        </p>

        {/* Interactive Buttons */}
        <div ref={el => subElementsRef.current[2] = el} className="flex flex-wrap items-center justify-center gap-6 w-full mb-12">
          <MagneticButton>
            <a href="#projects" className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-white text-black font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full overflow-hidden transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(162,89,247,0.4)]">
              <span className="absolute inset-0 bg-[#a259f7] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                View My Work <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a href="#contact" className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full overflow-hidden hover:border-[#a259f7]/60 hover:bg-[#a259f7]/10 transition-all duration-300">
              <span className="relative z-10">
                Get In Touch
              </span>
            </a>
          </MagneticButton>
        </div>

        {/* Social Links Centralized */}
        <div ref={el => subElementsRef.current[3] = el} className="flex items-center gap-8 text-gray-500">
           <a href="https://github.com/Fardeennnnnnnnnnkhan" target="_blank" rel="noreferrer" className="hover:text-white hover:-translate-y-1 transition-all"><FaGithub size={26} /></a>
           <a href="https://www.linkedin.com/in/fardeen-khan-077661290/" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] hover:-translate-y-1 transition-all"><FaLinkedin size={26} /></a>
           <a href="#" className="hover:text-[#1DA1F2] hover:-translate-y-1 transition-all"><FaTwitter size={26} /></a>
        </div>

      </div>
    </section>
  );
}
