import { Button, Form, Input } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className='flex bg-[#eee] min-h-screen'>
      <div className='w-full bg-white sm:w-[40%]  md:h-screen sm:h-full relative'>
        <div className='mx-10'>
          <div className='my-6'>
            <h1 className='text-3xl text-center font-[Roboto]'>ĐĂNG NHẬP</h1>
            <p className='text-md  text-center pt-2'>
              Mừng trở lại với hệ thống! Vui lòng điền thông tin bên dưới để tiếp tục
            </p>
          </div>
          <div className='bg-[#D2DAE2] p-8 pb-16 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <Form autoComplete='off' layout='vertical'>
              <Form.Item
                label='Tên tài khoản'
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Tên hiển thị không được bỏ trống'
                  },
                  {
                    pattern: /^.{5,}$/,
                    message: 'Tên tài khoản phải từ 5 kí tự trở lên'
                  }
                ]}
                className='font-roboto'
              >
                <Input placeholder='abcde' size='large' />
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
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  size='large'
                  className='rounded-xl w-full mt-4 text-xl font-[Roboto] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                >
                  Đăng nhập
                </Button>
              </Form.Item>
              <div className=' text-base text-center'>
                <Link to={'#'} className='text-blue-500 font-semibold'>
                  Quên mật khẩu?
                </Link>
              </div>
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
                Bạn chưa có tài khoản?{' '}
                <Link to={'/register'} className='text-red-500'>
                  Đăng ký ngay
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className='hidden justify-end sm:block sm:w-[60%] sm:h-full'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Banner%2FBanner_Login.png?alt=media&token=a5c24325-3768-4c73-bee5-15eb427ff385'
          alt='banner_login'
          className='absolute object-cover w-[60%] h-full'
        />
      </div>
    </div>
  );
}
