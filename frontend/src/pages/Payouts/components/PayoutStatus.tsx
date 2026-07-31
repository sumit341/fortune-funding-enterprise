interface Props {
  status:
    | "pending"
    | "approved"
    | "rejected";
}

export default function PayoutStatus({
  status,
}: Props) {
  const colors = {
    pending: "bg-yellow-500",
    approved: "bg-green-600",
    rejected: "bg-red-600",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm text-white ${colors[status]}`}
    >
      {status.toUpperCase()}
    </span>
  );
}