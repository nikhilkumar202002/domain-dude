import React from 'react';
import { motion } from 'framer-motion';
import './Marqueslider.css';

const messages = [
  "Web Experiences That Convert",
  "Designs That Speak Your Brand",
  "Marketing Magic That Moves",
  "From Idea to Iconic Identity",
  "Innovation. Impact. Results"
];

const MarqueSlider = () => {
  const repeatedMessages = [...messages, ...messages];

  return (
    <motion.div
      className="marquee-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1,delay: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="marquee-content"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {repeatedMessages.map((text, index) => (
          <React.Fragment key={index}>
            <span className="marquee-item">{text}</span>
            {index !== repeatedMessages.length - 1 && (
              <img
                src="/star.png"
                alt="separator"
                className="marquee-dot"
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MarqueSlider;
