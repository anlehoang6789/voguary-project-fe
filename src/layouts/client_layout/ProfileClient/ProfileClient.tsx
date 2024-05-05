import { Avatar, Button, Col, DatePicker, Form, Input, Menu, Row, Select } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import { LogoutOutlined, PictureOutlined, ShoppingCartOutlined, UnlockOutlined, UserOutlined } from '@ant-design/icons';
import { Option } from 'antd/es/mentions';
import moment from 'moment';
import TextArea from 'antd/es/input/TextArea';
import InformationClient from './InformationClient';

export default function ProfileClient() {
  const disabledDate = (current: any) => {
    return current && current > moment().endOf('day');
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className='flex'>
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          style={{
            borderRadius: '0',
            padding: '20px',
            height: '740px',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #ccc',
            borderTop: 'none',
            borderBottom: 'none'
          }}
        >
          <Avatar
            size={100}
            icon={<UserOutlined />}
            className='text-xl flex items-center justify-center
            mb-6 ml-20 mt-8'
          />
          <h1 className='mb-20 ml-20 text-xl '>User Name</h1>
          <MenuItem
            key='/user/infor'
            className='text-2xl'
            icon={<UserOutlined className='mr-4' style={{ fontSize: '24px' }} />}
          >
            Hồ sơ
          </MenuItem>

          <MenuItem
            key='/user/avatar'
            className='text-2xl'
            icon={<PictureOutlined className='mr-4' style={{ fontSize: '24px' }} />}
          >
            Ảnh đại diện
          </MenuItem>

          <MenuItem
            key='/user/password'
            className='text-2xl'
            icon={<UnlockOutlined className='mr-4' style={{ fontSize: '24px' }} />}
          >
            Mật khẩu tài khoản
          </MenuItem>

          <MenuItem
            key='/user/order'
            className='text-2xl'
            icon={<ShoppingCartOutlined className='mr-4' style={{ fontSize: '24px' }} />}
          >
            Đơn hàng của tôi
          </MenuItem>

          <Link to={'/'} className='w-20 pl-5 mt-20'>
            <Button
              size='large'
              className='text-xl flex items-center 
        ml-10'
              danger
            >
              ĐĂNG XUẤT <LogoutOutlined className='ml-2' />
            </Button>
          </Link>
        </Menu>
        <Content />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path='/user/infor' element={<InformationClient />} />
        <Route path='/user/avatar' element={<div>Avatar</div>} />
        <Route path='/user/password' element={<div>Password</div>} />
        <Route path='/user/order' element={<div>Order</div>} />
      </Routes>
    </div>
  );
}
