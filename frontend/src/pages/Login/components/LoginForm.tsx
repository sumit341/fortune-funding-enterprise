import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full rounded-lg border p-3"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full rounded-lg border p-3"
          placeholder="Password"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700"
      >
        Sign In
      </button>
    </form>
  );
}