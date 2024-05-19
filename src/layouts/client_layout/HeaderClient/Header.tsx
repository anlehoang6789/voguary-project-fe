import { ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import Search from 'antd/es/input/Search';
import MenuItem from 'antd/es/menu/MenuItem';
import '../../../App.css';
import { Link } from 'react-router-dom';
import CustomGradientButton from 'components/CustomGradientButton';

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
            <Link to={'/register'}>
              <Button className='font-bold px-6 ' type='default' style={{ marginRight: '-19px' }}>
                ĐĂNG KÝ
              </Button>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to={'/login'}>
              <CustomGradientButton>
                <Button className='font-bold' type='primary'>
                  ĐĂNG NHẬP
                </Button>
              </CustomGradientButton>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
