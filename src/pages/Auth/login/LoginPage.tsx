import { Button, FloatButton, Form, Input, notification, Tooltip } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import CustomGradientButton from 'components/CustomGradientButton';
import LoginGoogle from 'components/LoginGoogle';
import { useUserLoginMutation } from 'services/auth.services';
import { useEffect } from 'react';
import { UserLoginRequest } from 'types/Account.type';
import { ErrorRegisterResponse } from 'types/ErrorResponse.type';
import { useDispatch } from 'react-redux';
import { setUser } from 'slice/authLoginAPISlice';

export default function LoginPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, { isLoading, isSuccess, isError, error, data }] = useUserLoginMutation();

  // Nếu đăng nhập thành công
  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setUser(data));
      console.log('data', data);
      localStorage.setItem('userLogin', JSON.stringify(data));
      notification.success({
        message: 'Đăng nhập thành công',
        description: 'Chào mừng bạn trở lại hệ thống'
      });
      setTimeout(() => {
        navigate('/');
      }, 2000); // Điều hướng sau 2 giây
    }

    // Nếu đăng nhập thất bại
    if (isError && error) {
      const err = error as ErrorRegisterResponse;
      const errorMessage = err.message ? err.message : 'Tên tài khoản hoặc mật khẩu không đúng';
      notification.error({
        message: 'Đăng nhập thất bại',
        description: errorMessage
      });
    }
  }, [isSuccess, navigate, isError, error, data, dispatch]);

  const handleSubmit = async (values: UserLoginRequest) => {
    try {
      await userLogin(values);
    } catch (error) {
      const err = error as ErrorRegisterResponse;
      const errorMessage = err.message ? err.message : 'Tên tài khoản hoặc mật khẩu không đúng';
      notification.error({
        message: 'Đăng nhập thất bại',
        description: errorMessage
      });
    }
  };

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
            <Form autoComplete='off' layout='vertical' form={form} onFinish={handleSubmit}>
              <Form.Item
                label='Tên tài khoản'
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Tên hiển thị không được bỏ trống'
                  }
                ]}
                className='font-roboto'
              >
                <Input placeholder='abcde' size='large' />
              </Form.Item>
              <Form.Item
                label='Mật khẩu'
                name='password'
                rules={[{ required: true, message: 'Mật khẩu không được bỏ trống' }]}
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
                    Đăng nhập
                  </Button>
                </CustomGradientButton>
              </Form.Item>
              <div className=' text-base text-center'>
                <Link to={'#'} className='text-blue-500 font-semibold'>
                  Quên mật khẩu?
                </Link>
              </div>
              <div className='text-center font-semibold text-xl mt-1'>Hay</div>
              <Form.Item>
                <LoginGoogle />
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
        <Link to={'/'}>
          <Tooltip title='Về trang chủ'>
            <FloatButton icon={<FaHome />} type='primary' style={{ right: 24 }} />
          </Tooltip>
        </Link>
      </div>
    </div>
  );
}
