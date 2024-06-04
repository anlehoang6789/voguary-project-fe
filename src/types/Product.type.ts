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
  ratings: any[];
  rentalOrderDetails: any[];
}
