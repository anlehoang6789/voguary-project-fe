import { Button } from 'antd';
import { useState } from 'react';

export default function FilterSize() {
  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  const [selectedSizes, setSelectedSizes] = useState<string[]>([sizes[0]]);

  const handleSizeClick = (size: string) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((selectedSize) => selectedSize !== size)
        : [...prevSelectedSizes, size]
    );
  };

  return (
    <div>
      {sizes.map((size, index) => (
        <Button
          size='large'
          key={index}
          className={`inline-block text-sm px-3 py-1 !rounded-none mr-2 mb-2 ${
            selectedSizes.includes(size) ? 'bg-gradient-to-r from-[#fdc830] to-[#f37335] text-white' : ' text-gray-700'
          }`}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </Button>
      ))}
    </div>
  );
}
