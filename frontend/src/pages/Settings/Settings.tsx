import { useSettings } from "../../hooks/settings/useSettings";

import SettingsSkeleton from "./components/SettingsSkeleton";
import GeneralSettings from "./components/GeneralSettings";
import SecuritySettings from "./components/SecuritySettings";
import NotificationSettings from "./components/NotificationSettings";
import AppearanceSettings from "./components/AppearanceSettings";
import DangerZone from "./components/DangerZone";

export default function Settings() {
  const {
    data,
    isLoading,
  } = useSettings();

  if (isLoading || !data) {
    return <SettingsSkeleton />;
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 p-8">

      <GeneralSettings
        language={data.language}
      />

      <NotificationSettings
        emailNotifications={
          data.emailNotifications
        }
        pushNotifications={
          data.pushNotifications
        }
      />

      <AppearanceSettings />

      <SecuritySettings />

      <DangerZone />

    </main>
  );
}