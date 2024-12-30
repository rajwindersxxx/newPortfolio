import { LogoIcon } from './Icons';

export default function HeaderTitle() {
  return (
    <div className="flex w-48 flex-col gap-4">
      <a href="#" className="flex items-center gap-4">
        <div className="rotateIcon">
          <LogoIcon
            className="h-12 w-12 rotate-[45deg] stroke-teal-400"
            storkWidth={65}
          />
        </div>
        <h1 className="logo overflow-hidden font-serif text-2xl">
          <span className="inline-block">DevTiven</span>
        </h1>
      </a>
    </div>
  );
}
