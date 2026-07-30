import type { Notification } from "../../../api/notification.api";

interface Props {
  notification: Notification;
}

export default function NotificationCard({
  notification,
}: Props) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        notification.read
          ? "border-zinc-800 bg-zinc-900"
          : "border-blue-600 bg-zinc-900"
      }`}
    >
      <div className="flex items-center justify-between">

        <h3 className="font-bold">
          {notification.title}
        </h3>

        {!notification.read && (
          <span className="rounded bg-blue-600 px-2 py-1 text-xs text-white">
            New
          </span>
        )}

      </div>

      <p className="mt-3 text-zinc-400">
        {notification.message}
      </p>

      <p className="mt-4 text-xs text-zinc-500">
        {notification.createdAt}
      </p>

    </div>
  );
}