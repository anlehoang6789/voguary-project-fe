import React, { useState } from 'react';

import Search from 'antd/es/input/Search';
import { Button, Tooltip } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import CustomGradientButton from 'components/CustomGradientButton';

const aodai =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40';
const dam =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C4%91%E1%BA%A7m.jpg?alt=media&token=9bb1841e-b10f-4bc5-b5c9-ec19e87121c5';
const fakeDataProducts = [
  {
    id: 1,
    name: 'Áo dài Tết 1',
    producttype: 'Áo dài',
    quantity: '1',

    status: 'Còn hàng',
    imgSrc: aodai
  },
  {
    id: 2,
    name: 'Đầm dạ hội 1',
    producttype: 'Đầm',
    quantity: '2',

    status: 'Còn hàng',
    imgSrc: dam
  },
  {
    id: 3,
    name: 'Áo dài Tết 2',
    producttype: 'Áo dài',
    quantity: '3',

    status: 'Còn hàng',
    imgSrc: aodai
  },
  {
    id: 4,
    name: 'Đầm dạ hội 2',
    producttype: 'Đầm',
    quantity: '7',

    status: 'Còn hàng',
    imgSrc: dam
  },
  {
    id: 5,
    name: 'Áo dài Tết 3',
    producttype: 'Áo dài',
    quantity: '8',

    status: 'Hết hàng',
    imgSrc: aodai
  },
  {
    id: 6,
    name: 'Áo dài Tết 4',
    producttype: 'Áo dài',
    quantity: '5',

    status: 'Còn hàng',
    imgSrc: aodai
  },
  {
    id: 7,
    name: 'Đầm dạ hội 3',
    producttype: 'Đầm',
    quantity: '4',

    status: 'Còn hàng',
    imgSrc: dam
  },
  {
    id: 8,
    name: 'Áo dài Tết 5',
    producttype: 'Áo dài',
    quantity: '9',

    status: 'Hết hàng',
    imgSrc: aodai
  },
  {
    id: 9,
    name: 'Đầm dạ hội 4',
    producttype: 'Đầm',
    quantity: '5',

    status: 'Còn hàng',
    imgSrc: dam
  },
  {
    id: 9,
    name: 'Áo dài Tết 6',
    producttype: 'Áo dài',
    quantity: '10',

    status: 'Hết hàng',
    imgSrc: aodai
  }
];

interface Product {
  id: number;
  name: string;
  producttype: string;
  quantity: string;
  status: string;
  imgSrc: string;
}

export default function InventoryPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

  const toggleModal = (product: Product | null) => {
    setCurrentProduct(product);
    setModalOpen(!isModalOpen);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 5;

  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = fakeDataProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  return (
    <div className='relative overflow-x-auto  sm:rounded-lg'>
      <div className='flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white'>
        <label htmlFor='table-search' className='sr-only'>
          Search
        </label>

        <div className='relative'>
          <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <Search
            className='mt-[-6]'
            size='large'
            placeholder='Tìm sản phẩm'
            style={{ width: '100%', paddingTop: '5px' }}
          />
        </div>
      </div>

      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Tên sản phẩm
            </th>
            <th scope='col' className='px-6 py-3'>
              Số lượng
            </th>
            <th scope='col' className='px-6 py-3'>
              Trạng thái sản phẩm
            </th>
            <th scope='col' className='px-6 py-3'>
              Loại sản phẩm
            </th>
            <th scope='col' className='px-6 py-3'></th>
          </tr>
        </thead>

        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={index} className='bg-white border-b hover:bg-gray-50'>
              <th scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
                <img className='w-10 h-10 rounded-full' src={product.imgSrc} alt={`${product.name} image`} />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>{product.name}</div>
                </div>
              </th>

              <td className='px-6 py-4'>{product.quantity}</td>

              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${product.status === 'Còn hàng' ? 'bg-green-500' : 'bg-red-500'} me-2`}
                  ></div>
                  {product.status}
                </div>
              </td>

              <td className='px-6 py-4'>{product.producttype}</td>

              <td className='px-6 py-4'>
                <Tooltip title='Xem chi tiết'>
                  <button
                    onClick={() => toggleModal(product)}
                    className='text-blue-600 hover:underline focus:outline-none'
                  >
                    <EyeOutlined className='w-5 h-5' />
                  </button>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && currentProduct && (
        <div
          id='viewProductModal'
          className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-900 bg-opacity-50'
        >
          <div className='relative w-full h-full max-w-2xl md:h-auto'>
            <div className='relative bg-white rounded-lg shadow'>
              <div className='flex items-start justify-between p-4 border-b rounded-t'>
                <h3 className='text-xl font-semibold text-gray-900'>Xem chi tiết sản phẩm</h3>
                <button
                  onClick={() => toggleModal(null)}
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  data-modal-hide='editUserModal'
                >
                  <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>
              <div className='p-6 space-y-6'>
                <div className='flex justify-center'>
                  <img className='w-30 h-60 object-cover' src={currentProduct.imgSrc} alt={currentProduct.name} />
                </div>

                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='product-name' className='block mb-2 text-sm font-medium text-gray-900'>
                      Tên sản phẩm
                    </label>

                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentProduct.name}
                    </label>
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='product-type' className='block mb-2 text-sm font-medium text-gray-900'>
                      Loại sản phẩm
                    </label>

                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentProduct.producttype}
                    </label>
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='quantity' className='block mb-2 text-sm font-medium text-gray-900'>
                      Số lượng
                    </label>

                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentProduct.quantity}
                    </label>
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='status' className='block mb-2 text-sm font-medium text-gray-900'>
                      Trạng thái
                    </label>

                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentProduct.status}
                    </label>
                  </div>
                </div>

                <div className='flex justify-end'>
                  <CustomGradientButton>
                    <Button type='primary' onClick={() => toggleModal(null)}>
                      Đóng
                    </Button>
                  </CustomGradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex justify-center mt-4'>
        {Array.from({ length: Math.ceil(fakeDataProducts.length / productsPerPage) }, (_, i) => (
          <CustomGradientButton>
            <Button
              type={currentPage === i + 1 ? 'primary' : 'default'}
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 mx-1 text-sm font-medium rounded-lg focus:outline-none ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {i + 1}
            </Button>
          </CustomGradientButton>
        ))}
      </div>
    </div>
  );
}
