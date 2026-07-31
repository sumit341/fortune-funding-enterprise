export default function ReferralTable() {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-xl font-bold">
        Referral History
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b border-zinc-800">

            <th className="py-3 text-left">
              User
            </th>

            <th className="py-3 text-left">
              Challenge
            </th>

            <th className="py-3 text-left">
              Commission
            </th>

            <th className="py-3 text-left">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td className="py-4">
              Demo User
            </td>

            <td>
              100K Challenge
            </td>

            <td>
              $120
            </td>

            <td>
              Paid
            </td>

          </tr>

        </tbody>

      </table>

    </section>
  );
}