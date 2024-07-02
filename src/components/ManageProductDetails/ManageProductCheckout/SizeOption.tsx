import { Button, Divider, Modal } from 'antd';
import { useState } from 'react';
import { LiaRulerHorizontalSolid } from 'react-icons/lia';
// import { useSelector } from 'react-redux';
// import { RootState } from 'store';

interface SizeOptionProps {
  sizes: string[];
  sizeIds: number[];
  onSelectSize: (sizeId: number) => void;
}
export default function SizeOption({ sizes, sizeIds, onSelectSize }: SizeOptionProps) {
  // const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  // const productDetailsSize = useSelector((state: RootState) => state.productDetails.productDetails?.productSize || []);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [selectedSize, setSelectedSize] = useState<string | null>(productDetailsSize[0]);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number | null>(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSizeClick = (index: number) => {
    setSelectedSizeIndex(index);
    onSelectSize(sizeIds[index]);
  };

  // useEffect(() => {
  //   setSelectedSize(productDetailsSize[0]);
  // }, []);

  return (
    <div className='mb-8'>
      <h1 className='mb-2 font-bold text-base'>Sizes</h1>
      {sizes.map((size, index) => (
        <Button
          size='large'
          key={index}
          className={`inline-block text-sm px-3 py-1 !rounded-none mr-2 mb-2 ${
            selectedSizeIndex === index ? 'bg-gradient-to-r from-[#fdc830] to-[#f37335] text-white' : ' text-gray-700'
          }`}
          onClick={() => handleSizeClick(index)}
        >
          {size}
        </Button>
      ))}
      <div>
        <Button
          type='link'
          size='large'
          className='text-gray-500 flex items-center justify-between !border-none'
          onClick={showModal}
        >
          Hướng dẫn Sizes <LiaRulerHorizontalSolid className='text-xl ml-2' />
        </Button>
        <Modal
          title={<h1 className='font-bold text-center text-xl'>BẢNG MẪU SIZES CỦA VOGUARY</h1>}
          open={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[null]}
        >
          <Divider />
          <img
            src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Sizes_Instruction%2F1.png?alt=media&token=7e36f185-6fdf-4137-9884-59d8d91f4803'
            alt='size_áo_nam'
          />
          <img
            src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Sizes_Instruction%2F2.png?alt=media&token=576df02f-5643-4432-984a-4d64c544dbd3'
            alt='size_quần_nam'
          />
          <img
            src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Sizes_Instruction%2F3.png?alt=media&token=2d54a16c-bf27-463f-9135-e25a6432fb0d'
            alt='size_áo_nữ'
          />
          <img
            src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Sizes_Instruction%2F4.png?alt=media&token=36686730-a190-4437-aa07-4855e20579f5'
            alt='size_quần_váy_nữ'
          />
        </Modal>
      </div>
    </div>
  );
}
