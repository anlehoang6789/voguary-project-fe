import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserLoginResponse } from 'types/Account.type';
import {
  GetOrderByUserIdRequest,
  GetOrderByUserIdResponse,
  GetPagedRentalOrderDetailsByUserIdResponse,
  GetRentalOrderDetailByStaffRequest,
  GetRentalOrderDetailByStaffResponse,
  UpdateOrderStatusRequest,
  UpdateOrderStatusResponse,
  GetRentalReturnOrderByStaffRequest,
  GetRentalReturnOrderByStaffResponse

} from 'types/Order.type';
import baseUrl from 'utils/http';

export const orderApi = createApi({
  reducerPath: 'orderApi',
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
    getOrdersByUserId: build.query<GetOrderByUserIdResponse, GetOrderByUserIdRequest>({
      query: (body) => ({
        url: `RentalOrder/GetRentalOrdersByUserId?userId=${body.userId}&pageNumber=${body.pageNumber}&pageSize=${body.pageSize}`,
        method: 'GET'
      })
    }),
    getPagedRentalOrderDetailsByUserId: build.query<GetPagedRentalOrderDetailsByUserIdResponse, number>({
      query: (userId) => ({
        url: `RentalOrder/GetPagedRentalOrderDetailsByUserId?userId=${userId}&pageNumber=1&pageSize=5`,
        method: 'GET'
      })
    }),
    getOrderForStaff: build.query<GetRentalOrderDetailByStaffResponse, GetRentalOrderDetailByStaffRequest>({
      query: ({ pageNumber, pageSize, status }) => {
        let url = `RentalOrder/GetRentalOrderDetailByStaff?pageNumber=${pageNumber}&pageSize=${pageSize}`;
        if (status !== undefined) {
          url += `&status=${status}`;
        }
        return {
          url,
          method: 'GET'
        };
      }
    }),

    updateOrderStatus: build.mutation<UpdateOrderStatusResponse, UpdateOrderStatusRequest>({
      query: ({ orderId, status }) => ({
        url: `RentalOrder/UpdateOrderStatus?orderId=${orderId}&status=${status}`,
        method: 'PUT'
      })
    }),

    getReturnOrders: build.query<GetRentalReturnOrderByStaffResponse, GetRentalReturnOrderByStaffRequest>({
      query: ({ pageNumber, pageSize }) => ({
        url: `RentalOrder/GetReturnOrders?pageNumber=${pageNumber}&pageSize=${pageSize}`,
        method: 'GET'

      })
    })
  })
});

export const {
  useGetOrdersByUserIdQuery,
  useGetPagedRentalOrderDetailsByUserIdQuery,
  useGetOrderForStaffQuery,

  useUpdateOrderStatusMutation,

  useGetReturnOrdersQuery

} = orderApi;
