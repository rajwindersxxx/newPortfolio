import { CodeIcon, GlobIcon } from './Icons';
import Tag from './Tag';

interface props {
  data: {
    title: string;
    description: string;
    toolsUsed: string[];
    demoLink: string;
    gitHubLink: string;
    img: string;
  };
}
export default function ProjectCard({ data }: props) {
  const { title, description, demoLink, gitHubLink, img, toolsUsed } = data;

  return (
    <div className="p-1 rounded-md bg-gradient-to-br from-teal-900/75  to-teal-500/75 max-w-[26rem] ">
      <div className="flex flex-col justify-between gap-4 p-4 bg-backgroundColor/95 h-full ">
        <div className='flex flex-col gap-4'>
          <div className="rounded-t-sm overflow-hidden">
            <img className="lazy" src={img} alt="employee management project" />
          </div>
          <h3 className="text-3xl text-teal-300">{title}</h3>
          <p className="text-teal-400">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className='flex gap-2 flex-wrap'>
            {toolsUsed.map((type) => (
              <Tag tag={type} key={crypto.randomUUID()}/>
            ))}
          </div>
          <div className="flex  gap-2 items-center">
            <a href={gitHubLink} target="_blank" rel="noopener" aria-label="GitHub repository">
              <CodeIcon className="fill-teal-400 hover:fill-teal-200 hover:scale-110  w-9 rounded-full transition-all" />
            </a>
            <a href={demoLink} target="_blank" rel="noopener" aria-label="Live demo">
              <GlobIcon className="fill-teal-400 hover:fill-teal-200 hover:scale-110  w-8 rounded-full transition-all" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
