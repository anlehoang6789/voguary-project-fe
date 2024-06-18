import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetNotiResponse } from 'types/Notification.type';
import baseUrl from 'utils/http';

export const notiApi = createApi({
  reducerPath: 'notiApi',
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
    getNotiByUserId: build.query<GetNotiResponse[], number>({
      query: (userId) => ({
        url: `Notification/GetNotificationByUserId?userId=${userId}`,
        method: 'GET'
      })
    })
  })
});

export const { useGetNotiByUserIdQuery } = notiApi;
