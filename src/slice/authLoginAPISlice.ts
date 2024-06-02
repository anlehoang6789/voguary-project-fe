import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLoginResponse } from 'types/Account.type';

interface AuthLoginGoogleState {
  user: UserLoginResponse | null;
}

const initialState: AuthLoginGoogleState = {
  user: null
};

const authLoginAPISlice = createSlice({
  name: 'authLoginAPI',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserLoginResponse>) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, logoutUser } = authLoginAPISlice.actions;
export default authLoginAPISlice.reducer;
