import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { Option } from 'antd/es/mentions';
import CustomGradientButton from 'components/CustomGradientButton';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export default function ManageProfile() {
  const userDataWithLoginGoogle = useSelector((state: RootState) => state.auth.user);

  // Hàm phân tách tên thành họ và tên
  const splitName = (fullName: string) => {
    const names = fullName.split(' ');
    const lastName = names.slice(0, -1).join(' '); // Lấy phần họ
    const firstName = names.slice(-1).join(' '); // Lấy phần tên
    return { lastName, firstName };
  };

  // Destructure dữ liệu thành họ và tên
  const { lastName = '', firstName = '' } = userDataWithLoginGoogle ? splitName(userDataWithLoginGoogle.name) : {};
  return (
    <div className='flex-grow'>
      <h1 className='text-3xl text-center mt-5 border-b-2 pb-5'>Thông tin cơ bản</h1>

      <Form>
        <Row>
          <Col span={12}>
            <FormItem
              className='pl-10 pt-10 '
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
              <Input placeholder='Hà' className='w-full max-w-[300px]' defaultValue={lastName} />
            </FormItem>
          </Col>

          <Col span={12}>
            <Form.Item
              className='pl-5 pt-10'
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
              <Input placeholder='Minh' className='w-[83%]' defaultValue={firstName} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              className='pl-10 pt-10'
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
              <Select placeholder='Nam' className='w-full max-w-[300px]'>
                <Option value='male'>Nam</Option>
                <Option value='female'>Nữ</Option>
                <Option value='other'>Giới tính khác</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              className='pl-5 pt-10'
              label='Ngày sinh '
              name='dateofbirth'
              rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
            >
              <DatePicker placeholder='Ngày sinh' style={{ width: '80%' }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              className='pl-10 pt-10'
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
              <Input
                placeholder='abc@example.com'
                className='w-full max-w-[300px]'
                defaultValue={userDataWithLoginGoogle?.email}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              className='pl-5 pt-10'
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
              <Input placeholder='0123456789' style={{ width: '78%' }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              className='pl-10 pt-10'
              label='Địa chỉ'
              name='address'
              rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
            >
              <TextArea
                placeholder='123, Đường ABC, Phường DEF, Quận GHI'
                autoSize={{ minRows: 3, maxRows: 5 }}
                style={{ width: '92%' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className='flex justify-end items-end'>
          <CustomGradientButton>
            <Button type='primary' htmlType='submit' size='large' className='!w-[20%] !mr-12'>
              Lưu
            </Button>
          </CustomGradientButton>
        </div>
      </Form>
    </div>
  );
}
