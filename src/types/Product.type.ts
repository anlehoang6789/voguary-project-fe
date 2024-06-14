import { Category } from './Category.type';

export interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  productImage: any;
  productStatus: string;
  productPrice: number;
  categoryId: number;
  productSize: string;
  productColor: string;
  carts: any[];
  category: Category[];
  feedbacks: any[];
  inventories: any[];
  averageRating: any[];
  rentalOrderDetails: any[];
}

export interface GetProductResponse {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  items: GetProductItemsResponse[];
}

export interface GetProductItemsResponse {
  productId: number;
  productName: string;
  productTitle: string;
  productDescription: string;
  productImage: string[];
  productStatus: string;
  productPrice: number;
  category: string;
  productSize: string[];
  productColor: string[];
  averageRating: number;
  colorCount: number;
}

export interface GetHotProductResponse {
  productId: number;
  productName: string;
  productDescription: string;
  productImage: string[];
  productPrice: number;
  productSize: string[];
  productColor: string[];
  productStatus: string;
  categoryName: string;
  averageRating: number;
  numberOfPurchases: number;
  createdAt: any;
}
