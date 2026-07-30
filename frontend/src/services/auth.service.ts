import {
  getCurrentUser,
  loginApi,
  logoutApi,
  refreshApi,
  registerApi,
} from "../api/auth.api";

export const authService = {
  register: registerApi,

  login: loginApi,

  currentUser: getCurrentUser,

  refresh: refreshApi,

  logout: logoutApi,
};