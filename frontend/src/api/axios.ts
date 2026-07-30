import axios from "axios";

import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  setTokens,
} from "../utils/token";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ??
    "http://localhost:3000/api",
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      const refreshToken =
        getRefreshToken();

      if (!refreshToken) {
        clearTokens();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const response =
          await axios.post(
            (
              import.meta.env.VITE_API_URL ??
              "http://localhost:3000/api"
            ) + "/auth/refresh",
            {
              refreshToken,
            }
          );

        const {
          accessToken,
          refreshToken: newRefreshToken,
        } = response.data;

        setTokens(
          accessToken,
          newRefreshToken
        );

        originalRequest.headers.Authorization =
          `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch {
        clearTokens();

        window.location.href =
          "/login";

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;