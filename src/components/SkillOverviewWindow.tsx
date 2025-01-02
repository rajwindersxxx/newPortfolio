import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import skillArray from '../data/skillsWindow.json';
export default function SkillOverviewWindow() {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: skillArray,
      typeSpeed: 20,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
      random: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);
  return (
    <div className="m-auto h-1/2 w-2/3 overflow-hidden rounded-md border border-teal-600 bg-black/10">
      <div className="flex h-8 items-center justify-start gap-4 bg-gradient-to-r from-teal-700 to-teal-600 p-4">
        <div className="h-4 w-4 rounded-full  bg-red-500"></div>
        <div className="h-4 w-4 rounded-full  bg-yellow-500"></div>
        <div className="h-4 w-4 rounded-full  bg-green-500"></div>
      </div>

      <div className="p-4">
        <p
          className="inline text-base tracking-[2px] text-teal-400 transition-all md:text-left font-roboto"
          ref={el}
        >
        </p>
      </div>
    </div>
  );
}
