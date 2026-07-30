interface Props {
  onClick?: () => void;
}

export default function BuyChallengeButton({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
    >
      Buy Challenge
    </button>
  );
}