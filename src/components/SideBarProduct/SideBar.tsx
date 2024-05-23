import { Menu } from 'antd';
import { FaTshirt } from 'react-icons/fa';

const productCategories = [
  { id: 1, name: 'Tất cả', icon: <FaTshirt /> },
  { id: 2, name: 'Áo', icon: <FaTshirt /> },
  { id: 3, name: 'Quần', icon: <FaTshirt /> },
  { id: 4, name: 'Váy', icon: <FaTshirt /> },
  { id: 5, name: 'Giày', icon: <FaTshirt /> },
  { id: 6, name: 'Túi xách', icon: <FaTshirt /> },
  { id: 7, name: 'Phụ kiện', icon: <FaTshirt /> }
];

export default function Sidebar() {
  return (
    <div className='bg-gray-200 p-1 rounded-md'>
      <h2 className='text-lg font-semibold mb-4'>Bộ lọc</h2>
      <Menu mode='inline' defaultSelectedKeys={['0']} style={{ borderRight: 0 }}>
        {productCategories.map((category) => (
          <Menu.Item key={category.id} icon={category.icon}>
            {category.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
