import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetPaymentByUserIdResponse } from 'types/Payment.type';
import baseUrl from 'utils/http';

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
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
    getPaymentByUserId: build.query<GetPaymentByUserIdResponse, number>({
      query: (userId) => ({
        url: `Payment/ViewHistoryPaymentByUserId?userId${userId}`,
        method: 'GET'
      })
    })
  })
});

export const { useGetPaymentByUserIdQuery } = paymentApi;
