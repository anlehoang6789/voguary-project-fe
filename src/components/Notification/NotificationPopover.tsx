import { List, Typography } from 'antd';

export default function NotificationPopover() {
  const data = [
    {
      notificationId: 1,
      title: 'Thông báo',
      action: 'Đơn hàng SPX1234567890',
      message: ' đã thanh toán thành công',
      sendDate: '2022-10-10T10:00:00',
      isRead: false,
      modelId: 1,
      type: 'fashion'
    },
    {
      notificationId: 2,
      title: 'Thông báo',
      action: 'Đơn hàng SPX1234567890',
      message: ' đã thanh toán thành công',
      sendDate: '2022-10-10T10:00:00',
      isRead: false,
      modelId: 1,
      type: 'fashion'
    },
    {
      notificationId: 3,
      title: 'Thông báo',
      action: 'Đơn hàng SPX1234567890',
      message: ' đã thanh toán thành công',
      sendDate: '2022-10-10T10:00:00',
      isRead: false,
      modelId: 1,
      type: 'fashion'
    },
    {
      notificationId: 4,
      title: 'Thông báo',
      action: 'Đơn hàng SPX1234567890',
      message: ' đã thanh toán thành công',
      sendDate: '2022-10-10T10:00:00',
      isRead: false,
      modelId: 1,
      type: 'fashion'
    }
  ];
  return (
    <div className='w-[400px]'>
      <div className='p-[5px]'>
        <Typography.Text className='text-xl font-bold'> Thông báo </Typography.Text>
      </div>
      <div className='max-h-[300px] cursor-pointer overflow-auto rounded-lg'>
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item className={`hover:bg-[#fcffc4] ${item.isRead ? '' : 'bg-[#F9E79F]'}`} key={item.notificationId}>
              <div style={{ flex: '1' }}>
                <img
                  className='h-[40px]'
                  src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_white_bg-removebg-preview.png?alt=media&token=09ecf7ee-61fd-4adb-b930-67c29ec60b96'
                  alt=''
                />
              </div>
              <div style={{ flex: '5' }}>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: 'bold',
                    margin: 0,
                    color: '#ff8228'
                  }}
                >
                  <Typography.Text>{item.title}</Typography.Text>
                </p>
                <p style={{ fontSize: '13px', margin: 0 }}>
                  <span style={{ fontWeight: 'bold' }}>
                    <Typography.Text>{item.action}</Typography.Text>{' '}
                  </span>
                  {item.message}
                </p>
                <div
                  className='mt-1'
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '13px'
                  }}
                >
                  <span>
                    <Typography.Text>{item.sendDate}</Typography.Text>
                  </span>
                  <span>
                    <Typography.Text style={{ paddingRight: '8px' }}>
                      {item.isRead ? 'Đã đọc' : 'Chưa đọc'}
                    </Typography.Text>
                  </span>
                </div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
