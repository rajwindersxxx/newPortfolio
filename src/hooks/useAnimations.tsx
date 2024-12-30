import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import React, { RefObject } from 'react';

interface props {
  children: React.ReactNode;
  scope?: RefObject<null>;
}
gsap.registerPlugin(ScrollTrigger, TextPlugin);



export function HeaderAnimations({ children, scope }: props) {
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from('header', { yPercent: -100 });
      tl.from('.nav_links ,.social-links', { opacity: 0.2 }, '<0.3');
      tl.from(
        '.rotateIcon',
        { opacity: 0, scale: 0, rotate: -180, xPercent: -200 },
        '<',
      );
      tl.from('.logo span', { opacity: 0, xPercent: -100, ease: 'none' }, '<');
      tl.from('.rotateIcon', {
        rotate: 360,
        duration: 35,
        repeat: -1,
        ease: 'none',
      });
    },
    { scope: scope },
  );
  return <>{children}</>;
}

export function HeroAnimations({ children, scope }: props) {
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from('.movingIcons', { height: 0, width: 0, duration: 1 }, '<');
      tl.from('.heroHeading', { Opacity: 0, duration: 2 }, '<');
    },
    { scope: scope },
  );
  return <>{children}</>;
}

export function AboutAnimations({ children, scope }: props) {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'img',
          start: 'center 80%',
          end: 'center 80%',
        },
      });
      tl.from('img', {
        scale: 0,
        ease: 'back',
      });
      tl.from(
        'h2',
        {
          Opacity: 0,
          yPercent: -60,
          duration: 1,
          ease: 'back',
        },
        '<0.1',
      );
      tl.from(
        'p',
        {
          opacity: 0,
          scale: 1.1,
          ease: 'back',
        },
        '<',
      );
    },
    { scope: scope },
  );

  return <>{children}</>;
}

// gsap.to('p', {
//   scrollTrigger: 'p',
//   duration: 2,
//   text: `A passionate programmer and web developer who began coding at 23
//         during college. My love for creating impactful digital experiences
//         drives my dream of becoming a recognized programmer, developing
//         applications that make a difference. Here’s a bit more about my
//         skills, and projects!`,
//   ease: 'none',
// });
