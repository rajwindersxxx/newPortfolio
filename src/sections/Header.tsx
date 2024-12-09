import {
  GitHubIcon,
  LinkedInIcon,
  LogoIcon,
  MenuIcon,
} from '../components/Icons';
export default function Header() {
 
  return (
    <header className="text-teal-300 glassBackground border-b-[1px] fixed w-full top-0  ">
      <nav className="flex justify-between container p-4 m-auto items-center ">
        <div className="flex gap-4 flex-col">
          <a href="#" className="flex gap-4 items-center">
            <div className='rotateIcon'>
              <LogoIcon
                className=" w-12 h-12 rotate-[45deg] stroke-teal-400"
                storkWidth={65}
              />
            </div>
            <h1 className="logo font-serif text-2xl">DevTiven</h1>
          </a>
        </div>
        <div className="nav_links">
          <ul className="md:flex justify-center gap-8 hidden ">
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-teal-100 py-1 cursor-pointer transition-all">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex ">
          <ul className="flex gap-4 justify-center px-4">
            <li>
              <a href="#contact" aria-label="Visit GitHub">
                <GitHubIcon className="fill-teal-200  hover:fill-teal-100 w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#contact" aria-label="Visit LinkedIn">
                <LinkedInIcon className="fill-teal-200 hover:fill-teal-100 w-6 h-6" />
              </a>
            </li>
          </ul>
          <button aria-label="button" type="button" className="md:hidden">
            <MenuIcon className="fill-teal-200 hover:fill-teal-300 w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
