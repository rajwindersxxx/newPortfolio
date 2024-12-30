import { MenuIcon } from './Icons';
interface props {
  navOpen: boolean;
  setNavOpen: (value: boolean) => void;
}
export default function MenuButton({ navOpen, setNavOpen }: props) {
  return (
    <button
      aria-label="button"
      type="button"
      className="z-50 lg:hidden"
      onClick={() => setNavOpen(!navOpen)}
    >
      <MenuIcon
        className={`h-6 w-6 fill-teal-200 transition-all hover:fill-teal-300 ${
          navOpen && '-rotate-90'
        }`}
      />
    </button>
  );
}
