import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfileResponse } from 'types/Account.type';

interface UserProfileState {
  userProfile: UserProfileResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserProfileState = {
  userProfile: null,
  loading: false,
  error: null
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfileResponse>) => {
      state.userProfile = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetUserProfile: (state) => {
      state.userProfile = null;
      state.loading = false;
      state.error = null;
    }
  }
});
export const { setUserProfile, setLoading, setError, resetUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
