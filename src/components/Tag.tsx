import { v4 as uuidv4 } from 'uuid';
interface props {
  tag: string;
}
export default function Tag({ tag }: props) {
  return (
    <span
      className="rounded-md border-[1px] border-teal-900 bg-backgroundColor px-2 text-sm"
      key={uuidv4()}
    >
      #{tag}
    </span>
  );
}
