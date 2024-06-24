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
  totalCount: number;
  items: Item[];
}

export interface Item {
  orderId: number;
  orderStatus: string;
  datePlaced: string;
  dueDate: string;
  returnDate: any;
  orderTotal: number;
  pointsEarned: number;
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
