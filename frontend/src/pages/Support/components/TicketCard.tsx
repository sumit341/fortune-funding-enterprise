import type { SupportTicket } from "../../../api/support.api";

import TicketStatus from "./TicketStatus";

interface Props {
  ticket: SupportTicket;
}

export default function TicketCard({
  ticket,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h3 className="text-lg font-semibold">
        {ticket.subject}
      </h3>

      <div className="mt-4">
        <TicketStatus
          status={ticket.status}
        />
      </div>

    </div>
  );
}