import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    id: number;
    username: string;
    email: string;
  } | null;
  token: string | null;
  loading: boolean;
  isSucces?: boolean;
  error: string | null;
  message?: object;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};  

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials: { username: string; password: string }) => {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      return response.json();
    }
  );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     token: null,
//     loading: false,
//     error: null,
//   },
// };  



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;