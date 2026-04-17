import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RotatingText({
  texts,
  mainClassName,
  staggerDuration = 0.03,
  rotationInterval = 2800,
  staggerFrom = "first",
  initial = { y: 40, opacity: 0, rotateX: -60 },
  animate = { y: 0, opacity: 1, rotateX: 0 },
  exit = { y: -40, opacity: 0, rotateX: 60 },
  transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(id);
  }, [texts.length, rotationInterval]);

  const currentText = texts[index];
  const characters = currentText.split("");

  return (
    <span className={cn("relative flex items-center overflow-visible", mainClassName)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="flex whitespace-pre"
        >
          {characters.map((char, i) => {
            let delayOffset = 0;
            if (staggerFrom === "first") {
              delayOffset = i * staggerDuration;
            } else if (staggerFrom === "last") {
              delayOffset = (characters.length - 1 - i) * staggerDuration;
            } else if (staggerFrom === "center") {
              const center = Math.floor(characters.length / 2);
              delayOffset = Math.abs(center - i) * staggerDuration;
            }

            return (
              <motion.span
                key={`${index}-${i}`}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ...transition,
                  delay: delayOffset,
                }}
                className="inline-block transform-gpu"
                style={{ transformOrigin: "50% 50%" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </span>
  );
}
