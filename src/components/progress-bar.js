import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function () {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        height: '10px',
        background: 'linear-gradient(90deg, #fed84b 0%, #fa7993 100%)',
        transformOrigin: '0%',
      }}
    />
  );
}
