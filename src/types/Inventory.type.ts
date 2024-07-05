export interface GetInventoryResponse {
  pageNumber: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
  data: GetInventorybyStaffItem[];
}
export interface GetInventorybyStaffItem {
  inventoryId: number;
  productName: string;
  productImage: string;
  quantityAvailable: number;
  categoryName: string;
  status: string;
}
export interface GetInventoryRequest {
  pageNumber: number;
  pageSize: number;
}
