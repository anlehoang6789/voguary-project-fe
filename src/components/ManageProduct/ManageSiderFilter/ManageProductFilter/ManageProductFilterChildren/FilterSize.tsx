import { Alert, Button, Skeleton } from 'antd';
import { useState } from 'react';
import { useGetAllSizeQuery } from 'services/size.services';

export default function FilterSize() {
  // const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  const { data: sizes, isLoading, error, isSuccess } = useGetAllSizeQuery();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSizeClick = (size: string) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((selectedSizes) => selectedSizes !== size)
        : [...prevSelectedSizes, size]
    );
  };

  return (
    <div>
      {isLoading && <Skeleton active />}
      {error && <Alert message='Error loading sizes' type='error' />}
      {isSuccess &&
        sizes &&
        sizes.map((size) => (
          <Button
            size='large'
            key={size.sizeId}
            className={`inline-block text-sm px-3 py-1 !rounded-none mr-2 mb-2 ${
              selectedSizes.includes(size.sizeName)
                ? 'bg-gradient-to-r from-[#fdc830] to-[#f37335] text-white'
                : ' text-gray-700'
            }`}
            onClick={() => handleSizeClick(size.sizeName)}
          >
            {size.sizeName}
          </Button>
        ))}
    </div>
  );
}
