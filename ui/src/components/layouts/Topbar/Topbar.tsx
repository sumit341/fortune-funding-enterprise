import { Breadcrumb } from "../Breadcrumb/Breadcrumb";

import { SearchBar } from "./components/SearchBar";

import { NotificationButton } from "./components/NotificationButton";

import { UserMenu } from "./components/UserMenu";

export function Topbar() {
  return (
    <header
      className="
        flex
        h-20
        items-center
        justify-between
        border-b
        border-zinc-800
        bg-zinc-950
        px-8
      "
    >
      <Breadcrumb
        items={[
          { label: "Dashboard" },
        ]}
      />

      <div className="flex items-center gap-4">

        <SearchBar />

        <NotificationButton />

        <UserMenu />

      </div>
    </header>
  );
}