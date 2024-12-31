import Tag from './Tag';
import { v4 as uuidv4 } from 'uuid';
interface props {
  data: {
    id: number;
    img: string;
    title: string;
    description: string;
    tags: string[];
  }
}

export default function SkillsDescription({ data}: props) {
  
  return (
    <div className='col-span-2 grid md:grid-cols-2 justify-center gap-8 p-8'>
      <div className={`${data.id%2 === 0 ? 'md:justify-self-end evenRowImgs md:order-1' : 'oddRowImgs'} skillImg-${data.id}`}>
        <img
          src={data.img}
          alt="image"
          className="w-full rounded-md opacity-85 lg:w-[32rem]"
        />
      </div>
      <div
        className={`flex flex-col gap-4 skillDesc`}
      >
        <h3 className="text-3xl">{data.title}</h3>
        <p className={`mb-16 text-teal-400 min-h-40`}>{data.description}</p>
        <div className="flex flex-wrap gap-2 tags">
          {data.tags.map((tag) => (
            <Tag tag={tag} key={uuidv4()} />
          ))}
        </div>
      </div>
    </div>
  );
}
