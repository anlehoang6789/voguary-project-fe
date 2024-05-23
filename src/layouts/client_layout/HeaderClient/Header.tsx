import { Menu, Button, Badge, Popover } from 'antd';
import { useNavigate } from 'react-router-dom';
import Search from 'antd/es/input/Search';
import CustomGradientButton from 'components/CustomGradientButton';
import '../../../App.css';
import MenuItem from 'antd/es/menu/MenuItem';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import NotificationPopover from 'components/Notification/NotificationPopover';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import AvatarHeaderClients from 'components/AvatarHeaderClients';

const { SubMenu } = Menu;

export default function Header() {
  const navigate = useNavigate();

  const handleNavigateTo = (route: string) => {
    navigate(route);
  };

  //Lấy data từ redux store sau khi đăng nhập từ google thành công với firebase
  const dataLoginGoogle = useSelector((state: RootState) => state.auth.user);

  return (
    <div className='container-fluid'>
      <div className='header bg-white shadow-md'>
        <Menu mode='horizontal' className='menu flex items-center'>
          <div onClick={() => handleNavigateTo('/')}>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_white_bg.jpg?alt=media&token=d4b8a3be-870c-469c-b93f-a7c8cc6a6bbe'
              alt='Voguary'
              style={{ width: '100px', height: '100px', cursor: 'pointer' }}
            />
          </div>

          <SubMenu key='categories' title='Thể loại' className='text-xl'>
            <Menu.Item key='category1' onClick={() => handleNavigateTo('/product')}>
              Thuê quần áo
            </Menu.Item>
            <Menu.Item key='category2' onClick={() => handleNavigateTo('/product')}>
              Thuê phụ kiện
            </Menu.Item>
            <Menu.Item key='category3' onClick={() => handleNavigateTo('/product')}>
              Thuê giày, dép
            </Menu.Item>
          </SubMenu>

          <MenuItem style={{ width: dataLoginGoogle ? 'calc(78% - 330px)' : '650px' }}>
            <Search size='large' placeholder='Tìm kiếm nội dung bất kỳ' style={{ width: '100%', paddingTop: '5px' }} />
          </MenuItem>

          <MenuItem className='text-xl'>Đơn hàng</MenuItem>

          <MenuItem className='text-xl'>Túi đồ của tôi</MenuItem>

          <MenuItem onClick={() => handleNavigateTo('/cart')}>
            <BsCart3 style={{ fontSize: '20px', cursor: 'pointer' }} />
          </MenuItem>

          <MenuItem>
            <Popover content={<NotificationPopover />} trigger={'hover'} placement='bottom'>
              <Badge count={5} size='small' className='mt-5'>
                <IoIosNotificationsOutline style={{ fontSize: '25px', cursor: 'pointer' }} />
              </Badge>
            </Popover>
          </MenuItem>

          {dataLoginGoogle ? (
            <MenuItem>
              <AvatarHeaderClients src={dataLoginGoogle.avatar} />
            </MenuItem>
          ) : (
            <>
              <MenuItem onClick={() => handleNavigateTo('/register')}>
                <Button className='font-bold px-6' type='default' style={{ marginRight: '-19px' }}>
                  ĐĂNG KÝ
                </Button>
              </MenuItem>

              <MenuItem onClick={() => handleNavigateTo('/login')}>
                <CustomGradientButton>
                  <Button className='font-bold' type='primary'>
                    ĐĂNG NHẬP
                  </Button>
                </CustomGradientButton>
              </MenuItem>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}
