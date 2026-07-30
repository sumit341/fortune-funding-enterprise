import type {
  Notification,
} from "../../../api/notification.api";

import NotificationCard from "./NotificationCard";
import EmptyNotifications from "./EmptyNotifications";

interface Props {
  notifications: Notification[];
}

export default function NotificationList({
  notifications,
}: Props) {
  if (!notifications.length) {
    return <EmptyNotifications />;
  }

  return (
    <div className="space-y-4">

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}

    </div>
  );
}