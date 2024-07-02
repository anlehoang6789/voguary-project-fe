import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetOrderByUserIdResponse, GetPagedRentalOrderDetailsByUserIdResponse } from 'types/Order.type';
import baseUrl from 'utils/http';

export const orderApi = createApi({
  reducerPath: 'orderApi',
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
    getOrdersByUserId: build.query<GetOrderByUserIdResponse, number>({
      query: (userId) => ({
        url: `RentalOrder/GetRentalOrdersByUserId?userId=${userId}&pageNumber=1&pageSize=5`,
        method: 'GET'
      })
    }),
    getPagedRentalOrderDetailsByUserId: build.query<GetPagedRentalOrderDetailsByUserIdResponse, number>({
      query: (userId) => ({
        url: `RentalOrder/GetPagedRentalOrderDetailsByUserId?userId=${userId}&pageNumber=1&pageSize=5`,
        method: 'GET'
      })
    })
  })
});

export const { useGetOrdersByUserIdQuery, useGetPagedRentalOrderDetailsByUserIdQuery } = orderApi;
