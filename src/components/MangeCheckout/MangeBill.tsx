import { Button, FloatButton, Form, Input, Tooltip } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function MangeBill() {
  return (
    //     <div className='container mx-auto'>
    //       <Link to='/'>
    //         <Button>Xác nhận đơn hàng</Button>
    //       </Link>
    //     </div>
    //   );
    // }

    <div className='w-full bg-white sm:w-[40%]  mx-auto '>
      <div className='mx-10'>
        <div className='my-6'>
          <h1 className='text-3xl text-center mt-7 pt-7 mb-7 text-оnух font-medium border-t-2'>Hóa đơn</h1>
        </div>
        <div className='bg-[#ffffff] pl-8 pr-8 pt-4 pb-8 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <div className='flex gap-5 mb-auto overflow-y-auto'>
            <div className='flex flex-col items-center flex-shrink-0'>
              {' '}
              <p className='font-semibold text-sm text-dimGray pb-2'>Áo dài Tết</p>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40'
                alt='Ao dai'
                className='product-img block rounded-md'
                width='160px'
              />
              <p className='font-thin text-sm text-dimGray pt-2'>Số lượng: 1</p>
              <p className='font-thin text-sm text-dimGray pt-2 pb-2'>21/03/2024 - 24/03/2024</p>
            </div>

            <div className='flex flex-col items-center flex-shrink-0'>
              {' '}
              <p className='font-semibold text-sm text-dimGray pb-2'>Áo dài Tết</p>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40'
                alt='Ao dai'
                className='product-img block rounded-md'
                width='160px'
              />
              <p className='font-thin text-sm text-dimGray pt-2'>Số lượng: 1</p>
              <p className='font-thin text-sm text-dimGray pt-2 pb-2'>21/03/2024 - 24/03/2024</p>
            </div>

            <div className='flex flex-col items-center flex-shrink-0'>
              {' '}
              <p className='font-semibold text-sm text-dimGray pb-2'>Đầm dạ hội</p>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C4%91%E1%BA%A7m.jpg?alt=media&token=9bb1841e-b10f-4bc5-b5c9-ec19e87121c5'
                alt='Dam'
                className='product-img block rounded-md'
                width='160px'
              />
              <p className='font-thin text-sm text-dimGray pt-2'>Số lượng: 1</p>
              <p className='font-thin text-sm text-dimGray pt-2 pb-2'>21/03/2024 - 24/03/2024</p>
            </div>
          </div>

          <div className='border-t-2 border-t-gainsboro pt-4 pl-8 pr-8 mt-7'>
            <div className='orderid flex justify-between mb-3'>
              <span className='inline-block'>Mã đơn hàng</span>
              <span className='inline-block'>
                <span className='inline-block' id='orderid'>
                  #123456789
                </span>
              </span>
            </div>

            <div className='name flex justify-between mb-3'>
              <span className='inline-block'>Tên</span>
              <span className='inline-block'>
                <span className='inline-block' id='name'>
                  Hà Gia Minh
                </span>
              </span>
            </div>

            <div className='address flex justify-between mb-3'>
              <span className='inline-block'>Địa chỉ</span>
              <span className='inline-block text-right' style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
                <span className='inline-block' id='address'>
                  12 đường số 12, phường 10, quận Tân Bình, tp. Hồ Chí Minh
                </span>
              </span>
            </div>

            <div className='phone flex justify-between mb-3'>
              <span className='inline-block'>Số điện thoại</span>
              <span className='inline-block'>
                <span className='inline-block' id='phone'>
                  0123456789
                </span>
              </span>
            </div>

            <div className='payment flex justify-between mb-3'>
              <span className='inline-block'>Hình thức thanh toán</span>
              <span className='inline-block'>
                <span className='inline-block' id='payment'>
                  COD
                </span>
              </span>
            </div>

            <div className='total flex justify-between border-t-2 pt-3 text-lg font-bold text-оnух'>
              <span className='inline-block'>Tổng cộng</span>{' '}
              <span className='inline-block'>
                <span className='inline-block' id='total'>
                  285.000
                </span>{' '}
                VND
              </span>
            </div>
            <CustomGradientButton>
              <Link to='/' className='flex justify-center pt-6'>
                <Button type='primary'>Xác nhận đơn hàng</Button>
              </Link>
            </CustomGradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}
