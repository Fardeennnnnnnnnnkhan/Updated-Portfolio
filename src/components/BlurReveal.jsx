import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlurReveal({ children, delay = 0, yOffset = 50, blurAmount = "15px", duration = 0.8, className = "" }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    const tl = gsap.fromTo(element, 
      {
        opacity: 0,
        y: yOffset,
        filter: `blur(${blurAmount})`
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%", // triggers precisely as section enters screen
          toggleActions: "play none none reverse", // naturally replays when scrolled back into view
        },
        clearProps: "filter" // Cleanup blur artifacting
      }
    );

    return () => {
      if(tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    }
  }, [delay, yOffset, blurAmount, duration]);

  return (
    <div ref={elementRef} className={`w-full ${className}`}>
      {children}
    </div>
  )
}
