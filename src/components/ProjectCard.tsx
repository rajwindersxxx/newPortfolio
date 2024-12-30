import { CodeIcon, GlobIcon } from './Icons';
import Tag from './Tag';
import { v4 as uuidv4 } from 'uuid';
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
    <div className="max-w-[26rem] rounded-md bg-gradient-to-br from-teal-900/75 to-teal-500/75 p-1">
      <div className="flex h-full flex-col justify-between gap-4 bg-backgroundColor/95 p-4">
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-t-sm">
            <img className="lazy" src={img} alt="employee management project" />
          </div>
          <h3 className="text-3xl text-teal-300">{title}</h3>
          <p className="text-teal-400">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {toolsUsed.map((type) => (
              <Tag tag={type} key={uuidv4()} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener"
              aria-label="GitHub repository"
            >
              <CodeIcon className="w-9 rounded-full fill-teal-400 transition-all hover:scale-110 hover:fill-teal-200" />
            </a>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener"
              aria-label="Live demo"
            >
              <GlobIcon className="w-8 rounded-full fill-teal-400 transition-all hover:scale-110 hover:fill-teal-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
