import React from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import CustomGradientButton from 'components/CustomGradientButton';

interface PaymentInfoProps {
  total: number;
  totalItems: number;
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({ total, totalItems }) => {
  return (
    <Card
      title={<span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Thông tin thanh toán</span>}
      bordered={false}
      className='rounded-3xl bg-gray-200 p-5'
      style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
    >
      <div className='flex justify-between mt-3'>
        <div>
          <p className='text-gray-600 font-bold mb-2'>Tạm tính: </p>
          <p className='text-gray-600 font-bold mb-2'>Giảm giá:</p>
          <p className='text-gray-600 font-bold mb-2'>Tổng cộng: </p>
        </div>
        <div>
          <p className='text-gray-600 mb-2 justify-end'> {total} VND </p>
          <p className='text-gray-600 mb-2 justify-end'>{total} VND</p>
          <p className='text-gray-600 mb-2 justify-end'>{total.toLocaleString('vi-VN')} VND </p>
        </div>
      </div>
      <Link to={'/checkout'}>
        <CustomGradientButton>
          <Button type='primary' className='mt-4 h-10 rounded-3xl w-full'>
            Thanh toán
          </Button>
        </CustomGradientButton>
      </Link>
    </Card>
  );
};

export default PaymentInfo;
