const AUTH_TOKEN = 'authToken';

export interface User {
  id: number;
  username: string;
  email: string;
  password?: string; // Optional for security reasons
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
};

export const setAuthToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const getAuthToken = ({item}: {item: string}): string | null => {
  return localStorage.getItem(item);
};

export const clearAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};