interface Props {
  title: string;
}

export default function ResourceCategory({
  title,
}: Props) {
  return (
    <button className="rounded-lg bg-zinc-800 px-5 py-2 hover:bg-zinc-700">
      {title}
    </button>
  );
}