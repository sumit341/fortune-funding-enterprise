interface Props {
  category: string;
}

export default function FaqCategory({
  category,
}: Props) {
  return (
    <button className="rounded-lg bg-zinc-800 px-4 py-2 hover:bg-zinc-700">
      {category}
    </button>
  );
}