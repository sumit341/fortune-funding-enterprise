import { useSupport } from "../../hooks/support/useSupport";

import SupportSkeleton from "./components/SupportSkeleton";
import SupportTicketForm from "./components/SupportTicketForm";
import TicketList from "./components/TicketList";
import SupportFAQ from "./components/SupportFAQ";

export default function Support() {
  const {
    data,
    isLoading,
  } = useSupport();

  if (isLoading || !data) {
    return <SupportSkeleton />;
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8 p-8">

      <SupportTicketForm />

      <TicketList
        tickets={data}
      />

      <SupportFAQ />

    </main>
  );
}