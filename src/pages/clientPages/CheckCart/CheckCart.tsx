import { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { TiDelete } from 'react-icons/ti';
import CustomGradientButton from 'components/CustomGradientButton';
import { Link } from 'react-router-dom';
import { useGetCartByUserIdQuery } from 'services/cart.services';
import { RootState } from 'store';
import { useSelector } from 'react-redux';

interface CartItem {
  productName: string;
  quantity: number;
  productPrice: number;
  productImage: string;
}

export default function CheckCart() {
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');
  const { data: cartData, error, isLoading } = useGetCartByUserIdQuery(userId);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (cartData && cartData.carts) {
      setCartItems(
        cartData.carts.map((item) => ({
          productName: item.productName,
          quantity: item.quantity,
          productPrice: item.productPrice,
          productImage: item.productImage
        }))
      );
    }
  }, [cartData]);

  const increaseQuantity = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decreaseQuantity = (index: number) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const removeItem = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const removeAllItems = () => {
    setCartItems([]);
  };

  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (isLoading) {
    console.log('Loading orders...');
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Error loading carts:', error);
    return <div>Error loading carts</div>;
  }

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
            <div className='grid grid-cols-4 font-bold mb-4'>
              <div className='text-center'>Sản phẩm</div>
              <div className='text-center'>Số lượng</div>
              <div className='text-center'>Giá tiền</div>
              <div className='text-center'>Xóa</div>
            </div>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className='grid grid-cols-4 items-center mb-4 space-x-4 border border-gray-200 rounded-2xl p-1 '
              >
                <div className='flex items-center'>
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className='w-20 h-20 object-cover mr-4 rounded-2xl'
                  />
                  <span>{item.productName}</span>
                </div>
                <div className='flex items-center justify-center'>
                  <Button icon={<MinusOutlined />} onClick={() => decreaseQuantity(index)} />
                  <span className='mx-2'>{item.quantity}</span>
                  <Button icon={<PlusOutlined />} onClick={() => increaseQuantity(index)} />
                </div>
                <div className='text-center'>
                  <p>{item.productPrice.toLocaleString('vi-VN')}VND</p>
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
