import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import CustomGradientButton from 'components/CustomGradientButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from 'slice/userProfileSlice';
import { RootState } from 'store';
import { stringToDate } from 'utils/convertTypeDayjs';

export default function ManageProfile() {
  const userDataWithLoginGoogle = useSelector((state: RootState) => state.authLoginGoogle.user);
  const userProfile = useSelector((state: RootState) => state.userProfile.userProfile);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userProfile) {
      const { lastName, firstName } = splitName(userProfile.fullName);
      form.setFieldsValue({
        lastname: lastName,
        name: firstName,
        gender: userProfile.gender === 0 ? 'Nữ' : userProfile.gender === 1 ? 'Nam' : 'Giới tính khác',
        dateOfBirth: stringToDate(userProfile.dateOfBirth),
        email: userProfile.email,
        phone: userProfile.phone,
        address: userProfile.address
      });
      dispatch(setUserProfile(userProfile));
    } else if (userDataWithLoginGoogle) {
      const { lastName, firstName } = splitName(userDataWithLoginGoogle.name);
      form.setFieldsValue({
        lastname: lastName,
        name: firstName,
        email: userDataWithLoginGoogle.email
      });
    }
  }, [userProfile, form, userDataWithLoginGoogle, dispatch]);
  const splitName = (fullName: string | null | undefined) => {
    if (!fullName) {
      return { lastName: '', firstName: '' }; // or handle the case where fullName is empty
    }

    const names = fullName.split(' ');
    const lastName = names.slice(0, -1).join(' '); // Get the last name part
    const firstName = names.slice(-1).join(' '); // Get the first name part
    return { lastName, firstName };
  };

  return (
    <div className='flex-grow'>
      <h1 className='text-3xl text-center mt-5 border-b-2 pb-5'>Thông tin cơ bản</h1>

      <Form form={form}>
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
              <Input placeholder='Hà' className='w-full max-w-[300px]' />
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
              <Input placeholder='Minh' className='w-[83%]' />
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
                <Select.Option value='male'>Nam</Select.Option>
                <Select.Option value='female'>Nữ</Select.Option>
                <Select.Option value='other'>Giới tính khác</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              className='pl-5 pt-10'
              label='Ngày sinh '
              name='dateOfBirth'
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
              <Input placeholder='abc@example.com' className='w-full max-w-[300px]' />
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
