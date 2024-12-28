
import { LogoIcon } from './Icons';

export default function HeaderTitle() {
  return (
    <div className="flex gap-4 flex-col w-48">
      <a href="#" className="flex gap-4 items-center">
        <div className="rotateIcon">
          <LogoIcon
            className=" w-12 h-12 rotate-[45deg] stroke-teal-400"
            storkWidth={65}
          />
        </div>
        <h1 className="logo font-serif text-2xl overflow-hidden">
          <span className="inline-block">DevTiven</span>
        </h1>
      </a>
    </div>
  );
}
