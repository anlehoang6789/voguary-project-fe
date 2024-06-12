import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginGoogleResponse } from 'types/Account.type';

interface AuthLoginGoogleState {
  user: LoginGoogleResponse | null;
  isAuthenticated: boolean;
}

const initialState: AuthLoginGoogleState = {
  user: null,
  isAuthenticated: false
};

const authLoginGoogleSlice = createSlice({
  name: 'authLoginGoogle',
  initialState,
  reducers: {
    loginGoogle: (state, action: PayloadAction<LoginGoogleResponse>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

export const { loginGoogle, logout } = authLoginGoogleSlice.actions;
export default authLoginGoogleSlice.reducer;
