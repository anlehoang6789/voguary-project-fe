import { Category } from 'types/Category.type';
import { Product } from 'types/Product.type';

const mockCategory: Category = {
  categoryId: 1,
  categoryName: 'Category 1',
  categoryDescription: 'Description for category 1',
  categoryStatus: 'Active'
};

const mockProducts: Product[] = Array.from({ length: 15 }, (_, index) => ({
  productId: index + 1,
  productName: `Product ${index + 1}`,
  productDescription: `Description for product ${index + 1}`,
  productImage: `https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380`,
  productStatus: index % 2 === 0 ? 'Còn hàng' : 'Hết hàng',
  productPrice: 100 + index,
  categoryId: 1,
  productSize: 'M',
  productColor: 'Red',
  carts: [],
  category: [mockCategory],
  feedbacks: [],
  inventories: [],
  averageRating: [],
  rentalOrderDetails: []
}));

export default mockProducts;
