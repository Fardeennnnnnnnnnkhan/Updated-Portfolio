import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BlurText = ({ text, delay = 50, className = '' }) => {
  const words = text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: delay / 1000, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)', 
      y: 0, 
      transition: { type: 'spring', damping: 12, stiffness: 100 } 
    },
    hidden: { 
      opacity: 0, 
      filter: 'blur(10px)', 
      y: 10, 
      transition: { type: 'spring', damping: 12, stiffness: 100 } 
    },
  };

  return (
    <motion.p 
      ref={ref} 
      className={className} 
      variants={container} 
      initial="hidden" 
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          variants={child} 
          style={{ display: 'inline-block', paddingRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default BlurText;
