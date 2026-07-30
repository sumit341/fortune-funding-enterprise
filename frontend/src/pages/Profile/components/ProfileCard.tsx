import ProfileAvatar from "./ProfileAvatar";

interface Props {
  name: string;
  email: string;
  role: string;
  country: string;
  joinedAt: string;
}

export default function ProfileCard({
  name,
  email,
  role,
  country,
  joinedAt,
}: Props) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center gap-6">

        <ProfileAvatar
          name={name}
        />

        <div>

          <h2 className="text-3xl font-bold">
            {name}
          </h2>

          <p className="text-zinc-400">
            {email}
          </p>

          <div className="mt-4 space-y-1">

            <p>Role: {role}</p>

            <p>Country: {country}</p>

            <p>
              Joined: {joinedAt}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}