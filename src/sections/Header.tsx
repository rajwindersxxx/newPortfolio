import { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import SocialLinks from '../components/SocialLinks';
import MenuButton from '../components/MenuButton';

import NavLinks from '../components/NavLinks';
import { HeaderAnimations } from '../hooks/useAnimations';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <HeaderAnimations>
      <header className="text-teal-300 glassBackground border-b-[1px] fixed w-full top-0 z-50 ">
        <nav className="flex justify-between container py-4 px-4 m-auto items-center md:gap-4 relative sm:gap-2">
          <HeaderTitle />
          <NavLinks navOpen={navOpen} setNavOpen={setNavOpen} />
          <nav className="flex">
            <SocialLinks />
            <MenuButton navOpen={navOpen} setNavOpen={setNavOpen} />
          </nav>
        </nav>
      </header>
    </HeaderAnimations>
  );
}
