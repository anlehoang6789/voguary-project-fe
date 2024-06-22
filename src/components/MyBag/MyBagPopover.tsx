import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, List, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetOrdersByUserIdQuery } from 'services/order.services';
import { RootState } from 'store';

export default function MyBagPopover() {
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0', 10);

  const { data: orders, isLoading, error } = useGetOrdersByUserIdQuery(userId);

  if (isLoading) {
    console.log('Loading orders...');
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Error loading orders:', error);
    return <div>Error loading orders</div>;
  }

  console.log('Orders data:', orders);

  return (
    <div className='w-[400px]'>
      <div className='max-h-[300px] cursor-pointer overflow-auto rounded-lg'>
        <List
          dataSource={orders}
          renderItem={(item) => (
            <List.Item>
              <div style={{ flex: '5' }}>
                <p style={{ fontSize: '13px', marginLeft: '12px' }}>
                  <span style={{ fontWeight: 'bold' }}>
                    <Typography.Text>Áo dài</Typography.Text>{' '}
                  </span>
                </p>
                <div className='ml-3'>
                  <span>Ngày bắt đầu: {item.datePlaced}</span>
                </div>
                <div className='ml-3'>
                  <span>Ngày kết thúc: {item.dueDate}</span>
                </div>
                <div
                  className='mt-1'
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    fontSize: '13px'
                  }}
                >
                  <span>
                    <Link to={'/user/:id'}>
                      <Typography.Text className='hover:text-blue-500' style={{ paddingRight: '8px' }}>
                        Gia hạn
                      </Typography.Text>
                    </Link>
                  </span>
                </div>
              </div>
            </List.Item>
          )}
        />
        <div className='flex justify-end'>
          <Link to={'/user/:id'}>
            <Button type='link' size='large' className='text-gray-500 flex items-center justify-between !border-none'>
              Xem tất cả <ArrowRightOutlined className='text-lg ml-2 mb-1' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
