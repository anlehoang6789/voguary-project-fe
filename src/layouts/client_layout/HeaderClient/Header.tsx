import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import Search from 'antd/es/input/Search';
import MenuItem from 'antd/es/menu/MenuItem';

export default function Header() {
  return (
    <div className='container-fluid'>
      <div className='header'>
        <Menu mode='horizontal' className='menu flex items-center'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_white_bg.jpg?alt=media&token=d4b8a3be-870c-469c-b93f-a7c8cc6a6bbe'
            alt='Voguary'
            style={{ width: '100px', height: '100px' }}
          ></img>

          <MenuItem>Thể loại</MenuItem>

          <MenuItem>
            <Search placeholder='Tìm kiếm nội dung bất kỳ' style={{ width: 750, paddingTop: '10px' }} />
          </MenuItem>

          <MenuItem>Gói Thành Viên</MenuItem>

          <MenuItem>Túi đồ của tôi</MenuItem>

          <MenuItem>
            <ShoppingCartOutlined />
          </MenuItem>

          <MenuItem>
            <Button>Đăng nhập</Button>
          </MenuItem>

          <MenuItem>
            <Button className='bg-black text-white'>Đăng ký</Button>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
