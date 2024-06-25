import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { AddToCartRequest, AddToCartResponse, GetCartByUserIdResponse } from 'types/Cart.type';
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
    getCartByUserId: build.query<GetCartByUserIdResponse[], number>({
      query: (userId) => ({
        url: `Cart/GetCartByUserId?userId=${userId}`,
        method: 'GET'
      })
    }),
    addToCart: build.mutation<AddToCartResponse, AddToCartRequest>({
      query: (body) => ({
        url: 'Cart/AddNewCart',
        method: 'POST',
        body
      })
    })
  })
});

export const { useGetCartByUserIdQuery, useAddToCartMutation } = cartApi;
