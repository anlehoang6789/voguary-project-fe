import { Avatar, Button, Col, DatePicker, Form, Input, Menu, Row, Select } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import { Link } from 'react-router-dom';

import { LogoutOutlined, PictureOutlined, ShoppingCartOutlined, UnlockOutlined, UserOutlined } from '@ant-design/icons';
import { Option } from 'antd/es/mentions';
import moment from 'moment';
import TextArea from 'antd/es/input/TextArea';

export default function ProfileClient() {
  const disabledDate = (current: any) => {
    return current && current > moment().endOf('day');
  };
  return (
    <div>
      <div className='flex'>
        <Menu
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
            key='/information'
            className='text-2xl'
            icon={<UserOutlined className='mr-4' style={{ fontSize: '24px' }} />}
          >
            Hồ sơ
          </MenuItem>

          <MenuItem
            key='/avatar'
            className='text-2xl'
            icon={<PictureOutlined className='mr-4' style={{ fontSize: '24px' }} />}
          >
            Ảnh đại diện
          </MenuItem>

          <MenuItem
            key='/password'
            className='text-2xl'
            icon={<UnlockOutlined className='mr-4' style={{ fontSize: '24px' }} />}
          >
            Mật khẩu tài khoản
          </MenuItem>

          <MenuItem
            key='/order'
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

        <div className='flex-grow'>
          <h1 className='text-4xl text-center mt-10 border-b-2 pb-10'>Thông tin cơ bản</h1>

          <Form>
            <Row>
              <Col span={12}>
                <Form.Item
                  className='pl-20 pt-10'
                  label='Họ '
                  name='lastname'
                  rules={[
                    { required: true, message: 'Vui lòng nhập họ' },
                    {
                      pattern: /^[a-zA-Z ]{2,10}$/,
                      message: 'Họ phải có từ 2 đến 10 ký tự'
                    }
                  ]}
                >
                  <Input placeholder='Vui lòng nhập họ' className='w-96' />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  className='pl-20 pt-10'
                  label='Tên '
                  name='name'
                  rules={[
                    { required: true, message: 'Vui lòng nhập tên' },
                    {
                      pattern: /^[a-zA-Z ]{2,10}$/,
                      message: 'Tên phải có từ 2 đến 10 ký tự'
                    }
                  ]}
                >
                  <Input placeholder='Vui lòng nhập tên' className='w-96' />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  className='pl-20 pt-10'
                  label='Giới tính '
                  name='gender'
                  rules={[
                    { required: true, message: 'Vui lòng nhập giới tính' },
                    {
                      pattern: /^[a-zA-Z ]{2,10}$/,
                      message: 'Tên phải có từ 2 đến 10 ký tự'
                    }
                  ]}
                >
                  <Select placeholder='Vui lòng chọn giới tính' style={{ width: '80%' }}>
                    <Option value='male'>Nam</Option>
                    <Option value='female'>Nữ</Option>
                    <Option value='other'>Giới tính khác</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  className='pl-20 pt-10'
                  label='Ngày sinh '
                  name='dateofbirth'
                  rules={[
                    { required: true, message: 'Vui lòng chọn ngày sinh' }
                    // {
                    //   validator: (_, value) => {
                    //     if (value && value[0] > new Date()) {
                    //       return Promise.reject('Ngày sinh không được quá ngày hiện tại');
                    //     }
                    //     return Promise.resolve();
                    //   }
                    // }
                  ]}
                >
                  <DatePicker
                    placeholder='Vui lòng chọn ngày sinh'
                    style={{ width: '80%' }}
                    disabledDate={disabledDate}
                  />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  className='pl-20 pt-10'
                  label='Email '
                  name='email'
                  rules={[
                    { required: true, message: 'Vui lòng nhập email' },
                    {
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Email phải có định dạng user@example.com'
                    }
                  ]}
                >
                  <Input placeholder='Vui lòng nhập email' style={{ width: '80%' }} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  className='pl-20 pt-10'
                  label='Số điện thoại '
                  name='phone'
                  rules={[
                    { required: true, message: 'Vui lòng nhập số điện thoại' },
                    {
                      pattern: /^\d{10}$/,
                      message: 'Số điện thoại phải định dạng 10 số'
                    }
                  ]}
                >
                  <Input placeholder='Vui lòng nhập số điện thoại' style={{ width: '80%' }} />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  className='pl-20 pt-10'
                  label='Tiểu sử'
                  rules={[
                    { message: 'Tiểu sử' }
                    // {
                    //   pattern: /^\d{10}$/,
                    //   message: 'Số điện thoại phải định dạng 10 số'
                    // }
                  ]}
                >
                  <TextArea
                    placeholder='Tiểu sử        '
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    style={{ width: '92%' }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Button
              type='primary'
              htmlType='submit'
              size='large'
              className='rounded-xl w-60 mt-10 ml-20 text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
            >
              Lưu
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
