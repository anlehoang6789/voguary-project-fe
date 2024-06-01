// src/components/ViewAllProductForStaff.tsx
import React, { useState } from 'react';
import { Table, Button, Tag, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Product } from 'types/Product.type';
import mockProducts from './mockDataOfProductForStaff';
import CustomGradientButton from 'components/CustomGradientButton';
import { FaEye } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';

const columns: ColumnsType<Product> = [
  {
    title: 'STT',
    dataIndex: 'productId',
    key: 'productId',
    render: (text) => <span>{text}</span>,
    align: 'center'
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'productName',
    key: 'productName',
    render: (text) => <span>{text}</span>,
    align: 'center'
  },
  {
    title: 'Kích cỡ',
    dataIndex: 'productSize',
    key: 'productSize',
    render: (text) => <span>{text}</span>,
    align: 'center'
  },
  {
    title: 'Màu sắc',
    dataIndex: 'productColor',
    key: 'productColor',
    render: (text) => <span>{text}</span>,
    align: 'center'
  },
  {
    title: 'Trạng thái sản phẩm',
    dataIndex: 'productStatus',
    key: 'productStatus',
    render: (text) => <Tag color={text === 'Còn hàng' ? 'green' : 'red'}>{text}</Tag>,
    align: 'center'
  },
  {
    title: 'Hành động',
    key: 'action',
    render: () => (
      <div className='flex justify-center space-x-2 items-center'>
        <CustomGradientButton>
          <Button type='primary' className='flex items-center'>
            <FaEye className='mr-2' /> Xem chi tiết
          </Button>
        </CustomGradientButton>
        <Button danger className='flex items-center'>
          <MdDelete className='mr-2' /> Xóa
        </Button>
      </div>
    ),
    align: 'center'
  }
];

export default function ViewAllProductForStaff() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredProducts = mockProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Tất cả sản phẩm</h1>
      <Input.Search
        placeholder='Tìm kiếm theo tên sản phẩm'
        allowClear
        enterButton={
          <Button
            type='primary'
            icon={<CiSearch />}
            style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', borderColor: 'transparent' }}
          >
            Tìm kiếm
          </Button>
        }
        onSearch={onSearch}
        className='mb-4 w-[40%]'
      />
      <Table
        columns={columns}
        dataSource={filteredProducts}
        pagination={{
          current,
          pageSize: 10,
          total: filteredProducts.length,
          onChange: onChange
        }}
        rowKey='productId'
      />
    </div>
  );
}
