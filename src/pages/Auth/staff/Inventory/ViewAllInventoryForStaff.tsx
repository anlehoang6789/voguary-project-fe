import { Tag, Table, Button, Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CiSearch } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
import { GetInventoryChildrenResponse } from 'types/Inventory.type';
import CustomGradientButton from 'components/CustomGradientButton';
import { useGetInventoriesQuery } from 'services/inventory.services';

const columns: ColumnsType<GetInventoryChildrenResponse> = [
  {
    title: 'STT',
    dataIndex: 'productId',
    key: 'productId',
    render: (text, record) => {
      console.log('Product ID:', text); // Log productId to console
      return <span>{text}</span>;
    },
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
    title: 'Hình ảnh sản phẩm',
    dataIndex: 'productImages',
    key: 'productImages',
    render: (images) => <img src={images?.[0]?.url || ''} alt={images?.[0]?.alt || ''} className='w-16 h-16 mx-auto' />,
    align: 'center'
  },
  {
    title: 'Tên loại sản phẩm',
    dataIndex: 'category',
    key: 'categoryName',
    render: (categories) => <span>{categories?.[0]?.categoryName || ''}</span>,
    align: 'center'
  },
  {
    title: 'Số lượng hiện hữu',
    dataIndex: 'inventories',
    key: 'quantityAvailable',
    render: (inventories) => <span>{inventories?.[0]?.quantityAvailable || 0}</span>,
    align: 'center'
  },
  {
    title: 'Trạng thái sản phẩm',
    dataIndex: 'productStatus',
    key: 'productStatus',
    render: (status) => <Tag color={status === 'Còn hàng' ? 'green' : 'red'}>{status}</Tag>,
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

export default function ViewAllInventoryForStaff() {
  const { data: inventories, error, isLoading } = useGetInventoriesQuery();
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading inventories</div>;
  }

  const filteredData =
    inventories?.filter((inventory) => String(inventory.productId).includes(searchText.toLowerCase())) || [];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Tất cả hàng tồn kho</h1>
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
        dataSource={filteredData}
        pagination={{
          current,
          pageSize: 10,
          total: filteredData.length,
          onChange: onChange
        }}
        rowKey='productId'
      />
    </div>
  );
}
