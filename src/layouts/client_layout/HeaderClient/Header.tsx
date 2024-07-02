import { Menu, Button, Badge, Popover } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Search from 'antd/es/input/Search';
import CustomGradientButton from 'components/CustomGradientButton';
import '../../../App.css';
import MenuItem from 'antd/es/menu/MenuItem';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import NotificationPopover from 'components/Notification/NotificationPopover';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import AvatarHeaderClients from 'components/AvatarHeaderClients';
import Dropdown from 'components/Dropdown/Dropdown';
import MyBagComponent from 'components/MyBag/MyBagPopover';
import { useGetUserProfileQuery } from 'services/user.services';
import { useEffect, useState } from 'react';
import { setUserProfile } from 'slice/userProfileSlice';
import { useGetNotiByUserIdQuery } from 'services/notification.services';
import { useGetSuggestionsForSearchQuery } from 'services/search.services';
import { List } from 'antd';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavigateTo = (route: string) => {
    navigate(route);
  };

  //Lấy data từ redux store sau khi đăng nhập từ google thành công với firebase
  const dataLoginGoogle = useSelector((state: RootState) => state.authLoginGoogle.user);

  //Lấy data từ redux store sau khi đăng nhập từ api thành công
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');
  const { data: userProfile } = useGetUserProfileQuery(userId);
  useEffect(() => {
    if (userProfile) {
      dispatch(setUserProfile(userProfile));
    }
  }, [userProfile, dispatch]);

  const isAuthenticatedFromGoogle = useSelector((state: RootState) => state.authLoginGoogle.isAuthenticated);
  const isAuthenticatedFromApi = useSelector((state: RootState) => state.authLoginAPI.isAuthenticated);
  //Check trạng thái xem người dùng đã đăng nhập hay chưa
  const isLogin = isAuthenticatedFromGoogle || isAuthenticatedFromApi;

  const { data: notifications } = useGetNotiByUserIdQuery(userId);

  // Fetch search suggestions
  const { data: suggestions } = useGetSuggestionsForSearchQuery(searchTerm, {
    skip: !searchTerm // Skip the query if searchTerm is empty
  });

  return (
    <div className='container-fluid'>
      <div className='header bg-white shadow-md'>
        <Menu mode='horizontal' className='menu flex items-center'>
          <div onClick={() => handleNavigateTo('/')}>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Fvoguary_logo_orange.jpg?alt=media&token=82366765-ee4d-4cf0-92c4-e6d6d3fa0e89'
              alt='Voguary'
              style={{ width: '100px', height: '100px', cursor: 'pointer' }}
            />
          </div>

          <MenuItem>
            <Popover content={<Dropdown />} trigger={'hover'} placement='bottom'>
              <span className='text-xl text-black hover:text-black'>Thể loại</span>
            </Popover>
          </MenuItem>

          <MenuItem style={{ width: isLogin ? 'calc(75% - 330px)' : '650px' }}>
            <Popover
              content={
                <List
                  style={{ width: '100%', padding: '15px' }}
                  dataSource={suggestions}
                  renderItem={(item) => (
                    <List.Item key={item.productId}>
                      <List.Item.Meta
                        avatar={<img src={item.productImage} alt={item.productName} style={{ width: 50 }} />}
                        title={item.productName}
                        description={`${item.productPrice.toLocaleString('vi-VN')} VND`}
                      />
                    </List.Item>
                  )}
                />
              }
              trigger='focus'
              placement='bottom'
              overlayStyle={{ width: '80%' }}
              open={!!suggestions && suggestions.length > 0}
            >
              <Search
                size='large'
                placeholder='Tìm kiếm nội dung bất kỳ'
                style={{ width: '100%', paddingTop: '5px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Popover>
          </MenuItem>

          <MenuItem className='text-xl'>
            <Link to={'/orderTracking'}>Đơn hàng</Link>
          </MenuItem>

          <MenuItem className='text-xl'>
            <Popover content={<MyBagComponent />} trigger={'hover'} placement='bottom' className='text-xl'>
              Túi đồ của tôi
            </Popover>
          </MenuItem>

          <MenuItem onClick={() => handleNavigateTo('/cart')}>
            <BsCart3 style={{ fontSize: '20px', cursor: 'pointer' }} />
          </MenuItem>

          <MenuItem>
            <Popover content={<NotificationPopover />} trigger={'hover'} placement='bottom'>
              <Badge count={notifications?.length} size='small' className='mt-5'>
                <IoIosNotificationsOutline style={{ fontSize: '25px', cursor: 'pointer' }} />
              </Badge>
            </Popover>
          </MenuItem>

          {isLogin ? (
            <MenuItem>
              <AvatarHeaderClients
                src={
                  dataLoginGoogle?.photoURL ||
                  userProfile?.profileImage ||
                  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Avatar%2Favatar_1.jpg?alt=media&token=c9cc1417-7534-4a4b-b8ff-1e018088cea7'
                }
              />
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
