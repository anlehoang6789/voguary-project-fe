import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ChangePasswordRequest,
  ChangePasswordResponse,
  UserLoginResponse,
  UserProfileResponse,
  UpdateAvatarRequest,
  UpdateAvatarResponse,
  AdminGetListUser
} from 'types/Account.type';
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
    }),
    changePassword: build.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      query: (changePasswordRequest) => ({
        url: `User/ChangePassword?userId=${changePasswordRequest.userId}`,
        method: 'PUT',
        body: changePasswordRequest
      })
    }),
    updateAvatar: build.mutation<UpdateAvatarResponse, UpdateAvatarRequest>({
      query: (UpdateAvatarRequest) => ({
        url: `User/UpdateAvatar?userId=${UpdateAvatarRequest.userId}`,
        method: 'PUT',
        body: UpdateAvatarRequest
      })
    }),
    adminGetListUser: build.query<AdminGetListUser, void>({
      query: () => ({
        url: `User/GetFilteredUser?year=0&month=0&day=0&dayOfWeek=0`,
        method: 'GET'
      })
    })
  })
});

export const { useGetUserProfileQuery, useChangePasswordMutation, useUpdateAvatarMutation, useAdminGetListUserQuery } =
  userApi;
