import GlitchText from "../components/GlitchText/GlitchText";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences, MOTIVATIONAL_QUOTES } from "../constants/ExperienceConstant";

const CardContent = ({ exp, y, opacity, glowOpacity, borderHighlight, shadowHighlight, isEven }) => {
  return (
    <motion.div
      style={{
        y,
        opacity,
        borderColor: borderHighlight,
        boxShadow: shadowHighlight,
      }}
      className={`relative w-full h-full bg-white/[0.02] border-[1px] border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl transition-all duration-500 transform-gpu z-10 text-left hover:scale-[1.02] flex flex-col justify-center`}
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className={`absolute inset-0 bg-gradient-to-br ${
          isEven
            ? "from-transparent to-[#a259f7]/10"
            : "from-[#a259f7]/10 to-transparent"
        } pointer-events-none rounded-3xl`}
      />

      <motion.div
        style={{
          scaleX: glowOpacity,
          opacity: glowOpacity,
          transformOrigin: isEven ? "right" : "left",
        }}
        className={`hidden md:block absolute top-[50%] -translate-y-[50%] h-[3px] bg-gradient-to-r ${
          isEven ? "from-transparent to-[#a259f7]" : "from-[#a259f7] to-transparent"
        } w-10 md:w-16 lg:w-20 z-[-1] ${
          isEven ? "-right-[40px] md:-right-[64px] lg:-right-[80px]" : "-left-[40px] md:-left-[64px] lg:-left-[80px]"
        } `}
      />

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 border-b border-gray-800/80 pb-5 relative z-10">
        <div className="flex-1 text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight tracking-tight">
            {exp.title}
          </h3>
          <span
            className="text-lg md:text-xl font-bold tracking-wide"
            style={{ color: exp.companyColor || "#a259f7" }}
          >
            {exp.company}
          </span>
        </div>

        <div className="flex flex-col items-start gap-2.5 text-sm md:text-base text-gray-400 mt-2 md:mt-0 font-medium">
          <span className="flex items-center gap-2 bg-[#a259f7]/10 px-3 py-1.5 rounded-full border border-[#a259f7]/20 text-[#dfd9ff]">
            <span className="material-icons text-[18px]">calendar_today</span>
            {exp.date}
          </span>
          <span className="flex items-center gap-2 px-1">
            <span className="material-icons text-[18px] text-[#a259f7]">location_on</span>
            {exp.location}
          </span>
          {exp.github && (
            <a
              href={exp.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group/link mt-1 px-1 transition-colors hover:text-white"
            >
              <span className="material-icons text-[18px] text-[#f59e42] group-hover/link:text-[#ffb662] transition-colors">
                open_in_new
              </span>
              <span className="text-[#f59e42] group-hover/link:text-[#ffb662] group-hover/link:underline transition-all">
                View Repository
              </span>
            </a>
          )}
        </div>
      </div>

      <ul className="mb-8 space-y-4 relative z-10">
        {exp.bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start text-gray-300 text-[15px] md:text-base leading-relaxed text-left"
          >
            <span
              className="mt-1 material-icons text-[14px] mr-3 shrink-0"
              style={{ color: "#a259f7" }}
            >
              double_arrow
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2.5 mt-auto border-t border-gray-800/80 pt-5 justify-start relative z-10">
        {exp.tech.map((t, i) => (
          <span
            key={i}
            className="bg-[#232323]/60 text-gray-300 border border-gray-700/50 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold hover:bg-[#a259f7]/20 hover:border-[#a259f7]/40 hover:text-white transition-all duration-300 cursor-default"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const QuoteBubble = ({ quoteObj, index, y, glowOpacity }) => {
  const number = index < 9 ? `0${index + 1}` : `${index + 1}`;
  return (
    <motion.div
      style={{ y, opacity: glowOpacity, scale: glowOpacity }}
      className={`hidden md:flex relative w-full h-full min-h-[300px] border border-white/20 rounded-3xl p-8 lg:p-12 
                  flex-col justify-center items-start text-left 
                  transition-transform hover:-translate-y-2 duration-500 ease-out z-10
                  bg-white/95 backdrop-blur-[12px] overflow-hidden group`}
    >
      <span 
        className="absolute top-8 right-8 text-[18px] font-[400] tracking-normal select-none"
        style={{ color: quoteObj.accent }}
      >
        {number}
      </span>

      <div className="relative z-10 flex flex-col items-start gap-4 w-full">
         <p 
           className="text-[2.5rem] lg:text-[3.5rem] font-[600] tracking-[-2px] uppercase text-[#000] leading-[1] transition-colors duration-300 group-hover:text-[#5227FF]"
         >
           {quoteObj.text}
         </p>
      </div>

      <div 
        className="absolute bottom-0 left-0 w-full h-2 transition-all duration-300 group-hover:h-3"
        style={{ backgroundColor: quoteObj.accent }}
      />
    </motion.div>
  );
};

const TimelineItem = ({ exp, index }) => {
  const itemRef = useRef(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 85%", "center center"], 
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const glowOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const borderHighlight = useTransform(scrollYProgress, [0.5, 1], ["rgba(162, 89, 247, 0.1)", "rgba(162, 89, 247, 0.6)"]);
  const shadowHighlight = useTransform(scrollYProgress, [0.5, 1], ["0px 0px 0px rgba(162, 89, 247, 0)", "0px 0px 25px rgba(162, 89, 247, 0.25)"]);

  const cardProps = { exp, y, opacity, glowOpacity, borderHighlight, shadowHighlight, isEven };
  const currentQuote = MOTIVATIONAL_QUOTES[index % MOTIVATIONAL_QUOTES.length];

  return (
    <div
      ref={itemRef}
      className={`relative w-full flex flex-col md:flex-row justify-between items-stretch mb-16 md:mb-8 lg:mb-16 group z-20`}
    >
      <div className="hidden md:flex flex-1 justify-end items-stretch pr-10 md:pr-16 lg:pr-20 w-full transition-all py-8">
        {isEven ? (
          <CardContent {...cardProps} />
        ) : (
          <div className="flex w-full justify-end pr-4 lg:pr-8 items-stretch h-full">
            <QuoteBubble quoteObj={currentQuote} index={index} y={y} glowOpacity={glowOpacity} isEven={isEven} />
          </div>
        )}
      </div>

      <div className="absolute top-12 left-[20px] md:static md:top-auto md:left-auto flex justify-center items-center -translate-x-1/2 md:translate-x-0 w-auto z-30 transition-all">
        <motion.div
          style={{ scale, opacity }}
          className="w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-[#121212] bg-[#3a1a6b] shadow-[0_0_15px_rgba(162,89,247,0.5)] relative flex justify-center items-center overflow-hidden transform-gpu"
        >
          <motion.div
            style={{ opacity: glowOpacity, scale: glowOpacity }}
            className="w-full h-full bg-[#a259f7] shadow-[0_0_15px_#a259f7]"
          />
        </motion.div>
      </div>

      <div className="flex-1 pl-[60px] md:pl-16 lg:pl-20 w-full max-w-full md:max-w-none transition-all md:py-8 items-stretch flex flex-col">
        <div className="md:hidden block w-full pt-1">
          <CardContent {...cardProps} isEven={false} />
        </div>
        <div className="hidden md:flex justify-start items-stretch w-full h-full">
          {!isEven ? (
            <CardContent {...cardProps} />
          ) : (
            <div className="flex w-full justify-start pl-4 lg:pl-8 items-stretch h-full">
              <QuoteBubble quoteObj={currentQuote} index={index} y={y} glowOpacity={glowOpacity} isEven={isEven} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-2 sm:px-4 md:px-8 py-20 pb-40 overflow-hidden selection:bg-[#a259f7]/30 selection:text-white">
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-[#a259f7]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center mb-16 md:mb-24 mt-8 md:mt-0">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center mb-6 tracking-tight">
          <GlitchText
            speed={1.5}
            enableShadows
            enableOnHover={false}
            className="custom-class drop-shadow-[0_0_15px_rgba(162,89,247,0.3)]"
          >
            Experience
          </GlitchText>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light max-w-3xl text-center mx-auto tracking-wide">
          My professional journey. Scroll to see the milestones light up as they are revealed.
        </p>
      </div>

      <div ref={containerRef} className="relative w-full max-w-7xl mx-auto z-10 pt-4 md:pt-10">
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800/80 -translate-x-1/2 rounded-full z-0" />

        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[20px] md:left-1/2 top-0 w-[4px] bg-gradient-to-b from-[#a259f7] via-[#a259f7] to-transparent -translate-x-1/2 rounded-full z-10 shadow-[0_0_20px_rgba(162,89,247,0.9)] origin-top"
        />

        <div className="w-full flex flex-col space-y-2 md:space-y-0">
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

