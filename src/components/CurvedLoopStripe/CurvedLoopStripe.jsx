import React from 'react';
import './CurvedLoopStripe.css';

const CurvedLoopStripe = ({ className = "" }) => {
  return (
    <div className={`absolute -top-16 sm:-top-24 md:-top-32 lg:-top-40 right-0 w-[60vw] max-w-[700px] h-[60vw] max-h-[700px] pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-90 ${className}`}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full transform translate-x-[5%] -translate-y-[5%]"
        preserveAspectRatio="xMaxYMin slice"
      >
        <defs>
          <linearGradient id="stripeGrad1" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(223, 217, 255, 0.8)" />
            <stop offset="70%" stopColor="rgba(162, 89, 247, 0.9)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          
          <linearGradient id="stripeGrad2" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="40%" stopColor="rgba(96, 165, 250, 0.6)" />
            <stop offset="80%" stopColor="rgba(162, 89, 247, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <filter id="glowBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Path 1: Outer secondary glow curve */}
        <path
          d="M 500 380 C 300 380, 150 250, 150 0"
          fill="none"
          stroke="url(#stripeGrad2)"
          strokeWidth="24"
          strokeLinecap="round"
          filter="url(#glowBlur)"
        />

        {/* Path 2: Primary solid gradient stripe */}
        <path
          d="M 500 350 C 280 350, 120 220, 120 0"
          fill="none"
          stroke="url(#stripeGrad1)"
          strokeWidth="8"
          strokeLinecap="round"
          filter="url(#glowBlur)"
        />

        {/* Path 3: Extremely bright moving dashed energy flow inside */}
        <path
          d="M 500 350 C 280 350, 120 220, 120 0"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeDasharray="10 40"
          strokeLinecap="round"
          className="animate-curved-flow filter drop-shadow-[0_0_8px_#fff]"
        />

        {/* Path 4: Text Path for infinite scrolling text */}
        <path
          id="textCurvePath"
          d="M 500 385 C 265 385, 85 245, 85 0"
          fill="none"
          stroke="none"
        />
        
        <text className="text-[12px] font-mono tracking-[0.4em] uppercase fill-[#dfd9ff]/70 font-semibold" filter="url(#glowBlur)">
          <textPath href="#textCurvePath" startOffset="100%">
            ARCHITECTING THE FUTURE • FULL-STACK ENGINEER • MOTION EXPERT • ARCHITECTING THE FUTURE • FULL-STACK ENGINEER • 
            <animate attributeName="startOffset" from="100%" to="-150%" begin="0s" dur="30s" repeatCount="indefinite" />
          </textPath>
        </text>

        {/* Path 5: Fast moving secondary particles */}
        <path
          d="M 500 320 C 320 320, 170 200, 170 0"
          fill="none"
          stroke="#e9d5ff"
          strokeWidth="2"
          strokeDasharray="4 24"
          strokeLinecap="round"
          className="animate-curved-flow-fast opacity-80"
        />
      </svg>
    </div>
  );
};

export default CurvedLoopStripe;
