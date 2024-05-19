import { Button, Divider, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { LiaRulerHorizontalSolid } from 'react-icons/lia';

export default function SizeOption() {
  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(sizes[0]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size); // Cập nhật state khi người dùng nhấn vào nút size
  };

  useEffect(() => {
    setSelectedSize(sizes[0]);
  }, []);

  return (
    <div className='mb-8'>
      <h1 className='mb-2 font-bold text-base'>Sizes</h1>
      {sizes.map((size, index) => (
        <Button
          size='large'
          key={index}
          className={`inline-block text-sm px-3 py-1 !rounded-none mr-2 mb-2 ${
            selectedSize === size ? 'bg-gradient-to-r from-[#00c6ff] to-blue-700 text-white' : ' text-gray-700'
          }`}
          onClick={() => handleSizeClick(size)}
        >
          {size}
        </Button>
      ))}
      <div>
        <Button
          type='link'
          size='large'
          className='text-gray-500 flex items-center justify-between'
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
        </Modal>
      </div>
    </div>
  );
}
