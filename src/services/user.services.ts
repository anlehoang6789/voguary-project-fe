import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { UserLoginResponse } from 'types/Account.type';
import baseUrl from 'utils/http';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const user = localStorage.getItem('userLogin');
      if (user) {
        const userData = JSON.parse(user) as UserLoginResponse;
        // console.log('userData', userData);
        const token = userData ? userData.token : '';
        // console.log('token', token);
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({})
});
