import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetProductResponse } from 'types/Product.type';
import baseUrl from 'utils/http';
export const productApi = createApi({
  reducerPath: 'productApi',
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
    getAllProducts: build.query<GetProductResponse, void>({
      query: () => ({
        url: 'Product/PagingAndFilteredProducts',
        method: 'GET'
      })
    })
  })
});
export const { useGetAllProductsQuery } = productApi;
