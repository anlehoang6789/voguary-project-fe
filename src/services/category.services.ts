import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetAllCategoriesResponse } from 'types/Category.type';
import baseUrl from 'utils/http';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
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
    getAllCategories: build.query<GetAllCategoriesResponse[], void>({
      query: () => ({
        url: 'Category/GetAllCategories',
        method: 'GET'
      })
    })
  })
});
export const { useGetAllCategoriesQuery } = categoryApi;
