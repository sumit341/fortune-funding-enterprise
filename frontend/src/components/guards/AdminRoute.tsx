import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

export default function AdminRoute() {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}