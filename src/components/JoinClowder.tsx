import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, MessageCircle } from 'lucide-react';

const JoinClowder: React.FC = () => {
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
      id="join"
      className="py-20 px-4 relative bg-deep-purple"
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="flex flex-col items-center quantum-card"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl font-pixel text-neon-blue mb-8 text-shadow-neon-blue text-center"
            variants={itemVariants}
          >
            JOIN THE CLOWDER
          </motion.h2>

          <motion.div className="text-center mb-8" variants={itemVariants}>
            <p className="text-xl font-retro text-white mb-2">Become a Quantum Pioneer.</p>
            <p className="text-xl font-retro text-white mb-2">Earn Quantum Nip NFTs.</p>
            <p className="text-xl font-retro text-white mb-6">Help fund science with memes.</p>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            variants={itemVariants}
          >
            <a 
              href="https://x.com/qcatsolana_"
              className="text-neon-blue hover:text-golden transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={32} className="hover:animate-pulse" />
            </a>

            <a 
              href="https://t.me/quantumcatofficial" 
              className="text-neon-blue hover:text-golden transition-colors"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={32} className="hover:animate-pulse" />
            </a>
          </motion.div>

          <motion.button
            className="cosmic-button group relative overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href= "https://t.me/quantumcatofficial" >
            <span className="relative z-10">Join the Clowder</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cosmic-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinClowder;