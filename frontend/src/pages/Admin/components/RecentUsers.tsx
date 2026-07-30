interface User {
  id: number;
  name: string;
  email: string;
  status: string;
}

interface Props {
  users: User[];
}

export default function RecentUsers({
  users,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-5 text-xl font-bold text-white">
        Recent Users
      </h2>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex justify-between rounded-lg bg-zinc-800 p-4"
          >
            <div>
              <h3 className="font-semibold text-white">
                {user.name}
              </h3>

              <p className="text-sm text-zinc-400">
                {user.email}
              </p>
            </div>

            <span className="text-green-400">
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}