import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <footer
      id="contact"
      className="py-16 px-4 relative bg-space-black"
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/assets/quantum-cat-face.png" 
            alt="QuantumCat" 
            className="w-16 h-16 mb-6 animate-float rounded-full border-2 border-cyan-400 bg-white shadow" 
          />
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="https://x.com/Qcatsolana?t=rKXMpmvkGys6fdtZ4IBWHA&s=09" 
              className="text-neon-blue hover:text-golden transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={28} className="hover:animate-pulse" />
            </a>

            <a 
              href="https://t.me/+96SFgn6uIqI4YTNk" 
              className="text-neon-blue hover:text-golden transition-colors"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={28} className="hover:animate-pulse" />
            </a>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-lg font-retro text-white mb-2">
              QuantumCat is a cosmic experiment. Not financial advice.
            </p>
            <p className="text-sm font-retro text-gray-400">
              Smart Contract: 0x000...000
            </p>
          </div>
          
          <p className="text-xs font-retro text-gray-500">
            © 2025 QuantumCat ($QCAT). All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;