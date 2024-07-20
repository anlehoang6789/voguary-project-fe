import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import {
  GetMostOrderedProductCategoryResponse,
  GetTotalItemsInStockResponse,
  GetTotalReturnedOrdersResponse,
  GetTotalRevenueResponse,
  GetTotalUsersCustomerResponse,
  GetTotalUsersStaffResponse,
  MonthlyRevenueResponse // Thêm type mới cho API mới
} from 'types/Dashboard.type';
import baseUrl from 'utils/http';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
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
    getTotalRevenue: build.query<GetTotalRevenueResponse, void>({
      query: () => ({
        url: `Dashboard/TotalRevenue`,
        method: 'GET'
      })
    }),
    getTotalUsersCustomer: build.query<GetTotalUsersCustomerResponse, void>({
      query: () => ({
        url: `Dashboard/TotalUsersCustomer`,
        method: 'GET'
      })
    }),
    getTotalUsersStaff: build.query<GetTotalUsersStaffResponse, void>({
      query: () => ({
        url: `Dashboard/TotalUsersStaff`,
        method: 'GET'
      })
    }),
    getTotalItemsInStock: build.query<GetTotalItemsInStockResponse, void>({
      query: () => ({
        url: `Dashboard/TotalItemsInStock`,
        method: 'GET'
      })
    }),
    getTotalReturnedOrders: build.query<GetTotalReturnedOrdersResponse, void>({
      query: () => ({
        url: `Dashboard/TotalReturnedOrders`,
        method: 'GET'
      })
    }),
    getMostOrderedProductCategory: build.query<GetMostOrderedProductCategoryResponse, void>({
      query: () => ({
        url: `Dashboard/MostOrderedProductCategory`,
        method: 'GET'
      })
    }),
    getMonthlyRevenue2024: build.query<MonthlyRevenueResponse, void>({
      query: () => ({
        url: `Dashboard/MonthlyRevenue2024`,
        method: 'GET'
      })
    })
  })
});

export const {
  useGetTotalRevenueQuery,
  useGetTotalUsersCustomerQuery,
  useGetTotalUsersStaffQuery,
  useGetTotalItemsInStockQuery,
  useGetTotalReturnedOrdersQuery,
  useGetMostOrderedProductCategoryQuery,
  useGetMonthlyRevenue2024Query // Thêm hook mới cho endpoint mới
} = dashboardApi;
