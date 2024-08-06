import { Link } from 'react-router-dom';

export default function PaymentCanceled() {
  return (
    <div className='m-auto grid max-w-[400px] p-6 sm:max-w-[1200px] sm:grid-cols-2 sm:gap-6 lg:gap-x-20'>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Error_Page%2F16.jpg?alt=media&token=60997eb2-3381-49ee-9ce9-29ab11e9bc1e'
        alt='Canceled'
        className='m-auto w-full max-w-[300px] object-cover sm:col-span-1 sm:row-span-2 sm:max-w-[500px]'
      />

      <div className='flex flex-col justify-end'>
        <h1 className='text-6xl font-black lg:text-8xl'>Thanh toán</h1>
        <h1 className='text-6xl text-center font-black lg:text-8xl text-red-600'>thất bại</h1>
        <p className='text-2xl mt-10'>Đơn hàng của bạn đã thanh toán thất bại, vui lòng thử lại</p>
      </div>

      <div className='grid place-content-baseline gap-6 sm:max-w-[300px] '>
        <button className='rounded-[5px] border-none bg-blue-500 p-4 text-base font-semibold text-[#fff] outline-none hover:bg-blue-400'>
          <Link to={'/'}>VỀ TRANG CHỦ</Link>
        </button>
      </div>
    </div>
  );
}