import type { SupportTicket } from "../../../api/support.api";

import TicketCard from "./TicketCard";

interface Props {
  tickets: SupportTicket[];
}

export default function TicketList({
  tickets,
}: Props) {
  return (
    <div className="space-y-6">

      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
        />
      ))}

    </div>
  );
}