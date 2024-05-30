import { Button, DatePicker, Divider, Modal } from 'antd';
import { useState } from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import dayjs, { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

export default function SelectDateOption() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null] | null>(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const disabledDate = (current: Dayjs): boolean => {
    // Disable dates before today
    return current && current < dayjs().startOf('day');
  };

  const onCalendarChange = (dates: [Dayjs | null, Dayjs | null] | null) => {
    if (dates && dates[0]) {
      const startDate = dates[0];
      const calculatedEndDate = startDate.add(3, 'day');
      setDates([startDate, calculatedEndDate]);
    } else {
      setDates(null);
    }
  };

  return (
    <div className='select-date-option space-y-2 mb-8'>
      <h1 className='font-bold text-base'>Đặt lịch thuê đồ</h1>
      <RangePicker
        placeholder={['Ngày bắt đầu', 'Ngày kết thúc']}
        className='w-full'
        disabledDate={disabledDate}
        onCalendarChange={onCalendarChange}
        value={dates}
        disabled={[false, true]}
      />
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
          <h1 className='text-red-500'>1. Thời gian thuê:</h1>
          <p>. Thời gian giữ đồ 3 ngày: Hôm nay nhận, mai mặc, mốt trả</p>
          <p>. Phí phát sinh thêm 1 ngày nếu báo trước là 10% giá thuê/ 1 ngày (tối đa 7 ngày)</p>
          <p>. Nếu khách không báo trước làm lỡ lịch thuê của khách sau, phí phát sinh là 100% giá thuê</p>
          <h1 className='text-red-500'>2. Khách hàng muốn hủy việc thuê đồ & Trong trường hợp chưa nhận đồ:</h1>
          <p>. Nếu vì lý do bất khả kháng như thiên tai, dịch bệnh...khách hàng được hoàn tiền 100%</p>
          <p>. Nếu vì lý do cá nhân Voguary sẽ giúp bạn bảo lưu tiền thuê cho lần tiếp theo và hoàn lại tiền cọc.</p>
          <p className='bg-yellow-200 p-2 font-bold'>
            Lưu ý: Voguary không hỗ trợ hoàn trả tiền thuê trong bất kỳ trường hợp nào khách hàng đã nhận đồ và sau đó
            mới báo lại về việc hủy.
          </p>
        </Modal>
      </div>
    </div>
  );
}
