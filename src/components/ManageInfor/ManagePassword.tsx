import { Button, Divider, Form, Input, Typography, notification } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useChangePasswordMutation } from 'services/user.services';
import { RootState } from 'store';

export default function ManagePassword() {
  //Lấy data từ redux store sau khi đăng nhập từ api thành công
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');
  const [form] = Form.useForm();

  const [changePassword, { isLoading, isSuccess, isError, error, data }] = useChangePasswordMutation();
  useEffect(() => {
    if (isSuccess && data) {
      notification.success({
        message: 'Đổi mật khẩu thành công',
        description: 'Hãy sử dụng mặt khẩu mới vào lần đăng nhập sau'
      });
    }

    // Nếu đăng nhập thất bại
    if (isError && error) {
      notification.error({
        message: 'Thay đổi mật khẩu thất bại'
      });
    }
  }, [isSuccess, isError, error, data]);

  const handleSubmit = async (values: any) => {
    const { currentPassword, newPassword } = values;
    try {
      // Gọi mutation và truyền userId từ Redux Store vào
      await changePassword({ userId, currentPassword, newPassword });

      // Xử lý sau khi thay đổi mật khẩu thành công
    } catch (error) {
      console.error('Change password failed:', error);
      // Xử lý khi thay đổi mật khẩu thất bại
    }
  };

  return (
    <div>
      <Typography.Title level={3} className='text-center mt-4'>
        Đổi mật khẩu
      </Typography.Title>
      <Divider />
      <div className='m-auto flex max-w-[500px] flex-col gap-8'>
        <div className='mt-4'>
          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 14 }} form={form} onFinish={handleSubmit}>
            <Form.Item
              label='Mật khẩu hiện tại'
              name='currentPassword'
              rules={[{ required: true, message: 'Mật khẩu không được bỏ trống' }]}
            >
              <Input.Password placeholder='Mk1234@' />
            </Form.Item>
            <Form.Item
              label='Mật khẩu mới'
              name='newPassword'
              rules={[
                { required: true, message: 'Mật khẩu mới không được bỏ trống' },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{7,}$/,
                  message:
                    'Mật khẩu phải chứa ít nhất 1 chữ thường, 1 chữ hoa, 1 số, 1 kí tự đặc biệt và có độ dài ít nhất 7 kí tự'
                }
              ]}
            >
              <Input.Password placeholder='Mk@1234' />
            </Form.Item>
            <Form.Item
              label='Xác nhận mật khẩu mới'
              name='confirmNewPassword'
              dependencies={['newPassword']}
              rules={[
                { required: true, message: 'Xác nhận mật khẩu mới không được bỏ trống' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                  }
                })
              ]}
            >
              <Input.Password placeholder='Mk@1234' />
            </Form.Item>
            <div className='flex justify-end items-end'>
              <CustomGradientButton>
                <Button
                  type='primary'
                  size='large'
                  className='!w-full sm:!w-[30%] sm:!mr-11 !mb-2 !rounded-lg'
                  loading={isLoading}
                  htmlType='submit'
                >
                  Lưu thay đổi
                </Button>
              </CustomGradientButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
