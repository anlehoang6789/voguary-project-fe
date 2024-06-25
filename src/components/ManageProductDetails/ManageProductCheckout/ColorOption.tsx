import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from 'store';

interface ColorOptionProps {
  colors: string[];
  colorImages: string[];
  onSelectColor: (colorIndex: number) => void;
}
export default function ColorOption({ colors, colorImages, onSelectColor }: ColorOptionProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  // const productColorImages = useSelector(
  //   (state: RootState) => state.productDetails.productDetails?.productColorImage || []
  // );
  const handleColorSelect = (index: number) => {
    setSelectedColorIndex(index);
    onSelectColor(index);
  };

  return (
    <div className='mb-8'>
      <h1 className='mb-2 font-bold text-base '>Màu sắc</h1>
      <div className='flex flex-wrap'>
        {colorImages.map((src, index) => (
          <div key={index} className='w-[calc(100%/4)] mb-4 pr-2'>
            <div className='aspect-w-1 aspect-h-1 cursor-pointer' onClick={() => handleColorSelect(index)}>
              <img src={src} alt={colors[index]} className='object-cover w-full h-full' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
