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
      <div>
        <AnimatePresence initial={true} mode="popLayout">
          <motion.div
            key={crypto.randomUUID()}
            className="flex justify-center flex-row gap-16 p-8 overflow-hidden absolute "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            {icons.map((item) => item)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default MovingIcons;
