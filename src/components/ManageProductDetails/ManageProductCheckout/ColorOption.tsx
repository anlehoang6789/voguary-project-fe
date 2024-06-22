import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function ColorOption() {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  const productColorImages = useSelector(
    (state: RootState) => state.productDetails.productDetails?.productColorImage || []
  );
  // const colors = [
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380'
  // ];

  // console.log('selectedColorIndex', selectedColorIndex);

  return (
    <div className='mb-8'>
      <h1 className='mb-2 font-bold text-base '>Màu sắc</h1>
      <div className='flex flex-wrap'>
        {productColorImages.map((src, index) => (
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
