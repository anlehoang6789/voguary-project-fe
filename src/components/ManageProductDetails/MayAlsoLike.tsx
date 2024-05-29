import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    name: 'Áo MU',
    price: '100,000 VND',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Áo MU',
    price: '200,000 VND',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Áo MU',
    price: '300,000 VND',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Áo MU',
    price: '400,000 VND',
    image: 'https://via.placeholder.com/150'
  }
];

export default function MayAlsoLike() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='mt-8 mx-4'>
      <h1 className='font-bold text-xl mb-4'>Bạn có thể thích</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className='p-4'>
            <div className='border rounded-lg overflow-hidden'>
              <img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
              <div className='p-4'>
                <h2 className='font-semibold text-lg'>{product.name}</h2>
                <p className='text-gray-700'>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
