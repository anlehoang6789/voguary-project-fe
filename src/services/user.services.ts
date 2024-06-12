import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse, UserProfileResponse } from 'types/Account.type';
import baseUrl from 'utils/http';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const user = localStorage.getItem('userLogin');
      if (user) {
        const userData = JSON.parse(user) as UserLoginResponse;
        const token = userData ? userData.token : '';
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    getUserProfile: build.query<UserProfileResponse, number>({
      query: (userId) => ({
        url: `User/ViewProfile/${userId}`,
        method: 'GET'
      })
    })
  })
});

export const { useGetUserProfileQuery } = userApi;
