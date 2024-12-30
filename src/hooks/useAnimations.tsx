import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

interface props {
  children: React.ReactNode;
}
gsap.registerPlugin(ScrollTrigger);
export function HeaderAnimations({ children }: props) {
  useGSAP(() => {
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
  });
  return <>{children}</>;
}

export function HeroAnimations({ children }: props) {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.movingIcons', { height: 0, width: 0, duration: 1 }, '<');
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.movingIcons',
        start: 'top 60%',
        end: 'max',
        scrub: 0,
      },
    });
    tl2.to('.hero-section h2', {
      yPercent: -100,
    });
  });
  return <>{children}</>;
}
