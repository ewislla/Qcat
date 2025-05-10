import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const BackgroundParticles: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: 'stars',
        background: {
          color: {
            value: '#050A30'
          }
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          color: {
            value: ['#00FFFF', '#9D00FF', '#FFD700']
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.3,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 0.2,
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble'
            },
            onclick: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 150,
              size: 5,
              duration: 2,
              opacity: 0.8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        retina_detect: true
      }}
      className="fixed inset-0"
    />
  );
};

export default BackgroundParticles;