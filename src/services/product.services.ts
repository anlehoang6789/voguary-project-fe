import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  GetFeedbackResponse,
  GetHotProductResponse,
  GetProductDescriptionByProductIdResponse,
  GetProductDetailByProductIdResponse,
  GetProductResponse,
  ProductRecommendation
} from 'types/Product.type';
import { UserLoginResponse } from 'types/Account.type';

const baseUrl = 'http://localhost';

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
        url: 'api/Product/PagingAndFilteredProducts',
        method: 'GET'
      })
    }),
    getHotProductRecommendations: build.query<GetHotProductResponse[], number>({
      query: (topN) => ({
        url: `api/Product/RecommendHot?topN=${topN}`,
        method: 'GET'
      })
    }),
    getProductDetailByProductId: build.query<GetProductDetailByProductIdResponse, number>({
      query: (productId) => ({
        url: `ViewProductDetailByProductId?productId=${productId}`,
        method: 'POST'
      })
    }),
    getProductDescriptionByProductId: build.query<GetProductDescriptionByProductIdResponse, number>({
      query: (productId) => ({
        url: `api/Product/GetProductById?productId=${productId}`,
        method: 'GET'
      })
    }),
    getFeedback: build.query<GetFeedbackResponse[], number>({
      query: (productId) => ({
        url: `api/Rating/ProductRatingsAndFeedback/${productId}`,
        method: 'GET'
      })
    }),
    getProductRecommendations: build.query<ProductRecommendation[], void>({
      query: () => ({
        url: `api/Product/RecommendNew?topN=10`,
        method: 'GET'
      })
    })
  })
});

export const {
  useGetAllProductsQuery,
  useGetHotProductRecommendationsQuery,
  useGetProductDetailByProductIdQuery,
  useGetProductDescriptionByProductIdQuery,
  useGetFeedbackQuery,
  useGetProductRecommendationsQuery
} = productApi;
