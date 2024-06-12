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
