export interface GetTotalRevenueResponse {
  totalRevenue: number;
}

export interface GetTotalUsersCustomerResponse {
  totalCustomers: number;
}

export interface GetTotalUsersStaffResponse {
  totalStaff: number;
}

export interface GetTotalItemsInStockResponse {
  totalItemsInStock: number;
}

export interface GetTotalReturnedOrdersResponse {
  totalReturnedOrders: number;
}

export type GetMostOrderedProductCategoryResponse = Root2[];

export interface Root2 {
  categoryName: string;
  orderCount: number;
}
export interface MonthlyRevenueResponse {
  '6/2024': number;
}
