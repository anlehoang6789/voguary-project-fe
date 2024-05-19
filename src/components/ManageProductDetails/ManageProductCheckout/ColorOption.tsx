import { useState } from 'react';

export default function ColorOption() {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  const colors = [
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600'
  ];

  console.log('selectedColorIndex', selectedColorIndex);

  return (
    <div className='mb-8'>
      <h1 className='mb-2 font-bold text-base '>Màu sắc</h1>
      <div className='flex flex-wrap'>
        {colors.map((src, index) => (
          <div key={index} className='w-[calc(100%/4)] mb-4 pr-2'>
            <div className='aspect-w-1 aspect-h-1 cursor-pointer' onClick={() => setSelectedColorIndex(index)}>
              <img src={src} alt='Option Color' className='object-cover w-full h-full' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
