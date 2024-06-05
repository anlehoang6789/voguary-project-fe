import { Button } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';
import RentalPolicy from 'components/RentalPolicy';
import { FaArrowRightLong } from 'react-icons/fa6';
import SizeOption from './SizeOption';
import ColorOption from './ColorOption';
import SelectDateOption from './SelectDateOption';

export default function ManageProductCheckout() {
  return (
    <div className='sticky top-0'>
      <h1 className='text-2xl font-bold mb-4'>ÁO ĐẤU MANCHESTER UNITED</h1>
      <p className='text-lg font-semibold mb-6'>1,000,000 đ</p>

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
        >
          THÊM VÀO GIỎ HÀNG <FaArrowRightLong />
        </Button>
      </CustomGradientButton>
      <RentalPolicy />
    </div>
  );
}
