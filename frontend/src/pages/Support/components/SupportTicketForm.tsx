export default function SupportTicketForm() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Create Support Ticket
      </h2>

      <input
        placeholder="Subject"
        className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      />

      <textarea
        rows={6}
        placeholder="Describe your issue..."
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      />

      <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        Submit Ticket
      </button>

    </section>
  );
}