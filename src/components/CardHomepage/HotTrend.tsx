import React from 'react';
import { Link } from 'react-router-dom';

const firebaseImageUrl =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_blue_bg.jpg?alt=media&token=40f8db55-65d2-4595-834a-3a94baf2e93a';

export default function HotTrend() {
  return (
    <div className='flex flex-col bg-gray-300 items-center'>
      <h5 className='text-3xl font-bold mb-6 mt-6'>Xu hướng thịnh hành</h5>
      <div className='flex flex-wrap justify-center gap-4'>
        <div className='relative'>
          <div className='relative rounded-2xl overflow-hidden'>
            <img className='w-full h-auto' src={firebaseImageUrl} alt='Xu hướng thịnh hành' />
            <div className='absolute inset-0 bg-black opacity-30'></div>
            <Link to={'/product'}>
              <button
                className='absolute bottom-0 right-0 m-2 font-bold py-2 px-4 rounded'
                style={{
                  background: 'linear-gradient(to right, #fdc830, #f37335 99%)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  bottom: '5%',
                  right: '5%'
                }}
              >
                Xem thêm
              </button>
            </Link>
          </div>
          <p className='absolute left-0 text-white font-bold px-4 py-2' style={{ top: '20%', left: '5%' }}>
            Bộ sưu tập Xuân-Hạ
          </p>
        </div>

        <div className='relative'>
          <div className='relative rounded-2xl overflow-hidden'>
            <img className='w-full h-auto' src={firebaseImageUrl} alt='Xu hướng thịnh hành' />
            <div className='absolute inset-0 bg-black opacity-30'></div>
            <Link to={'/product'}>
              <button
                className='absolute bottom-0 right-0 m-2 font-bold py-2 px-4 rounded'
                style={{
                  background: 'linear-gradient(to right, #fdc830, #f37335 99%)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  bottom: '5%',
                  right: '5%'
                }}
              >
                Xem thêm
              </button>
            </Link>
          </div>
          <p className='absolute left-0 text-white font-bold px-4 py-2' style={{ top: '20%', left: '5%' }}>
            Bộ sưu tập Thu-Dông
          </p>
        </div>
      </div>
    </div>
  );
}
