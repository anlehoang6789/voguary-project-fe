import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, MenuProps, Modal, Spin } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from 'slice/authLoginAPISlice';
import { logout } from 'slice/authLoginGoogleSlice';
import { resetUserProfile } from 'slice/userProfileSlice';
// import { RootState } from 'store';

export default function HeaderStaff() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    // Xóa dữ liệu từ localStorage
    localStorage.removeItem('userLoginGoogle');
    localStorage.removeItem('userLogin');

    // Đưa trạng thái user về null trong Redux
    dispatch(logout());
    dispatch(logoutUser());
    dispatch(resetUserProfile());
    navigate('/');
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <LogoutOutlined></LogoutOutlined>,
      label: <span onClick={handleLogout}>Đăng xuất</span>
    }
  ];

  // const userName = useSelector((state: RootState) => state.userProfile.userProfile?.fullName);

  return (
    <Header className='fixed z-50 flex w-full justify-between border-b border-gray-200 bg-white px-5'>
      <h1 className='text-lg font-semibold flex items-center'>Chào mừng nhân viên Ronaldo </h1>
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
