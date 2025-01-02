import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import React, { RefObject } from 'react';

interface props {
  children: React.ReactNode;
  scope?: RefObject<null>;
}
gsap.registerPlugin(ScrollTrigger, TextPlugin);

ScrollTrigger.defaults({
  start: 'center 80%',
  end: 'center 80%',
});

// render animation

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
        scrollTrigger: 'img',
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

// scroll animations
export function SkillsAnimations({ children, scope }: props) {
  let evenRowImgs;
  let oddRowImgs;
  let skillDesc;
  let tags;
  let skillMainHeadings;
  useGSAP(
    () => {
      evenRowImgs = gsap.utils.toArray('.evenRowImgs');
      oddRowImgs = gsap.utils.toArray('.oddRowImgs');
      skillDesc = gsap.utils.toArray('.skillDesc');
      tags = gsap.utils.toArray('.tags');
      skillMainHeadings = gsap.utils.toArray('h2');

      (skillMainHeadings as Element[]).forEach((heading: Element) => {
        gsap.from(heading, {
          scrollTrigger: heading,
          Opacity: 0,
          yPercent: -60,
          duration: 1,
          ease: 'back',
        });
      });

      // images animation

      (oddRowImgs as Element[]).forEach((box: Element) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: box,
          },
        });
        tl.from(box, {
          xPercent: -20,
          opacity: 0,
          duration: 1,
          ease: 'back',
        });
      });
      (evenRowImgs as Element[]).forEach((box : Element) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: box,
          },
        });
        tl.from(box, {
          xPercent: 20,
          opacity: 0,
          duration: 1,
          ease: 'back',
        });
      });

      (skillDesc as Element[]).forEach((box: Element) => {
        const headings = box.querySelectorAll('h3');
        const skillDesc = box.querySelectorAll('p');
        (headings).forEach((heading: Element) => {
          gsap.from(heading, {
            scrollTrigger: heading,
            opacity: 0,
            yPercent: -100,
            duration: 2,
          });
        });
        skillDesc.forEach((desc: Element) => {
          gsap.from(desc, {
            scrollTrigger: desc,
            opacity: 0,
            // yPercent: -10,
            duration: 2,
            text: '',
          });
        });
      });
      (tags as Element[]).forEach((tag: Element) => {
        const eachTag = tag.querySelectorAll('.tag');
        gsap.from(eachTag, {
          scrollTrigger: {
            trigger: eachTag,
          },
          // duration: 0.1,
          opacity: 0,
          xPercent: -100,
          ease: 'power1.inOut',

          stagger: {
            each: 0.2,
          },
        });
      });
    },
    { scope: scope },
  );

  return <>{children}</>;
}
