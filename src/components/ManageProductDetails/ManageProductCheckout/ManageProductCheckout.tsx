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
import { dateToString } from 'utils/convertTypeDayjs';

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

  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedDates, setSelectedDates] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null] | null>(null);

  const [addToCart, { isLoading, isError, isSuccess }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    if (
      selectedColor === null ||
      selectedSize === null ||
      !selectedDates ||
      !selectedDates[0] ||
      !selectedDates[1] ||
      !productDetailsData?.productId ||
      !productDetailsData?.productImageId[0]
    ) {
      alert('Please select color, size, dates, and ensure product details are fully loaded.');
      return;
    }
    console.log('Selected Dates in handleAddToCart:', selectedDates);
    const payload = {
      userId,
      productId: productDetailsData?.productId,
      productIdColor: selectedColor,
      productImageId: productDetailsData?.productImageId[0],
      productSizeId: selectedSize,
      rentalStart: dateToString(selectedDates[0]!),
      rentalEnd: dateToString(selectedDates[1]!),
      quantity: 1 // Assuming quantity is 1 for simplicity
    };

    try {
      await addToCart(payload).unwrap();
    } catch (error) {
      console.error('Failed to add product to cart:', error);
    }
  };

  return (
    <div className='sticky top-0'>
      <h1 className='text-2xl font-bold mb-4'>{productDetailsData?.productTitle}</h1>
      <p className='text-lg font-semibold mb-6'>{formatPrice(productDetailsData?.productPrice)}</p>

      {/* Hiển thị các lựa chọn cho sản phẩm tương tự nhưng có màu khác */}
      <ColorOption
        colors={productDetailsData?.productColor || []}
        colorImages={productDetailsData?.productColorImage || []}
        onSelectColor={setSelectedColor}
      />

      {/* Hiển thị các loại size của sản phẩm */}
      <SizeOption
        sizes={productDetailsData?.productSize || []}
        sizeIds={productDetailsData?.productSizeId || []}
        onSelectSize={setSelectedSize}
      />

      {/* Hiển thị chọn ngày thuê */}
      <SelectDateOption onSelectDates={setSelectedDates} />

      <CustomGradientButton>
        <Button
          type='primary'
          size='large'
          className='mb-4 !rounded-none shadow-[5px_5px_0px_0px_rgba(255,141,107)] w-full flex items-center justify-between font-semibold'
          onClick={handleAddToCart}
          loading={isLoading}
        >
          THÊM VÀO GIỎ HÀNG <FaArrowRightLong />
        </Button>
      </CustomGradientButton>
      {isError && <p className='text-red-500'>Thất bại. Không thêm được sản phẩm vào giỏ hàng.</p>}
      {isSuccess && <p className='text-green-500'>Thêm sản phẩm vào giỏ hàng thành công.</p>}
      <RentalPolicy />
    </div>
  );
}
