import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import baseUrl from '../utils/http';
import {
  UserLoginRequest,
  UserLoginResponse,
  UserRegister,
  UserRegisterResponse,
  verifyCodeRequest
} from 'types/Account.type';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const user = localStorage.getItem('userLogin');
      if (user) {
        const userData = JSON.parse(user) as UserLoginResponse;
        // console.log('userData', userData);
        const token = userData ? userData.token : '';
        // console.log('token', token);
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    userRegister: build.mutation<UserRegisterResponse, UserRegister>({
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
    }),
    verifyAccount: build.mutation<void, verifyCodeRequest>({
      query: (body: verifyCodeRequest) => ({
        url: 'User/VerifyCode?userId=' + body.userId + '&code=' + body.code,
        method: 'POST',
        body
      })
    })
  })
});

export const { useUserRegisterMutation, useUserLoginMutation, useVerifyAccountMutation } = authApi;
