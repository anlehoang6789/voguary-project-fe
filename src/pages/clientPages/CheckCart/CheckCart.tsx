import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Row } from 'antd';
import { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { useGetCartByUserIdQuery } from 'services/cart.services';
import { RootState } from 'store';
import { stringToDate } from 'utils/convertTypeDayjs';
import PaymentInfo from './PaymentCart/PaymentInfo';

export default function CheckCart() {
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');
  const { data: cartData, error, isLoading, isSuccess } = useGetCartByUserIdQuery(userId);
  const [rentalStart, setRentalStart] = useState<Dayjs | null>(null);
  const [rentalEnd, setRentalEnd] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (cartData && cartData.length > 0) {
      setRentalStart(stringToDate(cartData[0].rentalStart));
      setRentalEnd(stringToDate(cartData[0].rentalEnd));
    }
  }, [cartData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading carts:', error);
    return <div>Error loading carts</div>;
  }

  if (!isSuccess || !cartData || cartData.length === 0) {
    return <div>No cart items found</div>;
  }

  const total = cartData.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);
  const totalItems = cartData.reduce((acc, item) => acc + item.quantity, 0);
  const handleRentalStartChange = (date: Dayjs | null) => {
    if (date) {
      setRentalStart(date);
    }
  };

  const handleRentalEndChange = (date: Dayjs | null) => {
    if (date) {
      setRentalEnd(date);
    }
  };
  return (
    <div className='p-12'>
      <Row gutter={16}>
        <Col span={16}>
          <Card
            title={
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Giỏ hàng của bạn
                <span className='text-gray-500 font-light ml-1' style={{ fontSize: '1rem' }}>
                  ({totalItems} sản phẩm)
                </span>
              </span>
            }
            extra={
              <Button type='text' danger>
                Xóa tất cả
              </Button>
            }
            bordered={false}
            className='rounded-3xl bg-white p-5'
            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
          >
            <div className='grid grid-cols-4 font-bold mb-4'>
              <div className='text-center'>Sản phẩm</div>
              <div className='text-center'>Số lượng</div>
              <div className='text-center'>Giá tiền</div>
              <div className='text-center'>Xóa</div>
            </div>
            {isSuccess &&
              cartData.map((item) => (
                <div
                  key={item.cartId}
                  className='grid grid-cols-4 items-center mb-4 space-x-4 border border-gray-200 rounded-2xl p-1 '
                >
                  <div className='flex items-center'>
                    <img
                      src={item.productImageUrl[0]}
                      alt={item.productTitle}
                      className='w-20 h-20 object-cover mr-4 rounded-2xl'
                    />
                    <div>
                      <span>{item.productTitle}</span>
                      <div className='text-sm text-gray-600'>
                        <DatePicker value={rentalStart} onChange={handleRentalStartChange} format='DD/MM/YYYY' />
                        <DatePicker value={rentalEnd} onChange={handleRentalEndChange} format='DD/MM/YYYY' disabled />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    <Button icon={<MinusOutlined />} />
                    <span className='mx-2'>{item.quantity}</span>
                    <Button icon={<PlusOutlined />} />
                  </div>
                  <div className='text-center'>
                    <p>{item.productPrice.toLocaleString('vi-VN')} VND</p>
                  </div>
                  <div className='text-center'>
                    <Button icon={<TiDelete style={{ color: 'red', fontSize: '30px' }} />} style={{ border: 'none' }} />
                  </div>
                </div>
              ))}
          </Card>
        </Col>
        <Col span={8}>
          <PaymentInfo total={total} totalItems={totalItems} />
        </Col>
      </Row>
    </div>
  );
}
