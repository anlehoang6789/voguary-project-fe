import { Button, Card, Divider, Drawer, Pagination } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';
import { BsCart3 } from 'react-icons/bs';
import { TbFilter } from 'react-icons/tb';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiderFilterProduct from './SiderFilterProduct';

const mockData = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (i + 1) * 10000,
  image: `https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380`,
  colors: Math.floor(Math.random() * 10) + 1
}));

export default function ManageProduct() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 12;
  const currentData = mockData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const openDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <div className='min-h-screen max-w-[90%] mx-auto p-4'>
      <div className='flex justify-end'>
        <Button
          className='flex items-center !rounded-none p-6 font-bold transition-all duration-500 hover:-translate-y-2'
          onClick={openDrawer}
        >
          Bộ lọc <TbFilter className='text-lg ml-2 font-black' />
        </Button>
      </div>
      <Divider />
      <Drawer
        title='Bộ Lọc & Sắp Xếp'
        placement='right'
        onClose={closeDrawer}
        open={drawerVisible}
        closable={false}
        extra={
          <Button type='link' className=' text-gray-500  hover:!bg-gray-500 hover:!text-red-200'>
            Bỏ chọn tất cả
          </Button>
        }
      >
        <SiderFilterProduct />
      </Drawer>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {currentData.map((product) => (
          <Card
            key={product.id}
            className='relative transition-all duration-500 hover:-translate-y-2'
            cover={
              <Link to={`/product/${product.id}`}>
                <div className='relative'>
                  <img alt={product.name} src={product.image} className='w-full object-cover h-full' />
                  <div className='absolute bottom-0 left-2 bg-white border-none px-2 py-1 '>{product.price} VND</div>
                </div>
              </Link>
            }
            hoverable
          >
            <Card.Meta
              title={product.name}
              description={
                <div className='flex justify-between items-center'>
                  <span>{product.colors} colours</span>
                  <CustomGradientButton>
                    <Button type='primary' className='flex items-center'>
                      <BsCart3 style={{ fontSize: '15px', marginRight: '5px' }} />
                      Thêm vào giỏ hàng
                    </Button>
                  </CustomGradientButton>
                </div>
              }
            />
          </Card>
        ))}
      </div>
      <div className='mt-4'>
        <Pagination
          current={currentPage}
          total={mockData.length}
          pageSize={pageSize}
          onChange={(page) => setCurrentPage(page)}
          className='flex justify-center'
        />
      </div>
    </div>
  );
}
