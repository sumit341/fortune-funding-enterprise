interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function NotificationFilters({
  value,
  onChange,
}: Props) {
  return (
    <select
      className="rounded-lg border border-zinc-700 bg-zinc-900 p-3"
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    >
      <option value="all">
        All
      </option>

      <option value="unread">
        Unread
      </option>

      <option value="system">
        System
      </option>

      <option value="challenge">
        Challenge
      </option>

      <option value="payment">
        Payment
      </option>
    </select>
  );
}