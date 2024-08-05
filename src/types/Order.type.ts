import { User } from './Account.type';

export interface Order {
  orderId: number;
  userId: User[];
  orderStatus: string;
  datePlaced: string;
  dueDate: string;
  returnDate: string;
  returnReason: string;
  orderTotal: number;
  orderImg: string;
}

export interface GetOrderByUserIdResponse {
  pageNumber: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
  data: OrderByUserIdItem[];
}

export interface OrderByUserIdItem {
  orderCode: string;
  orderTotal: number;
  paymentTime: string;
  orderStatus: string;
  fullName: string;
  phone: string;
  address: string;
  paymentMethod: string;
  email: string;
  productName: string;
  productImage: string;
  productQuantity: number;
  rentalStart: string;
  rentalEnd: string;
}

export interface GetPagedRentalOrderDetailsByUserIdResponse {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  items: GetPagedRentalOrderChildrenResponse[];
}

export interface GetPagedRentalOrderChildrenResponse {
  productName: string;
  productImage: string;
  rentalStart: string;
  rentalEnd: string;
  status: string;
  paymentTime: string;
  orderCode: string;
}

export interface GetOrderByUserIdRequest {
  userId: number;
  pageNumber: number;
  pageSize: number;
}

export interface GetRentalOrderDetailByStaffResponse {
  pageNumber: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
  data: OrderDetailByStaffItem[];
}

export interface OrderDetailByStaffItem {
  orderId: number;
  productName: string;
  productImage: string;
  productQuantity: number;
  rentalStart: string;
  rentalEnd: string;
  orderTotal: number;
  paymentType: string;
  paymentTime: string;
  status: string;
  orderCode: string;
  username: string;
  address: string;
  phone: string;
  email: string;
}

export interface GetRentalOrderDetailByStaffRequest {
  pageNumber: number;
  pageSize: number;
  status?: number;
}

export interface UpdateOrderStatusResponse {
  orderId: number;
  userId: number;
  orderStatus: string;
  returnReason: string;
  orderTotal: number;
  pointsEarned: number;
  orderCode: string;
  paymentId: number;
  deposits: any[];
  payments: any[];
  rentalOrderDetails: any[];
  user: any;
}

export interface UpdateOrderStatusRequest {
  orderId: number;
  status?: number;
}

export interface GetRentalReturnOrderByStaffResponse {
  pageNumber: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
  data: ReturnOrderByStaffItem[];
}
export interface ReturnOrderByStaffItem {
  orderId: number;
  datePlaced: string;
  dueDate: string;
  returnDate: string;
  username: string;
  returnReason: string;
}
export interface GetRentalReturnOrderByStaffRequest {
  pageNumber: number;
  pageSize: number;
}
