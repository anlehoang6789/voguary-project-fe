import { Button, Image } from 'antd';
import { useState } from 'react';
import { RxCaretUp, RxCaretDown } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface ManageProductImageProps {
  selectedColorIndex: number | null; // Kiểu dữ liệu của selectedColorIndex là number hoặc null
}

export default function ManageProductImage({ selectedColorIndex }: ManageProductImageProps) {
  const [showMoreImages, setShowMoreImages] = useState<boolean>(false);
  const productImages = useSelector((state: RootState) => state.productDetails.productDetails?.productImage || []);
  // const images = [
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380',
  //   'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380'
  // ];

  // Bắt nó ban đầu chỉ hiển thị 4 ảnh, khi click vào nút "Xem thêm" thì hiển thị tất cả ảnh
  const visibleImages = showMoreImages ? productImages : productImages.slice(0, 4);

  return (
    <div className='relative'>
      <div className='grid grid-cols-2 gap-2 transition-all duration-1000'>
        {visibleImages.map((src, index) => (
          <div key={index}>
            <Image src={src} alt={`Product ${index + 1}`} className='w-full' />
          </div>
        ))}
      </div>

      {!showMoreImages && productImages.length > 4 && (
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
