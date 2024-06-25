import { Button } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';
import RentalPolicy from 'components/RentalPolicy';
import { FaArrowRightLong } from 'react-icons/fa6';
import SizeOption from './SizeOption';
import ColorOption from './ColorOption';
import SelectDateOption from './SelectDateOption';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useAddToCartMutation } from 'services/cart.services';
import { useState } from 'react';
import dayjs from 'dayjs';

export default function ManageProductCheckout() {
  const productDetailsData = useSelector((state: RootState) => state.productDetails.productDetails);
  const formatPrice = (price?: number) => {
    if (typeof price === 'undefined') {
      return '0 đ'; // Hoặc '0 ₫' hoặc giá trị mặc định khác tùy bạn
    }
    return price.toLocaleString('en-US') + ' đ';
  };

  //Lấy userId từ redux store của authLoginApiSlice
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');
  //Lấy productId từ redux store của productDetailsSlice
  const productId = useSelector((state: RootState) => state.productDetails.productDetails?.productId);

  const [addToCart, { isLoading, isError, isSuccess }] = useAddToCartMutation();

  // State for selected size, color, and dates
  // const [selectedSize, setSelectedSize] = useState<string | null>(null);
  // const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  // const [dates, setDates] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null] | null>(null);

  // const handleAddToCart = async () => {
  //   if (userId && productId && selectedSize && selectedColorIndex !== null && dates) {
  //     try {
  //       await addToCart({
  //         userId,
  //         productId,
  //         productIdColor: selectedColorIndex,
  //         productImageId: productId, // Placeholder for productImageId, update as needed
  //         productSizeId: selectedSize,
  //         rentalStart: dates[0]?.format('YYYY-MM-DD') || '',
  //         rentalEnd: dates[1]?.format('YYYY-MM-DD') || '',
  //         quantity: 1 // Placeholder for quantity, update as needed
  //       }).unwrap();
  //       console.log('Product added to cart successfully');
  //     } catch (error) {
  //       console.error('Failed to add product to cart:', error);
  //     }
  //   } else {
  //     console.error('Missing required fields to add product to cart');
  //   }
  // };

  return (
    <div className='sticky top-0'>
      <h1 className='text-2xl font-bold mb-4'>{productDetailsData?.productTitle}</h1>
      <p className='text-lg font-semibold mb-6'>{formatPrice(productDetailsData?.productPrice)}</p>

      {/* Hiển thị các lựa chọn cho sản phẩm tương tự nhưng có màu khác */}
      <ColorOption />

      {/* Hiển thị các loại size của sản phẩm */}
      <SizeOption />

      {/* Hiển thị chọn ngày thuê */}
      <SelectDateOption />

      <CustomGradientButton>
        <Button
          type='primary'
          size='large'
          className='mb-4 !rounded-none shadow-[5px_5px_0px_0px_rgba(255,141,107)] w-full flex items-center justify-between font-semibold'
          loading={isLoading}
        >
          THÊM VÀO GIỎ HÀNG <FaArrowRightLong />
        </Button>
      </CustomGradientButton>
      {isError && <p className='text-red-500'>Failed to add product to cart. Please try again.</p>}
      {isSuccess && <p className='text-green-500'>Product added to cart successfully!</p>}
      <RentalPolicy />
    </div>
  );
}
