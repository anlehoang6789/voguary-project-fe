import React from 'react';

export default function Gallery() {
  return (
    <div className='flex flex-col  bg-gray-300 items-center'>
      <h5 className='text-3xl font-bold mb-6 mt-6'>Gallery</h5>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-90 max-w-full rounded-lg'
              src='https://i-kinhdoanh.vnecdn.net/2019/11/06/mau-500-8539-1573015927.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.pinimg.com/736x/b9/7a/26/b97a26f802ce06046f5a47aacd5a0d10.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.pinimg.com/736x/61/cf/b5/61cfb55382ad98d56c98b5392a619cf5.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.pinimg.com/736x/d3/ca/71/d3ca71311d3fbc916a5ca5f9108cfe6b.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.pinimg.com/1200x/ac/65/cd/ac65cd9b2141c29e75194267852c74be.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://lavenderstudio.com.vn/wp-content/uploads/2017/03/chup-san-pham-quan-ao-dep.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://tronhouse.com/assets/data/editor/source/3-meo-chup-lookbook-thoi-trang-dep-nhu-mo-khien-ai-cung-phai-nguoc-nhin/chup-lookbook-4.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://media.istockphoto.com/id/1367180724/vi/anh/ph%E1%BB%A5-n%E1%BB%AF-tr%E1%BA%BB-s%C3%A0nh-%C4%91i%E1%BB%87u-trong-trang-ph%E1%BB%A5c-pastel-%C4%91%E1%BB%A9ng-c%C3%B9ng-nhau-kh%C3%A1i-ni%E1%BB%87m-th%E1%BB%9Di-trang-%E1%BA%A3nh-ch%E1%BB%A9ng-kho%C3%A1n.jpg?s=612x612&w=0&k=20&c=JCLitzmS8rEUXV6rF77y4A_nEcVCKmJJVyQB164pACY='
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://image.donghohaitrieu.com/wp-content/uploads/2023/09/11-10-thuong-hieu-thoi-trang-nu-noi-tieng-nhat-gia-binh-dan.jpg'
              alt=''
            />
          </div>
        </div>
        <div className='grid gap-4'>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.pinimg.com/originals/0c/ab/db/0cabdb8e545e8b6b9cfb1a81ebf8bf15.png'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://i.pinimg.com/736x/81/df/7e/81df7e233790388b2587c329a65aa199.jpg'
              alt=''
            />
          </div>
          <div>
            <img
              className='h-auto max-w-full rounded-lg'
              src='https://camfashion.vn/wp-content/uploads/2023/07/Set-Ao-Tweed-Jacket-Chan-Vay-A008.webp'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
}
