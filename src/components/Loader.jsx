import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import StarsCanvas from './Stars';

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const waveFillRef = useRef(null);
  const wave1Ref = useRef(null);
  const wave2Ref = useRef(null);
  const wave3Ref = useRef(null);
  const percentRef = useRef(null);
  const textGroupRef = useRef(null);
  const word1Ref = useRef(null);
  const word2Ref = useRef(null);
  const word3Ref = useRef(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const waveFill = waveFillRef.current;
    const w1 = wave1Ref.current;
    const w2 = wave2Ref.current;
    const w3 = wave3Ref.current;
    const pctEl = percentRef.current;

    document.body.style.overflow = 'hidden';

    // Timeline for the main load progression
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      },
    });

    // 1. Water level rises
    tl.fromTo(
      waveFill,
      { y: 300 }, // Original depth for single line text
      { y: -100, duration: 5.0, ease: 'power2.inOut' },
      0
    );

    // 2. Sync percentage counter
    const counter = { val: 0 };
    tl.to(
      counter,
      {
        val: 100,
        duration: 5.0,
        ease: 'power2.inOut',
        onUpdate() {
          const v = Math.round(counter.val);
          setPct(v);
          if (pctEl) {
            pctEl.textContent = `loading... ${v.toString().padStart(3, '0')}%`;
          }
        },
      },
      0
    );

    // 3. Infinite wave oscillations
    // Layer 1 (Wavelength 600)
    gsap.to(w1, {
      x: -600,
      duration: 3.5,
      ease: 'none',
      repeat: -1,
    });
    // Layer 2 (Wavelength 800)
    gsap.to(w2, {
      x: -800,
      duration: 4.2,
      ease: 'none',
      repeat: -1,
    });
    // Layer 3 (Wavelength 1000)
    gsap.to(w3, {
      x: -1000,
      duration: 5.0,
      ease: 'none',
      repeat: -1,
    });

    // 4. Fade out main text and syncing counter
    tl.to(
      textGroupRef.current,
      { y: -80, opacity: 0, duration: 1.2, ease: 'power3.in' },
      '+=0.4'
    );

    // 5. Flash Words Sequence Extravaganza!
    [word1Ref.current, word2Ref.current, word3Ref.current].forEach((word) => {
      tl.fromTo(
        word,
        { scale: 0.8, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.4, ease: 'back.out' }
      )
      .to(
        word,
        { scale: 1.2, opacity: 0, filter: 'blur(10px)', duration: 0.3, ease: 'power2.in' },
        '+=0.2'
      );
    });

    // 6. Cinematic Exit Animation
    tl.to(
      container,
      { yPercent: -100, duration: 1.4, ease: 'expo.inOut' }
    );

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} style={styles.container}>
      {/* Stars Canvas Background Native to Website */}
      <StarsCanvas />

      {/* Subtle Noise / Film Grain Effect */}
      <div style={styles.grain} />

      {/* Sequential Splash Words */}
      <div style={styles.wordsContainer}>
        <div ref={word1Ref} style={styles.introWord}>Designing Experiences…</div>
        <div ref={word2Ref} style={styles.introWord}>Building Systems…</div>
        <div ref={word3Ref} style={styles.introWord}>Integrating AI…</div>
      </div>

      <div style={styles.center} ref={textGroupRef}>
        <svg
          viewBox="0 0 1300 250"
          style={styles.svg}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="textClip">
              <text x="50%" y="190" textAnchor="middle" style={styles.svgText}>
                FARDEEN KHAN
              </text>
            </clipPath>
          </defs>

          {/* Premium Hollow / Ghost Text */}
          <text x="50%" y="190" textAnchor="middle" style={styles.ghostText}>
            FARDEEN KHAN
          </text>

          {/* Dynamic Wave Fill Inside Text */}
          <g clipPath="url(#textClip)">
            <g ref={waveFillRef} style={{ transform: 'translateY(300px)' }}>
              
              {/* Back Wave (Wavelength 600) */}
              <g ref={wave1Ref}>
                <path
                  d="M 0 0 Q 150 60 300 0 T 600 0 T 900 0 T 1200 0 T 1500 0 T 1800 0 T 2100 0 T 2400 0 L 2400 500 L 0 500 Z"
                  fill="rgba(255, 255, 255, 0.4)"
                />
              </g>

              {/* Mid Wave (Wavelength 800) */}
              <g ref={wave2Ref}>
                <path
                  d="M 0 15 Q 200 95 400 15 T 800 15 T 1200 15 T 1600 15 T 2000 15 T 2400 15 L 2400 500 L 0 500 Z"
                  fill="rgba(255, 255, 255, 0.7)"
                />
              </g>

              {/* Front Wave (Wavelength 1000) */}
              <g ref={wave3Ref}>
                <path
                  d="M 0 30 Q 250 130 500 30 T 1000 30 T 1500 30 T 2000 30 T 2500 30 L 2500 500 L 0 500 Z"
                  fill="rgba(255, 255, 255, 1)"
                />
              </g>

            </g>
          </g>
        </svg>

        {/* Syncing Percentage */}
        <div style={styles.percentRow}>
          <span ref={percentRef} style={styles.percentText}>
            loading... 000%
          </span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    willChange: 'transform',
  },
  grain: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat',
    backgroundSize: '400px 400px',
    opacity: 0.8,
    pointerEvents: 'none',
    mixBlendMode: 'overlay',
    zIndex: 1,
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2,
  },
  svg: {
    width: 'min(98vw, 1200px)',
    height: 'auto',
    display: 'block',
    overflow: 'visible',
  },
  svgText: {
    fontSize: '200px',
    letterSpacing: '-6px',
    fill: '#ffffff',
  },
  ghostText: {
    fontSize: '200px',
    letterSpacing: '-6px',
    fill: 'none',
    stroke: 'rgba(255,255,255,0.08)',
    strokeWidth: 2,
  },
  wordsContainer: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    pointerEvents: 'none',
  },
  introWord: {
    position: 'absolute',
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    color: '#ffffff',
    opacity: 0,
    textTransform: 'uppercase',
    letterSpacing: 'clamp(2px, 1.5vw, 8px)',
  },
  percentRow: {
    marginTop: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    width: 'min(98vw, 1200px)',
    justifyContent: 'flex-end',
  },
  percentText: {
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
    fontWeight: 500,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    fontVariantNumeric: 'tabular-nums',
  },
};
