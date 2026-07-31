import DocumentUpload from "./DocumentUpload";

export default function KycForm() {
  return (
    <section className="space-y-6 rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <input
        placeholder="Full Name"
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      />

      <select className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3">

        <option>
          Aadhaar
        </option>

        <option>
          Passport
        </option>

        <option>
          Driving Licence
        </option>

      </select>

      <DocumentUpload
        label="Identity Proof"
      />

      <DocumentUpload
        label="Address Proof"
      />

      <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
        Submit KYC
      </button>

    </section>
  );
}