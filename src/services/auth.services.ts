import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../utils/http';
import { UserLoginRequest, UserLoginResponse, UserRegister } from 'types/Account.type';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      // Thêm logic để lấy accessToken từ localStorage và đặt vào header Authorization
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        const accessToken = userData ? userData.accessToken : null;
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    userRegister: build.mutation<UserRegister, UserRegister>({
      query: (body: UserRegister) => ({
        url: 'User/RegisterUser',
        method: 'POST',
        body
      })
    }),
    userLogin: build.mutation<UserLoginResponse, UserLoginRequest>({
      query: (body: UserLoginRequest) => ({
        url: 'User/Login',
        method: 'POST',
        body
      })
    })
  })
});

export const { useUserRegisterMutation, useUserLoginMutation } = authApi;
