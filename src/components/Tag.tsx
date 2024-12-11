interface props {
  tag: string;
}
export default function Tag({ tag }: props) {
  return (
    <span
      className="px-2 bg-backgroundColor border-[1px] border-teal-900 rounded-md text-sm"
      key={crypto.randomUUID()}
    >
      #{tag}
    </span>
  );
}
