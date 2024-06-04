import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps, Modal, Spin } from 'antd';
import { Header } from 'antd/es/layout/layout';

export default function HeaderAdmin() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <LogoutOutlined></LogoutOutlined>,
      label: 'Logout'
    }
  ];

  return (
    <Header className='fixed z-50 flex w-full justify-between border-b border-gray-200 bg-white px-5'>
      <Dropdown menu={{ items }} placement='bottomRight' trigger={['click']} arrow>
        <Avatar
          className='fixed right-4 top-3 cursor-pointer'
          size={'large'}
          icon={<UserOutlined />}
          src={
            'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Avatar%2Favatar_1.jpg?alt=media&token=c9cc1417-7534-4a4b-b8ff-1e018088cea7'
          }
        />
      </Dropdown>
      <Modal footer={null} closable={false}>
        <div className='flex flex-col items-center justify-center'>
          <Spin size='large'></Spin>
          <span>Đang đăng xuất...</span>
        </div>
      </Modal>
    </Header>
  );
}
