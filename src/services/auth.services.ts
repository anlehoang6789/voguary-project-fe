import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    prepareHeaders: (headers) => {
      // Thêm logic để lấy accessToken từ localStorage và đặt vào header Authorization
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        const accessToken = userData ? userData.accessToken : null;
        headers.set('Authorization', `Bearer ${accessToken}`);
      }
      return headers;
    }
  }),
  refetchOnMountOrArgChange: true,
  endpoints: (build) => ({})
});

export const {} = authApi;
