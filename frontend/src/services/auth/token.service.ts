const ACCESS_TOKEN = "ff_access_token";

const REFRESH_TOKEN = "ff_refresh_token";

export const tokenService = {
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  },

  setAccessToken(token: string) {
    localStorage.setItem(ACCESS_TOKEN, token);
  },

  removeAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
  },

  setRefreshToken(token: string) {
    localStorage.setItem(REFRESH_TOKEN, token);
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN);
  },

  clear() {
    this.removeAccessToken();
    this.removeRefreshToken();
  },
};