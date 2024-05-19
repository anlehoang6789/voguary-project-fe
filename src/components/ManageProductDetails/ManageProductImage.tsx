import { Button, Image } from 'antd';
import { useState } from 'react';
import { RxCaretUp, RxCaretDown } from 'react-icons/rx';

interface ManageProductImageProps {
  selectedColorIndex: number | null; // Kiểu dữ liệu của selectedColorIndex là number hoặc null
}

export default function ManageProductImage({ selectedColorIndex }: ManageProductImageProps) {
  const [showMoreImages, setShowMoreImages] = useState<boolean>(false);
  const images = [
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600',
    'https://via.placeholder.com/600x600'
  ];

  // Bắt nó ban đầu chỉ hiển thị 4 ảnh, khi click vào nút "Xem thêm" thì hiển thị tất cả ảnh
  const visibleImages = showMoreImages ? images : images.slice(0, 4);

  return (
    <div className='relative'>
      <div className='grid grid-cols-2 gap-2 transition-all duration-1000'>
        {visibleImages.map((src, index) => (
          <div key={index}>
            <Image src={src} alt={`Product ${index + 1}`} className='w-full' />
          </div>
        ))}
      </div>

      {!showMoreImages && images.length > 4 && (
        <div className='text-center mt-4 absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-10 flex items-center '>
          <Button
            className='flex items-center !rounded-none p-6 font-bold transition-all duration-500 hover:-translate-y-2'
            onClick={() => setShowMoreImages(true)}
          >
            XEM THÊM
            <RxCaretDown className='text-2xl ml-2 font-black' />
          </Button>
        </div>
      )}
      {showMoreImages && (
        <div className='text-center mt-4 absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-10 flex items-center'>
          <Button
            className='flex items-center !rounded-none p-6 font-bold transition-all duration-500 hover:-translate-y-2'
            onClick={() => setShowMoreImages(false)}
          >
            THU GỌN
            <RxCaretUp className='text-2xl ml-2 font-black' />
          </Button>
        </div>
      )}
    </div>
  );
}
