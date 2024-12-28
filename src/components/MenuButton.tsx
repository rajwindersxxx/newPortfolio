
import { MenuIcon } from './Icons';
interface props{
    navOpen: boolean,
    setNavOpen: (value: boolean) => void,
}
export default function MenuButton({navOpen, setNavOpen}: props) {
  return (
    <button
      aria-label="button"
      type="button"
      className="lg:hidden z-50"
      onClick={() => setNavOpen(!navOpen)}
    >
      <MenuIcon
        className={`fill-teal-200 hover:fill-teal-300 w-6 h-6 transition-all ${
            navOpen && '-rotate-90'
        }`}
      />
    </button>
  );
}
