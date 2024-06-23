export interface GetPaymentByUserIdResponse {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  items: GetPaymentByUserIdChildrenResponse[];
}

export interface GetPaymentByUserIdChildrenResponse {
  paymentId: number;
  paymentTime: string;
  paymentAmount: number;
  paymentContent: string;
  paymentMethodName: string;
}
