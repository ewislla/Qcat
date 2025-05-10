import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="about"
      className="py-20 px-4 relative"
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 quantum-card"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="cat-face relative">
              <motion.img
                src="/src/assets/quantum-cat-face.png"
                alt="QuantumCat"
                className="w-48 md:w-64"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="whiskers absolute top-1/2 left-0 w-full h-4">
                {/* Whiskers would be animated on hover via CSS */}
              </div>
              <div className="eyes absolute top-1/3 left-0 w-full">
                {/* Eyes would sparkle on hover via CSS */}
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <motion.h2
              className="text-3xl font-pixel text-neon-blue mb-6 text-shadow-neon-blue"
              variants={itemVariants}
            >
              Welcome to QuantumCat ($QCAT)
            </motion.h2>

            <motion.p 
              className="text-lg font-retro mb-4 text-white leading-relaxed"
              variants={itemVariants}
            >
              A Solana-based memecoin where quantum mechanics meets meme magic. 10% of the supply fuels real-world quantum research.
            </motion.p>
            
            <motion.p
              className="text-lg font-retro mb-4 text-white leading-relaxed"
              variants={itemVariants}
            >
              Inspired by Schrödinger's Cat, $QCAT exists in superposition: both moon-bound and chill until observed.
            </motion.p>
            
            <motion.p
              className="text-lg font-retro text-white leading-relaxed"
              variants={itemVariants}
            >
              Whether you're a Wave Rider or Entangled HODLer, $QCAT is your ticket to the quantum meme-verse.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;