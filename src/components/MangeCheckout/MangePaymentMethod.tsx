import {
  CloseOutlined,
  CreditCardOutlined,
  MinusCircleOutlined,
  MinusOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  TruckOutlined
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import CustomGradientButton from 'components/CustomGradientButton';
import React, { useState } from 'react';

export default function ManagePaymentMethod({
  setCurrentStep
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [formDisabled, setFormDisabled] = useState(true);

  function handleNextStep() {
    setCurrentStep(2);
  }

  function handleMethodSelect(method: string) {
    setSelectedMethod(method);
    setFormDisabled(method !== 'bank');
  }

  return (
    <div className='container mx-auto min-h-screen flex flex-col lg:flex-col xl:flex-row'>
      <div className='item-flex flex flex-grow border-t-2 mt-7 '>
        {/* Checkout section */}
        <section className='check-out w-2/3 pt-6 pb-10 pr-14 bg-white border-r-2'>
          <h2 className='text-оnух text-2xl mb-7 font-medium'>Chi tiết thanh toán</h2>
          <div className='mb-10'>
            <div className='flex items-center gap-7 mb-10'>
              <CustomGradientButton>
                <Button
                  onClick={() => handleMethodSelect('bank')}
                  type={selectedMethod === 'bank' ? 'primary' : 'default'}
                  className=' border border-quickSilver rounded-md w-1/4 flex items-center py-7 px-5 gap-2 cursor-pointer font-medium'
                >
                  <CreditCardOutlined className='text-2xl pb-2' />
                  <span className='inline-block'>Thẻ ngân hàng</span>
                </Button>
              </CustomGradientButton>

              <button className='border border-quickSilver rounded-md w-1/4 flex items-center py-4 px-8 gap-2  cursor-not-allowed opacity-50 disabled:opacity-100 disabled:bg-gray-300 font-medium  '>
                <svg
                  className='inline-block'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    d='M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 
                  13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 
                  0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 
                  0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 
                  0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 
                  5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 
                  2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z'
                  />
                </svg>
                <span className='inline-block'>PayPal</span>
              </button>
              <CustomGradientButton>
                <Button
                  onClick={() => handleMethodSelect('momo')}
                  type={selectedMethod === 'momo' ? 'primary' : 'default'}
                  className='border border-quickSilver rounded-md w-1/4 flex items-center py-7 px-8 gap-4  cursor-pointer font-medium'
                >
                  <img
                    className='inline-block'
                    width='30px'
                    src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Momo%2FPrimary%20logo%402x.png?alt=media&token=df32290b-904a-430e-aa4d-3cf08359560b'
                  />
                  <span className='inline-block'>Momo</span>
                </Button>
              </CustomGradientButton>
              <CustomGradientButton>
                <Button
                  onClick={() => handleMethodSelect('cod')}
                  type={selectedMethod === 'cod' ? 'primary' : 'default'}
                  className='border border-quickSilver rounded-md w-1/4 flex items-center py-7 px-8 gap-2  cursor-pointer font-medium'
                >
                  <TruckOutlined className='text-2xl pb-2' />
                  <span className='inline-block'>COD</span>
                </Button>
              </CustomGradientButton>
            </div>

            <Form action='#'>
              <div className='mb-5'>
                <label htmlFor='cardholder-name' className='pl-2 mb-1 text-sm text-spanishGray block'>
                  Tên chủ thẻ
                </label>
                <FormItem
                  name='cardholder-name'
                  rules={[
                    { required: true, message: 'Vui lòng nhập tên thẻ' },
                    {
                      pattern: /^[A-Z ]{2,}$/,
                      message: 'Tên thẻ phải có trên 2 kí tự, viết hoa và không dấu'
                    }
                  ]}
                >
                  <input
                    type='text'
                    name='cardholder-name'
                    id='cardholder-name'
                    placeholder='NGUYEN VAN A'
                    className={`bg-platinum rounded-md text-davysGray py-3 px-4 text-lg font-medium  w-full focus:outline-blue-500 ${formDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={formDisabled}
                  />
                </FormItem>
              </div>

              <div className='mb-5'>
                <label htmlFor='card-number' className='pl-2 mb-1 text-sm text-spanishGray block'>
                  Số thẻ
                </label>
                <FormItem
                  name='card-number'
                  rules={[
                    { required: true, message: 'Vui lòng nhập số thẻ' },
                    {
                      pattern: /^\d{10}$/,
                      message: 'Số thẻ phải có 10 số'
                    }
                  ]}
                >
                  <input
                    type='text'
                    name='card-number'
                    id='card-number'
                    className={`bg-platinum rounded-md text-davysGray py-3 px-4 text-lg font-medium w-full tracking-widest focus:outline-blue-500 ${formDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={formDisabled}
                  />
                </FormItem>
              </div>

              <div className='flex items-center gap-7'>
                <div className='w-1/2'>
                  <label htmlFor='expire-date' className='pl-2 mb-1 text-sm text-spanishGray block'>
                    Ngày hết hạn
                  </label>

                  <div className='flex items-center gap-3 text-spanishGray'>
                    <FormItem
                      name='day'
                      rules={[
                        { required: true, message: 'Vui lòng nhập ngày hết hạn' },
                        {
                          pattern: /^([1-9]|[12][0-9]|3[01])$/,
                          message: 'Không được quá 31 ngày'
                        }
                      ]}
                    >
                      <input
                        type='text'
                        name='day'
                        id='expire-date'
                        placeholder='31'
                        min='1'
                        max='31'
                        className={`bg-platinum rounded-md text-davysGray py-3 px-4  text-lg font-medium w-full focus:outline-blue-500 text-center ${formDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={formDisabled}
                      />
                    </FormItem>
                    <div className='pb-8'>/</div>
                    <FormItem
                      name='month'
                      rules={[
                        { required: true, message: 'Vui lòng nhập tháng hết hạn' },
                        {
                          pattern: /^(0?[1-9]|1[0-2])$/,
                          message: 'Không được quá 12 tháng'
                        }
                      ]}
                    >
                      <input
                        type='text'
                        name='month'
                        id='expire-date'
                        placeholder='12'
                        min='1'
                        max='12'
                        className={`bg-platinum rounded-md text-davysGray py-3 px-4  text-lg font-medium w-full focus:outline-blue-500 text-center ${formDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={formDisabled}
                      />
                    </FormItem>
                  </div>
                </div>

                <div className='w-1/2'>
                  <label htmlFor='cvv' className='pl-2 mb-1 text-sm text-spanishGray block'>
                    CVV
                  </label>
                  <FormItem
                    name='cvv'
                    rules={[
                      { required: true, message: 'Vui lòng nhập CVV' },
                      {
                        pattern: /^\d{3}$/,
                        message: 'CVV phải có 3 số'
                      }
                    ]}
                  >
                    <input
                      type='text'
                      name='cvv'
                      id='cvv'
                      className={`bg-platinum rounded-md text-davysGray py-3 px-4 text-lg font-medium w-full tracking-widest focus:outline-blue-500 appearance-none ${formDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={formDisabled}
                    />
                  </FormItem>
                </div>
              </div>
            </Form>
          </div>
          <CustomGradientButton>
            <Button
              className='btn btn-primary cursor-pointer font-medium pb-10 pt-3 px-6 text-lg'
              type='primary'
              onClick={handleNextStep}
            >
              <b className='mr-2'>Thanh toán: </b>
              <span id='payAmount'>285.000</span>
              <span>&nbsp;VND</span>
            </Button>
          </CustomGradientButton>
        </section>

        {/* Cart section */}
        <section className='w-1/3 flex flex-col justify-end'>
          <div
            className='pt-6 pb-10 pl-10 pr-auto mb-auto overflow-y-auto      '
            style={{ maxHeight: 'calc(50vh - 20px)' }}
          >
            <h2 className='section-heading text-оnух text-2xl mb-7 font-medium'>Đơn hàng</h2>
            <div className=' mb-5 last:mb-0'>
              <div className='relative flex items-center gap-5'>
                <div className='img-box'>
                  <img
                    src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40'
                    alt='Ao dai'
                    className='product-img block rounded-md'
                    width='80px'
                  />
                </div>

                <div className='detail '>
                  <h4 className='font-semibold text-base text-dimGray mb-3'>Áo dài Tết</h4>
                  <div className='flex gap-5 pb-3'>
                    <div className='flex items-center gap-3'>
                      <button
                        id='decrement'
                        className='border-none bg-none cursor-pointer bg-platinum w-5 h-5 flex justify-center items-center active:bg-blue-300'
                      >
                        <MinusOutlined />
                      </button>

                      <span className='inline-block' id='quantity'>
                        1
                      </span>

                      <button
                        id='increment'
                        className='border-none bg-none cursor-pointer bg-platinum w-5 h-5 flex justify-center items-center active:bg-blue-300'
                      >
                        <PlusOutlined />
                      </button>
                    </div>

                    <div className='price'>
                      <span className='inline-block' id='price'>
                        125.000{' '}
                      </span>{' '}
                      VND
                    </div>
                  </div>
                  <span className='font-thin text-sm text-dimGray'>Ngày thuê: 21/03/2024 - 24/03/2024</span>
                </div>

                <button
                  id='product-close-btn'
                  className='border-none bg-none cursor-pointer active:scale-95 absolute top-0 right-3'
                >
                  <CloseOutlined className='text-quickSilver hover:text-redSalsa' />
                </button>
              </div>
            </div>

            <div className=' mb-5 last:mb-0'>
              <div className='relative flex items-center gap-5'>
                <div className='img-box'>
                  <img
                    src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40'
                    alt='Ao dai'
                    className='product-img block rounded-md'
                    width='80px'
                  />
                </div>

                <div className='detail '>
                  <h4 className='font-semibold text-base text-dimGray mb-3'>Áo dài Tết</h4>
                  <div className='flex gap-5 pb-3'>
                    <div className='flex items-center gap-3'>
                      <button
                        id='decrement'
                        className='border-none bg-none cursor-pointer bg-platinum w-5 h-5 flex justify-center items-center active:bg-blue-300'
                      >
                        <MinusOutlined />
                      </button>

                      <span className='inline-block' id='quantity'>
                        1
                      </span>

                      <button
                        id='increment'
                        className='border-none bg-none cursor-pointer bg-platinum w-5 h-5 flex justify-center items-center active:bg-blue-300'
                      >
                        <PlusOutlined />
                      </button>
                    </div>

                    <div className='price'>
                      <span className='inline-block' id='price'>
                        125.000{' '}
                      </span>{' '}
                      VND
                    </div>
                  </div>
                  <span className='font-thin text-sm text-dimGray'>Ngày thuê: 21/03/2024 - 24/03/2024</span>
                </div>

                <button
                  id='product-close-btn'
                  className='border-none bg-none cursor-pointer active:scale-95 absolute top-0 right-3'
                >
                  <CloseOutlined className='text-quickSilver hover:text-redSalsa' />
                </button>
              </div>
            </div>

            <div className='mb-5 last:mb-0'>
              <div className='relative flex items-center gap-5'>
                <div className='img-box'>
                  <img
                    src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C4%91%E1%BA%A7m.jpg?alt=media&token=9bb1841e-b10f-4bc5-b5c9-ec19e87121c5'
                    alt='Dam'
                    className='product-img block rounded-md'
                    width='80px'
                  />
                </div>

                <div className='detail'>
                  <h4 className='font-semibold text-base text-dimGray mb-3'>Đầm dạ hội</h4>
                  <div className='flex gap-5 pb-3'>
                    <div className='flex items-center gap-3'>
                      <button
                        id='decrement'
                        className='border-none bg-none cursor-pointer bg-platinum w-5 h-5 flex justify-center items-center active:bg-blue-300 '
                      >
                        <MinusOutlined />
                      </button>

                      <span className='inline-block' id='quantity'>
                        1
                      </span>

                      <button
                        id='increment'
                        className='border-none bg-none cursor-pointer bg-platinum w-5 h-5 flex justify-center items-center active:bg-blue-300'
                      >
                        <PlusOutlined />
                      </button>
                    </div>

                    <div className='price'>
                      <span className='inline-block' id='price'>
                        160.000{' '}
                      </span>{' '}
                      VND
                    </div>
                  </div>
                  <span className='font-thin text-sm text-dimGray'>Ngày thuê: 21/03/2024 - 24/03/2024</span>
                </div>

                <button
                  id='product-close-btn'
                  className='border-none bg-none cursor-pointer active:scale-95 absolute top-0 right-3'
                >
                  <CloseOutlined className='text-quickSilver hover:text-redSalsa' />
                </button>
              </div>
            </div>
          </div>

          <div className='wrapper'>
            <div className='border-t-2 border-t-gainsboro pb-44 pt-10 pl-14 pr-8'>
              <div className='subtotal flex justify-between mb-3'>
                <span className='inline-block'>Tổng</span>{' '}
                <span className='inline-block'>
                  <span className='inline-block' id='subtotal'>
                    285.000
                  </span>{' '}
                  VND
                </span>
              </div>

              <div className='discount flex justify-between mb-3'>
                <span className='inline-block'>Ưu đãi tài khoản</span>{' '}
                <span className='inline-block'>
                  <span className='inline-block' id='discount'>
                    0
                  </span>{' '}
                  VND
                </span>
              </div>

              <div className='shipping flex justify-between mb-3'>
                <span className='inline-block'>Phí vận chuyển</span>{' '}
                <span className='inline-block'>
                  <span className='inline-block' id='shipping'>
                    0
                  </span>{' '}
                  VND
                </span>
              </div>

              <div className='total flex justify-between text-lg font-bold text-оnух'>
                <span className='inline-block'>Tổng cộng</span>{' '}
                <span className='inline-block'>
                  <span className='inline-block' id='total'>
                    285.000
                  </span>{' '}
                  VND
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
