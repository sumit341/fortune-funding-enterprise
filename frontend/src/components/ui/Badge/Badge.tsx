interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "warning" | "danger" | "info";
}

export default function Badge({
  children,
  variant = "info",
}: BadgeProps) {
  const variants = {
    success: "bg-green-600 text-white",
    warning: "bg-yellow-500 text-black",
    danger: "bg-red-600 text-white",
    info: "bg-blue-600 text-white",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}