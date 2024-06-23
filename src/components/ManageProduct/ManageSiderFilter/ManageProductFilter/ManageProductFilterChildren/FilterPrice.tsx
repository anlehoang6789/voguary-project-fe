import { Slider } from 'antd';
import { useState } from 'react';

export default function FilterPrice() {
  const [selectedPrices, setSelectedPrices] = useState<number[]>([100000, 15000000]);

  const handleSliderChange = (value: number[]) => {
    setSelectedPrices(value);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  return (
    <div>
      <Slider
        range
        min={100000}
        max={15000000}
        step={100000}
        defaultValue={selectedPrices}
        onChange={handleSliderChange}
        tooltip={{ formatter: (value) => (value !== undefined ? `${formatPrice(value)} đồng` : '') }}
      />
      <div className='mt-4'>
        <span>Giá từ: {formatPrice(selectedPrices[0])} đồng</span>
        <span className='ml-2'>đến: {formatPrice(selectedPrices[1])} đồng</span>
      </div>
    </div>
  );
}
