import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useLogin } from "../../hooks/auth/useLogin";
import { useAuthStore } from "../../store/auth.store";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const navigate = useNavigate();

  const login = useAuthStore(
    (state) => state.login
  );

  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (
    data: LoginFormData
  ) => {
    try {
      const response =
        await loginMutation.mutateAsync(data);

      const {
        user,
        accessToken,
        refreshToken,
      } = response.data;

      login(
        user,
        accessToken,
        refreshToken
      );

      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      toast.error(
        "Invalid email or password"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />

      {errors.email && (
        <p>{errors.email.message}</p>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      />

      {errors.password && (
        <p>{errors.password.message}</p>
      )}

      <button
        disabled={
          isSubmitting ||
          loginMutation.isPending
        }
      >
        {loginMutation.isPending
          ? "Logging in..."
          : "Login"}
      </button>
    </form>
  );
}