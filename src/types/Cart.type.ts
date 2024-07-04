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

export interface AddToCartRequest {
  userId: number;
  productId: number;
  productIdColor: number;
  productImageId: number;
  productSizeId: number;
  rentalStart: string;
  rentalEnd: string;
  quantity: number;
}

export interface AddToCartResponse {
  cartId: number;
  userId: number;
  productId: number;
  quantity: number;
  discountedPrice: any;
  totalPrice: any;
  product: any;
  user: any;
}
export interface UpdateToCartRequest {
  cartId: number;
  quantity: number;
  rentalStart: string;
  rentalEnd: string;
}
