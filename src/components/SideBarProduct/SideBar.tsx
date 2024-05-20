// Sidebar.js
import React from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTshirt, faPersonDress, faShoePrints, faShoppingBag, faRing } from '@fortawesome/free-solid-svg-icons';

const productCategories = [
  { id: 1, name: 'Tất cả', icon: faTshirt },
  { id: 2, name: 'Áo', icon: faTshirt },
  { id: 3, name: 'Quần', icon: faTshirt },
  { id: 4, name: 'Váy', icon: faPersonDress },
  { id: 5, name: 'Giày', icon: faShoePrints },
  { id: 6, name: 'Túi xách', icon: faShoppingBag },
  { id: 7, name: 'Phụ kiện', icon: faRing }
];

export default function Sidebar() {
  return (
    <div className='bg-gray-200 p-1 rounded-md'>
      <h2 className='text-lg font-semibold mb-4'>Bộ lọc</h2>
      <Menu mode='inline' defaultSelectedKeys={['0']} style={{ borderRight: 0 }}>
        {productCategories.map((category) => (
          <Menu.Item key={category.id} icon={<FontAwesomeIcon icon={category.icon} />}>
            {category.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
