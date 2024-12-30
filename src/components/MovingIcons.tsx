import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { v4 as uuidv4 } from 'uuid';
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
    <div className="glassBackground h-26 movingIcons container max-w-screen-md overflow-hidden rounded-lg border-[1px]">
      <div className="flex flex-row justify-center gap-16 overflow-hidden p-8">
        {icons.map((item) => (
          <motion.div
            key={uuidv4()}
            layout
            initial={{ x: 0 }}
            animate={{ x: -100 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MovingIcons;
