interface Props {
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export default function NotificationSettings({
  emailNotifications,
  pushNotifications,
}: Props) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Notifications
      </h2>

      <div className="space-y-4">

        <label className="flex items-center justify-between">

          Email Notifications

          <input
            type="checkbox"
            defaultChecked={emailNotifications}
          />

        </label>

        <label className="flex items-center justify-between">

          Push Notifications

          <input
            type="checkbox"
            defaultChecked={pushNotifications}
          />

        </label>

      </div>

    </section>
  );
}