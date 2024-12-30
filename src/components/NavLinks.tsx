import { useGSAP } from '@gsap/react';
import NavItem from './NavItem';
import gsap from 'gsap';
interface props {
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
}
export default function NavLinks({ navOpen, setNavOpen }: props) {
  const { contextSafe } = useGSAP();
  const mouseLeaveAnimation = contextSafe(() => {
    gsap.to('.nav_line', { opacity: 0 });
  });

  return (
    <div className="nav_links lg:relative" onMouseLeave={mouseLeaveAnimation}>
      <div className="nav_line absolute -bottom-[1px] left-0 w-16 border-b border-teal-200 opacity-0"></div>
      <ul
        className={`absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-backgroundColor/95 text-3xl transition-all lg:relative lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row lg:bg-transparent lg:text-base ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <li>
          <NavItem setNavOpen={setNavOpen} percent={0} navigate="#">
            Home
          </NavItem>
        </li>

        <li>
          <NavItem setNavOpen={setNavOpen} percent={138} navigate="#about">
            About
          </NavItem>
        </li>
        <li>
          <NavItem setNavOpen={setNavOpen} percent={276} navigate="#skills">
            Skills
          </NavItem>
        </li>
        <li>
          <NavItem setNavOpen={setNavOpen} percent={422} navigate="#projects">
            Projects
          </NavItem>
        </li>
        <li>
          <NavItem setNavOpen={setNavOpen} percent={582} navigate="#contact">
            Contact
          </NavItem>
        </li>
      </ul>
    </div>
  );
}
