interface Props {
  status: "OPEN" | "CLOSED";
}

export default function OrderStatus({
  status,
}: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        status === "OPEN"
          ? "bg-green-500/20 text-green-400"
          : "bg-zinc-700 text-zinc-300"
      }`}
    >
      {status}
    </span>
  );
}