export const API = {
  BASE_URL:
    import.meta.env.VITE_API_URL ??
    "http://localhost:5000/api",

  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    PROFILE: "/auth/profile",
  },

  USERS: "/users",
  CHALLENGES: "/challenges",
  ORDERS: "/orders",
  PAYMENTS: "/payments",
};