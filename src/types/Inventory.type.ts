// Inventory type definition
export interface Inventory {
  inventoryId: number;
  productId: number;
  quantityAvailable: number;
  product: GetInventoryChildrenResponse[];
}

// GetInventoryChildrenResponse type definition
export interface GetInventoryChildrenResponse {
  productId: number;
  productTitle: string;
  productName: string;
  productDescription: string;
  productStatus: string;
  productPrice: number;
  categoryId: number;
  createdAt: string;
  carts: any[];
  category: Category[];
  feedbacks: any[];
  inventories: any[];
  productColors: any[];
  productDetails: any[];
  productImages: any[];
  productSizes: any[];
  ratings: any[];
  rentalOrderDetails: any[];
}

// Category type definition
export interface Category {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
  categoryStatus: string;
  products: any[];
}
