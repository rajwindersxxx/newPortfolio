import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from '@tsparticles/engine';

import { loadSlim } from '@tsparticles/slim';

export default function ParticleEffect() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (): Promise<void> => {};

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: '#0f172a',
        },
      },
      fpsLimit: 24,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: false,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 50,
            duration: 1,
          },
        },
      },
      particles: {
        color: {
          value: '#99f6e4',
        },
        links: {
          color: '#2dd4bf',
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 8 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div className="fixed -z-10 h-full w-full">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
}
