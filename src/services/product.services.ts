import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  GetHotProductResponse,
  GetProductDetailsByProductIdResponse,
  GetProductDetailsInforResponse,
  GetProductRatingsAndFeedbackResponse,
  GetProductResponse,
  ProductRecommendation
} from 'types/Product.type';
import { UserLoginResponse } from 'types/Account.type';
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
    getProductDetailsByProductId: build.query<GetProductDetailsByProductIdResponse, number>({
      query: (productId) => ({
        url: `Product/GetProductById?productId=${productId}`,
        method: 'GET'
      })
    }),
    getFeedback: build.query<GetProductRatingsAndFeedbackResponse, number>({
      query: (productId) => ({
        url: `Rating/GetProductRatingsAndFeedback?productId=${productId}`,
        method: 'GET'
      })
    }),
    getProductRecommendations: build.query<ProductRecommendation[], void>({
      query: () => ({
        url: `Product/RecommendNew?topN=10`,
        method: 'GET'
      })
    }),
    getProductDetailsInfor: build.query<GetProductDetailsInforResponse, number>({
      query: (productId) => ({
        url: `ProductDetail/ViewProductDetailByProductId?productId=${productId}`,
        method: 'GET'
      })
    })
  })
});

export const {
  useGetAllProductsQuery,
  useGetHotProductRecommendationsQuery,
  useGetProductDetailsByProductIdQuery,
  useGetFeedbackQuery,
  useGetProductRecommendationsQuery,
  useGetProductDetailsInforQuery
} = productApi;
