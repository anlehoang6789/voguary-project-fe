import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetAllSizeResponse } from 'types/Size.type';
import baseUrl from 'utils/http';

export const sizeApi = createApi({
  reducerPath: 'sizeApi',
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
    getAllSize: build.query<GetAllSizeResponse[], void>({
      query: () => ({
        url: 'Size/GetAllSizes',
        method: 'GET'
      })
    })
  })
});
export const { useGetAllSizeQuery } = sizeApi;
