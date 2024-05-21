import { Button, Form, Input, Select, Typography } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';

export default function CreateAccountForStaff() {
  const { Title } = Typography;
  const { Option } = Select;
  const formItemLayout = {
    labelCol: { span: 8 }, // Kích thước của cột label
    wrapperCol: { span: 16 } // Kích thước của cột input
  };

  return (
    <div className='mx-auto flex max-w-[80%] flex-col items-center justify-center rounded-xl bg-gradient-to-bl from-gray-100 via-white to-transparent p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
      <Title level={4}>Tạo tài khoản cho ADMIN và STAFF</Title>
      <div className='mt-4 w-full max-w-md'>
        <Form autoComplete='off'>
          <Form.Item
            {...formItemLayout}
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
          >
            <Input />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
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
            <Input.Password />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label='Xác nhận mật khẩu'
            name='confirmAccountPassword'
            rules={[{ required: true, message: 'Xác nhận mật khẩu không được bỏ trống' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label='Vai trò'
            name='role'
            rules={[{ required: true, message: 'Vui lòng chọn role' }]}
          >
            <Select>
              <Option value={0}>Admin</Option>
              <Option value={1}>Staff</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16, offset: 15 }}>
            <CustomGradientButton>
              <Button type='primary' htmlType='submit' className='w-[168px] rounded-md'>
                Tạo tài khoản
              </Button>
            </CustomGradientButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
