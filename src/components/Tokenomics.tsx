import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TokenomicsCard: React.FC<{
  title: string;
  value: string;
  index: number;
}> = ({ title, value, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="quantum-card flex-1 min-w-[250px]"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-xl font-retro text-neon-blue mb-2">{title}</h3>
      <p className="tokenomics-value">{value}</p>
    </motion.div>
  );
};

const Tokenomics: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const tokenomicsData = [
    { title: "Token Name", value: "QuantumCat" },
    { title: "Ticker", value: "$QCAT" },
    { title: "Total Supply", value: "1 Billion" },
    { title: "Paw Pool Reserve", value: "10%" },
  ];

  return (
    <section
      id="tokenomics"
      className="py-20 px-4 relative"
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl font-pixel text-center text-neon-blue mb-12 text-shadow-neon-blue"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          TOKENOMICS
        </motion.h2>

        <div className="w-full flex flex-wrap gap-6 justify-center">
          {tokenomicsData.map((item, index) => (
            <TokenomicsCard
              key={index}
              title={item.title}
              value={item.value}
              index={index}
            />
          ))}
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3"
              style={{
                backgroundImage: 'url(/src/assets/pixel-coin.png)',
                backgroundSize: 'contain',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;