interface Props {
  status: "active" | "passed" | "failed";
}

export default function AccountStatus({
  status,
}: Props) {
  const styles = {
    active: "bg-blue-600",
    passed: "bg-green-600",
    failed: "bg-red-600",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm text-white ${styles[status]}`}
    >
      {status.toUpperCase()}
    </span>
  );
}