import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetHotProductResponse, GetProductDetailResponse, GetProductResponse } from 'types/Product.type';
import baseUrl from 'utils/http';
import { UserLoginResponse } from 'types/Account.type';

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
    }),
    getHotProductRecommendations: build.query<GetHotProductResponse[], number>({
      query: (topN) => ({
        url: `Product/RecommendHot?topN=${topN}`,
        method: 'GET'
      })
    }),
    getProductDetailsByProductId: build.query<GetProductDetailResponse, number>({
      query: (productId) => ({
        url: `Product/GetProductById?productId=${productId}`,
        method: 'GET'
      })
    })
  })
});

export const { useGetAllProductsQuery, useGetHotProductRecommendationsQuery, useGetProductDetailsByProductIdQuery } =
  productApi;
