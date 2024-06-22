import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetCartByUserIdResponse } from 'types/Cart.type';
import baseUrl from 'utils/http';

export const cartApi = createApi({
  reducerPath: 'cartApi',
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
    getCartByUserId: build.query<GetCartByUserIdResponse, number>({
      query: (userId) => ({
        url: `Cart/GetCartByUserId?userId=${userId}`,
        method: 'GET'
      })
    })
  })
});

export const { useGetCartByUserIdQuery } = cartApi;
