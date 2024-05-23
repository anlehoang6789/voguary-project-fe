import { Avatar, Button, Divider, Menu } from 'antd';
import { CiUser } from 'react-icons/ci';
import { MdOutlineAccountBox, MdOutlineSecurity, MdOutlineHistory, MdLogout } from 'react-icons/md';
import { AiOutlinePicture, AiOutlineShoppingCart } from 'react-icons/ai';
import { TbMedal2 } from 'react-icons/tb';
import { ManageInforMenu } from './ManageInfor.enum';
import ManageProfile from 'components/ManageInfor/ManageProfile';
import ManageAvatar from 'components/ManageInfor/ManageAvatar';
import ManagePassword from 'components/ManageInfor/ManagePassword';
import ManageCart from 'components/ManageInfor/ManageCart';
import ManagePaymentHistory from 'components/ManageInfor/ManagePaymentHistory';
import { useState } from 'react';
import ManageAccountLevel from 'components/ManageInfor/ManageAccountLevel';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { logout } from 'slice/authSlice';
import { useNavigate } from 'react-router-dom';

interface ManageInforProps {
  type: ManageInforMenu;
  MenuIcons: React.ReactNode;
  MenuTitle: string;
  component: JSX.Element;
}

export default function ManageInfor() {
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element | null>(<ManageProfile />);
  const [defaultSelectedKey, setDefaultSelectedKey] = useState<string>('0');
  const menuList: ManageInforProps[] = [
    {
      type: ManageInforMenu.PROFILE,
      MenuIcons: <MdOutlineAccountBox className='mr-4' style={{ fontSize: '24px' }} />,
      MenuTitle: 'Hồ sơ',
      component: <ManageProfile />
    },
    {
      type: ManageInforMenu.AVATAR,
      MenuIcons: <AiOutlinePicture className='mr-4' style={{ fontSize: '24px' }} />,
      MenuTitle: 'Ảnh đại diện',
      component: <ManageAvatar />
    },
    {
      type: ManageInforMenu.SECURITY,
      MenuIcons: <MdOutlineSecurity className='mr-4' style={{ fontSize: '24px' }} />,
      MenuTitle: 'Đổi mật khẩu',
      component: <ManagePassword />
    },
    {
      type: ManageInforMenu.MY_CART,
      MenuIcons: <AiOutlineShoppingCart className='mr-4' style={{ fontSize: '24px' }} />,
      MenuTitle: 'Giỏ hàng của tôi',
      component: <ManageCart />
    },
    {
      type: ManageInforMenu.PAYMENT_HISTORY,
      MenuIcons: <MdOutlineHistory className='mr-4' style={{ fontSize: '24px' }} />,
      MenuTitle: 'Lịch sử thanh toán',
      component: <ManagePaymentHistory />
    },
    {
      type: ManageInforMenu.ACCOUNT_LEVEL,
      MenuIcons: <TbMedal2 className='mr-4' style={{ fontSize: '24px' }} />,
      MenuTitle: 'Cấp bậc tài khoản',
      component: <ManageAccountLevel />
    }
  ];

  const handleClickMenu = (component: JSX.Element, key: string) => {
    setSelectedComponent(component);
    setDefaultSelectedKey(key);
  };

  const userDataWithLoginGoogle = useSelector((state: RootState) => state.auth.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa dữ liệu từ localStorage
    localStorage.removeItem('userLoginGoogle');

    // Đưa trạng thái user về null trong Redux
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className='container flex min-h-[80vh] max-w-[1000px] mx-auto flex-col md:flex-row shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl'>
      <div className='py-4 w-full sm:w-[30%] border-r-[1px] border-r-[#d1d7dc] '>
        <div className='mb-4 flex flex-col items-center'>
          <Avatar
            size={64}
            icon={<CiUser />}
            src={
              userDataWithLoginGoogle?.avatar ||
              'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Avatar%2Favatar_1.jpg?alt=media&token=c9cc1417-7534-4a4b-b8ff-1e018088cea7'
            }
          />
          <h1 className='mt-2 text-center font-bold capitalize'>
            {userDataWithLoginGoogle?.name || 'Cristiano Ronaldo'}
          </h1>
          <Menu
            className='!w-[80%] !border-none !text-sm  !text-[#2d2f31] !mt-3'
            defaultSelectedKeys={[defaultSelectedKey]}
          >
            {menuList.map((menuItem, index) => (
              <Menu.Item
                key={index}
                icon={menuItem.MenuIcons}
                onClick={() => handleClickMenu(menuItem.component, `${index}`)}
                className='!flex !items-center'
              >
                {menuItem.MenuTitle}
              </Menu.Item>
            ))}
          </Menu>
          <Divider />
          <Button
            className='!w-[80%] !border-[#2d2f31] !text-sm !font-bold !text-[#2d2f31] hover:!border-[#ef4444] hover:!bg-[#ff5d5d0a] hover:!text-red-500 flex justify-center items-center'
            onClick={handleLogout}
          >
            Đăng xuất <MdLogout className='ml-3 !text-lg' />
          </Button>
        </div>
      </div>
      <div className='w-full sm:w-[70%]'>{selectedComponent}</div>
    </div>
  );
}
