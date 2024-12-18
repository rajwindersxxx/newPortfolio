import { useState } from 'react';
import {
  GitHubIcon,
  LinkedInIcon,
  LogoIcon,
  MenuIcon,
} from '../components/Icons';
export default function Header() {
  const [navOpen , setNavOpen] = useState(false);
  return (
    <header className="text-teal-300 glassBackground border-b-[1px] fixed w-full top-0 z-50 ">
      <nav className="flex justify-between container py-4 px-4 m-auto items-center md:gap-4 sm:gap-2">
        <div className="flex gap-4 flex-col w-48">
          <a href="#" className="flex gap-4 items-center">
            <div className="rotateIcon">
              <LogoIcon
                className=" w-12 h-12 rotate-[45deg] stroke-teal-400"
                storkWidth={65}
              />
            </div>
            <h1 className="logo font-serif text-2xl">DevTiven</h1>
          </a>
        </div>
        <div className="nav_links" >
          <ul className={`flex justify-center items-center lg:flex-row flex-col gap-8 lg:relative absolute lg:h-auto lg:w-auto lg:bg-transparent h-screen w-screen bg-backgroundColor/95  top-0 left-0 text-3xl lg:text-base lg:translate-x-0 transition-all ${navOpen ? 'translate-x-0': 'translate-x-full'}`} >
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all ">
              <a className="p-2" href="#" onClick={() => setNavOpen(false) }>
                Home
              </a>
            </li>
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all">
              <a className="p-2" href="#about" onClick={() => setNavOpen(false) }>
                About
              </a>
            </li>
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all">
              <a className="p-2" href="#skills" onClick={() => setNavOpen(false) }>
                Skills
              </a>
            </li>
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all">
              <a className="p-2" href="#projects" onClick={() => setNavOpen(false) }>
                Projects
              </a>
            </li>
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all">
              <a className="p-2" href="#contact" onClick={() => setNavOpen(false) }>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex ">
          <ul className="flex gap-4 justify-end  px-4 lg:w-48">
            <li>
              <a
                href="https://github.com/rajwindersxxx"
                aria-label="Visit GitHub"
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon className="fill-teal-200  hover:fill-teal-100 w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rajwinder-singh-93651b218/"
                aria-label="Visit LinkedIn"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon className="fill-teal-200 hover:fill-teal-100 w-6 h-6" />
              </a>
            </li>
          </ul>
          <button aria-label="button" type="button" className="lg:hidden z-50" onClick={() => setNavOpen(preValue => !preValue) }>
            <MenuIcon className={`fill-teal-200 hover:fill-teal-300 w-6 h-6 transition-all ${navOpen && '-rotate-90'}`}  />
          </button>
        </div>
      </nav>
    </header>
  );
}
