import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { Option } from 'antd/es/mentions';
import moment from 'moment';
export default function ManageProfile() {
  const disabledDate = (current: any) => {
    return current && current > moment().endOf('day');
  };
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
              <Input placeholder='Vui lòng nhập họ' className='w-auto' />
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
              <Input placeholder='Vui lòng nhập tên' className='w-auto' />
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
              <Select placeholder='Vui lòng chọn giới tính' style={{ width: '65%' }}>
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
              <DatePicker placeholder='Vui lòng chọn ngày sinh' style={{ width: '60%' }} disabledDate={disabledDate} />
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
              <Input placeholder='Vui lòng nhập email' style={{ width: '70%' }} />
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
              <Input
                placeholder='Vui lòng nhập số điện thoại                                '
                style={{ width: '80%' }}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              className='pl-10 pt-10'
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
                placeholder='Tiểu sử             '
                autoSize={{ minRows: 3, maxRows: 5 }}
                style={{ width: '92%' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className='flex justify-center'>
          <Button
            type='primary'
            htmlType='submit'
            size='large'
            className='!w-[20%] mt-5                                  '
          >
            Lưu
          </Button>
        </div>
      </Form>
    </div>
  );
}
