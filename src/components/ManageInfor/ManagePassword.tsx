import { Button, Divider, Form, Input, Typography } from 'antd';

export default function ManagePassword() {
  return (
    <div>
      <Typography.Title level={3} className='text-center mt-4'>
        Đổi mật khẩu
      </Typography.Title>
      <Divider />
      <div className='m-auto flex max-w-[500px] flex-col gap-8'>
        <div className='mt-4'>
          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
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
                    if (!value || getFieldValue('accountPassword') === value) {
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
              <Button
                type='primary'
                htmlType='submit'
                size='large'
                className='!w-full sm:!w-[30%] sm:!mr-11 !mb-2 !rounded-lg'
              >
                Lưu
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
