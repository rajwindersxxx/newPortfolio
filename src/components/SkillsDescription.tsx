import Tag from './Tag';
import { v4 as uuidv4 } from 'uuid';
interface props {
  data: {
    id: number;
    img: string;
    title: string;
    description: string;
    tags: string[];
  };
}

export default function SkillsDescription({ data }: props) {
  return (
    <>
      <div className={`${data.id === 2 ? 'md:justify-self-end' : ''}`}>
        <img
          src={data.img}
          alt="image"
          className="w-full rounded-md opacity-85 lg:w-[32rem]"
        />
      </div>
      <div
        className={`flex flex-col gap-4 ${data.id === 2 ? 'md:row-start-2' : ''}`}
      >
        <h3 className="text-3xl">{data.title}</h3>
        <p className={`mb-16 text-teal-400`}>{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag) => (
            <Tag tag={tag} key={uuidv4()} />
          ))}
        </div>
      </div>
    </>
  );
}
