import { Avatar, Dropdown, MenuProps } from 'antd';
import { CiUser } from 'react-icons/ci';
import { MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { logout } from 'slice/authSlice';

interface AvatarHeaderClientsProps {
  src: string;
}

export default function AvatarHeaderClients({ src }: AvatarHeaderClientsProps) {
  const id = useSelector((state: RootState) => state.auth.user?.uid);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa dữ liệu từ localStorage
    localStorage.removeItem('userLoginGoogle');

    // Đưa trạng thái user về null trong Redux
    dispatch(logout());
    navigate('/');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <CiUser style={{ fontSize: '18px' }} />,
      label: (
        <span className='text-lg'>
          <Link to={`/user/${id}`} className='hover:text-black'>
            Xem thông tin cá nhân
          </Link>
        </span>
      )
    },
    {
      key: '2',
      icon: <MdLogout className='text-red-500' style={{ fontSize: '18px' }} />,
      label: (
        <span className='text-lg text-red-500' onClick={handleLogout}>
          Đăng xuất
        </span>
      )
    }
  ];

  return (
    <Dropdown menu={{ items }} placement='bottomRight' trigger={['click']} arrow>
      <Avatar className='h-[64px] w-[64px] cursor-pointer md:h-[48px] md:w-[48px] ' size={'large'} src={src} />
    </Dropdown>
  );
}
