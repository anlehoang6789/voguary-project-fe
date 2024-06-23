export interface Payment {
  paymentId: number;
  orderId: number;
  userId: number;
  paymentAmount: number;
  paymentMethodId: any; // Adjust this type if possible
  paymentStatus: string;
  order: any;
  paymentMethod: PaymentMethod;
  user: any;
}

export interface PaymentMethod {
  paymentMethodId: number;
  paymentMethodName: string;
  payments: any[]; // Adjust this type if possible
}

export interface GetPaymentByUserIdResponse {
  paymentId: number;
  orderId: number;
  userId: number;
  paymentAmount: number;
  paymentStatus: string;
  paymentMethod: PaymentMethod;
  paymentMethodId: number;
  paymentMethodName: string;
  payments: any[];
}
