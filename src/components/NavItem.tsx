import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';
interface props {
  children: React.ReactNode;
  percent?: number;
  setNavOpen: (isOpen: boolean) => void;
  navigate: string;
}
export default function NavItem({ children, percent = 0, setNavOpen , navigate}: props) {
  const { contextSafe } = useGSAP();
  return (
    <div
      className="hover:text-teal-100 py-1 cursor-pointer transition-all testing"
      onMouseEnter={contextSafe(() => {
        gsap.to('.nav_line', { opacity: 1, xPercent: percent , ease: 'back' });
      })}
    >
      <a className="p-2 active:text-teal-500" href={navigate} onClick={() => setNavOpen(false) }>
        {children}
      </a>
    </div>
  );
}
