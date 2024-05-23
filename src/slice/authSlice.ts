import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginGoogleResponse } from 'types/Account.type';

interface AuthLoginGoogleState {
  user: LoginGoogleResponse | null;
}

const initialState: AuthLoginGoogleState = {
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginGoogle: (state, action: PayloadAction<LoginGoogleResponse>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { loginGoogle, logout } = authSlice.actions;
export default authSlice.reducer;
