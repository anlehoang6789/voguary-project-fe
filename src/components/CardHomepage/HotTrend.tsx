import React from 'react';
import { Link } from 'react-router-dom';

export default function HotTrend() {
  return (
    <div className='flex flex-col bg-gray-300 items-center'>
      <h5 className='text-3xl font-bold mb-6 mt-6'>Xu hướng thịnh hành</h5>
      <div className='flex flex-wrap justify-center gap-4'>
        <div className='relative'>
          <div className='relative rounded-2xl overflow-hidden'>
            <img
              className='max-w-2xl'
              src='https://laodongthudo.vn/stores/news_dataimages/quocdai/092018/12/11/bo-suu-tap-xuan-he-2019-danh-cho-nhung-co-nang-yeu-dieu-thuc-nu-53-.9368.jpg'
              alt='Xu hướng thịnh hành'
            />
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
          <p
            className='absolute left-0 text-white font-bold px-4 py-2 text-3xl bg-opacity-50 rounded-md shadow-lg'
            style={{ top: '20%', left: '5%', fontFamily: 'monospace' }}
          >
            Bộ sưu tập Xuân-Hạ
          </p>
        </div>

        <div className='relative'>
          <div className='relative rounded-2xl overflow-hidden'>
            <img
              className='max-w-2xl max-h-xl'
              src='https://laodongthudo.vn/stores/news_dataimages/quocdai/092018/12/11/bo-suu-tap-xuan-he-2019-danh-cho-nhung-co-nang-yeu-dieu-thuc-nu-07-.3319.jpg'
              alt='Xu hướng thịnh hành'
            />
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
          <p
            className='absolute left-0 text-white font-bold px-4 py-2 text-3xl bg-opacity-50 rounded-md shadow-lg'
            style={{ top: '20%', left: '5%', fontFamily: 'monospace' }}
          >
            Bộ sưu tập Thu-Đông
          </p>
        </div>
      </div>
    </div>
  );
}
