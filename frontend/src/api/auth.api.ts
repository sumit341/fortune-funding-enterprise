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

export const registerApi = (
  data: RegisterPayload
) =>
  api.post(
    "/auth/register",
    data
  );

export const loginApi = (
  data: LoginPayload
) =>
  api.post(
    "/auth/login",
    data
  );

export const refreshApi = (
  refreshToken: string
) =>
  api.post(
    "/auth/refresh",
    {
      refreshToken,
    }
  );

export const logoutApi = (
  refreshToken: string
) =>
  api.post(
    "/auth/logout",
    {
      refreshToken,
    }
  );

export const getCurrentUser = () =>
  api.get(
    "/users/me"
  );