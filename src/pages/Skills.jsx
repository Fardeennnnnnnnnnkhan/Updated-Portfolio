import GlitchText from "../components/GlitchText/GlitchText";
import React from "react";
import { skillGroups, capsuleSkills } from "../constants/SkillsConstant";

export default function Skills() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12 relative">
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
            <div
              key={group.title}
              className="rounded-xl shadow-lg p-8 flex flex-col items-center border border-[#2d3748] "
            >
              <div>{group.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-gray-200 rounded-full px-4 py-1 text-sm font-medium shadow-inner flex items-center gap-2 "
                  >
                    {skill.icon && <span>{skill.icon}</span>}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
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
