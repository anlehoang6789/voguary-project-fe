import { Button } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';
import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useGetHotProductRecommendationsQuery } from 'services/product.services';

const HotProduct: React.FC = () => {
  const { data: products } = useGetHotProductRecommendationsQuery(10);

  const handleCartClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className='flex flex-col bg-gray-300 items-center'>
      <h5 className='text-3xl font-bold mb-6 mt-6'>Sản phẩm Hot 🔥</h5>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {Array.isArray(products) &&
          products.map((product) => (
            <Link
              key={product.productId}
              to={`/product/${product.productId}`}
              className='w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow transition-all duration-500 hover:-translate-y-2 cursor-pointer'
            >
              <img className='p-8 rounded-t-lg max-w-full h-auto' src={product.productImage[0]} alt='product' />
              <div className='px-5 pb-5'>
                <div className='flex items-center justify-between'>
                  <h5 className='text-xl font-semibold tracking-tight text-gray-900'>{product.productName}</h5>
                  <div className='flex items-center space-x-1'>
                    <svg
                      className='w-4 h-4 text-yellow-300'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 22 20'
                    >
                      <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                    </svg>
                    <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded'>
                      {product.averageRating}
                    </span>
                  </div>
                </div>
                <div className='flex items-center justify-between mt-2.5 mb-5'>
                  <span className='text-lg font-bold text-gray-900'>
                    {product.productPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </span>

                  <Link
                    to={'/cart'}
                    onClick={handleCartClick}
                    className='text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center'
                  >
                    <CustomGradientButton>
                      <Button type='primary' className='flex items-center'>
                        <BsCart3 style={{ fontSize: '15px', marginRight: '5px' }} />
                        Thêm vào giỏ hàng
                      </Button>
                    </CustomGradientButton>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HotProduct;
