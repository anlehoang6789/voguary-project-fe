import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Product } from 'types/Product.type';

// Đảm bảo rằng bạn import fetchBaseQuery nếu bạn sử dụng baseUrl
import baseUrl from 'utils/http';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({
    getHotProductRecommendations: build.query<Product, number>({
      query: (topN) => `Product/RecommendHot?topN=${topN}`
    })
  })
});

export const { useGetHotProductRecommendationsQuery } = productApi;
