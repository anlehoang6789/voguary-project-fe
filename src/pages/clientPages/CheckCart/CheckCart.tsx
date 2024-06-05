import { useState } from 'react';
import { Row, Col, Card, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { TiDelete } from 'react-icons/ti';
import CustomGradientButton from 'components/CustomGradientButton';
import { Link } from 'react-router-dom';

export default function CheckCart() {
  // Dữ liệu giả
  const initialCartItems = [
    {
      name: 'Item 1',
      quantity: 2,
      price: 500000,
      image:
        'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F150.png?alt=media&token=fbacaf49-1665-44af-95f2-74be4fb9f2e2'
    },
    {
      name: 'Item 2',
      quantity: 1,
      price: 300000,
      image:
        'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F150.png?alt=media&token=fbacaf49-1665-44af-95f2-74be4fb9f2e2'
    },
    {
      name: 'Item 3',
      quantity: 3,
      price: 200000,
      image:
        'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F150.png?alt=media&token=fbacaf49-1665-44af-95f2-74be4fb9f2e2'
    },
    {
      name: 'Item 4',
      quantity: 1,
      price: 100000,
      image:
        'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F150.png?alt=media&token=fbacaf49-1665-44af-95f2-74be4fb9f2e2'
    }
  ];

  // Sử dụng state để quản lý giỏ hàng
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Hàm để tăng số lượng
  const increaseQuantity = (index: any) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  // Hàm để giảm số lượng
  const decreaseQuantity = (index: any) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  // Hàm để xóa sản phẩm
  const removeItem = (index: any) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };
  // Hàm để xóa tất cả sản phẩm
  const removeAllItems = () => {
    setCartItems([]);
  };
  // Tính tổng cộng
  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  // Tính tổng số lượng sản phẩm
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
              <Button onClick={removeAllItems} type='text' danger>
                Xóa tất cả
              </Button>
            }
            bordered={false}
            className='rounded-3xl bg-white p-5'
            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
          >
            {/* Header của bảng */}
            <div className='grid grid-cols-4 font-bold mb-4'>
              <div className='text-center'>Sản phẩm</div>
              <div className='text-center'>Số lượng</div>
              <div className='text-center'>Giá tiền</div>
              <div className='text-center'>Xóa</div>
            </div>
            {/* Nội dung của giỏ hàng */}
            {cartItems.map((item, index) => (
              <div
                key={index}
                className='grid grid-cols-4 items-center mb-4 space-x-4 border border-gray-200 rounded-2xl p-1 '
              >
                <div className='flex items-center'>
                  <img src={item.image} alt={item.name} className='w-20 h-20 object-cover mr-4 rounded-2xl' />
                  <span>{item.name}</span>
                </div>
                <div className='flex items-center justify-center'>
                  <Button icon={<MinusOutlined />} onClick={() => decreaseQuantity(index)} />
                  <span className='mx-2'>{item.quantity}</span>
                  <Button icon={<PlusOutlined />} onClick={() => increaseQuantity(index)} />
                </div>
                <div className='text-center'>
                  <p>{item.price.toLocaleString('vi-VN')}VND</p>
                </div>
                <div className='text-center'>
                  <Button
                    icon={<TiDelete style={{ color: 'red', fontSize: '30px' }} />}
                    onClick={() => removeItem(index)}
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            ))}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title={<span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Thông tin thanh toán</span>}
            bordered={false}
            className='rounded-3xl bg-gray-200 p-5'
            style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
          >
            {/* <Space.Compact className='w-full h-12'>
              <Input variant='filled' defaultValue='Nhập mã giảm giá' />
              <Button type='primary' className='bg-black h-12'>
                Áp dụng
              </Button>
            </Space.Compact> */}
            <div className='flex justify-between mt-3'>
              <div>
                <p className='text-gray-600 font-bold mb-2'>Tạm tính: </p>
                <p className='text-gray-600 font-bold mb-2'>Giảm giá:</p>
                <p className='text-gray-600 font-bold mb-2'>Tổng cộng: </p>
              </div>
              <div>
                <p className='text-gray-600 mb-2 justify-end'> {total}VND </p>
                <p className='text-gray-600 mb-2 justify-end'>{total}VND</p>
                <p className='text-gray-600 mb-2 justify-end'>{total.toLocaleString('vi-VN')}VND </p>
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
        </Col>
      </Row>
    </div>
  );
}
