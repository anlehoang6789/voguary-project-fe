import React from 'react';
import { Button } from 'antd';
import SideBar from 'components/SideBarProduct/SideBar';
import CustomGradientButton from 'components/CustomGradientButton';

const fakeProducts = [
  { id: 1, name: 'Áo thun nam', description: 'Áo thun nam hàng hiệu', price: 25 },
  { id: 2, name: 'Quần jeans nữ', description: 'Quần jeans nữ thời trang', price: 35 },
  { id: 3, name: 'Áo sơ mi trắng', description: 'Áo sơ mi trắng công sở', price: 30 },
  { id: 4, name: 'Áo khoác nam', description: 'Áo khoác nam phong cách', price: 50 },
  { id: 5, name: 'Váy dài nữ', description: 'Váy dài nữ hoạt động', price: 40 }
];

export default function AllProduct() {
  return (
    <div className='container py-4 grid grid-cols-4 gap-1'>
      <div className='col-span-1'>
        <SideBar />
      </div>
      <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {fakeProducts.map((product) => (
          <div key={product.id} className='bg-white shadow-md p-4 rounded-md'>
            <h2 className='text-lg font-semibold mb-2'>{product.name}</h2>
            <p className='text-gray-600 mb-4'>{product.description}</p>
            <p className='text-lg font-bold'>${product.price}</p>
            <CustomGradientButton>
              <Button type='primary' className='mt-4'>
                Thêm vào giỏ hàng
              </Button>
            </CustomGradientButton>
          </div>
        ))}
      </div>
    </div>
  );
}
