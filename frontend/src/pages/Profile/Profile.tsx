import { useProfile } from "../../hooks/profile/useProfile";

import ProfileSkeleton from "./components/ProfileSkeleton";
import ProfileCard from "./components/ProfileCard";
import ProfileStatistics from "./components/ProfileStatistics";
import ProfileForm from "./components/ProfileForm";
import SecurityCard from "./components/SecurityCard";

export default function Profile() {
  const {
    data,
    isLoading,
  } = useProfile();

  if (isLoading || !data) {
    return <ProfileSkeleton />;
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">

      <ProfileCard
        name={data.name}
        email={data.email}
        role={data.role}
        country={data.country}
        joinedAt={data.joinedAt}
      />

      <ProfileStatistics
        totalChallenges={
          data.totalChallenges
        }
        completedChallenges={
          data.completedChallenges
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">

        <ProfileForm
          name={data.name}
          email={data.email}
        />

        <SecurityCard />

      </div>

    </main>
  );
}