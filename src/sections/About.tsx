import { useRef } from 'react';
import { AboutAnimations } from '../hooks/useAnimations';

export default function About() {
  const aboutSection = useRef(null);
  return (
    <AboutAnimations scope={aboutSection}>
      <section id="about" className="aboutSection h-screen" ref={aboutSection}>
        <div className="container mx-auto flex h-full flex-col items-center justify-center gap-8 text-center">
          <div className="aboutImage">
            <img
              className="w-64 rounded-full border-4 border-teal-600"
              src="./img/Profile-img.jpg"
              alt="Profile pic"
              width="100%"
            />
          </div>
          <h2 className="text-center text-5xl text-teal-200">I’m Rajwinder</h2>
          <p className="p-4 text-center text-xl text-teal-300">
            A passionate programmer and web developer who began coding at 23
            during college. My love for creating impactful digital experiences
            drives my dream of becoming a recognized programmer, developing
            applications that make a difference. Here’s a bit more about my
            skills, and projects!
          </p>
        </div>
      </section>
    </AboutAnimations>
  );
}
