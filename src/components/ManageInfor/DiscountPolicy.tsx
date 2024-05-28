import { Button, Divider, Modal } from 'antd';
import React, { useState } from 'react';
import { CiCircleQuestion } from 'react-icons/ci';

export default function DiscountPolicy() {
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
      <Button type='link' size='large' className='text-gray-500 flex items-center justify-between' onClick={showModal}>
        Chính sách ưu đãi cấp bậc <CiCircleQuestion className='text-xl ml-2' />
      </Button>
      <Modal
        title={<h1 className='font-bold text-center text-xl'>CHÍNH SÁCH ƯU ĐÃI CỦA VOGUARY</h1>}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[null]}
      >
        <div className='max-h-[60vh] overflow-y-auto'>
          <Divider />
          <h1 className='font-bold text-lg'>CÁC CHÍNH SÁCH ƯU ĐÃI DÀNH RIÊNG CHO KHÁCH HÀNG THÂN THIẾT:</h1>
          <h1 className='text-red-500 font-bold'>I. Hạng Bạc:</h1>
          <p>
            <span className='font-semibold'>- Điều kiện:</span> Tổng số tiền thuê đạt{' '}
            <span className='bg-yellow-200'>từ 1.000.000 đến 3.000.000</span> trong vòng 6 tháng.
          </p>
          <p>
            <span className='font-semibold'>- Ưu đãi:</span>
            <p> + Giảm giá 5% cho mỗi lần thuê tiếp theo.</p>
            <p> + Miễn phí giao hàng cho đơn hàng trên 300.000.</p>
          </p>

          <h1 className='text-red-500 font-bold mt-4'>II. Hạng Vàng:</h1>
          <p>
            <span className='font-semibold'>- Điều kiện:</span> Tổng số tiền thuê đạt{' '}
            <span className='bg-yellow-200'>từ 3.000.000 đến 5.000.000</span> trong vòng 6 tháng.
          </p>
          <p>
            <span className='font-semibold'>- Ưu đãi:</span>
            <p> + Giảm giá 10% cho mỗi lần thuê tiếp theo.</p>
            <p> + Miễn phí giao hàng cho đơn hàng trên 200.000.</p>
            <p> + Tặng voucher giảm giá 100.000 cho lần thuê kế tiếp.</p>
          </p>

          <h1 className='text-red-500 font-bold mt-4'>III. Hạng Kim cương:</h1>
          <p>
            <span className='font-semibold'>- Điều kiện:</span> Tổng số tiền thuê đạt{' '}
            <span className='bg-yellow-200'>từ 5.000.000 đến 10.000.000</span> trong vòng 6 tháng.
          </p>
          <p>
            <span className='font-semibold'>- Ưu đãi:</span>
            <p> + Giảm giá 15% cho mỗi lần thuê tiếp theo.</p>
            <p> + Miễn phí giao hàng cho đơn hàng trên 100.000.</p>
            <p> + Thuê miễn phí 1 bộ đồ có giá trị dưới 500k ( Ưu đãi có thời hạn trong vòng 1 tháng).</p>
            <p> + Tặng quà sinh nhật có giá trị.</p>
          </p>

          <h1 className='text-red-500 font-bold mt-4'>IV. Hạng Ruby:</h1>
          <p>
            <span className='font-semibold'>- Điều kiện:</span> Tổng số tiền thuê đạt{' '}
            <span className='bg-yellow-200'>từ 10.000.000 đến 20.000.000</span> trong vòng 6 tháng.
          </p>
          <p>
            <span className='font-semibold'>- Ưu đãi:</span>
            <p> + Giảm giá 20% cho mỗi lần thuê tiếp theo.</p>
            <p> + Miễn phí giao hàng và dịch vụ thu hồi sản phẩm.</p>
            <p> + Tặng voucher giảm giá 300.000 VNĐ cho lần thuê kế tiếp.</p>
            <p> + Thuê miễn phí 1 bộ đồ không giới hạn giá trị (Ưu đãi có thời hạn trong vòng 3 tháng).</p>
            <p> + Tặng quà sinh nhật có giá trị.</p>
          </p>

          <h1 className='font-bold text-lg mt-5'>CHÍNH SÁCH ƯU ĐÃI CHUNG:</h1>
          <p>
            <span className='text-red-500 font-bold'>Hệ thống tích lũy điểm: </span>Với mỗi lần thuê, khách hàng sẽ nhận
            được một số điểm nhất định để đổi quà cho lần thuê tiếp theo.
          </p>
          <p>- Bill dưới 200k - được tích 2 điểm</p>
          <p>- Bill dưới 500k - được tích 4 điểm</p>
          <p>- Bill trên 500k - được tích 6 điểm</p>

          <p className='mt-3'>
            Khách sẽ nhận được quà khi tích lũy đủ trên 10 điểm, giá trị quà sẽ tương ứng với số điểm tích lũy. Khi đủ
            điểm, khách có quyền nhận hoặc tiếp tục tích lũy để nhận quà khác.
          </p>
          <p className='bg-yellow-200 p-2 font-bold mt-2'>
            {' '}
            <span className='text-red-500'>!! LƯU Ý:</span> Sau khi quy đổi, điểm tích lũy sẽ bị trừ đi.
          </p>

          <Divider />
        </div>
      </Modal>
    </div>
  );
}
