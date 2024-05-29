import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const defaultAvatar =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_blue_bg.jpg?alt=media&token=40f8db55-65d2-4595-834a-3a94baf2e93a';

export default function Dropdown() {
  const categories = [
    {
      title: 'Shoes',
      items: ['Running', 'Training'],
      image: defaultAvatar
    },
    {
      title: 'Clothing',
      items: ['T-shirts', 'Pants', 'Shorts', 'Jackets'],
      image: defaultAvatar
    },
    {
      title: 'Event',
      items: ['Dress', 'Head'],
      image: defaultAvatar
    },
    {
      title: 'Phụ kiện',
      items: ['Vòng cổ', 'Vòng tay', 'Túi xách'],
      image: defaultAvatar
    }
  ];

  return (
    <div className='w-[1495px] p-[50px]'>
      <div className='flex justify-between'>
        {categories.map((category, index) => (
          <div key={index} className='w-[20%]'>
            <Typography.Text className='text-lg font-semibold block mb-[10px]'>{category.title}</Typography.Text>
            <img src={category.image} alt={category.title} className='w-24 mb-[10px]' />
            <ul className='list-none p-0'>
              {category.items.map((item, idx) => (
                <li key={idx} className='mb-[5px]'>
                  <Link to='/product'>
                    <Typography.Text>{item}</Typography.Text>
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
