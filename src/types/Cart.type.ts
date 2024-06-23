export interface Cart {
  cartId: number;
  userId: number;
  productId: number;
  productTitle: string;
  quantity: number;
  productPrice: number;
  productImageUrl: string[];
  rentalStart: string;
  rentalEnd: string;
}

export interface GetCartByUserIdResponse {
  cartId: number;
  userId: number;
  productId: number;
  productTitle: string;
  quantity: number;
  productPrice: number;
  productImageUrl: string[];
  rentalStart: string;
  rentalEnd: string;
}
