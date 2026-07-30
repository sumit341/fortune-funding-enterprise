import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useRegister } from "../../hooks/auth/useRegister";

const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Invalid email"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const navigate = useNavigate();

  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    try {
      await registerMutation.mutateAsync(data);

      toast.success(
        "Registration successful. Please login."
      );

      navigate("/login");
    } catch (error) {
      console.error(error);

      toast.error(
        "Registration failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        {...register("name")}
      />

      {errors.name && (
        <p>{errors.name.message}</p>
      )}

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
          registerMutation.isPending
        }
      >
        {registerMutation.isPending
          ? "Registering..."
          : "Register"}
      </button>
    </form>
  );
}