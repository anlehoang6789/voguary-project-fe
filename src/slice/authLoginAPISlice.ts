import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserLoginResponse } from 'types/Account.type';
import { jwtDecode } from 'jwt-decode';

export enum RoleType {
  ADMIN = 'Admin',
  STAFF = 'Staff',
  CUSTOMER = 'Customer',
  GUEST = 'Guest'
}

// Define type for the decoded token
export interface DecodedToken {
  userId: string;
  role: RoleType;
}
interface AuthLoginAPIState {
  user: UserLoginResponse | null;
  isAuthenticated: boolean;
  userId: string | null;
  role: RoleType;
  refreshToken: string | null;
  tokenExpired: string | null;
}

const initialState: AuthLoginAPIState = {
  user: null,
  isAuthenticated: false,
  userId: null,
  role: RoleType.GUEST,
  refreshToken: null,
  tokenExpired: null
};

const authLoginAPISlice = createSlice({
  name: 'authLoginAPI',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserLoginResponse>) => {
      const decodedToken = jwtDecode(action.payload.token) as DecodedToken;
      // console.log('decodedToken', decodedToken); // Kiểm tra decoded token
      // console.log('UserLoginResponse', action.payload); // Kiểm tra response
      state.user = action.payload;
      state.isAuthenticated = true;
      state.userId = decodedToken.userId;
      state.role = decodedToken.role;
      state.refreshToken = action.payload.refreshToken;
      state.tokenExpired = action.payload.expired;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.refreshToken = null;
      state.tokenExpired = null;
      state.userId = null;
      state.role = RoleType.GUEST;
    }
  }
});

export const { setUser, logoutUser } = authLoginAPISlice.actions;
export default authLoginAPISlice.reducer;
