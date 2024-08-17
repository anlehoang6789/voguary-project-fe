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

export interface AddPaymentMethodResponse {
  status: string;
  message: string;
  dataObject: DataObject;
  additionalData: any;
}

export interface DataObject {
  paymentId: number;
  userId: number;
  paymentAmount: number;
  paymentMethodName: string;
  paymentStatus: string;
  fullName: string;
  phone: string;
  address: string;
  paymentTime: string;
  paymentLink: string;
  returnUrl: any;
  cancelUrl: any;
  carts: Cart[];
}

export interface Cart {
  cartId: number;
  userId: number;
  productId: number;
  quantity: number;
  product: Product;
}

export interface Product {
  productId: number;
  productName: string;
  productPrice: number;
  categoryId: number;
}