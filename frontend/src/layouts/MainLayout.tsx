import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <header>
        <h1>Fortune Funding</h1>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© Fortune Funding</p>
      </footer>
    </div>
  );
}