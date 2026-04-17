import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SplitText = ({ text, className = '', delay = 100 }) => {
  const words = text.split('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div ref={ref} className={className} style={{ display: 'inline-block', overflow: 'hidden' }}>
      {words.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
          transition={{ duration: 0.5, delay: index * (delay / 1000), ease: [0.2, 0.65, 0.3, 0.9] }}
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;
