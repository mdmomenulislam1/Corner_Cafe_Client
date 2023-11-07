import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }} // Define the animation on hover
      whileTap={{ scale: 0.9 }} // Define the animation on click
    >
      Hover me!
    </motion.button>
  );
};

export default AnimatedButton;
