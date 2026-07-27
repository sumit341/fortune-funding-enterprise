import api from "./axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export const loginApi = (data: LoginPayload) => {
  return api.post("/auth/login", data);
};

export const registerApi = (data: RegisterPayload) => {
  return api.post("/auth/register", data);
};