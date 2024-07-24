import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import {
  AddToCartRequest,
  AddToCartResponse,
  GetCartByUserIdResponse,
  UpdateToCartRequest,
  UpdateToCartResponse
} from 'types/Cart.type';
import baseUrl from 'utils/http';

// Define the API
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
    }),
    deleteCart: build.mutation<void, number>({
      query: (cartId) => ({
        url: `Cart/DeleteCart?cartId=${cartId}`,
        method: 'DELETE'
      })
    }),
    updateCart: build.mutation<UpdateToCartResponse, UpdateToCartRequest>({
      query: (updatePayload) => ({
        url: `Cart/UpdateCart?userId=${updatePayload.userId}`,
        method: 'PUT',
        body: updatePayload
      })
    })
  })
});

// Export the hooks for the endpoints
export const { useGetCartByUserIdQuery, useAddToCartMutation, useDeleteCartMutation, useUpdateCartMutation } = cartApi;
