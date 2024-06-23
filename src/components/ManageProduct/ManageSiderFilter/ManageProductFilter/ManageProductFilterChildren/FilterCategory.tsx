import { Alert, Button, Skeleton } from 'antd';
import { useState } from 'react';
import { useGetAllCategoriesQuery } from 'services/category.services';

export default function FilterCategory() {
  // const categories = ['Áo', 'Quần', 'Đầm', 'Váy', 'Phụ kiện', 'Trang sức'];
  const { data: categories, isLoading, error, isSuccess } = useGetAllCategoriesQuery();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSizeClick = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((selectedCategories) => selectedCategories !== category)
        : [...prevSelectedCategories, category]
    );
  };

  return (
    <div>
      {isLoading && <Skeleton active />}
      {error && <Alert message='Error loading categories' type='error' />}
      {isSuccess &&
        categories &&
        categories.map((category) => (
          <Button
            size='large'
            key={category.categoryId}
            className={`inline-block text-sm px-3 py-1 !rounded-none mr-2 mb-2 ${
              selectedCategories.includes(category.categoryName)
                ? 'bg-gradient-to-r from-[#fdc830] to-[#f37335] text-white'
                : ' text-gray-700'
            }`}
            onClick={() => handleSizeClick(category.categoryName)}
          >
            {category.categoryName}
          </Button>
        ))}
    </div>
  );
}
