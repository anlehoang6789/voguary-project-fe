export interface Refund {
  refundId: number;
  customerName: string;
  itemName: string;
  returnReason: string;
  orderDate: string;
  returnRequestDate: string;
  refundAmount: number; // Change this line
  status: string;
}
