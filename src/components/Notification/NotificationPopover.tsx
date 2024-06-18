import { List, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { useGetNotiByUserIdQuery } from 'services/notification.services';
import { RootState } from 'store';

export default function NotificationPopover() {
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');
  const { data: notifications, error, isLoading } = useGetNotiByUserIdQuery(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  if (!notifications) {
    return <div>Không có thông báo nào</div>;
  }

  return (
    <div className='w-[400px]'>
      <div className='p-[5px]'>
        <Typography.Text className='text-xl font-bold'> Thông báo </Typography.Text>
      </div>
      <div className='max-h-[300px] cursor-pointer overflow-auto rounded-lg'>
        <List
          dataSource={notifications}
          renderItem={(item) => (
            <List.Item className={`hover:bg-[#fcffc4] ${item.seen ? '' : 'bg-[#F9E79F]'}`} key={item.notificationId}>
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
                  <Typography.Text>Thông báo</Typography.Text>
                </p>
                <p style={{ fontSize: '13px', margin: 0 }}>{item.notificationMessage}</p>
                <div
                  className='mt-1'
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '13px'
                  }}
                >
                  <span>
                    <Typography.Text>{item.dateSent}</Typography.Text>
                  </span>
                  <span>
                    <Typography.Text style={{ paddingRight: '8px' }}>
                      {item.seen ? 'Đã đọc' : 'Chưa đọc'}
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
