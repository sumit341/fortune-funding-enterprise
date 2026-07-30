import { useState } from "react";

import { useNotifications } from "../../hooks/notifications/useNotifications";

import NotificationSkeleton from "./components/NotificationSkeleton";
import NotificationSearch from "./components/NotificationSearch";
import NotificationFilters from "./components/NotificationFilters";
import NotificationList from "./components/NotificationList";

export default function Notifications() {
  const {
    data,
    isLoading,
  } = useNotifications();

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("all");

  if (isLoading || !data) {
    return <NotificationSkeleton />;
  }

  const filteredNotifications =
    data.filter((notification) => {
      const searchMatch =
        notification.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const filterMatch =
        filter === "all"
          ? true
          : filter === "unread"
          ? !notification.read
          : notification.type === filter;

      return searchMatch && filterMatch;
    });

  return (
    <main className="mx-auto max-w-6xl space-y-8 p-8">

      <div className="grid gap-4 md:grid-cols-2">

        <NotificationSearch
          value={search}
          onChange={setSearch}
        />

        <NotificationFilters
          value={filter}
          onChange={setFilter}
        />

      </div>

      <NotificationList
        notifications={filteredNotifications}
      />

    </main>
  );
}