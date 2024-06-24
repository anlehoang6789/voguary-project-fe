import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

export default function Dropdown() {
  const categories = [
    {
      title: 'Áo',
      items: ['Áo sơ mi', 'Áo thun', 'Áo dài'],
      image:
        'https://kenh14cdn.com/thumb_w/660/2020/3/24/blancsumi790203367308747340729907119191715445666497n-1585039128920823104058.jpg'
    },
    {
      title: 'Váy',
      items: ['Váy dạ hội', 'Váy cưới', 'Váy đi tiệc'],
      image: 'https://cf.shopee.vn/file/dbb8174d117292d5dfa0423d05e2ab0a'
    },
    {
      title: 'Quần',
      items: ['Quần tây', 'Quần ống rộng', 'Quần jean'],
      image: 'https://247store.vn/uploads/products/20231107/z467322559488121b2f4b4a850032eb91410cb7615492f.jpg'
    },
    {
      title: 'Phụ kiện',
      items: ['Vòng cổ', 'Vòng tay', 'Túi xách', 'Giày dép'],
      image: 'https://streetstyleshop.vn/wp-content/uploads/2022/05/the-thao-nam-chat-10.jpg'
    }
  ];

  return (
    <div className='w-[1495px] p-[50px]'>
      <div className='flex justify-between'>
        {categories.map((category, index) => (
          <div key={index} className='w-[20%]'>
            <Typography.Text className='text-lg font-semibold block mb-[10px]'>{category.title}</Typography.Text>
            <img src={category.image} alt={category.title} className='w-[150px] h-[150px] mb-[10px] object-cover' />
            <ul className='list-none p-0'>
              {category.items.map((item, idx) => (
                <li key={idx} className='mb-[5px]'>
                  <Link to='/product'>
                    <Typography.Text className='hover:text-orange-600'>{item}</Typography.Text>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
