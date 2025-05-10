import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface LoreCardProps {
  title: string;
  content: string;
  index: number;
}

const LoreCard: React.FC<LoreCardProps> = ({ title, content, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="quantum-card mb-6"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-pixel text-golden mb-3 text-shadow-golden">{title}</h3>
      <p className="text-lg font-retro text-white">{content}</p>
    </motion.div>
  );
};

const Lore: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const loreData = [
    {
      title: "The Origin",
      content: "Born from the stardust of a collapsing nebula, QuantumCat glows with the energy of quantum waves and universal secrets."
    },
    {
      title: "The Discovery",
      content: "In 2025, Solana degens found QuantumCat's pawprints. The Quantum Pioneers launched $QCAT and formed the Clowder."
    },
    {
      title: "The Prophecy",
      content: "When the Clowder's Meowtanglement is complete, $QCAT will transcend blockchain and power real quantum breakthroughs."
    },
    {
      title: "The Clowder's Role",
      content: "Everyone plays a part: memers, holders, voters, NFT earners. Together, the Clowder collapses probability into legendary status."
    }
  ];

  return (
    <section
      id="lore"
      className="py-20 px-4 relative"
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl font-pixel text-center text-neon-blue mb-4 text-shadow-neon-blue"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          THE QUANTUMCAT CHRONICLES
        </motion.h2>

        <motion.h3
          className="text-xl font-retro text-center text-golden mb-12 text-shadow-golden"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The Legend of QuantumCat: A Tale of Superposition and Stardust
        </motion.h3>

        <div className="w-full">
          {loreData.map((item, index) => (
            <LoreCard
              key={index}
              title={item.title}
              content={item.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lore;