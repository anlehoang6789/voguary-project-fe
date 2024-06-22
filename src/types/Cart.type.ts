export interface Cart {
  cartId: number;
  userId: number;
  quantity: number;
  productId: number;
  productTitle: string;
  productName: string;
  productDescription: string;
  productImage: string;
  productStatus: string;
  productPrice: number;
  categoryId: number;
  createdAt: string;
  carts: any[];
  category: any;
  feedbacks: any[];
  inventories: any[];
  productDetails: any[];
  ratings: any[];
  rentalOrderDetails: any[];
}
export interface GetCartByUserIdResponse {
  cartId: number;
  userId: number;
  quantity: number;
  productId: number;
  productName: string;
  productDescription: string;
  productImage: string;
  productStatus: string;
  productPrice: number;
  carts: any[];
}
