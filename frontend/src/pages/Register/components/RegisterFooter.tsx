import { Link } from "react-router-dom";

export default function RegisterFooter() {
  return (
    <div className="text-center text-sm text-gray-500">
      Already have an account?{" "}
      <Link
        to="/login"
        className="font-semibold text-blue-600 hover:underline"
      >
        Sign In
      </Link>
    </div>
  );
}