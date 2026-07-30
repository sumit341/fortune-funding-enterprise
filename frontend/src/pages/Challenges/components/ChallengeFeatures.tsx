interface Props {
  features: string[];
}

export default function ChallengeFeatures({
  features,
}: Props) {
  return (
    <ul className="space-y-3">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-3 text-zinc-300"
        >
          <span className="mt-1 h-2 w-2 rounded-full bg-green-500" />

          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}