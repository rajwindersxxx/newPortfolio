import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  CssIcon,
  GitHubIcon,
  HtmlIcon,
  JsIcon,
  MySqlIcon,
  NodejsIcon,
  NpmIcon,
  PostgresIcon,
  ReactIcon,
  ScssIcon,
  TailwindCssIcon,
  VSCodeIcon,
} from './Icons';

function MovingIcons() {
  const [icons, setIcons] = useState([
    <HtmlIcon />,
    <CssIcon />,
    <JsIcon />,
    <TailwindCssIcon />,
    <ReactIcon />,
    <NodejsIcon />,
    <NpmIcon />,
    <MySqlIcon />,
    <VSCodeIcon />,
    <GitHubIcon />,
    <ScssIcon />,
    <PostgresIcon />,
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIcons((perIcon) => {
        return [...perIcon.slice(1), perIcon[0]];
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="glassBackground container max-w-screen-md h-[100px]  rounded-lg overflow-hidden border-[1px]">
      <div className="flex justify-center flex-row gap-16 p-8 overflow-hidden">
        <AnimatePresence initial={true} mode="popLayout">
          {icons.map((item) => (
            <motion.div key={crypto.randomUUID()} layout initial={{ x: 0 }} animate={{ x: -100 }}>
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MovingIcons;
