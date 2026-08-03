import api from "../../lib/api/axios";

export const authService = {
  login(data: unknown) {
    return api.post("/auth/login", data);
  },

  register(data: unknown) {
    return api.post("/auth/register", data);
  },

  logout() {
    return api.post("/auth/logout");
  },

  me() {
    return api.get("/auth/me");
  },

  refresh() {
    return api.post("/auth/refresh");
  },
};