import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import { registerApi } from "../../api/auth.api";

const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerApi(data);

      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>

      <input
        placeholder="Name"
        {...register("name")}
      />

      {errors.name && <p>{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />

      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      />

      {errors.password && <p>{errors.password.message}</p>}

      <button disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Register"}
      </button>
    </form>
  );
}