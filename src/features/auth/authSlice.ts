import { createSlice, type ActionReducerMapBuilder} from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authServices';
interface AuthState {
  user: {
    id: number;
    username: string;
    email: string;
  } | null;
  token: string | null;
  loading: boolean;
  isSucces?: boolean;
  isError: boolean;
  message?: string;
}
interface User {
  id: number;
  username: string;
  email: string;
}

interface useData {
  username: string,
  email: string,
  password: string
}

const userString = localStorage.getItem('user');

const user: User | null = userString
  ? JSON.parse(userString)
  : null;

const initialState: AuthState = {
  user: user ? user : null,
  token: null,
  loading: false,
  isError: false,
};  

export const register = createAsyncThunk('auth/register', async (user:useData, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error:unknown) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.isError = false;
      state.isSucces = false;
      state.message = ''
    }
  },
  extraReducers: (builder:ActionReducerMapBuilder<AuthState>) => {
    builder
    .addCase(register.pending, (state) => {
      state.loading = true
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isSucces = true;
      state.loading = false;
      state.user = action.payload;
      
    })
    .addCase(register.rejected, (state, action) => {
      state.isError = true;
      state.loading = false;
      state.message = action.payload.message;
      state.user = null;

    })
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;