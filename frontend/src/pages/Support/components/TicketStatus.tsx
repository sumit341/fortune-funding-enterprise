interface Props {
  status:
    | "open"
    | "pending"
    | "closed";
}

export default function TicketStatus({
  status,
}: Props) {
  const color =
    status === "closed"
      ? "text-green-500"
      : status === "pending"
      ? "text-yellow-500"
      : "text-blue-500";

  return (
    <span className={color}>
      {status.toUpperCase()}
    </span>
  );
}