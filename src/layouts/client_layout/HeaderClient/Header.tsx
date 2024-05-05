import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Menu } from 'antd';
import Search from 'antd/es/input/Search';
import MenuItem from 'antd/es/menu/MenuItem';
import '../../../App.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='container-fluid'>
      <div className='header bg-white shadow-md'>
        <Menu
          mode='horizontal'
          className='menu flex items-center '
          // triggerSubMenuAction='click'
          // style={{ borderBottom: 'none', lineHeight: '0px' }}
        >
          <Link to={'/'}>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_white_bg.jpg?alt=media&token=d4b8a3be-870c-469c-b93f-a7c8cc6a6bbe'
              alt='Voguary'
              style={{ width: '100px', height: '100px' }}
            ></img>
          </Link>

          <MenuItem className='text-xl '>Thể loại</MenuItem>

          <MenuItem>
            <Search size='large' placeholder='Tìm kiếm nội dung bất kỳ' style={{ width: 660, paddingTop: '6px' }} />
          </MenuItem>

          <MenuItem className='text-xl'>Gói Thành Viên</MenuItem>

          <MenuItem className='text-xl'>Túi đồ của tôi</MenuItem>

          <MenuItem style={{ textDecoration: 'none !important' }}>
            <ShoppingCartOutlined style={{ fontSize: '20px' }} />
          </MenuItem>

          <MenuItem>
            <Link to={'/login'}>
              <Button className='font-bold'>ĐĂNG NHẬP</Button>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to={'/register'}>
              <Button className='bg-black text-white font-bold' style={{ marginLeft: '-19px' }}>
                ĐĂNG KÝ
              </Button>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
