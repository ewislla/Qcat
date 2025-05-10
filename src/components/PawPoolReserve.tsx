import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PawPoolReserve: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id="pawpool"
      className="py-20 px-4 relative"
      ref={ref}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="quantum-card relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background pixel coins */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-8 h-8"
                style={{
                  backgroundImage: 'url(/src/assets/pixel-coin.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3 + 0.1,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <motion.h2
              className="text-3xl font-pixel text-neon-blue mb-8 text-shadow-neon-blue text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              PAW POOL RESERVE
            </motion.h2>

            <motion.div
              className="space-y-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl font-retro text-white text-center">
                10% of $QCAT is stored in the Paw Pool Reserve.
              </p>
              
              <p className="text-xl font-retro text-white text-center">
                This fuels real-world quantum research — from computing to teleporting catnip (maybe).
              </p>
              
              <p className="text-xl font-retro text-white text-center">
                Voting system coming soon: holders will choose what to fund.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-24 h-24 relative animate-float">
                <div className="absolute inset-0 bg-cosmic-purple rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute inset-2 bg-neon-blue rounded-full opacity-50"></div>
                <div className="absolute inset-4 bg-golden rounded-full opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-retro text-white">10%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PawPoolReserve;