import React, { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#181818",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffb400",
          },
          links: {
            enable: true,
            color: "#ffb400",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBg;
