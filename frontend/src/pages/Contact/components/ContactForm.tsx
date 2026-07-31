import { useState } from "react";

import { useContact } from "../../../hooks/contact/useContact";

export default function ContactForm() {
  const { mutate, isPending } = useContact();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    mutate(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h2 className="text-xl font-bold">
        Send us a message
      </h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      />

      <input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"
      />

      <button
        disabled={isPending}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
}