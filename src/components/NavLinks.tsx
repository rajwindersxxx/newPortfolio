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
      <div className=" nav_line border-b w-16  left-0 -bottom-[1px] absolute border-teal-200 opacity-0"></div>
      <ul
        className={`flex justify-center items-center lg:flex-row flex-col gap-8 lg:relative absolute lg:h-auto lg:w-auto lg:bg-transparent h-screen w-screen bg-backgroundColor/95  top-0 left-0 text-3xl lg:text-base lg:translate-x-0 transition-all ${
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
