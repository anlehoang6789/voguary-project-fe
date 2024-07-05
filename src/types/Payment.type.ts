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

export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  categoryId: number;
}

export interface Cart {
  cartId: number;
  userId: number;
  productId: number;
  colorName: any;
  sizeName: any;
  rentalStart: any;
  rentalEnd: any;
  quantity: number;
  product: Product;
}

export interface AddPaymentMethodResponse {
  PaymentMethodId: number;
  paymentId: number;
  orderId: any;
  userId: number;
  paymentAmount: number;
  paymentMethodName: string;
  paymentStatus: string;
  fullName: string;
  phone: string;
  address: string;
  paymentTime: string;
  paymentLink: string;
  carts: Cart[];
}
