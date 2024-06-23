import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetAllColorResponse } from 'types/Color.type';
import baseUrl from 'utils/http';

export const colorApi = createApi({
  reducerPath: 'colorApi',
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
    getAllColor: build.query<GetAllColorResponse[], void>({
      query: () => ({
        url: 'Color/GetAllColors',
        method: 'GET'
      })
    })
  })
});
export const { useGetAllColorQuery } = colorApi;
