import { Button } from 'antd';
import { useState } from 'react';

export default function FilterCategory() {
  const categories = ['Áo', 'Quần', 'Đầm', 'Váy', 'Phụ kiện', 'Trang sức'];
  const [selectedCategories, setSelectedCategories] = useState<string[]>([categories[0]]);

  const handleSizeClick = (category: string) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((selectedSize) => selectedSize !== category)
        : [...prevSelectedCategories, category]
    );
  };

  return (
    <div>
      {categories.map((size, index) => (
        <Button
          size='large'
          key={index}
          className={`inline-block text-sm px-3 py-1 !rounded-none mr-2 mb-2 ${
            selectedCategories.includes(size)
              ? 'bg-gradient-to-r from-[#00c6ff] to-blue-700 text-white'
              : ' text-gray-700'
          }`}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </Button>
      ))}
    </div>
  );
}
