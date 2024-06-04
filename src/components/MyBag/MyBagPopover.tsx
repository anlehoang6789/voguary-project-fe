import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, List, Typography } from 'antd';
import { Link } from 'react-router-dom';

export default function MyBagPopover() {
  const aodai =
    'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40';
  const dam =
    'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C4%91%E1%BA%A7m.jpg?alt=media&token=9bb1841e-b10f-4bc5-b5c9-ec19e87121c5';
  const data = [
    {
      notificationId: 1,
      img: aodai,
      name: 'Áo dài Tết',
      startDate: ' 02-06-2024',
      endDate: '04-06-2024',
      isRead: true,
      modelId: 1,
      type: 'fashion'
    },
    {
      notificationId: 2,
      img: dam,
      name: 'Đầm dạ hội',
      startDate: ' 02-06-2024',
      endDate: '04-06-2024',

      modelId: 1,
      type: 'fashion'
    },
    {
      notificationId: 3,
      img: aodai,
      name: 'Áo dài Tết',
      startDate: ' 02-06-2024',
      endDate: '04-06-2024',

      modelId: 1,
      type: 'fashion'
    },
    {
      notificationId: 4,
      img: dam,
      name: 'Đầm dạ hội',
      startDate: ' 02-06-2024',
      endDate: '04-06-2024',

      modelId: 1,
      type: 'fashion'
    },
    {
      notificationId: 5,
      img: aodai,
      name: 'Áo dài Tết',
      startDate: ' 02-06-2024',
      endDate: '04-06-2024',

      modelId: 1,
      type: 'fashion'
    }
  ];

  return (
    <div className='w-[400px]'>
      <div className='max-h-[300px] cursor-pointer overflow-auto rounded-lg'>
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <div style={{ flex: '1' }}>
                <img className='w-20 ' src={item.img} alt={`${item.name} image`} />
              </div>
              <div style={{ flex: '5' }}>
                <p style={{ fontSize: '13px', marginLeft: '12px' }}>
                  <span style={{ fontWeight: 'bold' }}>
                    <Typography.Text>{item.name}</Typography.Text>{' '}
                  </span>
                </p>
                <div className='ml-3'>
                  <span>Ngày bắt đầu: {item.startDate}</span>
                </div>
                <div className='ml-3'>
                  <span>Ngày kết thúc: {item.endDate}</span>
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
            <Button type='link' size='large' className='text-gray-500 flex items-center justify-between'>
              Xem tất cả <ArrowRightOutlined className='text-lg ml-2 mb-1' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
