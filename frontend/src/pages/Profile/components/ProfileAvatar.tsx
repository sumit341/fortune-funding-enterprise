interface Props {
  name: string;
}

export default function ProfileAvatar({
  name,
}: Props) {
  const initials =
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
      {initials}
    </div>
  );
}