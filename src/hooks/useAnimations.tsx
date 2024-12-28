import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface props {
  children: React.ReactNode;
}
export function HeaderAnimations({ children }: props) {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('header', { yPercent: -100 });
    tl.from('.nav_links ,.social-links', { opacity: 0.2 }, '<0.3');
    tl.from('.rotateIcon', { scale: 0 }, '<');
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
