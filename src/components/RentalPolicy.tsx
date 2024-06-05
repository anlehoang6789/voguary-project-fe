import { Button, Divider, Modal } from 'antd';
import { useState } from 'react';
import { CiCircleQuestion } from 'react-icons/ci';

export default function RentalPolicy() {
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
    <div>
      <Button
        type='link'
        size='large'
        className='text-gray-500 flex items-center justify-between !border-none'
        onClick={showModal}
      >
        Chính sách cho thuê đồ <CiCircleQuestion className='text-xl ml-2' />
      </Button>
      <Modal
        title={<h1 className='font-bold text-center text-xl'>CHÍNH SÁCH CHO THUÊ ĐỒ CỦA VOGUARY</h1>}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[null]}
      >
        <div className='max-h-[60vh] overflow-y-auto'>
          <Divider />
          <h1 className='font-bold text-lg'>CHÍNH SÁCH VỀ QUY TRÌNH THUÊ ĐỒ:</h1>
          <h1 className='text-red-500'>I. NHẬN ĐỒ: (Phí ship chiều đi và về khách hàng tự chi trả)</h1>
          <p>. Cọc toàn bộ giá trị món đồ</p>
          <p>. Hoặc chỉ cọc tiền thuê (phần còn lại khi nhận món đồ thì thanh toán COD)</p>
          <h1 className='text-red-500'>II. TRẢ ĐỒ</h1>
          <p>
            Voguary hỗ trợ dịch vụ nhận đồ tận nhà. Sau khi kiểm tra món đồ không vấn đề gì. Voguary sẽ chuyển khoản
            hoàn tiền cọc trong vòng 24 tiếng sau khi nhận được số tài khoản.
          </p>
          <p className='bg-yellow-200 p-2 font-bold'>
            {' '}
            ‼️ LƯU Ý: Thời gian giữ đồ 3 ngày (KHÔNG TÍNH THỜI GIAN VẬN CHUYỂN) Hôm nay nhận - sử dụng ngày mai - ngày
            mốt trả (Nếu quá thời gian phát sinh thêm 10% giá thuê/ngày. Tối đa 7 ngày!). Trường hợp khách thuê dài ngày
            có thể trả đồ tại khách sạn hoặc báo trước để nhận ưu đãi phí phát sinh.
          </p>
          <h1 className='text-red-500'>III. ĐỔI TRẢ:</h1>
          <p>
            . Voguary chỉ nhận đổi đồ đối với khách hàng đặt đơn online (KHÔNG ÁP DỤNG VỚI KHÁCH ĐÃ THỬ TẠI CỬA HÀNG)
            Nếu đổi sang đồ có giá trị thấp hơn thì phần tiền chênh lệch sẽ được bảo lưu cho lần thuê tiếp theo.
          </p>
          <p>
            . Chỉ áp dụng HỦY LỊCH trong trường hợp bất khả kháng (thiên tai, dịch bệnh,...) những trường hợp còn lại
            nếu khách vẫn muốn hủy sẽ mất 50% giá thuê.
          </p>
          <p className='bg-yellow-200 p-2 font-bold'> Voguary nhận ship TOÀN QUỐC</p>
          <Divider />
          <h1 className='font-bold text-lg'>NHỮNG LƯU Ý KHI NHẬN ĐỒ</h1>
          <h1 className='text-red-500'>1. Ngay khi nhận đồ khách hàng vui lòng:</h1>
          <p>
            . Kiểm tra tình trạng món đồ, thử đồ và báo lại cho shop biết nếu như món đồ thuê có lỗi, cần đổi size, đổi
            mẫu…
          </p>
          <p>
            . Trong trường hợp khách không báo lại ngay mà sau quá 1 tiếng kể từ lúc nhận đồ, Voguary không thể hỗ trợ
            đổi trả.
          </p>
          <h1 className='text-red-500'>2. Thời gian thuê:</h1>
          <p>. Thời gian giữ đồ 3 ngày: Hôm nay nhận, mai mặc, mốt trả</p>
          <p>. Phí phát sinh thêm 1 ngày nếu báo trước là 10% giá thuê/ 1 ngày (tối đa 7 ngày)</p>
          <p>. Nếu khách không báo trước làm lỡ lịch thuê của khách sau, phí phát sinh là 100% giá thuê</p>
          <h1 className='text-red-500'>3. Khách hàng muốn hủy việc thuê đồ & Trong trường hợp chưa nhận đồ:</h1>
          <p>. Nếu vì lý do bất khả kháng như thiên tai, dịch bệnh...khách hàng được hoàn tiền 100%</p>
          <p>. Nếu vì lý do cá nhân Voguary sẽ giúp bạn bảo lưu tiền thuê cho lần tiếp theo và hoàn lại tiền cọc.</p>
          <p className='bg-yellow-200 p-2 font-bold'>
            Lưu ý: Voguary không hỗ trợ hoàn trả tiền thuê trong bất kỳ trường hợp nào khách hàng đã nhận đồ và sau đó
            mới báo lại về việc hủy.
          </p>
        </div>
      </Modal>
    </div>
  );
}
