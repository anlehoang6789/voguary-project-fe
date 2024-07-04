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

export interface ProductColor {
  colorId: number;
  colorName: string;
  hexCode: string;
  colorImage: string;
}

export interface ExistingColorId {
  colorId: number;
  colorImage: string;
}

export interface ProductDetail {
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

export interface AddProductRequest {
  name: string;
  title: string;
  description: string;
  productImage: string[];
  price: number;
  categoryId: number;
  productColors: ProductColor[];
  existingColorIds: ExistingColorId[];
  productSize: string[];
  existingSizeIds: number[];
  productDetail: ProductDetail;
}

export interface DataObject {
  productId: number;
  productTitle: string;
  productName: string;
  productDescription: string;
  productStatus: string;
  productPrice: number;
  categoryId: number;
  createdAt: any;
  carts: any[];
  category: any;
  feedbacks: any[];
  inventories: any[];
  productColors: ProductColorResponse[];
  productDetails: ProductDetailResponse[];
  productImages: ProductImage[];
  productSizes: ProductSize[];
  ratings: any[];
  rentalOrderDetails: any[];
}

export interface ProductColorResponse {
  productColorId: number;
  productId: number;
  colorId: number;
  productColorImage: string;
  color: Color;
  product: any;
}

export interface Color {
  colorId: number;
  colorName: string;
  hexCode: string;
  productColors: ProductColor2 | undefined[];
}

export interface ProductColor2 {
  productColorId: number;
  productId: number;
  colorId: number;
  productColorImage: string;
  color: any;
  product: any;
}

export interface ProductDetailResponse {
  productDetailId: number;
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
  product: any;
}

export interface ProductImage {
  productImageId: number;
  productId: number;
  imageId: number;
  image: Image;
  product: any;
}

export interface Image {
  imageId: number;
  imageUrl: string;
  productImages: any[];
}

export interface ProductSize {
  productSizeId: number;
  productId: number;
  sizeId: number;
  product: any;
  size: Size;
}

export interface Size {
  sizeId: number;
  sizeName: string;
  productSizes: any[];
}

export interface AddProductResponse {
  status: string;
  message: string;
  dataObject: DataObject;
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

export interface GetProductRequest {
  PageNumber: number;
  PageSize: number;
}

