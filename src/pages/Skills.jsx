import GlitchText from "../components/GlitchText/GlitchText";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { skillGroups, capsuleSkills } from "../constants/SkillsConstant";
import BorderGlow from "../components/BorderGlow/BorderGlow";
import SplashCursor from "../components/SplashCursor";

function SkillCard({ group }) {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      gsap.to(cardRef.current, { rotationY: 180, duration: 0.8, ease: "power3.out" });
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      gsap.to(cardRef.current, { rotationY: 0, duration: 0.8, ease: "power3.out" });
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 768) {
      const targetRotation = isFlipped ? 0 : 180;
      gsap.to(cardRef.current, { rotationY: targetRotation, duration: 0.8, ease: "power3.out" });
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      className="w-full h-full"
      style={{ perspective: "1000px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <BorderGlow
        className="group relative rounded-2xl shadow-lg border border-white/10 w-full h-full backdrop-blur-xl bg-[#160f27] overflow-hidden"
        backgroundColor="transparent"
        borderRadius={16}
        glowColor="270 100 60"
      >
        <SplashCursor getExtension={false} />
        <div
          ref={cardRef}
        className="w-full h-full pointer-events-none relative z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div
          className="p-8 flex flex-col items-center w-full h-full"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div>{group.icon}</div>
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            {group.title}
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {group.skills.map((skill, idx) => (
              <span
                key={idx}
                className="text-gray-200 bg-[#2d3748]/30 rounded-full px-4 py-1.5 text-sm font-medium shadow-inner flex items-center gap-2 border border-white/5"
              >
                {skill.icon && <span>{skill.icon}</span>}
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 p-8 flex flex-col items-center justify-center w-full h-full text-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>{group.icon}</div>
          <h3 className="text-2xl font-bold text-[#a259f7] mb-4">
            {group.title} Insights
          </h3>
          <p className="text-gray-300 text-base leading-relaxed">
            {group.description}
          </p>
        </div>
      </div>
      </BorderGlow>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <h2 className="text-4xl font-bold mb-2 text-center text-white">
          <GlitchText
            speed={1}
            enableShadows
            enableOnHover={false}
            className='custom-class'
          >
            Skills & Abilities
          </GlitchText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>
        <div className="overflow-x-hidden w-full py-8">
          <div className="relative w-full">
            <div
              className="flex gap-8 w-full animate-scrollCapsules whitespace-nowrap"
              style={{ animation: "scrollCapsules 18s linear infinite" }}
            >
              {capsuleSkills.concat(capsuleSkills).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-2xl px-8 py-3 shadow-lg border border-[#2d3748] min-w-[180px] justify-center mx-2"
                >
                  {item.icon}
                  <span className="text-lg font-semibold text-white">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes scrollCapsules {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </>
  );
}
