import { Category } from './Category.type';
import { ProductDetailsRatingChildren, RatingAndFeedbackChildren } from './Rating.type';

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
export interface GetProductRatingsAndFeedbackResponse {
  productId: number;
  productName: string;
  averageRating: number;
  totalRatings: number;
  ratings: RatingAndFeedbackChildren[];
}

export interface ProductRecommendation {
  productId: number;
  productName: string;
  productDescription: string;
  productImage: string;
  productPrice: number;
  productSize: string | null;
  productColor: string | null;
  productStatus: string;
  categoryName: string;
  averageRating: number;
  numberOfPurchases: number;
  createdAt: string;
}
export interface GetProductDetailsByProductIdResponse {
  productId: number;
  productName: string;
  productTitle: string;
  productDescription: string;
  productImageId: number[];
  productImage: string[];
  productPrice: number;
  productSizeId: number[];
  productSize: string[];
  productColorId: number[];
  productColor: string[];
  productColorImage: string[];
  productStatus: string;
  categoryName: string;
  averageRating: number;
  ratingsFeedback: ProductDetailsRatingChildren[];
}

export interface GetProductDetailsInforResponse {
  description: string[];
  additionalInformation: string[];
  shippingAndReturns: string[];
  sizeChart: string[];
  reviews: string[];
  questions: string[];
  vendorInfo: string[];
  moreProducts: string[];
  productPolicies: string[];
}

export interface FilterProductRequest {
  Colors?: string[];
  Category?: string[];
  MinPrice?: number;
  MaxPrice?: number;
  Sizes?: string[];
}

export interface AddProductRequest {
  name: string;
  title: string;
  description: string;
  productImage: string[];
  price: number;
  categoryId: number;
  productColor: string[];
  productSize: string[];
}

export interface AddProductResponse {
  productId: number;
  name: string;
  title: string;
  description: string;
  productImage: string[];
  price: number;
  categoryId: number;
  productColor: string[];
  productSize: string[];
}

export interface AddProductDetailRequest {
  productId: number;
  description: string;
  additionalInformation: string;
  shippingAndReturns: string;
  sizeChart: string;
  reviews: string;
  questions: string;
  vendorInfo: string;
  moreProducts: string;
  productPolicies: string;
}

export interface AddProductDetailResponse {
  productId: number;
  description: string;
  additionalInformation: string;
  shippingAndReturns: string;
  sizeChart: string;
  reviews: string;
  questions: string;
  vendorInfo: string;
  moreProducts: string;
  productPolicies: string;
}
