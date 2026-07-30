export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user: User;
}