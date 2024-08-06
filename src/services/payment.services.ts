import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetPaymentByUserIdResponse, AddPaymentMethodResponse } from 'types/Payment.type';
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
        url: `Payment/ViewHistoryPaymentByUserId?userId=${userId}`,
        method: 'GET'
      })
    }),
    addPaymentMethod: build.mutation<AddPaymentMethodResponse, {
      userId: number;
      fullName: string;
      phone: string;
      address: string;
      paymentMethodId: number;
      returnUrl: string;
    }>({
      query: ({ userId, fullName, phone, address, paymentMethodId, returnUrl }) => ({
        url: `Payment/AddPaymentForUser`,
        method: 'POST',
        params: {
          userId,
          FullName: fullName,
          Phone: phone,
          Address: address,
          PaymentMethodId: paymentMethodId,
          ReturnUrl: returnUrl
        }
      })
    })
  })
});

export const { useGetPaymentByUserIdQuery, useAddPaymentMethodMutation } = paymentApi;
