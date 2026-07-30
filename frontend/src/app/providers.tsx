import { Toaster } from "react-hot-toast";

import AuthProvider from "../providers/AuthProvider";

import App from "./app";

export function Providers() {
  return (
    <AuthProvider>
      <App />
      <Toaster position="top-right" />
    </AuthProvider>
  );
}