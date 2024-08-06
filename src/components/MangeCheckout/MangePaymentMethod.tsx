import { CloseOutlined, CreditCardOutlined, MinusOutlined, PlusOutlined, TruckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetCartByUserIdQuery } from 'services/cart.services';
import { useAddPaymentMethodMutation } from 'services/payment.services';
import { RootState } from 'store';

export default function ManagePaymentMethod({
  setCurrentStep
}: {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [formDisabled, setFormDisabled] = useState(true);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const [addPaymentMethod, { data, error, isLoading }] = useAddPaymentMethodMutation();
  const { data: cartData, isSuccess } = useGetCartByUserIdQuery(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading carts:', error);
    return <div>Error loading carts</div>;
  }

  if (!isSuccess || !cartData || cartData.length === 0) {
    return <div>No cart items found</div>;
  }

  const total = cartData.reduce((acc, item) => acc + item.quantity * item.productPrice, 0);

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    setFormDisabled(method !== 'bank');
  };

  const handleNextStep = async () => {
    if (selectedMethod === 'bank') {
      try {
        const response = await addPaymentMethod({
          userId,
          fullName,
          phone,
          address,
          paymentMethodId: 1,
          returnUrl: 'https://voguary.id.vn'
        }).unwrap();

        if (response.dataObject.paymentLink) {
          window.location.href = response.dataObject.paymentLink;
        }
      } catch (err) {
        console.error('Failed to add payment method:', err);
      }
    } else if (selectedMethod === 'cod') {
      try {
        await addPaymentMethod({
          userId,
          fullName,
          phone,
          address,
          paymentMethodId: 2,
          returnUrl: 'https://voguary.id.vn'
        }).unwrap();

        navigate('/orderTracking');
      } catch (err) {
        console.error('Failed to add payment method:', err);
      }
    }
  };

  return (
    <div className='container mx-auto min-h-screen flex flex-col lg:flex-col xl:flex-row'>
      <div className='item-flex flex flex-grow border-t-2 mt-7 '>
        {/* Checkout section */}
        <section className='check-out w-2/3 pt-6 pb-10 pr-12 bg-white border-r-2 ml-4'>
          <h2 className='text-оnух text-2xl mb-7 font-medium'>Chi tiết thanh toán</h2>
          <div className=''>
            <div className='flex items-center gap-7 mb-6'>
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
                <img
                  className='inline-block'
                  width='28px'
                  src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Momo%2Fkisspng-paypal-logo-e-commerce-payment-system-paypal-5ad78137f1e9c2.9153968515240727599909.jpg?alt=media&token=6d96d5eb-0b34-471d-afed-05e4ccb72301'
                  alt='Paypal'
                />
                <span className='inline-block'>PayPal</span>
              </button>

              <button className='border border-quickSilver rounded-md w-1/4 flex items-center py-4 px-8 gap-2  cursor-not-allowed opacity-50 disabled:opacity-100 disabled:bg-gray-300 font-medium  '>
                <img
                  className='inline-block'
                  width='30px'
                  src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Momo%2FPrimary%20logo%402x.png?alt=media&token=df32290b-904a-430e-aa4d-3cf08359560b'
                  alt='Momo'
                />
                <span className='inline-block'>Momo</span>
              </button>

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
          </div>
          <CustomGradientButton>
            <Button
              className='btn btn-primary cursor-pointer font-medium pb-10 pt-3 px-6 text-lg'
              type='primary'
              onClick={handleNextStep}
              disabled={isLoading}
            >
              <b className='mr-2'>Thanh toán: </b>
              <span id='payAmount'>{total.toLocaleString()}</span>
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
            {cartData.map((item) => (
              <div key={item.cartId} className=' mb-5 last:mb-0'>
                <div className='relative flex items-center gap-5'>
                  <div className='img-box'>
                    <img
                      src={item.productImageUrl[0]}
                      alt={item.productTitle}
                      className='product-img block rounded-md'
                      width='80px'
                    />
                  </div>

                  <div className='detail '>
                    <h4 className='font-semibold text-base text-dimGray mb-3'>{item.productTitle}</h4>
                    <div className='flex gap-5 pb-3'>
                      <div className='flex items-center gap-3'>
                        <button
                          id='decrement'
                          className='border-none bg-none cursor-pointer bg-platinum w-5 h-5 flex justify-center items-center active:bg-blue-300'
                        >
                          <MinusOutlined />
                        </button>

                        <span className='inline-block' id='quantity'>
                          {item.quantity}
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
                          {item.productPrice.toLocaleString()}
                        </span>{' '}
                        VND
                      </div>
                    </div>
                    <span className='font-thin text-sm text-dimGray'>
                      {item.rentalStart} - {item.rentalEnd}
                    </span>
                  </div>

                  <button
                    id='product-close-btn'
                    className='border-none bg-none cursor-pointer active:scale-95 absolute top-0 right-3'
                  >
                    <CloseOutlined className='text-quickSilver hover:text-redSalsa' />
                  </button>
                </div>
              </div>
            ))}

            {/* <div className=' mb-5 last:mb-0'>
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
            </div> */}
          </div>

          <div className='wrapper'>
            <div className='border-t-2 border-t-gainsboro pb-44 pt-10 pl-14 pr-8'>
              <div className='subtotal flex justify-between mb-3'>
                <span className='inline-block'>Tổng</span>{' '}
                <span className='inline-block'>
                  <span className='inline-block' id='subtotal'>
                    {total.toLocaleString()}
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
                    {total.toLocaleString()}
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
