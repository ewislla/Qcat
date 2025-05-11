import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      }
    })
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-space-black"
        style={{
          backgroundImage: `url('/src/assets/quantum-cat-space.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />

      {/* Circular QuantumCat image */}
      <motion.img
        src="/assets/quantum-cat-face.png"
        alt="QuantumCat"
        className="relative z-10 w-48 md:w-64 mb-8 animate-float rounded-full border-4 border-cyan-400 bg-white shadow-lg shadow-cyan-500/30"
        animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Hero Title */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-pixel text-neon-blue mb-4 text-center text-shadow-neon-blue tracking-wider"
        custom={0}
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        QUANTUM CAT
      </motion.h1>

      {/* Tagline */}
      <motion.h2
        className="text-lg md:text-2xl lg:text-3xl font-retro text-yellow-400 mb-12 text-center text-shadow-golden"
        custom={1}
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        The Meme That Leaps Through Dimensions
      </motion.h2>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col md:flex-row gap-4 md:gap-8 z-10 mb-12"
        custom={2}
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <a
          href="#"
          className="cosmic-button group"
        >
          Buy $QCAT
        </a>

        <Link
          to="lore"
          smooth={true}
          offset={-70}
          duration={500}
          className="cosmic-button"
          style={{ background: 'linear-gradient(45deg, var(--cosmic-purple), var(--neon-blue))' }}
        >
          Read the Lore
        </Link>
      </motion.div>

      {/* Social CTA */}
      <motion.div
        className="flex gap-6 z-10"
        custom={3}
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <a
          href="https://x.com/Qcatsolana?t=rKXMpmvkGys6fdtZ4IBWHA&s=09" // Replace with actual
          className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 rounded-lg border-2 border-[#1DA1F2] text-white font-pixel text-sm transition-all hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={20} />
          <span>Follow X</span>
        </a>
        <a
          href="https://t.me/quantumcatofficial" // Replace with actual
          className="flex items-center gap-2 px-6 py-3 bg-[#0088cc]/20 hover:bg-[#0088cc]/30 rounded-lg border-2 border-[#0088cc] text-white font-pixel text-sm transition-all hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} />
          <span>Join TG</span>
        </a>
      </motion.div>

      {/* Floating Pixel Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-sm"
            style={{
              backgroundColor: i % 3 === 0 ? '#00FFFF' : i % 3 === 1 ? '#9D00FF' : '#FFD700',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite, pulse ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;