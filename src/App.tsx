import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Lore from './components/Lore';
import JoinClowder from './components/JoinClowder';
import PawPoolReserve from './components/PawPoolReserve';
import Contact from './components/Contact';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-space-black">
      <BackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Tokenomics />
        <Lore />
        <JoinClowder />
        <PawPoolReserve />
        <Contact />
      </main>
    </div>
  );
}

export default App;