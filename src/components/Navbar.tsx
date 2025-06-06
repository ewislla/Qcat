import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Tokenomics', to: 'tokenomics' },
    { name: 'Lore', to: 'lore' },
    { name: 'PawPool', to: 'pawpool' },
    { name: 'Roadmap', to: 'roadmap' },
    { name: 'Join the Clowder', to: 'join' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-space-black/95 backdrop-blur-md py-2 shadow-lg shadow-neon-blue/20'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={closeMenu}
        >
          <img
            src="/assets/quantum-cat-face.png"
            alt="QuantumCat Logo"
            className="h-12 w-12 rounded-full border-2 border-cyan-400 bg-white shadow shadow-cyan-500/40 animate-float group-hover:scale-110 transition-transform"
          />
          <span className="text-neon-blue font-pixel text-base group-hover:text-golden transition-colors">
            $QCAT
          </span>
        </Link>

        {/* Hamburger menu for all screen sizes */}
        <button
          onClick={toggleMenu}
          className="relative z-50 w-10 h-10 flex items-center justify-center rounded-lg border-2 border-neon-blue text-neon-blue hover:text-golden hover:border-golden transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-space-black/95 backdrop-blur-lg z-40 overflow-y-auto transition-all">
          <div className="flex flex-col items-center justify-center py-20 space-y-6 px-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={closeMenu}
                className="text-xl font-pixel text-neon-blue hover:text-golden transition-all text-center whitespace-nowrap px-4"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#"
              className="cosmic-button mt-6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;