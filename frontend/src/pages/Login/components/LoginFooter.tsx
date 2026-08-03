import { Link } from "react-router-dom";

export default function LoginFooter() {
  return (
    <div className="text-center text-sm text-gray-500">
      Don't have an account?{" "}
      <Link
        to="/register"
        className="font-semibold text-blue-600 hover:underline"
      >
        Create Account
      </Link>
    </div>
  );
}