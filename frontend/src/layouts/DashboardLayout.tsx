import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen">
      <nav>
        <h2>Dashboard</h2>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}