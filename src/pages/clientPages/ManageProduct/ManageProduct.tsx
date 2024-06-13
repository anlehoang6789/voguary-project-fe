import { Button, Card, Divider, Drawer, Pagination, Skeleton } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';
import { BsCart3 } from 'react-icons/bs';
import { TbFilter } from 'react-icons/tb';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SiderFilterProduct from './SiderFilterProduct';
import { useGetAllProductsQuery } from 'services/product.services';

// const mockData = Array.from({ length: 16 }, (_, i) => ({
//   id: i + 1,
//   name: `Product ${i + 1}`,
//   price: (i + 1) * 10000,
//   image: `https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380`,
//   colors: Math.floor(Math.random() * 10) + 1
// }));

export default function ManageProduct() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const defaultImage =
    'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F600x600.png?alt=media&token=730a35b0-d7f4-4d4d-87b3-d672202f8380';

  const pageSize = 12;
  //call api get all product(not filter)
  const { data, isLoading, error } = useGetAllProductsQuery();

  const products = data?.items || [];
  const totalCount = data?.totalCount || 0;
  // const currentData = mockData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const currentData = products.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const openDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US') + ' đ';
  };

  const renderSkeletons = () => {
    return Array.from({ length: pageSize }, (_, index) => (
      <Card key={index} className='relative transition-all duration-500 hover:-translate-y-2'>
        <Skeleton.Image className='w-full object-cover h-full' />
        <Card.Meta
          title={<Skeleton.Input style={{ width: '80%' }} active />}
          description={
            <div className='flex justify-between items-center'>
              <Skeleton.Input style={{ width: '40%' }} active />
              <Skeleton.Button style={{ width: '40%' }} active />
            </div>
          }
        />
      </Card>
    ));
  };

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
      {error && (
        <div className='fixed top-0 left-0 w-full bg-red-500 text-white p-4 text-center'>
          <p>Voguary chân thành xin lỗi bạn! Hiện tại hệ thống đang bảo trì.</p>
          <p>Bạn hãy quay lại sau nhé !!!</p>
        </div>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {isLoading
          ? renderSkeletons()
          : currentData.map((product) => (
              <Card
                key={product.productId}
                className='relative transition-all duration-500 hover:-translate-y-2'
                cover={
                  <Link to={`/product/${product.productId}`}>
                    <div className='relative'>
                      <img
                        alt={product.productTitle}
                        src={product.productImage[0] || defaultImage}
                        className='w-full object-cover h-full'
                      />
                      <div className='absolute bottom-0 left-2 bg-white border-none px-2 py-1 '>
                        {formatPrice(product.productPrice)}
                      </div>
                    </div>
                  </Link>
                }
                hoverable
              >
                <Card.Meta
                  title={product.productTitle}
                  description={
                    <div className='flex justify-between items-center'>
                      <span>{product.colorCount} màu sắc</span>
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
          total={totalCount}
          pageSize={pageSize}
          onChange={(page) => setCurrentPage(page)}
          className='flex justify-center'
        />
      </div>
    </div>
  );
}
