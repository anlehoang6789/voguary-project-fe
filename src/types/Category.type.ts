export interface Category {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
  categoryStatus: string;
}

export interface GetAllCategoriesResponse {
  categoryId: number;
  categoryName: string;
  categoryDescription: string;
  categoryStatus: string;
  products: any[];
}
