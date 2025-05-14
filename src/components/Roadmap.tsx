import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Milestone, Trophy, Rocket, Crown, Diamond } from 'lucide-react';

interface RoadmapStageProps {
  title: string;
  items: string[];
  metrics: string[];
  icon: React.ReactNode;
  index: number;
}

const RoadmapStage: React.FC<RoadmapStageProps> = ({ title, items, metrics, icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="quantum-card mb-10 p-4 sm:p-6 rounded-lg bg-space-black border border-neon-blue shadow-lg"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 flex-wrap sm:flex-nowrap">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cosmic-purple text-neon-blue">
          {icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-pixel text-golden text-shadow-golden">{title}</h3>
      </div>

      {/* Goal list */}
      <ul className="space-y-2 mb-6">
        {items.map((item, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-2 font-retro text-white text-sm sm:text-base"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: 0.1 * i }}
          >
            <span className="text-neon-blue">•</span>
            {item}
          </motion.li>
        ))}
      </ul>

      {/* Metrics */}
      <div className="flex flex-wrap gap-4 justify-start">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            className="bg-black/50 px-4 py-2 rounded-lg border border-neon-blue"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 0.2 + 0.1 * i }}
          >
            <p className="text-base sm:text-lg font-retro text-neon-blue">{metric}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Roadmap: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const stages = [
    {
      title: "BRONZE Stage: Foundation & Community Building",
      icon: <Milestone size={24} />,
      items: [
        "Launch the official QCAT website linking to the social media channels",
        "Launch the official QCAT X",
        "Launch the official QCAT Telegram",
        "Build a strong online community through social media engagement",
        "Launch on pump.fun",
        "DEXtools and DEX Screener updates with all links"
      ],
      metrics: ["100K+ MC", "500+ QCAT Holders"]
    },
    {
      title: "SILVER Stage: Infrastructure & Adoption",
      icon: <Trophy size={24} />,
      items: [
        "List QCAT on Flooz.xyz",
        "CoinGecko and CoinMarketcap Listing",
        "500 X, TG, IG, TikTok & YouTube subscribers",
        "Weekly QuantumCat Chronicles AMA",
        "Introduce the QCAT community wallet",
        "Release the QCAT whitepaper",
        "Partner with influencers and crypto projects",
        "Release educational content",
        "Create QCAT merchandise",
        "Fund real quantum research"
      ],
      metrics: ["1M+ MC", "1,000+ QCAT Holders"]
    },
    {
      title: "GOLD Stage: Ecosystem Expansion",
      icon: <Rocket size={24} />,
      items: [
        "List QCAT on centralized exchanges (CEXs)",
        "Launch QCAT's governance mechanism",
        "Roll out the QCAT DAO",
        "Release QCAT NFT marketplace",
        "Real World Advertisements and NYC Times Square Billboard",
        "1,000 X, TG, IG, TikTok & YouTube subscribers",
        "Develop DeFi protocol partnerships",
        "Host community events",
        "Get involved with crypto conferences"
      ],
      metrics: ["10M+ MC", "10,000+ QCAT Holders"]
    },
    {
      title: "PLATINUM Stage: Advanced Features & Global Presence",
      icon: <Crown size={24} />,
      items: [
        "Develop QCAT-powered dApp",
        "Expand global partnerships",
        "Integrate with mainstream payment gateways",
        "Introduce cross-chain interoperability",
        "10,000 social media subscribers",
        "Establish regional ambassador programs",
        "Ensure global compliance"
      ],
      metrics: ["100M+ MC", "50,000+ QCAT Holders"]
    },
    {
      title: "DIAMOND Stage: Innovation & 'BLUE-CHIP' Legacy",
      icon: <Diamond size={24} />,
      items: [
        "Launch the QCAT blockchain",
        "Become a native BLUE-CHIP coin",
        "Enable advanced token utilities",
        "Establish the QCAT Innovation Fund",
        "100,000 social media subscribers",
        "Partner with governments and NGOs",
        "Achieve mainstream adoption",
        "Continuously innovate based on community feedback"
      ],
      metrics: ["1B+ MC", "100,000+ QCAT Holders"]
    }
  ];

  return (
    <section
      id="roadmap"
      className="py-20 px-4 bg-gradient-to-b from-black via-[#0c0c22] to-black"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl font-pixel text-center text-neon-blue mb-12 text-shadow-neon-blue"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          QUANTUM ROADMAP
        </motion.h2>

        <div className="space-y-10">
          {stages.map((stage, index) => (
            <RoadmapStage
              key={index}
              title={stage.title}
              items={stage.items}
              metrics={stage.metrics}
              icon={stage.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;