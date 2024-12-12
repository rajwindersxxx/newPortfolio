import Tag from "./Tag";

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
        <img src={data.img} alt="image" className="w-full rounded-md lg:w-[32rem] opacity-85" />
      </div>
      <div className={`flex flex-col gap-4 ${data.id === 2 ? 'md:row-start-2' : ''}`}>
        <h3 className="text-3xl">{data.title}</h3>
        <p className={`text-teal-400 mb-16`}>{data.description}</p>
        <div className="flex gap-2 flex-wrap ">
          {data.tags.map((tag) => (
            <Tag tag={tag} key={crypto.randomUUID()}/>
          ))}
        </div>
      </div>
    </>
  );
}
