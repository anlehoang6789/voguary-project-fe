import React from 'react';
import { Menu, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Search from 'antd/es/input/Search';
import CustomGradientButton from 'components/CustomGradientButton';
import '../../../App.css';
import MenuItem from 'antd/es/menu/MenuItem';

const { SubMenu } = Menu;

export default function Header() {
  const navigate = useNavigate();

  const handleNavigateTo = (route: any) => {
    navigate(route);
  };

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

          <MenuItem>
            <Search size='large' placeholder='Tìm kiếm nội dung bất kỳ' style={{ width: 700, paddingTop: '6px' }} />
          </MenuItem>

          <SubMenu key='blog' title='Blog' className='text-xl'>
            <Menu.Item key='blog1'>Blog 1</Menu.Item>
            <Menu.Item key='blog2'>Blog 2</Menu.Item>
            <Menu.Item key='blog3'>Blog 3</Menu.Item>
          </SubMenu>

          <SubMenu key='myItems' title='Túi đồ của tôi' className='text-xl'>
            <Menu.Item key='item1'>Item 1</Menu.Item>
            <Menu.Item key='item2'>Item 2</Menu.Item>
            <Menu.Item key='item3'>Item 3</Menu.Item>
          </SubMenu>

          <MenuItem onClick={() => handleNavigateTo('/cart')}>
            <ShoppingCartOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
          </MenuItem>

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
        </Menu>
      </div>
    </div>
  );
}
