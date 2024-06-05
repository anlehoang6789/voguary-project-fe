import { Button } from 'antd';
import { useState } from 'react';

export default function FilterPrice() {
  const prices = [500000, 1000000, 1500000, 2000000, 2500000, 3000000];
  const [selectedPrices, setSelectedPrices] = useState<number[]>([prices[0]]);

  const handleSizeClick = (price: number) => {
    setSelectedPrices((prevSelectedPrices) =>
      prevSelectedPrices.includes(price)
        ? prevSelectedPrices.filter((selectedPrice) => selectedPrice !== price)
        : [...prevSelectedPrices, price]
    );
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  return (
    <div>
      {prices.map((price, index) => (
        <Button
          size='large'
          key={index}
          className={`inline-block text-sm px-3 py-1 !rounded-none mr-2 mb-2 ${
            selectedPrices.includes(price)
              ? 'bg-gradient-to-r from-[#fdc830] to-[#f37335] text-white'
              : ' text-gray-700'
          }`}
          onClick={() => handleSizeClick(price)}
        >
          {formatPrice(price)}
        </Button>
      ))}
    </div>
  );
}
