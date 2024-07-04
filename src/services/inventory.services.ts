import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import { GetInventoryRequest, GetInventoryResponse } from 'types/Inventory.type';
import baseUrl from 'utils/http';

export const inventoryApi = createApi({
  reducerPath: 'inventoryApi',
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
    getInventories: build.query<GetInventoryResponse, GetInventoryRequest>({
      query: ({ pageNumber, pageSize }) => ({
        url: `Inventory/GetInventories?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        method: 'GET'
      })
    })
  })
});

export const { useGetInventoriesQuery } = inventoryApi;
