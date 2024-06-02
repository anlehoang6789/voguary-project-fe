import { Button, FloatButton, Form, Input, notification, Tooltip } from 'antd';
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import CustomGradientButton from 'components/CustomGradientButton';
import LoginGoogle from 'components/LoginGoogle';
import { useUserRegisterMutation } from 'services/auth.services';
import { UserRegister } from 'types/Account.type';
import { useEffect } from 'react';
import { ErrorRegisterResponse } from 'types/ErrorResponse.type';

export default function RegisterPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [userRegister, { isLoading, isSuccess, isError, error }] = useUserRegisterMutation();

  // Nếu đăng kí thành công
  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: 'Đăng ký thành công',
        description: 'Bạn đã đăng ký thành công. Vui lòng kiểm tra email để xác nhận tài khoản.'
      });
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Điều hướng sau 2 giây
    }

    // Nếu đăng kí thất bại
    if (isError && error) {
      const err = error as ErrorRegisterResponse;
      const errorMessage = err.message ? err.message : 'Email hoặc tên tài khoản đã tồn tại';
      notification.error({
        message: 'Đăng ký thất bại',
        description: errorMessage
      });
    }
  }, [isSuccess, navigate, isError, error]);

  const handleSubmit = async (values: UserRegister) => {
    // await userRegister(values);
    try {
      await userRegister(values);
    } catch (error) {
      const err = error as ErrorRegisterResponse;
      const errorMessage = err.message ? err.message : 'Email hoặc tên tài khoản đã tồn tại';
      notification.error({
        message: 'Đăng ký thất bại',
        description: errorMessage
      });
    }
  };

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
            <Form autoComplete='off' layout='vertical' form={form} onFinish={handleSubmit}>
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
                label='Email'
                name='email'
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
                name='fullname'
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
                name='password'
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
                name='confirmPassword'
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Xác nhận mật khẩu không được bỏ trống' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                    }
                  })
                ]}
              >
                <Input.Password placeholder='Mk@1234' size='large' />
              </Form.Item>
              <Form.Item>
                <CustomGradientButton>
                  <Button
                    type='primary'
                    htmlType='submit'
                    size='large'
                    loading={isLoading}
                    className='rounded-xl w-full mt-4 text-xl font-[Roboto] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                  >
                    Đăng ký
                  </Button>
                </CustomGradientButton>
              </Form.Item>
              <div className='text-center font-semibold text-xl mt-1'>Hay</div>
              <Form.Item>
                <LoginGoogle />
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
          src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Banner%2Fbanner_4.jpg?alt=media&token=1a819809-aec3-4b5e-bff6-2cd302f58b75'
          alt='banner_register'
          className='absolute h-[100%] w-[60%] top-0 bottom-0'
        />
        <Link to={'/'}>
          <Tooltip title='Về trang chủ'>
            <FloatButton icon={<FaHome />} type='primary' style={{ right: 24 }} />
          </Tooltip>
        </Link>
      </div>
    </div>
  );
}
