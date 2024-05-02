import { Button, Form, Input } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className='flex bg-[#eee] min-h-screen'>
      <div className='w-full bg-white sm:w-[40%]  md:h-screen sm:h-full relative overflow-y-auto'>
        <div className='mx-10'>
          <div className='my-6'>
            <h1 className='text-3xl text-center font-[Roboto]'>ĐĂNG KÝ</h1>
            <p className='text-md  text-center pt-2'>
              Mừng lần đầu đến với hệ thống! Vui lòng điền thông tin bên dưới để tiếp tục
            </p>
          </div>
          <div className='bg-[#D2DAE2] p-8 pb-14 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <Form autoComplete='off' layout='vertical'>
              <Form.Item
                label='Email'
                name='accountEmail'
                rules={[
                  {
                    required: true,
                    message: 'Email không được bỏ trống'
                  },
                  {
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Email phải có định dạng user@example.com'
                  }
                ]}
                className='font-roboto'
              >
                <Input placeholder='abc@example.com' size='large' />
              </Form.Item>
              <Form.Item
                label='Tên hiển thị'
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Tên hiển thị không được bỏ trống'
                  },
                  {
                    pattern: /^.{3,}$/,
                    message: 'Tên hiển thị phải từ 3 kí tự trở lên'
                  }
                ]}
                className='font-roboto'
              >
                <Input placeholder='abc' size='large' />
              </Form.Item>
              <Form.Item
                label='Mật khẩu'
                name='accountPassword'
                rules={[
                  { required: true, message: 'Mật khẩu không được bỏ trống' },
                  {
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{7,}$/,
                    message:
                      'Mật khẩu phải chứa ít nhất 1 chữ thường, 1 chữ hoa, 1 số, 1 kí tự đặc biệt và có độ dài ít nhất 7 kí tự'
                  }
                ]}
              >
                <Input.Password placeholder='Mk@1234' size='large' />
              </Form.Item>
              <Form.Item
                label='Xác nhận mật khẩu'
                name='confirmAccountPassword'
                rules={[{ required: true, message: 'Xác nhận mật khẩu không được bỏ trống' }]}
              >
                <Input.Password placeholder='Mk@1234' size='large' />
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  size='large'
                  className='rounded-xl w-full mt-4 text-xl font-[Roboto] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                >
                  Đăng ký
                </Button>
              </Form.Item>
              <div className='text-center font-semibold text-xl mt-1'>Hay</div>
              <Form.Item>
                <Button
                  icon={<FcGoogle style={{ fontSize: '32px' }} />}
                  size='large'
                  className='rounded-xl w-full mt-4 text-xl flex items-center justify-center font-[Roboto] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                >
                  Google
                </Button>
              </Form.Item>
              <div className='text-center text-base  font-semibold'>
                Bạn đã có tài khoản?{' '}
                <Link to={'/login'} className='text-red-500'>
                  Đăng nhập ngay
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className='hidden justify-end sm:block sm:w-[60%] sm:h-screen'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Banner%2FBanner_Register.png?alt=media&token=1da3fd84-a065-4c62-b5e0-028cd9f136eb'
          alt='banner_register'
          className='absolute h-[100%] w-[60%] top-0 bottom-0'
        />
      </div>
    </div>
  );
}
