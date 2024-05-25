import { Button, DatePicker, Divider, Modal } from 'antd';
import { useState } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';

const { RangePicker } = DatePicker;

export default function SelectDateOption() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='select-date-option space-y-2 mb-8'>
      <h1 className='font-bold text-base'>Đặt lịch thuê đồ</h1>
      <RangePicker placeholder={['Ngày bắt đầu', 'Ngày kết thúc']} className='w-full' />
      <div>
        <Button
          type='link'
          size='large'
          className='text-gray-500 flex items-center justify-between'
          onClick={showModal}
        >
          Hướng dẫn đặt lịch <IoCalendarNumberOutline className='text-xl ml-2' />
        </Button>
        <Modal
          title={<h1 className='font-bold text-center text-lg'>HƯỚNG DẪN ĐẶT LỊCH THUÊ ĐỒ TẠI VOGUARY</h1>}
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
