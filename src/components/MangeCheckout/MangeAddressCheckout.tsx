import { Button, Form } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import CustomGradientButton from 'components/CustomGradientButton';
import React from 'react';

export default function MangeAddressCheckout({
  setCurrentStep
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [form] = Form.useForm();

  const handleNextStep = () => {
    form
      .validateFields()
      .then(() => {
        setCurrentStep(1);
      })
      .catch((errorInfo) => {});
  };
  const isFormInvalid = !form.isFieldsTouched(true) || form.getFieldsError().some(({ errors }) => errors.length > 0);

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl text-center mt-7 pt-7 mb-7 text-оnух font-medium border-t-2'>Thông tin giao hàng</h1>
      <div className='flex items-center justify-center'>
        <Form form={form} action='#' className='w-1/2'>
          <div className='mb-5'>
            <label htmlFor='name' className='pl-2 mb-1 text-sm text-spanishGray block'>
              Họ và tên
            </label>
            <FormItem
              name='name'
              rules={[
                { required: true, message: 'Vui lòng nhập họ và tên' },
                {
                  pattern: /^.{2,}$/,
                  message: 'Họ và tên phải có trên 2 kí tự'
                }
              ]}
            >
              <input
                type='text'
                name='name'
                id='name'
                className='bg-platinum rounded-md text-davysGray py-3 px-4 text-lg font-medium  w-full focus:outline-blue-500'
              />
            </FormItem>
          </div>

          <div className='mb-5'>
            <label htmlFor='phone' className='pl-2 mb-1 text-sm text-spanishGray block'>
              Số điện thoại
            </label>
            <FormItem
              name='phone'
              rules={[
                { required: true, message: 'Vui lòng nhập số điện thoại' },
                {
                  pattern: /^\d{10}$/,
                  message: 'Số điện thoại phải có 10 số'
                }
              ]}
            >
              <input
                type='text'
                name='phone'
                id='phone'
                className='bg-platinum rounded-md text-davysGray py-3 px-4 text-lg font-medium w-full tracking-widest focus:outline-blue-500'
              />
            </FormItem>
          </div>

          <label htmlFor='Address' className='pl-2 mb-1 text-sm text-spanishGray block'>
            Địa chỉ giao hàng
          </label>
          <FormItem
            name='Address'
            rules={[
              { required: true, message: 'Vui lòng nhập địa chỉ giao hàng' },
              {
                pattern: /^.{10,}$/,
                message: 'Địa chỉ giao hàng phải có ít nhất 10 chữ số'
              }
            ]}
          >
            <input
              type='text'
              name='Address'
              id='Address'
              className='bg-platinum rounded-md text-davysGray py-3 px-4 text-lg font-medium w-full tracking-widest focus:outline-blue-500 appearance-none '
            />
          </FormItem>
          <div className='flex justify-end'>
            <CustomGradientButton>
              <Button
                onClick={handleNextStep}
                type='primary'
                htmlType='submit'
                className='btn btn-primary cursor-pointer font-medium pb-5 pt-1 px-6 text-base mt-3 mb-3'
                disabled={isFormInvalid}
              >
                Phương thức thanh toán
              </Button>
            </CustomGradientButton>
          </div>
        </Form>
      </div>
    </div>
  );
}
