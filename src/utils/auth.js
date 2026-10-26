const TOKEN_KEY = 'admin_token';

export const auth = {
  getToken: () => localStorage.getItem(TOKEN_KEY),
  setToken: (token) => localStorage.setItem(TOKEN_KEY, token),
  logout: () => localStorage.removeItem(TOKEN_KEY),
  isAuthenticated: () => Boolean(localStorage.getItem(TOKEN_KEY)),
};