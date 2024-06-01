import { Product } from './Product.type';

export interface Inventory {
  inventoryId: number;
  product: Product[];
  quantityAvailable: number;
}
