import { Button, Col, DatePicker, Form, Input, Row, Select, notification } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import CustomGradientButton from 'components/CustomGradientButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateProfileMutation } from 'services/user.services';
import { setUserProfile } from 'slice/userProfileSlice';
import { RootState } from 'store';
import { dateToString, stringToDate } from 'utils/convertTypeDayjs';

export default function ManageProfile() {
  const userDataWithLoginGoogle = useSelector((state: RootState) => state.authLoginGoogle.user);
  const userProfile = useSelector((state: RootState) => state.userProfile.userProfile);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  //Lấy data từ redux store sau khi đăng nhập từ api thành công
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');

  const [updateProfile] = useUpdateProfileMutation(); // Use hook to call API

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

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      const updateProfileRequest = {
        userId,
        email: values.email,
        fullName: `${values.lastname} ${values.name}`,
        gender: values.gender === 'Nữ' ? 0 : values.gender === 'Nam' ? 1 : 2,
        dateOfBirth: dateToString(values.dateOfBirth),
        phone: values.phone,
        address: values.address
      };

      await updateProfile(updateProfileRequest).unwrap();
      notification.success({ message: 'Cập nhật thông tin thành công' });
    } catch (error) {
      notification.error({ message: 'Cập nhật thông tin thất bại' });
    }
  };

  return (
    <div className='flex-grow'>
      <h1 className='text-3xl text-center mt-5 border-b-2 pb-5'>Thông tin cơ bản</h1>

      <Form form={form} onFinish={handleSave}>
        <Row>
          <Col span={12}>
            <FormItem className='pl-10 pt-10 ' label='Họ ' name='lastname'>
              <Input placeholder='Hà' className='w-full max-w-[300px]' />
            </FormItem>
          </Col>

          <Col span={12}>
            <Form.Item className='pl-5 pt-10' label='Tên ' name='name'>
              <Input placeholder='Minh' className='w-[83%]' />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item className='pl-10 pt-10' label='Giới tính ' name='gender'>
              <Select placeholder='Nam' className='w-full max-w-[300px]'>
                <Select.Option value='male'>Nam</Select.Option>
                <Select.Option value='female'>Nữ</Select.Option>
                <Select.Option value='other'>Giới tính khác</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item className='pl-5 pt-10' label='Ngày sinh ' name='dateOfBirth'>
              <DatePicker placeholder='Ngày sinh' style={{ width: '80%' }} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item className='pl-10 pt-10' label='Email ' name='email'>
              <Input placeholder='abc@example.com' className='w-full max-w-[300px]' />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item className='pl-5 pt-10' label='Số điện thoại ' name='phone'>
              <Input placeholder='0123456789' style={{ width: '78%' }} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item className='pl-10 pt-10' label='Địa chỉ' name='address'>
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
