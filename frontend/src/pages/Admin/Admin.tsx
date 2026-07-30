import AdminChart from "./components/AdminChart";
import AdminStats from "./components/AdminStats";
import RecentPayments from "./components/RecentPayments";
import RecentUsers from "./components/RecentUsers";

import {
  adminStats,
  recentPayments,
  recentUsers,
} from "./data/adminData";

export default function Admin() {
  return (
    <div className="space-y-8">

      <section>

        <h1 className="text-3xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Monitor platform performance, users and payments.
        </p>

      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        {adminStats.map((item) => (

          <AdminStats
            key={item.title}
            title={item.title}
            value={item.value}
          />

        ))}

      </section>

      <section>

        <AdminChart />

      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        <RecentUsers
          users={recentUsers}
        />

        <RecentPayments
          payments={recentPayments}
        />

      </section>

    </div>
  );
}