import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, MessageCircle, Github } from 'lucide-react';

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
            src="/src/assets/quantum-cat-face.png" 
            alt="QuantumCat" 
            className="w-16 h-16 mb-6 animate-float" 
          />
          
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="#" 
              className="text-neon-blue hover:text-golden transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={28} className="hover:animate-pulse" />
            </a>
            <a 
              href="#" 
              className="text-neon-blue hover:text-golden transition-colors"
              aria-label="Discord"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="hover:animate-pulse"
              >
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <path d="M7.5 7.5c3.5-1 5.5-1 9 0"></path>
                <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
                <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5"></path>
                <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"></path>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-neon-blue hover:text-golden transition-colors"
              aria-label="Telegram"
            >
              <MessageCircle size={28} className="hover:animate-pulse" />
            </a>
            <a 
              href="#" 
              className="text-neon-blue hover:text-golden transition-colors"
              aria-label="Github"
            >
              <Github size={28} className="hover:animate-pulse" />
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