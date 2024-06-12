import { Avatar, Col, List, Progress, Row } from 'antd';
import { CiUser } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { GoDotFill } from 'react-icons/go';
import DiscountPolicy from './DiscountPolicy';

export default function ManageAccountLevel() {
  const userDataWithLoginGoogle = useSelector((state: RootState) => state.authLoginGoogle.user);

  const data = [
    'Giảm giá 10% cho mỗi lần thuê tiếp theo.',
    'Miễn phí giao hàng cho đơn hàng trên 200.000.',
    'Tặng voucher giảm giá 100.000 cho lần thuê kế tiếp.'
  ];

  return (
    <>
      <Row>
        <Col span={24} className='flex py-5 justify-center'>
          <Avatar
            className='border-4 border-gold'
            size={64}
            icon={<CiUser />}
            src={
              userDataWithLoginGoogle?.photoURL ||
              'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Avatar%2Favatar_1.jpg?alt=media&token=c9cc1417-7534-4a4b-b8ff-1e018088cea7'
            }
          />
          <h1 className='flex flex-col justify-center pl-6 text-lg font-semibold'>Tài khoản hạng Vàng</h1>
        </Col>
        <Col span={24} className='flex justify-center'>
          <Progress
            className='w-1/2 '
            percent={50}
            strokeWidth={20}
            status='active'
            strokeColor={{ from: '#108ee9', to: '#87d068' }}
            showInfo={false}
          />
        </Col>

        <Col span={24} className='flex justify-center'>
          <div className='flex justify-center pt-5'>
            <div>
              <span className='font-semibold'>Số tiền để lên hạng tiếp theo: </span>1.500.000 / 3.000.000{' '}
            </div>
          </div>
        </Col>

        <Col span={24} className='border-t-2 mt-5'>
          <div className='flex justify-center'>
            <div className='w-1/2 p-4'>
              <List
                size='large'
                bordered={false}
                dataSource={data.slice(0, 2)}
                renderItem={(item) => (
                  <List.Item className='!border-none text-base'>
                    <GoDotFill className='mr-2 text-black inline-block' />
                    {item}
                  </List.Item>
                )}
              />
            </div>

            <div className='w-1/2 p-4'>
              <List
                size='large'
                bordered={false}
                dataSource={data.slice(2)}
                renderItem={(item) => (
                  <List.Item className='!border-none text-base'>
                    <GoDotFill className='mr-2 text-black inline-block' />
                    {item}
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Col>
        <Col span={24} className='flex justify-end'>
          <DiscountPolicy />
        </Col>
      </Row>
    </>
  );
}
